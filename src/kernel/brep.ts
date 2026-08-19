import type { ParametricSpec, Vec3 } from "./types";

/**
 * A planar face of a solid.
 *
 * `outer` winds counter-clockwise when viewed from outside the solid, so the
 * right-hand rule gives the outward normal. `inners` are holes in that face and
 * wind the opposite way. This is the orientation convention STEP expects.
 */
export type BrepFace = {
  outer: Vec3[];
  inners?: Vec3[][];
};

export type Brep = {
  name: string;
  faces: BrepFace[];
};

/** Newell's method: a plane normal that is stable for any planar polygon. */
export function faceNormal(loop: Vec3[]): Vec3 {
  let x = 0;
  let y = 0;
  let z = 0;
  for (let i = 0; i < loop.length; i++) {
    const a = loop[i];
    const b = loop[(i + 1) % loop.length];
    x += (a.y - b.y) * (a.z + b.z);
    y += (a.z - b.z) * (a.x + b.x);
    z += (a.x - b.x) * (a.y + b.y);
  }
  const length = Math.hypot(x, y, z);
  if (length < 1e-12) return { x: 0, y: 0, z: 0 };
  return { x: x / length, y: y / length, z: z / length };
}

/**
 * Signed volume via the divergence theorem, triangulating each outer loop as a
 * fan and subtracting the inner loops. Positive means outward-facing normals.
 */
export function brepVolume(brep: Brep): number {
  let total = 0;
  for (const face of brep.faces) {
    total += loopVolume(face.outer);
    for (const inner of face.inners ?? []) total += loopVolume(inner);
  }
  return total / 6;
}

function loopVolume(loop: Vec3[]): number {
  let sum = 0;
  const a = loop[0];
  for (let i = 1; i < loop.length - 1; i++) {
    const b = loop[i];
    const c = loop[i + 1];
    // (a x b) . c — six times the signed volume of the tetrahedron to the origin.
    sum +=
      (a.y * b.z - a.z * b.y) * c.x + (a.z * b.x - a.x * b.z) * c.y + (a.x * b.y - a.y * b.x) * c.z;
  }
  return sum;
}

export type BrepValidation = {
  valid: boolean;
  problems: string[];
};

/**
 * Checks the solid is watertight and correctly oriented.
 *
 * A closed manifold uses every edge exactly twice, once in each direction. If a
 * CAD package is going to reject the STEP file, this is what it will reject it
 * for, so we catch it before writing.
 */
export function validateBrep(brep: Brep): BrepValidation {
  const problems: string[] = [];
  if (brep.faces.length === 0) problems.push("The solid has no faces.");

  const edgeUse = new Map<string, number>();
  for (const [index, face] of brep.faces.entries()) {
    const loops = [face.outer, ...(face.inners ?? [])];
    for (const loop of loops) {
      if (loop.length < 3) {
        problems.push(`Face ${index + 1} has a loop with fewer than three points.`);
        continue;
      }
      for (let i = 0; i < loop.length; i++) {
        const a = loop[i];
        const b = loop[(i + 1) % loop.length];
        if (pointKey(a) === pointKey(b)) {
          problems.push(`Face ${index + 1} has a zero-length edge.`);
          continue;
        }
        const directed = `${pointKey(a)}|${pointKey(b)}`;
        edgeUse.set(directed, (edgeUse.get(directed) ?? 0) + 1);
      }
    }
  }

  for (const [directed, count] of edgeUse) {
    if (count > 1) {
      problems.push(`An edge is traversed ${count} times in the same direction.`);
      break;
    }
    const [a, b] = directed.split("|");
    if (!edgeUse.has(`${b}|${a}`)) {
      problems.push("The solid is not watertight: an edge has no matching opposite face.");
      break;
    }
  }

  const volume = brepVolume(brep);
  if (volume <= 0) {
    problems.push("The solid has non-positive volume; face windings are inside out.");
  }

  return { valid: problems.length === 0, problems };
}

function pointKey(p: Vec3): string {
  return `${round(p.x)},${round(p.y)},${round(p.z)}`;
}

function round(v: number): string {
  // 1e-6 mm is far below any machining tolerance and keeps vertex merging stable.
  return (Math.round(v * 1e6) / 1e6).toFixed(6);
}

function v(x: number, y: number, z: number): Vec3 {
  return { x, y, z };
}

/** The six faces of an axis-aligned block, wound outward. */
export function blockFaces(
  x0: number,
  x1: number,
  y0: number,
  y1: number,
  z0: number,
  z1: number,
): BrepFace[] {
  return [
    { outer: [v(x0, y0, z1), v(x1, y0, z1), v(x1, y1, z1), v(x0, y1, z1)] }, // +Z
    { outer: [v(x0, y0, z0), v(x0, y1, z0), v(x1, y1, z0), v(x1, y0, z0)] }, // -Z
    { outer: [v(x0, y0, z0), v(x1, y0, z0), v(x1, y0, z1), v(x0, y0, z1)] }, // -Y
    { outer: [v(x0, y1, z0), v(x0, y1, z1), v(x1, y1, z1), v(x1, y1, z0)] }, // +Y
    { outer: [v(x0, y0, z0), v(x0, y0, z1), v(x0, y1, z1), v(x0, y1, z0)] }, // -X
    { outer: [v(x1, y0, z0), v(x1, y1, z0), v(x1, y1, z1), v(x1, y0, z1)] }, // +X
  ];
}

