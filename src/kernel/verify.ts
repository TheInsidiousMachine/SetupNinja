import { expandDrillCycle } from "./drill";
import { sampleHeight } from "./heightmap";
import { checkHolderClearance, HOLDER_SAFETY_MARGIN_MM, type HolderClearanceReport } from "./holder";
import { cutterClearsTarget } from "./toolpath";
import { formatLength } from "./units";
import { resolvePost } from "./postConfig";
import type { JobPlan, UnitSystem } from "./types";

export type IssueSeverity = "error" | "warning";

export type VerificationIssue = {
  code: string;
  message: string;
  /** Errors block export. Warnings are shown but do not gate the program. */
  severity: IssueSeverity;
};

export type VerificationReport = {
  passed: boolean;
  issues: VerificationIssue[];
  cutMoves: number;
  rapidMoves: number;
  /** Per-tool holder clearance, in plan path order. */
  holders: HolderClearanceReport[];
};

const SURFACE_TOLERANCE_MM = 0.08;

export function verifyPlan(plan: JobPlan): VerificationReport {
  const issues: VerificationIssue[] = [];
  const units = resolvePost(plan.machine).units;
  const holders: HolderClearanceReport[] = [];
  let cutMoves = 0;
  let rapidMoves = 0;

  if (!plan.paths.length) {
    issues.push({ code: "NO_PATHS", message: "No toolpaths were generated.", severity: "error" });
  }

  checkMachineEnvelope(plan, units, issues);
  checkDrilling(plan, units, issues);

  for (const [pathIndex, path] of plan.paths.entries()) {
    if (!plan.tools.some((tool) => tool.id === path.tool.id)) {
      issues.push({
        code: "UNKNOWN_TOOL",
        message: `Path ${pathIndex + 1} uses a tool that is not in this job.`,
        severity: "error",
      });
    }

    const holder = checkHolderClearance(plan.heightmap, path);
    holders.push(holder);
    collectHolderIssues(holder, path.tool.fluteLengthMm, units, issues);

    for (const [pointIndex, point] of path.points.entries()) {
      const label = `Path ${pathIndex + 1}, move ${pointIndex + 1}`;
      if (![point.x, point.y, point.z, point.feedMmMin, point.rpm].every(Number.isFinite)) {
        issues.push({
          code: "NON_FINITE_MOVE",
          message: `${label} contains a non-finite value.`,
          severity: "error",
        });
        continue;
      }
      if (point.feedMmMin <= 0 || point.feedMmMin > plan.machine.maxFeedMmMin + 1e-6) {
        issues.push({
          code: "FEED_LIMIT",
          message: `${label} exceeds the machine feed limit.`,
          severity: "error",
        });
      }
      if (point.rpm <= 0 || point.rpm > plan.machine.maxRpm + 1e-6) {
        issues.push({
          code: "RPM_LIMIT",
          message: `${label} exceeds the spindle RPM limit.`,
          severity: "error",
        });
      }
      if (point.kind === "rapid") {
        rapidMoves++;
        continue;
      }
      if (point.kind !== "cut") continue;

      cutMoves++;
      const surfaceZ = sampleHeight(plan.heightmap, point.x, point.y);
      if (Number.isFinite(surfaceZ) && point.z < surfaceZ - SURFACE_TOLERANCE_MM) {
        issues.push({
          code: "SURFACE_GOUGE",
          message: `${label} is below the modeled part surface.`,
          severity: "error",
        });
      }
      if (!cutterClearsTarget(plan.heightmap, point.x, point.y, point.z, 0, path.tool.diameterMm / 2)) {
        issues.push({
          code: "CUTTER_ENVELOPE_GOUGE",
          message: `${label} lets the cutter body overlap a higher modeled surface.`,
          severity: "error",
        });
      }
    }
  }

  const drilledHoles = (plan.drillCycles ?? []).reduce((sum, c) => sum + c.centers.length, 0);
  if (cutMoves === 0 && drilledHoles === 0) {
    issues.push({
      code: "NO_CUT_MOVES",
      message: "The job has no cutting moves. Check the feature and stock dimensions.",
      severity: "error",
    });
  }
  if (rapidMoves === 0 && drilledHoles === 0) {
    issues.push({
      code: "NO_RAPIDS",
      message: "The job has no retract or rapid moves.",
      severity: "error",
    });
  }

  return {
    passed: issues.every((issue) => issue.severity !== "error"),
    issues,
    cutMoves,
    rapidMoves,
    holders,
  };
}

