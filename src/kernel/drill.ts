import {
  BREAKOUT_MARGIN_MM,
  drillParameters,
  drillPointLength,
  findThread,
  holeCenters,
  orderHoles,
  spotDepth,
} from "./holes";
import type {
  DrillCycle,
  HoleOperation,
  HolePattern,
  MachineProfile,
  Material,
  Stock,
  Tool,
  Waypoint,
} from "./types";

/**
 * Turning hole patterns into drilling cycles, and cycles into motion.
 *
 * A cycle is kept as parameters rather than moves so the post can emit a real
 * canned cycle where the control has one and identical explicit motion where it
 * does not. Everything downstream that has to reason about where the tool
 * actually goes — simulation, verification, the 3D preview — runs on the
 * expanded form, so both output paths are checked by the same math.
 */

export type DrillPlanInput = {
  patterns: HolePattern[];
  stock: Stock;
  /**
   * Absolute Z of the finished top face, mm — the datum hole depths are measured
   * from. This is not the raw stock top: a print calls out depth from the
   * finished face, so datuming to un-faced stock leaves every hole shallow by
   * the facing allowance.
   */
  finishedTopZMm: number;
  tools: Tool[];
  material: Material;
  machine: MachineProfile;
  /** Clearance plane above the raw stock top, mm. */
  clearanceMm?: number;
};

export type DrillPlanResult = {
  cycles: DrillCycle[];
  /** Tools the plan needed but the library did not contain. */
  missingTools: string[];
  warnings: string[];
};

const DEFAULT_CLEARANCE_MM = 5;
/** R plane sits this far above the top face between holes. */
const RETRACT_ABOVE_TOP_MM = 2.5;

export function planDrilling(input: DrillPlanInput): DrillPlanResult {
  const clearance = input.clearanceMm ?? DEFAULT_CLEARANCE_MM;
  // Clearance and retract clear the raw stock; depth is measured from the
  // finished face. These are different planes whenever there is facing stock.
  const stockTopZ = input.stock.z + input.stock.h;
  const finishedTopZ = input.finishedTopZMm;
  const bottomZ = input.stock.z;
  const cycles: DrillCycle[] = [];
  const missingTools: string[] = [];
  const warnings: string[] = [];

  for (const pattern of input.patterns) {
    const centers = orderHoles(holeCenters(pattern.layout));
    if (centers.length === 0) continue;

    const thread = pattern.threadSpec ? findThread(pattern.threadSpec) : null;
    if (pattern.threadSpec && !thread) {
      warnings.push(`Thread ${pattern.threadSpec} is not in the thread table; skipping its tap.`);
    }

    // A tapped hole is drilled at the tap drill size, not the thread diameter.
    const drillDiameter = thread ? thread.tapDrillMm : pattern.diameterMm;

    for (const operation of pattern.operations) {
      if (operation === "tap" && !thread) continue;

      const wanted = operation === "tap" ? pattern.diameterMm : drillDiameter;
      const tool = selectTool(input.tools, operation, wanted, pattern.threadSpec);
      if (!tool) {
        missingTools.push(describeMissingTool(operation, wanted, pattern.threadSpec));
        continue;
      }

      const cycle = buildCycle({
        operation,
        tool,
        centers,
        pattern,
        finishedTopZ,
        stockTopZ,
        bottomZ,
        clearance,
        material: input.material,
        machine: input.machine,
      });
      if (cycle) cycles.push(cycle);
    }
  }

  return { cycles, missingTools, warnings };
}

type BuildCycleInput = {
  operation: HoleOperation;
  tool: Tool;
  centers: { x: number; y: number }[];
  pattern: HolePattern;
  /** Datum for hole depth. */
  finishedTopZ: number;
  /** Highest material the tool must clear on the way in. */
  stockTopZ: number;
  bottomZ: number;
  clearance: number;
  material: Material;
  machine: MachineProfile;
};

function buildCycle(input: BuildCycleInput): DrillCycle | null {
  const { operation, tool, centers, pattern, finishedTopZ, stockTopZ, bottomZ, clearance, material, machine } =
    input;

  const zClear = stockTopZ + clearance;
  const zRetract = stockTopZ + RETRACT_ABOVE_TOP_MM;
  const zBottom = cycleBottomZ(operation, tool, pattern, finishedTopZ, bottomZ);
  const depth = finishedTopZ - zBottom;
  if (depth <= 0) return null;

  const parameters = drillParameters(
    operation,
    tool,
    material,
    machine.maxRpm,
    machine.maxFeedMmMin,
    depth,
  );

  return {
    tool,
    operation,
    centers,
    zBottomMm: zBottom,
    zRetractMm: zRetract,
    zClearMm: zClear,
    feedMmMin: parameters.feedMmMin,
    rpm: parameters.rpm,
    peckMm: parameters.peckMm,
    dwellSec: parameters.dwellSec,
    pitchMm: operation === "tap" ? tool.threadPitchMm : undefined,
  };
}

/**
 * Absolute Z the tool tip reaches.
 *
 * A through hole must run the drill point past the far face, or the last of the
 * hole is a cone rather than a hole. A tapped hole stops short of the drilled
 * depth because the tap cannot cut usable thread all the way to the bottom.
 */