/** Smallest wall a feature may leave against the stock edge before we refuse it. */
export const MIN_FEATURE_MARGIN_MM = 0.01;

export type BrepBuildResult =
  | { ok: true; brep: Brep }
  | { ok: false; reason: string };

/**
 * Build a solid from a guided-setup spec.
 *
 * Handles the prismatic cases the guided flow can describe today: a plain block,
 * a block with a rectangular pocket, and a block with a rectangular boss. These
 * are exactly the "simpler parts" that are worth getting into CAD without
 * anyone modeling them by hand.
 */
export function brepFromParametric(spec: ParametricSpec): BrepBuildResult {
  const { widthMm: w, depthMm: d, heightMm: h } = spec.stock;
  if (!(w > 0 && d > 0 && h > 0)) return { ok: false, reason: "Stock dimensions must be positive." };

  const feature = spec.feature;
  if (feature.kind === "face") {
    return { ok: true, brep: { name: spec.partName, faces: blockFaces(0, w, 0, d, 0, h) } };
  }

  const fx0 = feature.x;
  const fy0 = feature.y;
  const fx1 = feature.x + feature.widthMm;
  const fy1 = feature.y + feature.depthMm;

  if (!(feature.widthMm > 0 && feature.depthMm > 0)) {
    return { ok: false, reason: "The feature must have positive width and depth." };
  }
  const m = MIN_FEATURE_MARGIN_MM;
  if (fx0 < m || fy0 < m || fx1 > w - m || fy1 > d - m) {
    return {
      ok: false,
      reason: "The feature reaches the stock edge. An open-sided feature is not a closed solid yet.",
    };
  }

  const faces = blockFaces(0, w, 0, d, 0, h);
  // Face 0 is the +Z top; the feature opens through it either way.
  const top = faces[0];

  if (feature.kind === "pocket") {
    const floorZ = h - feature.depthBelowTopMm;
    if (!(feature.depthBelowTopMm > 0)) return { ok: false, reason: "Pocket depth must be positive." };
    if (floorZ <= 0) return { ok: false, reason: "The pocket is deeper than the stock." };

    // Hole in the top face winds clockwise about +Z, opposite the outer loop.
    top.inners = [[v(fx0, fy0, h), v(fx0, fy1, h), v(fx1, fy1, h), v(fx1, fy0, h)]];
    faces.push(
      { outer: [v(fx0, fy0, floorZ), v(fx0, fy1, floorZ), v(fx0, fy1, h), v(fx0, fy0, h)] }, // +X wall
      { outer: [v(fx1, fy0, floorZ), v(fx1, fy0, h), v(fx1, fy1, h), v(fx1, fy1, floorZ)] }, // -X wall
      { outer: [v(fx0, fy0, floorZ), v(fx0, fy0, h), v(fx1, fy0, h), v(fx1, fy0, floorZ)] }, // +Y wall
      { outer: [v(fx0, fy1, floorZ), v(fx1, fy1, floorZ), v(fx1, fy1, h), v(fx0, fy1, h)] }, // -Y wall
      { outer: [v(fx0, fy0, floorZ), v(fx1, fy0, floorZ), v(fx1, fy1, floorZ), v(fx0, fy1, floorZ)] }, // floor
    );
    return { ok: true, brep: { name: spec.partName, faces } };
  }

  const topZ = h + feature.heightAboveTopMm;
  if (!(feature.heightAboveTopMm > 0)) return { ok: false, reason: "Boss height must be positive." };

  top.inners = [[v(fx0, fy0, h), v(fx0, fy1, h), v(fx1, fy1, h), v(fx1, fy0, h)]];
  faces.push(
    { outer: [v(fx0, fy0, h), v(fx0, fy0, topZ), v(fx0, fy1, topZ), v(fx0, fy1, h)] }, // -X wall
    { outer: [v(fx1, fy0, h), v(fx1, fy1, h), v(fx1, fy1, topZ), v(fx1, fy0, topZ)] }, // +X wall
    { outer: [v(fx0, fy0, h), v(fx1, fy0, h), v(fx1, fy0, topZ), v(fx0, fy0, topZ)] }, // -Y wall
    { outer: [v(fx0, fy1, h), v(fx0, fy1, topZ), v(fx1, fy1, topZ), v(fx1, fy1, h)] }, // +Y wall
    { outer: [v(fx0, fy0, topZ), v(fx1, fy0, topZ), v(fx1, fy1, topZ), v(fx0, fy1, topZ)] }, // boss top
  );
  return { ok: true, brep: { name: spec.partName, faces } };
}
