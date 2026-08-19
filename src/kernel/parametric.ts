import { createHeightmap, fillHeightmap } from "./heightmap";
import type { Heightmap, ParametricSpec } from "./types";

/** Minimum numeric stock dimension; planning separately verifies that a selected cutter fits. */
const MIN_DIM_MM = 1;
/** Default raster cell size, mm. Matches the default used for STL rasterization in plan.ts. */
const DEFAULT_CELL_MM = 1.2;

/**
 * Build a Heightmap directly from closed-form math for a small set of
 * deterministic feature primitives. No mesh, no triangles, no heuristics:
 * every cell's Z is decided by explicit bounds checks against the spec.
 *
 * Out-of-bounds/degenerate feature geometry is clamped to the stock
 * footprint rather than rejected outright, so a slightly mis-typed
 * dimension (e.g. a pocket that runs 1mm past the stock edge from a
 * rounding error) still produces a safe, inspectable part instead of a
 * thrown error mid-setup. Depths/heights are clamped so a feature can
 * never cut below Z0 or extend beyond the stock height, since a heightmap
 * that implies floating stock or a negative floor cannot be verified.
 */
export function buildParametricHeightmap(spec: ParametricSpec): Heightmap {
  const stock = validateStock(spec.stock);
  const cell = spec.cellMm && spec.cellMm > 0 ? spec.cellMm : DEFAULT_CELL_MM;
  const hm = createHeightmap(0, 0, stock.widthMm, stock.depthMm, cell);

  const top = stock.heightMm;
  const feature = spec.feature;

  if (feature.kind === "face") {
    return fillHeightmap(hm, () => top);
  }

  if (feature.kind === "pocket") {
    const bounds = clampBounds(feature, stock);
    const depth = clampDepth(feature.depthBelowTopMm, top);
    const floor = top - depth;
    return fillHeightmap(hm, (x, y) => (inBounds(x, y, bounds) ? floor : top));
  }

  // boss
  const bounds = clampBounds(feature, stock);
  const height = clampHeight(feature.heightAboveTopMm, top);
  const raised = top + height;
  return fillHeightmap(hm, (x, y) => (inBounds(x, y, bounds) ? raised : top));
}

function validateStock(stock: ParametricSpec["stock"]): ParametricSpec["stock"] {
  const widthMm = Math.max(MIN_DIM_MM, stock.widthMm);
  const depthMm = Math.max(MIN_DIM_MM, stock.depthMm);
  const heightMm = Math.max(MIN_DIM_MM, stock.heightMm);
  return { widthMm, depthMm, heightMm };
}

type Bounds = { x0: number; y0: number; x1: number; y1: number };

/** Clamp a feature's footprint to lie fully within the stock, preserving intent when possible. */
function clampBounds(
  feature: { x: number; y: number; widthMm: number; depthMm: number },
  stock: ParametricSpec["stock"],
): Bounds {
  const w = Math.max(0, feature.widthMm);
  const d = Math.max(0, feature.depthMm);
  const x0 = clamp(feature.x, 0, stock.widthMm);
  const y0 = clamp(feature.y, 0, stock.depthMm);
  const x1 = clamp(x0 + w, 0, stock.widthMm);
  const y1 = clamp(y0 + d, 0, stock.depthMm);
  return { x0, y0, x1, y1 };
}

function inBounds(x: number, y: number, b: Bounds): boolean {
  return x >= b.x0 && x <= b.x1 && y >= b.y0 && y <= b.y1;
}

/** Pocket depth cannot exceed the stock height (would cut below Z0) and cannot be negative. */
function clampDepth(depthBelowTopMm: number, stockHeightMm: number): number {
  return clamp(depthBelowTopMm, 0, stockHeightMm);
}

/**
 * Boss height above the top face is unbounded above by stock height (bosses
 * add material, they don't consume it) but cannot be negative — a negative
 * "boss" is a pocket and should be modeled as one explicitly.
 */
function clampHeight(heightAboveTopMm: number, _stockHeightMm: number): number {
  return Math.max(0, heightAboveTopMm);
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}
