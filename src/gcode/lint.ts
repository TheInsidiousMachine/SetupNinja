import { formatLength } from "../kernel/units";
import { interpretGcode, type GcodeProgram } from "./parse";
import type { MachineProfile, UnitSystem } from "../kernel/types";

/**
 * Safety review for a G-code program, whether SetupNinja wrote it or a CAM
 * package did.
 *
 * These are the mistakes that hurt a machine rather than a part: a tool change
 * with the spindle still down in the work, a cut with no spindle running, cutter
 * compensation left on at the end of the program. A machinist reading a
 * thousand-line posted file will not catch all of them by eye, and the control
 * will not warn.
 *
 * Findings are advisory. They point at a line and say what is wrong; they never
 * silently change anything.
 */

export type LintSeverity = "error" | "warning" | "info";

export type LintFinding = {
  code: string;
  severity: LintSeverity;
  /** 1-based source line, or null for a whole-program finding. */
  line: number | null;
  message: string;
};

export type LintReport = {
  findings: LintFinding[];
  program: GcodeProgram;
  errorCount: number;
  warningCount: number;
};

export type LintOptions = {
  machine?: MachineProfile;
  /** Units to assume when the program never declares its own. */
  assumedUnits?: UnitSystem;
};

export function lintGcode(source: string, options: LintOptions = {}): LintReport {
  const program = interpretGcode(source, options.assumedUnits);
  const findings: LintFinding[] = [];
  const units = program.units;

  checkProgramPreamble(program, findings);
  checkToolChanges(program, findings);
  checkSpindleAndFeed(program, findings);
  checkModalCleanup(program, findings);
  checkArcs(program, findings);
  checkMachineLimits(program, findings, options.machine, units);
  checkRapids(program, findings, units);

  if (program.unsupportedCodes.length > 0) {
    findings.push({
      code: "UNMODELLED_CODES",
      severity: "info",
      line: null,
      message:
        `This review does not model ${program.unsupportedCodes.join(", ")}. ` +
        `Those blocks were read but their effect was not checked.`,
    });
  }

  findings.sort((a, b) => (a.line ?? 0) - (b.line ?? 0));
  return {
    findings,
    program,
    errorCount: findings.filter((f) => f.severity === "error").length,
    warningCount: findings.filter((f) => f.severity === "warning").length,
  };
}

/** The program has to say what units and what mode it is in before it moves. */
function checkProgramPreamble(program: GcodeProgram, findings: LintFinding[]): void {
  const firstMotion = program.blocks.find((entry) => entry.motion !== null);

  if (firstMotion && !firstMotion.state.unitsDeclared) {
    findings.push({
      code: "UNITS_NOT_DECLARED",
      severity: "error",
      line: firstMotion.block.line,
      message:
        "The program moves before declaring G20 or G21. Whatever mode the control " +
        "was left in decides how far it travels.",
    });
  }

  if (firstMotion && !firstMotion.state.distanceDeclared) {
    findings.push({
      code: "DISTANCE_MODE_NOT_DECLARED",
      severity: "error",
      line: firstMotion.block.line,
      message: "The program moves before declaring G90 or G91.",
    });
  }

  if (firstMotion && !firstMotion.state.workOffset) {
    findings.push({
      code: "WORK_OFFSET_NOT_SET",
      severity: "warning",
      line: firstMotion.block.line,
      message: "The program moves before selecting a work offset (G54-G59).",
    });
  }

  const hasEnd = program.blocks.some((entry) =>
    entry.block.words.some((word) => word.letter === "M" && [2, 30].includes(word.value)),
  );
  if (!hasEnd && program.blocks.length > 0) {
    findings.push({
      code: "NO_PROGRAM_END",
      severity: "warning",
      line: null,
      message: "The program has no M30 or M2. The control may run past the end.",
    });
  }
}

