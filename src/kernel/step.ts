import { faceNormal, validateBrep, type Brep } from "./brep";
import type { Vec3 } from "./types";

/**
 * ISO 10303-21 (STEP) writer for planar B-rep solids, AP214 schema.
 *
 * STEP files are always written in millimetres. That is the near-universal
 * convention and every CAD package converts on import, so an inch shop still
 * sees inch numbers in their own document — the geometry is identical either
 * way, and emitting mm avoids the CONVERSION_BASED_UNIT paths that some older
 * readers handle badly.
 *
 * Output is deterministic: entity ids are allocated in a fixed traversal order
 * and the timestamp is caller-supplied, so the same part always produces the
 * same bytes and a diff means the geometry actually changed.
 */

export type StepOptions = {
  /** ISO-8601 timestamp written into the header. */
  timestamp?: string;
  author?: string;
  organization?: string;
};

const DEFAULT_TIMESTAMP = "1970-01-01T00:00:00";

export type StepResult =
  | { ok: true; step: string }
  | { ok: false; reason: string };

export function writeStep(brep: Brep, options: StepOptions = {}): StepResult {
  const validation = validateBrep(brep);
  if (!validation.valid) {
    return { ok: false, reason: validation.problems.join(" ") };
  }

  const out = new StepBuilder();

  // --- Product structure ---------------------------------------------------
  const appContext = out.add("APPLICATION_CONTEXT('core data for automotive mechanical design processes')");
  out.add(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#${appContext})`);
  const productContext = out.add(`PRODUCT_CONTEXT('',#${appContext},'mechanical')`);
  const definitionContext = out.add(`PRODUCT_DEFINITION_CONTEXT('part definition',#${appContext},'design')`);
  const safeName = stepString(brep.name || "part");
  const product = out.add(`PRODUCT(${safeName},${safeName},'',(#${productContext}))`);
  out.add(`PRODUCT_RELATED_PRODUCT_CATEGORY('part','',(#${product}))`);
  const formation = out.add(
    `PRODUCT_DEFINITION_FORMATION_WITH_SPECIFIED_SOURCE('','',#${product},.NOT_KNOWN.)`,
  );
  const definition = out.add(`PRODUCT_DEFINITION('design','',#${formation},#${definitionContext})`);
  const definitionShape = out.add(`PRODUCT_DEFINITION_SHAPE('','',#${definition})`);

  // --- Units and context ---------------------------------------------------
  const lengthUnit = out.add("( LENGTH_UNIT() NAMED_UNIT(*) SI_UNIT(.MILLI.,.METRE.) )");
  const angleUnit = out.add("( NAMED_UNIT(*) PLANE_ANGLE_UNIT() SI_UNIT($,.RADIAN.) )");
  const solidAngleUnit = out.add("( NAMED_UNIT(*) SI_UNIT($,.STERADIAN.) SOLID_ANGLE_UNIT() )");
  const uncertainty = out.add(
    `UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(1.E-07),#${lengthUnit},'distance_accuracy_value','confusion accuracy')`,
  );
  const context = out.add(
    "( GEOMETRIC_REPRESENTATION_CONTEXT(3) " +
      `GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#${uncertainty})) ` +
      `GLOBAL_UNIT_ASSIGNED_CONTEXT((#${lengthUnit},#${angleUnit},#${solidAngleUnit})) ` +
      "REPRESENTATION_CONTEXT('','') )",
  );

  // --- Geometry ------------------------------------------------------------
  const points = new Map<string, number>();
  const vertices = new Map<string, number>();
  const directions = new Map<string, number>();
  const edges = new Map<string, number>();

  const pointId = (p: Vec3): number => cached(points, pointKey(p), () => out.add(`CARTESIAN_POINT('',(${num(p.x)},${num(p.y)},${num(p.z)}))`));
  const directionId = (d: Vec3): number => cached(directions, pointKey(d), () => out.add(`DIRECTION('',(${num(d.x)},${num(d.y)},${num(d.z)}))`));
  const vertexId = (p: Vec3): number => cached(vertices, pointKey(p), () => out.add(`VERTEX_POINT('',#${pointId(p)})`));

  /**
   * Edges are shared: the same EDGE_CURVE serves both adjacent faces, one of
   * them traversing it reversed. Readers rely on that sharing to stitch the
   * shell, so the curve is keyed on the unordered vertex pair.
   */
  const edgeId = (a: Vec3, b: Vec3): { id: number; forward: boolean } => {
    const ka = pointKey(a);
    const kb = pointKey(b);
    const forward = ka < kb;
    const [from, to] = forward ? [a, b] : [b, a];
    const key = `${pointKey(from)}|${pointKey(to)}`;
    const id = cached(edges, key, () => {
      const direction = normalize(sub(to, from));
      const vector = out.add(`VECTOR('',#${directionId(direction)},1.)`);
      const line = out.add(`LINE('',#${pointId(from)},#${vector})`);
      return out.add(`EDGE_CURVE('',#${vertexId(from)},#${vertexId(to)},#${line},.T.)`);
    });
    return { id, forward };
  };

  const loopId = (loop: Vec3[]): number => {
    const orientedEdges: number[] = [];
    for (let i = 0; i < loop.length; i++) {
      const a = loop[i];
      const b = loop[(i + 1) % loop.length];
      const edge = edgeId(a, b);
      orientedEdges.push(out.add(`ORIENTED_EDGE('',*,*,#${edge.id},${edge.forward ? ".T." : ".F."})`));
    }
    return out.add(`EDGE_LOOP('',(${orientedEdges.map((id) => `#${id}`).join(",")}))`);
  };

  const faceIds: number[] = [];
  for (const face of brep.faces) {
    const normal = faceNormal(face.outer);
    const origin = face.outer[0];
    const reference = referenceDirection(normal);
    const placement = out.add(
      `AXIS2_PLACEMENT_3D('',#${pointId(origin)},#${directionId(normal)},#${directionId(reference)})`,
    );
    const plane = out.add(`PLANE('',#${placement})`);

    const bounds: number[] = [];
    bounds.push(out.add(`FACE_OUTER_BOUND('',#${loopId(face.outer)},.T.)`));
    for (const inner of face.inners ?? []) {
      bounds.push(out.add(`FACE_BOUND('',#${loopId(inner)},.T.)`));
    }
    faceIds.push(
      out.add(`ADVANCED_FACE('',(${bounds.map((id) => `#${id}`).join(",")}),#${plane},.T.)`),
    );
  }

  const shell = out.add(`CLOSED_SHELL('',(${faceIds.map((id) => `#${id}`).join(",")}))`);
  const origin = out.add("CARTESIAN_POINT('',(0.,0.,0.))");
  const zAxis = out.add("DIRECTION('',(0.,0.,1.))");
  const xAxis = out.add("DIRECTION('',(1.,0.,0.))");
  const placement = out.add(`AXIS2_PLACEMENT_3D('',#${origin},#${zAxis},#${xAxis})`);
  const solid = out.add(`MANIFOLD_SOLID_BREP(${safeName},#${shell})`);
  const shape = out.add(
    `ADVANCED_BREP_SHAPE_REPRESENTATION('',(#${placement},#${solid}),#${context})`,
  );
  out.add(`SHAPE_DEFINITION_REPRESENTATION(#${definitionShape},#${shape})`);

  const timestamp = options.timestamp ?? DEFAULT_TIMESTAMP;
  const header = [
    "ISO-10303-21;",
    "HEADER;",
    `FILE_DESCRIPTION(('SetupNinja generated solid'),'2;1');`,
    `FILE_NAME(${stepString(`${brep.name || "part"}.step`)},${stepString(timestamp)},` +
      `(${stepString(options.author ?? "SetupNinja")}),(${stepString(options.organization ?? "")}),` +
      `'SetupNinja','SetupNinja','');`,
    "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));",
    "ENDSEC;",
    "DATA;",
  ];

  return {
    ok: true,
    step: `${[...header, ...out.lines(), "ENDSEC;", "END-ISO-10303-21;"].join("\n")}\n`,
  };
}

export function stepFileName(name: string): string {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "setupninja-part"}.step`;
}

class StepBuilder {
  private next = 1;
  private entities: string[] = [];

  add(body: string): number {
    const id = this.next++;
    this.entities.push(`#${id} = ${body};`);
    return id;
  }

  lines(): string[] {
    return this.entities;
  }
}

function cached(map: Map<string, number>, key: string, make: () => number): number {
  const existing = map.get(key);
  if (existing !== undefined) return existing;
  const id = make();
  map.set(key, id);
  return id;
}

/** Any unit vector perpendicular to `normal`, chosen deterministically. */
function referenceDirection(normal: Vec3): Vec3 {
  // Cross with whichever axis is least aligned to avoid a degenerate result.
  const axis =
    Math.abs(normal.x) <= Math.abs(normal.y) && Math.abs(normal.x) <= Math.abs(normal.z)
      ? { x: 1, y: 0, z: 0 }
      : Math.abs(normal.y) <= Math.abs(normal.z)
        ? { x: 0, y: 1, z: 0 }
        : { x: 0, y: 0, z: 1 };
  return normalize(cross(normal, axis));
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function sub(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function normalize(v: Vec3): Vec3 {
  const length = Math.hypot(v.x, v.y, v.z);
  if (length < 1e-12) return { x: 0, y: 0, z: 1 };
  return { x: v.x / length, y: v.y / length, z: v.z / length };
}

/** STEP reals always carry a decimal point; `1` alone is not valid syntax. */
function num(value: number): string {
  if (!Number.isFinite(value)) return "0.";
  const rounded = Math.round(value * 1e9) / 1e9;
  if (Number.isInteger(rounded)) return `${rounded}.`;
  return String(rounded);
}

function pointKey(p: Vec3): string {
  return `${fixed(p.x)},${fixed(p.y)},${fixed(p.z)}`;
}

function fixed(v: number): string {
  return (Math.round(v * 1e6) / 1e6).toFixed(6);
}

/** Single quotes are escaped by doubling them, per ISO 10303-21. */
function stepString(value: string): string {
  const ascii = value.replace(/[^\x20-\x7E]/g, "").replace(/'/g, "''");
  return `'${ascii}'`;
}
