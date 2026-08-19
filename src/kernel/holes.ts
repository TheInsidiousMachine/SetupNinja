import { inchToMm } from "./units";
import type { HoleLayout, HoleOperation, Material, Tool } from "./types";

/**
 * Hole geometry and drilling parameters.
 *
 * Drilling is not milling with a different cutter. The chip has nowhere to go,
 * the tool is only supported by the hole it is making, and the numbers that keep
 * it alive — surface speed, feed per revolution, when to peck — follow their own
 * rules. Those rules live here, as data and closed-form math, so a machinist can
 * check any one of them against a handbook.
 */

// ---------------------------------------------------------------------------
// Hole centres
// ---------------------------------------------------------------------------

export type HoleCenter = { x: number; y: number };

/**
 * Expand a layout into hole centres.
 *
 * Bolt circles are computed from the angle, not tabulated, so a 7-hole pattern
 * is as exact as a 4-hole one.
 */
export function holeCenters(layout: HoleLayout): HoleCenter[] {
  switch (layout.kind) {
    case "single":
      return [{ x: layout.x, y: layout.y }];

    case "grid": {
      const centers: HoleCenter[] = [];
      const cols = Math.max(1, Math.floor(layout.cols));
      const rows = Math.max(1, Math.floor(layout.rows));
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          centers.push({
            x: layout.x + col * layout.pitchXMm,
            y: layout.y + row * layout.pitchYMm,
          });
        }
      }
      return centers;
    }

    case "bolt-circle": {
      const count = Math.max(1, Math.floor(layout.count));
      const radius = layout.boltCircleDiameterMm / 2;
      const step = (Math.PI * 2) / count;
      const start = (layout.startAngleDeg * Math.PI) / 180;
      return Array.from({ length: count }, (_, index) => {
        const angle = start + index * step;
        return {
          x: layout.cx + radius * Math.cos(angle),
          y: layout.cy + radius * Math.sin(angle),
        };
      });
    }

    case "line": {
      const count = Math.max(1, Math.floor(layout.count));
      const angle = (layout.angleDeg * Math.PI) / 180;
      return Array.from({ length: count }, (_, index) => ({
        x: layout.x + index * layout.pitchMm * Math.cos(angle),
        y: layout.y + index * layout.pitchMm * Math.sin(angle),
      }));
    }
  }
}

/**
 * Order holes to minimise rapid travel with a nearest-neighbour walk from the
 * first centre. Deterministic: same input always gives the same order.
 */
export function orderHoles(centers: HoleCenter[]): HoleCenter[] {
  if (centers.length <= 2) return [...centers];
  const remaining = centers.slice(1);
  const ordered: HoleCenter[] = [centers[0]];
  let current = centers[0];

  while (remaining.length > 0) {
    let bestIndex = 0;
    let bestDistance = Infinity;
    for (const [index, candidate] of remaining.entries()) {
      const distance = Math.hypot(candidate.x - current.x, candidate.y - current.y);
      // Strict comparison keeps the earlier candidate on a tie, so the walk is stable.
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    }
    current = remaining[bestIndex];
    ordered.push(current);
    remaining.splice(bestIndex, 1);
  }
  return ordered;
}

// ---------------------------------------------------------------------------
// Thread data
// ---------------------------------------------------------------------------

export type ThreadSpec = {
  /** Designation as a machinist writes it. */
  spec: string;
  /** Major diameter, mm. */
  majorDiameterMm: number;
  /** Pitch, mm per revolution. */
  pitchMm: number;
  /** Tap drill for roughly 75% thread engagement, mm. */
  tapDrillMm: number;
  /** Drill name a machinist would call out, e.g. "#7" or "5/16". */
  tapDrillName: string;
};

/**
 * Tap drill sizes at approximately 75% thread engagement, the shop default.
 *
 * 75% is the usual compromise: it holds nearly all the strength of a full thread
 * while cutting tapping torque enough that small taps survive. Going finer does
 * not make the joint meaningfully stronger and does break taps.
 */