/**
 * The tool change check.
 *
 * A changer needs the spindle parked at machine Z home before M6. Retracting to
 * a clearance plane above the stock is not the same thing — the carousel or arm
 * swings through the envelope regardless of where the part is.
 */
function checkToolChanges(program: GcodeProgram, findings: LintFinding[]): void {
  for (const [index, entry] of program.blocks.entries()) {
    const isChange = entry.block.words.some((w) => w.letter === "M" && w.value === 6);
    if (!isChange) continue;

    const preceding = program.blocks.slice(Math.max(0, index - 12), index);
    const homed = preceding.some((prior) =>
      prior.block.words.some((w) => w.letter === "G" && (w.value === 28 || w.value === 30)),
    );
    if (!homed) {
      findings.push({
        code: "TOOL_CHANGE_WITHOUT_Z_HOME",
        severity: "warning",
        line: entry.block.line,
        message:
          "Tool change with no G28/G30 Z home just before it. A machine with a " +
          "changer needs Z at machine home, not merely above the stock.",
      });
    }

    const spindleStopped = preceding.some((prior) =>
      prior.block.words.some((w) => w.letter === "M" && w.value === 5),
    );
    if (!spindleStopped && entry.state.spindle !== "off") {
      findings.push({
        code: "TOOL_CHANGE_SPINDLE_RUNNING",
        severity: "error",
        line: entry.block.line,
        message: "Tool change commanded with the spindle still running.",
      });
    }

    // After a change, the new tool's length must be applied before it cuts.
    const following = program.blocks.slice(index + 1, index + 12);
    const compApplied = following.some((later) =>
      later.block.words.some((w) => w.letter === "G" && w.value === 43),
    );
    const cutsSoon = following.some((later) => later.motion && !later.motion.rapid);
    if (!compApplied && cutsSoon) {
      findings.push({
        code: "NO_TOOL_LENGTH_COMP",
        severity: "warning",
        line: entry.block.line,
        message:
          "No G43 tool length offset after this tool change. The new tool will " +
          "run at the previous tool's length.",
      });
    }
  }
}

function checkSpindleAndFeed(program: GcodeProgram, findings: LintFinding[]): void {
  let reportedSpindle = false;
  let reportedFeed = false;

  for (const entry of program.blocks) {
    if (!entry.motion || entry.motion.rapid) continue;

    if (entry.state.spindle === "off" && !reportedSpindle) {
      reportedSpindle = true;
      findings.push({
        code: "CUT_WITHOUT_SPINDLE",
        severity: "error",
        line: entry.block.line,
        message: "A feed move runs with the spindle stopped.",
      });
    }

    if ((entry.state.feedMmMin ?? 0) <= 0 && !reportedFeed) {
      reportedFeed = true;
      findings.push({
        code: "CUT_WITHOUT_FEED",
        severity: "error",
        line: entry.block.line,
        message: "A feed move runs before any F word has set a feed rate.",
      });
    }
  }
}

/** Modal states that must not be left on when the program ends. */
function checkModalCleanup(program: GcodeProgram, findings: LintFinding[]): void {
  const last = program.blocks.filter((entry) => entry.block.words.length > 0).at(-1);
  if (!last) return;

  if (last.state.cutterComp !== "off") {
    findings.push({
      code: "CUTTER_COMP_LEFT_ON",
      severity: "error",
      line: last.block.line,
      message: "The program ends with cutter compensation active. Cancel it with G40.",
    });
  }

  if (last.state.cannedCycleActive) {
    findings.push({
      code: "CANNED_CYCLE_NOT_CANCELLED",
      severity: "error",
      line: last.block.line,
      message: "The program ends inside a canned cycle. Cancel it with G80.",
    });
  }

  if (last.state.distance === "incremental") {
    findings.push({
      code: "INCREMENTAL_LEFT_ON",
      severity: "warning",
      line: last.block.line,
      message:
        "The program ends in G91 incremental mode. The next program will inherit it " +
        "unless it sets G90 first.",
    });
  }

  if (last.state.spindle !== "off") {
    findings.push({
      code: "SPINDLE_LEFT_RUNNING",
      severity: "warning",
      line: last.block.line,
      message: "The program ends without an M5.",
    });
  }
}

