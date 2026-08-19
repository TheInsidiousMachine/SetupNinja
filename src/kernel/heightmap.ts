import type { Heightmap, Vec3 } from "./types";

export function hmIndex(hm: Heightmap, ix: number, iy: number): number {
  return iy * hm.nx + ix;
}

export function hmZ(hm: Heightmap, ix: number, iy: number): number {
  if (ix < 0 || iy < 0 || ix >= hm.nx || iy >= hm.ny) return Number.NaN;
  return hm.z[hmIndex(hm, ix, iy)];
}

export function worldToCell(hm: Heightmap, x: number, y: number): { ix: number; iy: number } {
  return {
    ix: Math.floor((x - hm.originX) / hm.cell),
    iy: Math.floor((y - hm.originY) / hm.cell),
  };
}

export function sampleHeight(hm: Heightmap, x: number, y: number): number {
  const { ix, iy } = worldToCell(hm, x, y);
  return hmZ(hm, ix, iy);
}

export function heightmapMinMax(hm: Heightmap): { min: number; max: number } {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < hm.z.length; i++) {
    const v = hm.z[i];
    if (!Number.isFinite(v)) continue;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return { min, max };
}

export function createHeightmap(
  originX: number,
  originY: number,
  width: number,
  depth: number,
  cell: number,
): Heightmap {
  const nx = Math.max(2, Math.ceil(width / cell));
  const ny = Math.max(2, Math.ceil(depth / cell));
  const z = new Float32Array(nx * ny);
  z.fill(Number.NaN);
  return { originX, originY, cell, nx, ny, z };
}

export function fillHeightmap(
  hm: Heightmap,
  fn: (x: number, y: number) => number,
): Heightmap {
  for (let iy = 0; iy < hm.ny; iy++) {
    for (let ix = 0; ix < hm.nx; ix++) {
      const x = hm.originX + (ix + 0.5) * hm.cell;
      const y = hm.originY + (iy + 0.5) * hm.cell;
      hm.z[hmIndex(hm, ix, iy)] = fn(x, y);
    }
  }
  return hm;
}

export function barycentric(
  p: Vec3,
  a: Vec3,
  b: Vec3,
  c: Vec3,
): { u: number; v: number; w: number; inside: boolean } {
  const v0x = b.x - a.x;
  const v0y = b.y - a.y;
  const v1x = c.x - a.x;
  const v1y = c.y - a.y;
  const v2x = p.x - a.x;
  const v2y = p.y - a.y;
  const den = v0x * v1y - v1x * v0y;
  if (Math.abs(den) < 1e-12) return { u: 0, v: 0, w: 0, inside: false };
  const v = (v2x * v1y - v1x * v2y) / den;
  const w = (v0x * v2y - v2x * v0y) / den;
  const u = 1 - v - w;
  const eps = 1e-6;
  const inside = u >= -eps && v >= -eps && w >= -eps;
  return { u, v, w, inside };
}