function cycleBottomZ(
  operation: HoleOperation,
  tool: Tool,
  pattern: HolePattern,
  finishedTopZ: number,
  bottomZ: number,
): number {
  if (operation === "spot") {
    return finishedTopZ - spotDepth(pattern.diameterMm, tool.pointAngleDeg ?? 90);
  }

  if (pattern.through) {
    if (operation === "tap") {
      // Tapping straight through needs no breakout allowance, but the lead-in
      // threads of the tap still have to clear the far face.
      return bottomZ - (tool.threadPitchMm ?? 1) * 2;
    }
    const point = drillPointLength(tool.diameterMm, tool.pointAngleDeg ?? 118);
    return bottomZ - point - BREAKOUT_MARGIN_MM;
  }

  const nominal = finishedTopZ - pattern.depthBelowTopMm;
  if (operation === "tap") {
    // Leave the last few threads' worth of drilled depth unthreaded.
    return nominal + (tool.threadPitchMm ?? 1) * 2;
  }
  return nominal;
}

/**
 * Choose a tool for an operation.
 *
 * Drills and reamers must match the hole within a tight band — a hole is only as
 * accurate as the tool that made it — while spot drills are chosen by being the
 * largest available that still fits.
 */
function selectTool(
  tools: Tool[],
  operation: HoleOperation,
  diameterMm: number,
  threadSpec?: string,
): Tool | null {
  if (operation === "tap") {
    const wanted = threadSpec?.trim().toUpperCase().replace(/\s+/g, "");
    return (
      tools.find(
        (tool) =>
          tool.type === "tap" &&
          tool.threadSpec?.trim().toUpperCase().replace(/\s+/g, "") === wanted,
      ) ?? null
    );
  }

  if (operation === "spot") {
    const spots = tools.filter((tool) => tool.type === "spot" || tool.type === "centerdrill");
    if (spots.length === 0) return null;
    // Widest spot that still cuts a chamfer no larger than the hole itself.
    const usable = spots.filter((tool) => tool.diameterMm >= diameterMm * 0.6);
    const pool = usable.length > 0 ? usable : spots;
    return pool.reduce((best, tool) => (tool.diameterMm > best.diameterMm ? tool : best));
  }

  const type = operation === "ream" ? "reamer" : "drill";
  const candidates = tools.filter((tool) => tool.type === type);
  if (candidates.length === 0) return null;

  const tolerance = 0.02;
  const exact = candidates.filter((tool) => Math.abs(tool.diameterMm - diameterMm) <= tolerance);
  if (exact.length > 0) {
    return exact.reduce((best, tool) =>
      Math.abs(tool.diameterMm - diameterMm) < Math.abs(best.diameterMm - diameterMm) ? tool : best,
    );
  }
  return null;
}

function describeMissingTool(operation: HoleOperation, diameterMm: number, threadSpec?: string): string {
  if (operation === "tap") return `${threadSpec ?? "unknown"} tap`;
  if (operation === "spot") return "spot drill";
  const label = operation === "ream" ? "reamer" : "drill";
  return `${(diameterMm / 25.4).toFixed(4)}" ${label}`;
}

// ---------------------------------------------------------------------------
// Expansion to explicit motion
// ---------------------------------------------------------------------------

/**
 * Expand a canned cycle into the moves it stands for.
 *
 * This is what a control does internally when it sees G81 or G83. Producing it
 * here means simulation, gouge checking, holder clearance, and the 3D preview
 * all see drilling as real motion rather than an opaque block, and it is the
 * output used verbatim for controls with no canned cycles.
 */
export function expandDrillCycle(cycle: DrillCycle): Waypoint[] {
  const points: Waypoint[] = [];
  const base = {
    toolId: cycle.tool.id,
    rpm: cycle.rpm,
    // A drill in the hole is fully engaged by definition.
    engagementRad: Math.PI,
    slotting: true,
  };

  const rapid = (x: number, y: number, z: number): Waypoint => ({
    ...base,
    x,
    y,
    z,
    feedMmMin: cycle.feedMmMin,
    kind: "rapid",
  });
  const cut = (x: number, y: number, z: number, feed = cycle.feedMmMin): Waypoint => ({
    ...base,
    x,
    y,
    z,
    feedMmMin: feed,
    kind: "cut",
  });

  for (const center of cycle.centers) {
    points.push(rapid(center.x, center.y, cycle.zClearMm));
    points.push(rapid(center.x, center.y, cycle.zRetractMm));

    if (cycle.peckMm && cycle.peckMm > 0) {
      let depth = cycle.zRetractMm;
      while (depth - cycle.peckMm > cycle.zBottomMm) {
        depth -= cycle.peckMm;
        points.push(cut(center.x, center.y, depth));
        // Full retract clears the chip; that is the point of a peck cycle.
        points.push(rapid(center.x, center.y, cycle.zRetractMm));
        points.push(rapid(center.x, center.y, depth + 0.5));
      }
      points.push(cut(center.x, center.y, cycle.zBottomMm));
    } else {
      points.push(cut(center.x, center.y, cycle.zBottomMm));
    }

    if (cycle.operation === "tap") {
      // The tap reverses out under feed at the same pitch; it cannot be rapided.
      points.push(cut(center.x, center.y, cycle.zRetractMm, cycle.feedMmMin));
    } else {
      points.push(rapid(center.x, center.y, cycle.zRetractMm));
    }
  }

  if (points.length > 0) {
    const last = points[points.length - 1];
    points.push(rapid(last.x, last.y, cycle.zClearMm));
  }
  return points;
}

/** Total holes a set of cycles will produce, for reporting. */
export function countHoles(cycles: DrillCycle[]): number {
  return cycles.reduce((sum, cycle) => sum + cycle.centers.length, 0);
}
