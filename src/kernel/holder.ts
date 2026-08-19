import { hmZ, worldToCell } from "./heightmap";
import type { Heightmap, ToolHolder, Toolpath } from "./types";

/**
 * Toolholder clearance against the modeled part surface.
 *
 * The holder is the part of the assembly a machinist cannot see cutting, and a
 * wide holder dropping into a deep pocket is a crash that costs a spindle. The
 * tradeoff runs the other way too: every extra millimetre of stickout the
 * operator dials in to clear a boss costs rigidity, so the report gives back the
 * *minimum* stickout that clears rather than just a pass/fail.
 */
export type HolderClearanceReport = {
  toolId: string;
  toolName: string;
  /** True when the holder envelope intersects modeled material. */
  collides: boolean;
  /**
   * Smallest gap between the holder envelope and the part, mm.
   * Negative means the holder is inside material by that much.
   */
  minClearanceMm: number;
  /** Where the worst case happens, in part coordinates. */
  worstAt: { x: number; y: number; z: number } | null;
  /** Stickout the operator must dial in for the holder to clear, mm. */
  requiredStickoutMm: number;
  /** Stickout the tool is currently set to, mm. */
  actualStickoutMm: number;
  /** Deepest wall the tool must reach past, mm. Compared against flute length. */
  maxEngagementDepthMm: number;
};

/** Clearance the holder should keep from the part before we call it safe. */
export const HOLDER_SAFETY_MARGIN_MM = 2;

/**
 * Radius of the holder body at `heightAboveNose` above its nose face.
 * The nose flares linearly to the body diameter, then runs straight up.
 */
export function holderRadiusAt(holder: ToolHolder, heightAboveNose: number): number {
  const noseR = holder.noseDiameterMm / 2;
  const bodyR = holder.bodyDiameterMm / 2;
  if (heightAboveNose <= 0) return noseR;
  if (heightAboveNose >= holder.noseLengthMm || holder.noseLengthMm <= 0) return bodyR;
  const t = heightAboveNose / holder.noseLengthMm;
  return noseR + (bodyR - noseR) * t;
}

/**
 * Lowest height above the nose face at which the holder is at least `radius` wide.
 * Material sitting further out than the body radius can never be hit.
 */
function lowestHeightForRadius(holder: ToolHolder, radius: number): number | null {
  const noseR = holder.noseDiameterMm / 2;
  const bodyR = holder.bodyDiameterMm / 2;
  if (radius > bodyR) return null;
  if (radius <= noseR) return 0;
  if (holder.noseLengthMm <= 0) return 0;
  return ((radius - noseR) / (bodyR - noseR)) * holder.noseLengthMm;
}

export function checkHolderClearance(hm: Heightmap, path: Toolpath): HolderClearanceReport {
  const tool = path.tool;
  const holder = tool.holder;
  const stickout = tool.stickoutMm ?? 0;
  const base: HolderClearanceReport = {
    toolId: tool.id,
    toolName: tool.name,
    collides: false,
    minClearanceMm: Infinity,
    worstAt: null,
    requiredStickoutMm: 0,
    actualStickoutMm: stickout,
    maxEngagementDepthMm: 0,
  };

  const cutting = path.points.filter((point) => point.kind !== "rapid");
  if (cutting.length === 0) return { ...base, minClearanceMm: Infinity };

  // Deepest wall the flutes must reach past, whether or not a holder is modeled.
  let maxEngagementDepth = 0;
  for (const point of cutting) {
    const local = localMaxSurface(hm, point.x, point.y, tool.diameterMm / 2);
    if (Number.isFinite(local)) maxEngagementDepth = Math.max(maxEngagementDepth, local - point.z);
  }
  base.maxEngagementDepthMm = Math.max(0, maxEngagementDepth);

  if (!holder || stickout <= 0) return base;

  const bodyRadius = holder.bodyDiameterMm / 2;
  const globalMax = finiteMax(hm);
  // Nothing on the part reaches the nose face, so no orientation can collide.
  if (!Number.isFinite(globalMax)) return base;

  let minClearance = Infinity;
  let requiredStickout = 0;
  let worstAt: { x: number; y: number; z: number } | null = null;

  for (const point of cutting) {
    const noseZ = point.z + stickout;
    // Cheap sound screen: the nose face is the lowest part of the holder.
    if (globalMax <= noseZ) continue;

    const min = worldToCell(hm, point.x - bodyRadius, point.y - bodyRadius);
    const max = worldToCell(hm, point.x + bodyRadius, point.y + bodyRadius);
    for (let iy = min.iy; iy <= max.iy; iy++) {
      for (let ix = min.ix; ix <= max.ix; ix++) {
        const surface = hmZ(hm, ix, iy);
        if (!Number.isFinite(surface) || surface <= noseZ) continue;

        // Nearest point of this cell to the tool axis: conservative for a crash check.
        const cellX0 = hm.originX + ix * hm.cell;
        const cellY0 = hm.originY + iy * hm.cell;
        const dx = Math.max(cellX0 - point.x, 0, point.x - (cellX0 + hm.cell));
        const dy = Math.max(cellY0 - point.y, 0, point.y - (cellY0 + hm.cell));
        const radial = Math.hypot(dx, dy);
        if (radial > bodyRadius) continue;

        const height = lowestHeightForRadius(holder, radial);
        if (height === null) continue;
        const holderZ = noseZ + height;
        const clearance = holderZ - surface;
        if (clearance < minClearance) {
          minClearance = clearance;
          worstAt = { x: point.x, y: point.y, z: point.z };
        }
        // Stickout that would put this holder height exactly on the surface.
        requiredStickout = Math.max(requiredStickout, surface - point.z - height);
      }
    }
  }

  return {
    ...base,
    collides: minClearance < 0,
    minClearanceMm: minClearance,
    worstAt,
    requiredStickoutMm: requiredStickout > 0 ? requiredStickout + HOLDER_SAFETY_MARGIN_MM : 0,
  };
}

/** Highest modeled surface within `radius` of a point, or NaN when nothing is modeled. */
function localMaxSurface(hm: Heightmap, x: number, y: number, radius: number): number {
  const min = worldToCell(hm, x - radius, y - radius);
  const max = worldToCell(hm, x + radius, y + radius);
  let best = Number.NaN;
  for (let iy = min.iy; iy <= max.iy; iy++) {
    for (let ix = min.ix; ix <= max.ix; ix++) {
      const surface = hmZ(hm, ix, iy);
      if (!Number.isFinite(surface)) continue;
      if (!Number.isFinite(best) || surface > best) best = surface;
    }
  }
  return best;
}

function finiteMax(hm: Heightmap): number {
  let best = Number.NaN;
  for (let i = 0; i < hm.z.length; i++) {
    const v = hm.z[i];
    if (!Number.isFinite(v)) continue;
    if (!Number.isFinite(best) || v > best) best = v;
  }
  return best;
}
