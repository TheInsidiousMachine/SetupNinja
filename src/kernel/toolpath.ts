import { engagementFromStepover, speedsAndFeeds } from "../machine/catalog";
import { heightmapMinMax, hmZ, sampleHeight, worldToCell } from "./heightmap";
import type { Heightmap, MachineProfile, Material, Tool, Toolpath, Waypoint } from "./types";

export type PathOptions = {
  leaveMm: number;
  stockTop: number;
  stockPadMm: number;
  cutBounds?: { x0: number; y0: number; x1: number; y1: number };
};

/**
 * 2.5D raster roughing plus a finishing pass. Cuts only where the
 * part surface sits at or below the current Z (stock still to remove).
 */
export function generateToolpaths(
  hm: Heightmap,
  tools: Tool[],
  material: Material,
  machine: MachineProfile,
  options: PathOptions,
): Toolpath[] {
  const rough = tools[0];
  const finish = tools[1] ?? tools[0];
  const roughPath = rasterPass(hm, rough, material, machine, {
    ...options,
    leaveMm: Math.max(options.leaveMm, 0.3),
    stepdownScale: 1,
  });
  const finishPath = rasterPass(hm, finish, material, machine, {
    ...options,
    leaveMm: 0,
    stepdownScale: 0.55,
    onlyFinalZ: true,
  });
  return [
    { tool: rough, points: roughPath },
    { tool: finish, points: finishPath },
  ];
}

function rasterPass(
  hm: Heightmap,
  tool: Tool,
  material: Material,
  machine: MachineProfile,
  opts: PathOptions & { stepdownScale: number; onlyFinalZ?: boolean },
): Waypoint[] {
  const { rpm, feedMmMin } = speedsAndFeeds(tool, material, machine);
  const { min: zMin, max: zMax } = heightmapMinMax(hm);
  const floor = Math.max(zMin, 0) + opts.leaveMm;
  const top = Math.max(opts.stockTop, zMax);
  const stepdown = Math.max(0.4, tool.maxDocMm * opts.stepdownScale);
  const stepover = tool.diameterMm * tool.maxStepover;
  const engage = engagementFromStepover(tool.diameterMm, stepover);
  const r = tool.diameterMm / 2;

  const levels: number[] = [];
  if (opts.onlyFinalZ) {
    const targetLevels = new Set<number>();
    for (const value of hm.z) {
      if (Number.isFinite(value)) targetLevels.add(Number(value.toFixed(5)));
    }
    levels.push(...[...targetLevels].sort((a, b) => b - a));
  } else {
    for (let z = top - stepdown; z > floor + 1e-3; z -= stepdown) levels.push(z);
    levels.push(floor);
  }

  const points: Waypoint[] = [];
  const y0 = Math.max(hm.originY, opts.cutBounds?.y0 ?? -Infinity) + r;
  const y1 = Math.min(hm.originY + hm.ny * hm.cell, opts.cutBounds?.y1 ?? Infinity) - r;
  const x0 = Math.max(hm.originX, opts.cutBounds?.x0 ?? -Infinity) + r;
  const x1 = Math.min(hm.originX + hm.nx * hm.cell, opts.cutBounds?.x1 ?? Infinity) - r;

  let rapidZ = top + 2;

  for (const z of levels) {
    let reverse = false;
    for (let y = y0; y <= y1 + 1e-6; y += stepover) {
      const row = cutSpans(hm, y, x0, x1, z, opts.leaveMm, hm.cell, r);
      const spans = reverse ? row.map((s) => ({ a: s.b, b: s.a })).reverse() : row;
      reverse = !reverse;
      for (const span of spans) {
        points.push(
          wp(span.a, y, rapidZ, feedMmMin, rpm, tool.id, 0, false, "rapid"),
          wp(span.a, y, z + 0.4, feedMmMin, rpm, tool.id, engage * 0.4, false, "lead"),
          wp(span.a, y, z, feedMmMin, rpm, tool.id, engage, false, "cut"),
        );
        const length = Math.abs(span.b - span.a);
        const n = Math.max(2, Math.ceil(length / Math.max(1.2, tool.diameterMm * 0.45)));
        for (let i = 1; i <= n; i++) {
          const t = i / n;
          const x = span.a + (span.b - span.a) * t;
          const corner = i === n;
          const slotting = length < tool.diameterMm * 1.2;
          const e = slotting ? Math.PI : corner ? Math.min(Math.PI, engage * 1.55) : engage;
          points.push(wp(x, y, z, feedMmMin, rpm, tool.id, e, slotting, "cut"));
        }
        points.push(wp(span.b, y, rapidZ, feedMmMin, rpm, tool.id, 0, false, "rapid"));
      }
    }
  }
  return points;
}

function wp(
  x: number,
  y: number,
  z: number,
  feedMmMin: number,
  rpm: number,
  toolId: string,
  engagementRad: number,
  slotting: boolean,
  kind: Waypoint["kind"],
): Waypoint {
  return { x, y, z, feedMmMin, rpm, toolId, engagementRad, slotting, kind };
}

function cutSpans(
  hm: Heightmap,
  y: number,
  x0: number,
  x1: number,
  z: number,
  leave: number,
  cell: number,
  cutterRadius: number,
): { a: number; b: number }[] {
  const spans: { a: number; b: number }[] = [];
  let start: number | null = null;
  for (let x = x0; x <= x1 + 1e-6; x += cell) {
    const partZ = sampleHeight(hm, x, y);
    const cut =
      Number.isFinite(partZ) &&
      partZ + leave <= z + 0.02 &&
      cutterClearsTarget(hm, x, y, z, leave, cutterRadius);
    if (cut && start === null) start = x;
    if (!cut && start !== null) {
      if (x - start > cell) spans.push({ a: start, b: x - cell });
      start = null;
    }
  }
  if (start !== null && x1 - start > cell) spans.push({ a: start, b: x1 });
  return spans;
}

export function cutterClearsTarget(
  hm: Heightmap,
  x: number,
  y: number,
  z: number,
  leave: number,
  radius: number,
): boolean {
  const min = worldToCell(hm, x - radius, y - radius);
  const max = worldToCell(hm, x + radius, y + radius);
  for (let iy = min.iy; iy <= max.iy; iy++) {
    for (let ix = min.ix; ix <= max.ix; ix++) {
      const cellX0 = hm.originX + ix * hm.cell;
      const cellY0 = hm.originY + iy * hm.cell;
      const dx = Math.max(cellX0 - x, 0, x - (cellX0 + hm.cell));
      const dy = Math.max(cellY0 - y, 0, y - (cellY0 + hm.cell));
      if (Math.hypot(dx, dy) > radius + 1e-9) continue;
      const surface = hmZ(hm, ix, iy);
      if (Number.isFinite(surface) && surface + leave > z + 0.02) return false;
    }
  }
  return true;
}