/**
 * Holder crashes and flute-length shortfalls.
 *
 * A holder inside material is an error — that is a spindle crash. A holder that
 * clears by less than the safety margin is a warning, because the operator may
 * know their setup better than the model does.
 */
function collectHolderIssues(
  holder: HolderClearanceReport,
  fluteLengthMm: number | undefined,
  units: UnitSystem,
  issues: VerificationIssue[],
): void {
  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 3 : 1);

  if (holder.collides) {
    issues.push({
      code: "HOLDER_COLLISION",
      message:
        `${holder.toolName}: the holder hits the part by ${length(-holder.minClearanceMm)}. ` +
        `Set stickout to at least ${length(holder.requiredStickoutMm)} or use a slimmer holder.`,
      severity: "error",
    });
  } else if (Number.isFinite(holder.minClearanceMm) && holder.minClearanceMm < HOLDER_SAFETY_MARGIN_MM) {
    issues.push({
      code: "HOLDER_CLEARANCE_TIGHT",
      message:
        `${holder.toolName}: the holder clears the part by only ${length(holder.minClearanceMm)}. ` +
        `Confirm the setup before cutting.`,
      severity: "warning",
    });
  }

  if (fluteLengthMm && holder.maxEngagementDepthMm > fluteLengthMm + 1e-6) {
    issues.push({
      code: "FLUTE_LENGTH_SHORT",
      message:
        `${holder.toolName}: the cut reaches ${length(holder.maxEngagementDepthMm)} deep but the flutes are only ` +
        `${length(fluteLengthMm)} long. The shank would rub the wall.`,
      severity: "error",
    });
  }

  // Rigidity, not safety: flag a tool hanging out far enough to chatter.
  if (holder.actualStickoutMm > 0 && holder.requiredStickoutMm > 0) {
    const slack = holder.actualStickoutMm - holder.requiredStickoutMm;
    if (slack > HOLDER_SAFETY_MARGIN_MM * 3) {
      issues.push({
        code: "STICKOUT_EXCESSIVE",
        message:
          `${holder.toolName}: ${length(holder.actualStickoutMm)} stickout is ${length(slack)} more than this part ` +
          `needs. Pulling the tool up stiffens the cut.`,
        severity: "warning",
      });
    }
  }
}

/**
 * Drilling checks.
 *
 * A drill is only supported by the hole it is cutting, so the failures here are
 * different from milling: too little flute to reach depth, a tap fed at anything
 * other than its pitch, or a hole that runs out the bottom of stock that was
 * meant to stay whole.
 */