export const THREADS: ThreadSpec[] = [
  // Unified coarse
  { spec: "#4-40", majorDiameterMm: inchToMm(0.112), pitchMm: inchToMm(1 / 40), tapDrillMm: inchToMm(0.089), tapDrillName: "#43" },
  { spec: "#6-32", majorDiameterMm: inchToMm(0.138), pitchMm: inchToMm(1 / 32), tapDrillMm: inchToMm(0.1065), tapDrillName: "#36" },
  { spec: "#8-32", majorDiameterMm: inchToMm(0.164), pitchMm: inchToMm(1 / 32), tapDrillMm: inchToMm(0.136), tapDrillName: "#29" },
  { spec: "#10-24", majorDiameterMm: inchToMm(0.19), pitchMm: inchToMm(1 / 24), tapDrillMm: inchToMm(0.1495), tapDrillName: "#25" },
  { spec: "1/4-20", majorDiameterMm: inchToMm(0.25), pitchMm: inchToMm(1 / 20), tapDrillMm: inchToMm(0.201), tapDrillName: "#7" },
  { spec: "5/16-18", majorDiameterMm: inchToMm(0.3125), pitchMm: inchToMm(1 / 18), tapDrillMm: inchToMm(0.257), tapDrillName: "F" },
  { spec: "3/8-16", majorDiameterMm: inchToMm(0.375), pitchMm: inchToMm(1 / 16), tapDrillMm: inchToMm(0.3125), tapDrillName: "5/16" },
  { spec: "7/16-14", majorDiameterMm: inchToMm(0.4375), pitchMm: inchToMm(1 / 14), tapDrillMm: inchToMm(0.368), tapDrillName: "U" },
  { spec: "1/2-13", majorDiameterMm: inchToMm(0.5), pitchMm: inchToMm(1 / 13), tapDrillMm: inchToMm(0.4219), tapDrillName: "27/64" },
  { spec: "5/8-11", majorDiameterMm: inchToMm(0.625), pitchMm: inchToMm(1 / 11), tapDrillMm: inchToMm(0.5312), tapDrillName: "17/32" },
  { spec: "3/4-10", majorDiameterMm: inchToMm(0.75), pitchMm: inchToMm(0.1), tapDrillMm: inchToMm(0.6562), tapDrillName: "21/32" },
  // Unified fine
  { spec: "#10-32", majorDiameterMm: inchToMm(0.19), pitchMm: inchToMm(1 / 32), tapDrillMm: inchToMm(0.159), tapDrillName: "#21" },
  { spec: "1/4-28", majorDiameterMm: inchToMm(0.25), pitchMm: inchToMm(1 / 28), tapDrillMm: inchToMm(0.213), tapDrillName: "#3" },
  { spec: "5/16-24", majorDiameterMm: inchToMm(0.3125), pitchMm: inchToMm(1 / 24), tapDrillMm: inchToMm(0.272), tapDrillName: "I" },
  { spec: "3/8-24", majorDiameterMm: inchToMm(0.375), pitchMm: inchToMm(1 / 24), tapDrillMm: inchToMm(0.332), tapDrillName: "Q" },
  { spec: "1/2-20", majorDiameterMm: inchToMm(0.5), pitchMm: inchToMm(1 / 20), tapDrillMm: inchToMm(0.4531), tapDrillName: "29/64" },
  // Metric coarse
  { spec: "M3x0.5", majorDiameterMm: 3, pitchMm: 0.5, tapDrillMm: 2.5, tapDrillName: "2.5 mm" },
  { spec: "M4x0.7", majorDiameterMm: 4, pitchMm: 0.7, tapDrillMm: 3.3, tapDrillName: "3.3 mm" },
  { spec: "M5x0.8", majorDiameterMm: 5, pitchMm: 0.8, tapDrillMm: 4.2, tapDrillName: "4.2 mm" },
  { spec: "M6x1.0", majorDiameterMm: 6, pitchMm: 1.0, tapDrillMm: 5.0, tapDrillName: "5.0 mm" },
  { spec: "M8x1.25", majorDiameterMm: 8, pitchMm: 1.25, tapDrillMm: 6.8, tapDrillName: "6.8 mm" },
  { spec: "M10x1.5", majorDiameterMm: 10, pitchMm: 1.5, tapDrillMm: 8.5, tapDrillName: "8.5 mm" },
  { spec: "M12x1.75", majorDiameterMm: 12, pitchMm: 1.75, tapDrillMm: 10.2, tapDrillName: "10.2 mm" },
];

export function findThread(spec: string): ThreadSpec | null {
  const wanted = spec.trim().toUpperCase().replace(/\s+/g, "");
  return (
    THREADS.find((thread) => thread.spec.toUpperCase().replace(/\s+/g, "") === wanted) ?? null
  );
}

// ---------------------------------------------------------------------------
// Drilling parameters
// ---------------------------------------------------------------------------

/** Surface speed for drilling, feet per minute. Lower than milling: no chip clearance. */
export function drillSfm(material: Material, tool: Tool): number {
  const carbide = tool.material === "carbide";
  if (material.id === "4140") return carbide ? 180 : 70;
  if (material.id === "delrin") return carbide ? 500 : 300;
  return carbide ? 350 : 200;
}

