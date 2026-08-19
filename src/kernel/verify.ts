import { sampleHeight } from "./heightmap";
import { cutterClearsTarget } from "./toolpath";
import type { JobPlan } from "./types";

export type VerificationIssue = {
  code: string;
  message: string;
};

export type VerificationReport = {
  passed: boolean;
  issues: VerificationIssue[];
  cutMoves: number;
  rapidMoves: number;
};

const SURFACE_TOLERANCE_MM = 0.08;

export function verifyPlan(plan: JobPlan): VerificationReport {
  const issues: VerificationIssue[] = [];
  let cutMoves = 0;
  let rapidMoves = 0;

  if (!plan.paths.length) {
    issues.push({ code: "NO_PATHS", message: "No toolpaths were generated." });
  }

  for (const [pathIndex, path] of plan.paths.entries()) {
    if (!plan.tools.some((tool) => tool.id === path.tool.id)) {
      issues.push({
        code: "UNKNOWN_TOOL",
        message: `Path ${pathIndex + 1} uses a tool that is not in this job.`,
      });
    }

    for (const [pointIndex, point] of path.points.entries()) {
      const label = `Path ${pathIndex + 1}, move ${pointIndex + 1}`;
      if (![point.x, point.y, point.z, point.feedMmMin, point.rpm].every(Number.isFinite)) {
        issues.push({ code: "NON_FINITE_MOVE", message: `${label} contains a non-finite value.` });
        continue;
      }
      if (point.feedMmMin <= 0 || point.feedMmMin > plan.machine.maxFeedMmMin + 1e-6) {
        issues.push({ code: "FEED_LIMIT", message: `${label} exceeds the machine feed limit.` });
      }
      if (point.rpm <= 0 || point.rpm > plan.machine.maxRpm + 1e-6) {
        issues.push({ code: "RPM_LIMIT", message: `${label} exceeds the spindle RPM limit.` });
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
        });
      }
      if (!cutterClearsTarget(plan.heightmap, point.x, point.y, point.z, 0, path.tool.diameterMm / 2)) {
        issues.push({
          code: "CUTTER_ENVELOPE_GOUGE",
          message: `${label} lets the cutter body overlap a higher modeled surface.`,
        });
      }
    }
  }

  if (cutMoves === 0) {
    issues.push({
      code: "NO_CUT_MOVES",
      message: "The job has no cutting moves. Check the feature and stock dimensions.",
    });
  }
  if (rapidMoves === 0) {
    issues.push({ code: "NO_RAPIDS", message: "The job has no retract or rapid moves." });
  }

  return { passed: issues.length === 0, issues, cutMoves, rapidMoves };
}
