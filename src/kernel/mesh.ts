import { barycentric, createHeightmap, hmIndex } from "./heightmap";
import type { Heightmap, Mesh, Triangle } from "./types";

/**
 * Rasterize a triangle mesh onto a Z-max heightmap.
 * Cell centers inside a triangle take the interpolated Z; later triangles win on max.
 */
export function rasterizeMesh(mesh: Mesh, cell: number, padMm = 2): Heightmap {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const t of mesh.triangles) {
    for (const p of [t.a, t.b, t.c]) {
      if (p.x < minX) minX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.x > maxX) maxX = p.x;
      if (p.y > maxY) maxY = p.y;
    }
  }
  const hm = createHeightmap(
    minX - padMm,
    minY - padMm,
    maxX - minX + padMm * 2,
    maxY - minY + padMm * 2,
    cell,
  );

  for (const tri of mesh.triangles) {
    stampTriangle(hm, tri);
  }
  return hm;
}

function stampTriangle(hm: Heightmap, tri: Triangle): void {
  const xs = [tri.a.x, tri.b.x, tri.c.x];
  const ys = [tri.a.y, tri.b.y, tri.c.y];
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const ix0 = Math.max(0, Math.floor((minX - hm.originX) / hm.cell) - 1);
  const iy0 = Math.max(0, Math.floor((minY - hm.originY) / hm.cell) - 1);
  const ix1 = Math.min(hm.nx - 1, Math.ceil((maxX - hm.originX) / hm.cell) + 1);
  const iy1 = Math.min(hm.ny - 1, Math.ceil((maxY - hm.originY) / hm.cell) + 1);

  for (let iy = iy0; iy <= iy1; iy++) {
    for (let ix = ix0; ix <= ix1; ix++) {
      const x = hm.originX + (ix + 0.5) * hm.cell;
      const y = hm.originY + (iy + 0.5) * hm.cell;
      const p = { x, y, z: 0 };
      const b = barycentric(p, tri.a, tri.b, tri.c);
      if (!b.inside) continue;
      const z = b.u * tri.a.z + b.v * tri.b.z + b.w * tri.c.z;
      const i = hmIndex(hm, ix, iy);
      const prev = hm.z[i];
      if (!Number.isFinite(prev) || z > prev) hm.z[i] = z;
    }
  }
}