/**
 * Feed per revolution for drilling, inches.
 *
 * Drills are fed per revolution, not per tooth: the two lips share the cut and
 * the rate scales with diameter because a bigger drill can clear a bigger chip.
 */
export function drillFeedPerRevInch(diameterMm: number, material: Material): number {
  const diameterInch = diameterMm / 25.4;
  // Handbook bands, interpolated linearly by diameter.
  const base =
    diameterInch < 0.125
      ? 0.001
      : diameterInch < 0.25
        ? 0.002
        : diameterInch < 0.5
          ? 0.004
          : diameterInch < 0.75
            ? 0.006
            : 0.008;
  if (material.id === "4140") return base * 0.6;
  if (material.id === "delrin") return base * 1.5;
  return base;
}

/** Depth beyond this many diameters needs pecking to clear chips. */
export const PECK_THRESHOLD_RATIO = 3;

/** Peck increment as a fraction of diameter once pecking is required. */
const PECK_INCREMENT_RATIO = 1.0;

/** Does a hole this deep in this drill need a peck cycle? */
export function needsPecking(diameterMm: number, depthMm: number): boolean {
  return depthMm > diameterMm * PECK_THRESHOLD_RATIO;
}

export function peckIncrement(diameterMm: number): number {
  return diameterMm * PECK_INCREMENT_RATIO;
}

/**
 * Extra depth a drill must travel for a through hole so the full diameter
 * breaks out.
 *
 * The point is a cone: its height is r / tan(half angle). Stopping at nominal
 * depth leaves a ragged partial breakout, so the tip goes past by the point
 * height plus a small margin.
 */
export function drillPointLength(diameterMm: number, pointAngleDeg = 118): number {
  const halfAngle = (Math.max(60, Math.min(180, pointAngleDeg)) / 2) * (Math.PI / 180);
  const tangent = Math.tan(halfAngle);
  if (tangent <= 1e-9) return 0;
  return diameterMm / 2 / tangent;
}

/** Breakout margin past the point, mm. */
export const BREAKOUT_MARGIN_MM = 1.0;

/**
 * Spot drill depth for a given hole.
 *
 * The spot must be wider than the drill it guides so the drill's corners pick up
 * the chamfer and the point cannot walk. Depth follows from the spot's own
 * point angle.
 */
export function spotDepth(holeDiameterMm: number, spotAngleDeg = 90): number {
  const chamferDiameter = holeDiameterMm * 1.1;
  return drillPointLength(chamferDiameter, spotAngleDeg);
}

export type DrillParameters = {
  rpm: number;
  feedMmMin: number;
  peckMm?: number;
  dwellSec?: number;
};

/**
 * Speeds and feeds for one drilling operation.
 *
 * Tapping is the special case: the feed is not chosen, it is dictated by the
 * thread. Feed must equal pitch times spindle speed exactly or the tap tears the
 * thread out, so it is computed rather than looked up.
 */
export function drillParameters(
  operation: HoleOperation,
  tool: Tool,
  material: Material,
  maxRpm: number,
  maxFeedMmMin: number,
  depthMm: number,
): DrillParameters {
  if (operation === "tap") {
    const pitch = tool.threadPitchMm ?? 1;
    // Taps run slow; torque and reversal dominate, not surface speed.
    const rpm = Math.min(maxRpm, tool.material === "carbide" ? 600 : 400);
    return {
      rpm,
      feedMmMin: Math.min(maxFeedMmMin, rpm * pitch),
      dwellSec: 0,
    };
  }

  const diameterInch = tool.diameterMm / 25.4;
  const sfm = operation === "ream" ? drillSfm(material, tool) * 0.5 : drillSfm(material, tool);
  const rpm = Math.min(maxRpm, Math.max(200, Math.round((sfm * 3.82) / Math.max(0.01, diameterInch))));

  const feedPerRev =
    operation === "ream"
      ? drillFeedPerRevInch(tool.diameterMm, material) * 2
      : operation === "spot"
        ? drillFeedPerRevInch(tool.diameterMm, material) * 0.5
        : drillFeedPerRevInch(tool.diameterMm, material);
  const feedMmMin = Math.min(maxFeedMmMin, rpm * feedPerRev * 25.4);

  const parameters: DrillParameters = { rpm, feedMmMin };
  if (operation === "peck" || (operation === "drill" && needsPecking(tool.diameterMm, depthMm))) {
    parameters.peckMm = peckIncrement(tool.diameterMm);
  }
  return parameters;
}