function checkArcs(program: GcodeProgram, findings: LintFinding[]): void {
  for (const entry of program.blocks) {
    const arc = entry.block.words.find((w) => w.letter === "G" && (w.value === 2 || w.value === 3));
    if (!arc) continue;

    const hasCentre = entry.block.words.some((w) => ["I", "J", "K"].includes(w.letter));
    const hasRadius = entry.block.words.some((w) => w.letter === "R");
    if (!hasCentre && !hasRadius) {
      findings.push({
        code: "ARC_WITHOUT_GEOMETRY",
        severity: "error",
        line: entry.block.line,
        message: "An arc block has neither I/J/K centre offsets nor an R radius.",
      });
    }
  }
}

function checkMachineLimits(
  program: GcodeProgram,
  findings: LintFinding[],
  machine: MachineProfile | undefined,
  units: UnitSystem,
): void {
  if (!machine) return;
  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 2 : 0);

  if (program.maxFeedMmMin > machine.maxFeedMmMin + 1e-6) {
    findings.push({
      code: "FEED_ABOVE_MACHINE",
      severity: "warning",
      line: null,
      message:
        `The program commands up to ${length(program.maxFeedMmMin)}/min but ${machine.name} tops out ` +
        `at ${length(machine.maxFeedMmMin)}/min. The control will clamp it.`,
    });
  }

  if (program.maxRpm > machine.maxRpm + 1e-6) {
    findings.push({
      code: "RPM_ABOVE_MACHINE",
      severity: "error",
      line: null,
      message: `The program commands ${Math.round(program.maxRpm)} rpm; ${machine.name} tops out at ${machine.maxRpm}.`,
    });
  }

  const extents = program.extents;
  if (!extents) return;
  const axes: [keyof typeof extents.min, number | undefined, string][] = [
    ["x", machine.travelXMm, "X"],
    ["y", machine.travelYMm, "Y"],
    ["z", machine.travelZMm, "Z"],
  ];
  for (const [axis, travel, label] of axes) {
    if (!travel) continue;
    const span = extents.max[axis] - extents.min[axis];
    if (span > travel) {
      findings.push({
        code: "TRAVEL_ABOVE_MACHINE",
        severity: "error",
        line: null,
        message: `The program spans ${length(span)} in ${label}; ${machine.name} has ${length(travel)} of travel.`,
      });
    }
  }
}

/**
 * A rapid that changes Z and X or Y in the same block moves diagonally, and the
 * control decides the path. If it starts below the clearance height, that
 * diagonal can cross the part.
 */
function checkRapids(program: GcodeProgram, findings: LintFinding[], units: UnitSystem): void {
  const extents = program.extents;
  if (!extents) return;
  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 3 : 1);

  let reported = 0;
  for (const entry of program.blocks) {
    const motion = entry.motion;
    if (!motion || !motion.rapid || reported >= 5) continue;

    const movesXY =
      Math.abs(motion.to.x - motion.from.x) > 1e-6 || Math.abs(motion.to.y - motion.from.y) > 1e-6;
    const movesZ = Math.abs(motion.to.z - motion.from.z) > 1e-6;
    if (!movesXY || !movesZ) continue;

    const lowest = Math.min(motion.from.z, motion.to.z);
    if (lowest <= extents.max.z) {
      reported += 1;
      findings.push({
        code: "DIAGONAL_RAPID",
        severity: "warning",
        line: entry.block.line,
        message:
          `Rapid moves X/Y and Z together, dipping to ${length(lowest)} which is below the ` +
          `program's highest point. The control chooses the diagonal; it may cross the part.`,
      });
    }
  }
}