function checkDrilling(plan: JobPlan, units: UnitSystem, issues: VerificationIssue[]): void {
  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 3 : 1);
  const stockBottom = plan.stock.z;

  for (const cycle of plan.drillCycles ?? []) {
    const label = `${cycle.tool.name} (${cycle.operation})`;

    if (cycle.centers.length === 0) continue;
    if (![cycle.zBottomMm, cycle.zRetractMm, cycle.zClearMm, cycle.feedMmMin, cycle.rpm].every(Number.isFinite)) {
      issues.push({ code: "DRILL_NON_FINITE", message: `${label} has a non-finite cycle value.`, severity: "error" });
      continue;
    }

    if (cycle.zRetractMm >= cycle.zClearMm) {
      issues.push({
        code: "DRILL_PLANES_INVERTED",
        message: `${label}: the retract plane is not below the clearance plane.`,
        severity: "error",
      });
    }
    if (cycle.zBottomMm >= cycle.zRetractMm) {
      issues.push({
        code: "DRILL_NO_DEPTH",
        message: `${label}: the hole bottom is at or above the retract plane.`,
        severity: "error",
      });
    }

    if (cycle.feedMmMin <= 0 || cycle.feedMmMin > plan.machine.maxFeedMmMin + 1e-6) {
      issues.push({
        code: "DRILL_FEED_LIMIT",
        message: `${label} exceeds the machine feed limit.`,
        severity: "error",
      });
    }
    if (cycle.rpm <= 0 || cycle.rpm > plan.machine.maxRpm + 1e-6) {
      issues.push({
        code: "DRILL_RPM_LIMIT",
        message: `${label} exceeds the spindle RPM limit.`,
        severity: "error",
      });
    }

    // A tap that is not fed at exactly its pitch tears the thread out.
    if (cycle.operation === "tap") {
      const pitch = cycle.pitchMm ?? cycle.tool.threadPitchMm;
      if (!pitch || pitch <= 0) {
        issues.push({
          code: "TAP_NO_PITCH",
          message: `${label} has no thread pitch, so its feed cannot be synchronised.`,
          severity: "error",
        });
      } else if (Math.abs(cycle.feedMmMin - cycle.rpm * pitch) > 0.5) {
        issues.push({
          code: "TAP_FEED_NOT_SYNCHRONISED",
          message:
            `${label}: feed is ${length(cycle.feedMmMin)}/min but pitch x rpm is ` +
            `${length(cycle.rpm * pitch)}/min. A tap must be fed at exactly its pitch.`,
          severity: "error",
        });
      }
    }

    const depth = plan.stock.z + plan.stock.h - cycle.zBottomMm;
    const flute = cycle.tool.fluteLengthMm;
    if (flute && depth > flute + 1e-6) {
      issues.push({
        code: "DRILL_FLUTE_SHORT",
        message:
          `${label} reaches ${length(depth)} deep but has only ${length(flute)} of flute. ` +
          `The chips have nowhere to go past that.`,
        severity: "error",
      });
    }

    if (cycle.zBottomMm < stockBottom - 1e-6 && cycle.operation !== "spot") {
      // Breaking through is normal for a through hole; say so rather than
      // failing, because only the operator knows if the fixture is clear.
      issues.push({
        code: "DRILL_BREAKS_THROUGH",
        message:
          `${label} passes ${length(stockBottom - cycle.zBottomMm)} below the stock bottom. ` +
          `Confirm the parallels or fixture are clear underneath.`,
        severity: "warning",
      });
    }

    // The expanded motion must stay inside the same limits as milling.
    for (const point of expandDrillCycle(cycle)) {
      if (![point.x, point.y, point.z].every(Number.isFinite)) {
        issues.push({
          code: "DRILL_NON_FINITE",
          message: `${label} expands to a non-finite move.`,
          severity: "error",
        });
        break;
      }
    }
  }
}

/** Does the job fit inside the machine's travels? */
function checkMachineEnvelope(plan: JobPlan, units: UnitSystem, issues: VerificationIssue[]): void {
  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 2 : 0);
  const axes = [
    { name: "X", need: plan.stock.w, travel: plan.machine.travelXMm },
    { name: "Y", need: plan.stock.d, travel: plan.machine.travelYMm },
    { name: "Z", need: plan.stock.h, travel: plan.machine.travelZMm },
  ];
  for (const axis of axes) {
    if (!axis.travel || !Number.isFinite(axis.travel)) continue;
    if (axis.need > axis.travel) {
      issues.push({
        code: "TRAVEL_EXCEEDED",
        message:
          `Stock needs ${length(axis.need)} of ${axis.name} travel but ${plan.machine.name} has ` +
          `${length(axis.travel)}.`,
        severity: "error",
      });
    }
  }
}
