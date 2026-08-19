import { describe, expect, it } from "vitest";
import { interpretGcode, tokenizeGcode } from "./parse";
import { lintGcode } from "./lint";
import {
  addSafetyPreamble,
  convertUnits,
  renumberTools,
  scaleFeeds,
  scaleSpeeds,
  setWorkOffset,
  summarizeGcode,
} from "./edit";
import { postGcode } from "../kernel/gcode";
import { planDemo } from "../kernel/plan";
import { MACHINES } from "../machine/catalog";
import { inchToMm } from "../kernel/units";

const SAFE_PROGRAM = `%
O0001 (SAFE)
G21 G90 G17 G40 G80 G94
G54
G91 G28 Z0
G90
M5
G91 G28 Z0
G90
T1 M6
G43 H1 Z50.000
S3000 M3
M8
G0 X10.000 Y10.000
G0 Z5.000
G1 Z-2.000 F200
G1 X50.000 Y10.000 F400
G0 Z50.000
M5
M9
G91 G28 Z0
G90
M30
%
`;

describe("tokenizer", () => {
  it("splits words and keeps the original line", () => {
    const [block] = tokenizeGcode("G1 X10.5 Y-3 F250");
    expect(block.words).toEqual([
      { letter: "G", value: 1 },
      { letter: "X", value: 10.5 },
      { letter: "Y", value: -3 },
      { letter: "F", value: 250 },
    ]);
    expect(block.raw).toBe("G1 X10.5 Y-3 F250");
  });

  it("never reads a word out of a parenthesised comment", () => {
    const [block] = tokenizeGcode("G0 X1 (MOVE TO X99 Y99) Y2");
    expect(block.words).toEqual([
      { letter: "G", value: 0 },
      { letter: "X", value: 1 },
      { letter: "Y", value: 2 },
    ]);
    expect(block.comments).toEqual(["MOVE TO X99 Y99"]);
  });

  it("treats a semicolon as a comment to end of line", () => {
    const [block] = tokenizeGcode("G0 X1 ; rapid to X50");
    expect(block.words).toHaveLength(2);
    expect(block.comments).toEqual(["rapid to X50"]);
  });

  it("marks a block-delete line without dropping it", () => {
    const [block] = tokenizeGcode("/G0 X1");
    expect(block.blockDelete).toBe(true);
  });

  it("does not read a tape marker as a word", () => {
    const [block] = tokenizeGcode("%");
    expect(block.words).toEqual([]);
  });

  it("handles words with no space between them", () => {
    const [block] = tokenizeGcode("G1X10Y20F100");
    expect(block.words).toHaveLength(4);
  });

  it("reads a leading-decimal value", () => {
    const [block] = tokenizeGcode("G1 X.5");
    expect(block.words[1]).toEqual({ letter: "X", value: 0.5 });
  });
});

describe("modal interpretation", () => {
  it("tracks units, distance mode, offset and tool", () => {
    const program = interpretGcode(SAFE_PROGRAM);
    const last = program.blocks.at(-1)!;

    expect(last.state.units).toBe("mm");
    expect(last.state.distance).toBe("absolute");
    expect(last.state.workOffset).toBe("G54");
    expect(program.tools).toEqual([1]);
  });

  it("converts inch coordinates to millimetres internally", () => {
    const program = interpretGcode("G20 G90\nG0 X1.0 Y2.0\n");
    const motion = program.blocks.find((b) => b.motion)!.motion!;

    expect(motion.to.x).toBeCloseTo(25.4, 9);
    expect(motion.to.y).toBeCloseTo(50.8, 9);
  });

  it("accumulates incremental moves", () => {
    const program = interpretGcode("G21 G91\nG1 X10 F100\nG1 X10\nG1 X10\n");
    const last = program.blocks.at(-1)!;
    expect(last.state.position.x).toBeCloseTo(30, 9);
  });

  it("switches back to absolute correctly", () => {
    const program = interpretGcode("G21 G90\nG0 X50\nG91\nG0 X10\nG90\nG0 X5\n");
    expect(program.blocks.at(-1)!.state.position.x).toBeCloseTo(5, 9);
  });

  it("carries the modal motion code across bare coordinate blocks", () => {
    const program = interpretGcode("G21 G90\nG1 X10 F100\nX20\nX30\n");
    const motions = program.blocks.filter((b) => b.motion);
    expect(motions).toHaveLength(3);
    expect(motions.every((m) => m.motion!.code === 1)).toBe(true);
  });

  it("computes the program extents", () => {
    const program = interpretGcode("G21 G90\nG0 X0 Y0 Z0\nG1 X100 Y50 Z-10 F200\n");
    expect(program.extents!.max.x).toBeCloseTo(100, 9);
    expect(program.extents!.min.z).toBeCloseTo(-10, 9);
  });

  it("tracks a canned cycle until G80 cancels it", () => {
    const program = interpretGcode("G21 G90\nG81 X10 Y10 Z-5 R2 F100\nX20\nG80\n");
    const duringCycle = program.blocks[1];
    const afterCancel = program.blocks.at(-1)!;

    expect(duringCycle.state.cannedCycleActive).toBe(true);
    expect(afterCancel.state.cannedCycleActive).toBe(false);
  });

  it("reports codes it does not model instead of pretending to understand them", () => {
    const program = interpretGcode("G21 G90\nG33 X10\n");
    expect(program.unsupportedCodes).toContain("G33");
  });

  it("does not track position through a G28 reference return", () => {
    const program = interpretGcode("G21 G90\nG0 X50 Y50\nG91 G28 Z0\nG90\n");
    // The move happens but machine home is not a part coordinate we can know.
    expect(program.blocks.some((b) => b.motion?.code === 28)).toBe(false);
  });
});

describe("safety review of an existing program", () => {
  it("passes a well-formed program", () => {
    const report = lintGcode(SAFE_PROGRAM);
    expect(report.errorCount).toBe(0);
  });

  it("catches a tool change with no Z home before it", () => {
    const program = `G21 G90
G54
S1000 M3
G0 Z5.000
M5
T2 M6
G43 H2 Z50
S2000 M3
G1 X10 F100
M30
`;
    const report = lintGcode(program);
    expect(report.findings.map((f) => f.code)).toContain("TOOL_CHANGE_WITHOUT_Z_HOME");
  });

  it("catches a tool change with the spindle still running", () => {
    const program = `G21 G90
G54
S1000 M3
G91 G28 Z0
G90
T2 M6
G1 X10 F100
M30
`;
    const report = lintGcode(program);
    expect(report.findings.map((f) => f.code)).toContain("TOOL_CHANGE_SPINDLE_RUNNING");
  });

  it("catches a cut with the spindle stopped", () => {
    const report = lintGcode("G21 G90\nG54\nG1 X10 F100\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("CUT_WITHOUT_SPINDLE");
  });

  it("catches a cut before any feed rate is set", () => {
    const report = lintGcode("G21 G90\nG54\nS1000 M3\nG1 X10\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("CUT_WITHOUT_FEED");
  });

  it("catches a program that moves before declaring its units", () => {
    const report = lintGcode("G90\nG54\nS1000 M3\nG1 X10 F100\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("UNITS_NOT_DECLARED");
  });

  it("catches cutter compensation left on at the end", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG41 D1\nG1 X10 F100\nM5\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("CUTTER_COMP_LEFT_ON");
  });

  it("catches a canned cycle that is never cancelled", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG81 X1 Y1 Z-1 R1 F10\nM5\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("CANNED_CYCLE_NOT_CANCELLED");
  });

  it("catches incremental mode left on at the end", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG1 X1 F10\nG91\nM5\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("INCREMENTAL_LEFT_ON");
  });

  it("catches an arc with no centre or radius", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG1 X1 F10\nG2 X10 Y10\nM5\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("ARC_WITHOUT_GEOMETRY");
  });

  it("accepts an arc given I and J", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG1 X1 F10\nG2 X10 Y10 I5 J0\nM5\nM30\n");
    expect(report.findings.map((f) => f.code)).not.toContain("ARC_WITHOUT_GEOMETRY");
  });

  it("catches a missing program end", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG1 X1 F10\n");
    expect(report.findings.map((f) => f.code)).toContain("NO_PROGRAM_END");
  });

  it("flags speeds and feeds beyond the machine", () => {
    const report = lintGcode("G21 G90\nG54\nS99000 M3\nG1 X1 F99000\nM5\nM30\n", {
      machine: MACHINES[0],
    });
    const codes = report.findings.map((f) => f.code);
    expect(codes).toContain("RPM_ABOVE_MACHINE");
    expect(codes).toContain("FEED_ABOVE_MACHINE");
  });

  it("flags a job larger than the machine travels", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG0 X0 Y0\nG1 X2000 F100\nM5\nM30\n", {
      machine: MACHINES[0],
    });
    expect(report.findings.map((f) => f.code)).toContain("TRAVEL_ABOVE_MACHINE");
  });

  it("flags a diagonal rapid that dips below the top of the job", () => {
    const report = lintGcode("G21 G90\nG54\nS1 M3\nG0 X0 Y0 Z50\nG0 X100 Y100 Z1\nG1 X1 F10\nM5\nM30\n");
    expect(report.findings.map((f) => f.code)).toContain("DIAGONAL_RAPID");
  });

  it("reviews SetupNinja's own output cleanly", () => {
    for (const machine of ["knee", "router", "vmc"]) {
      const code = postGcode(planDemo(machine, "6061", "phone"));
      const report = lintGcode(code);
      const errors = report.findings.filter((f) => f.severity === "error");
      expect(errors, `${machine}: ${errors.map((e) => e.code).join(", ")}`).toEqual([]);
    }
  });
});

describe("editing a program", () => {
  it("scales feeds and leaves everything else alone", () => {
    const result = scaleFeeds("G1 X10 F100\nG1 X20 F200\n", 50);
    expect(result.gcode).toContain("F50");
    expect(result.gcode).toContain("F100");
    expect(result.gcode).toContain("X10");
    expect(result.changed).toBe(2);
  });

  it("scales speeds without touching feeds", () => {
    const result = scaleSpeeds("S1000 M3\nG1 X1 F100\n", 80);
    expect(result.gcode).toContain("S800");
    expect(result.gcode).toContain("F100");
  });

  it("never rewrites a word inside a comment", () => {
    const result = scaleFeeds("G1 X10 F100 (WAS F999)\n", 50);
    expect(result.gcode).toContain("(WAS F999)");
    expect(result.gcode).toContain("F50");
    expect(result.changed).toBe(1);
  });

  it("preserves comments, block numbers and spacing", () => {
    const source = "N10 G1 X10.000 Y5.000 F100.0 (ROUGH PASS)\n";
    const result = scaleFeeds(source, 200);
    expect(result.gcode).toContain("N10");
    expect(result.gcode).toContain("(ROUGH PASS)");
    expect(result.gcode).toContain("X10.000");
    expect(result.gcode).toContain("F200.0");
  });

  it("changes the work offset", () => {
    const result = setWorkOffset("G21 G90\nG54\nG0 X1\n", "G55");
    expect(result.gcode).toContain("G55");
    expect(result.gcode).not.toMatch(/\bG54\b/);
  });

  it("refuses an invalid work offset", () => {
    const result = setWorkOffset("G54\n", "G99");
    expect(result.changed).toBe(0);
    expect(result.notes.join(" ")).toMatch(/not a G54/);
  });

  it("renumbers tools and their length offsets together", () => {
    const result = renumberTools("T1 M6\nG43 H1 Z10\nT2 M6\nG43 H2 Z10\n", { 1: 5, 2: 6 });
    expect(result.gcode).toContain("T5 M6");
    expect(result.gcode).toContain("G43 H5");
    expect(result.gcode).toContain("T6 M6");
    expect(result.gcode).toContain("G43 H6");
  });

  it("converts millimetre to inch, scaling lengths but not speeds", () => {
    const result = convertUnits("G21 G90\nS3000 M3\nG1 X25.4 Y50.8 F254\n", "inch");

    expect(result.gcode).toContain("G20");
    expect(result.gcode).not.toContain("G21");
    // Values keep the source's decimal style: X25.4 had places, F254 did not.
    expect(result.gcode).toMatch(/X1\.0+\b/);
    expect(result.gcode).toMatch(/Y2\.0+\b/);
    expect(result.gcode).toMatch(/F10\b/);
    expect(result.gcode).toContain("S3000");
  });

  it("converts arc offsets and peck increments as lengths", () => {
    const result = convertUnits("G21 G90\nG2 X25.4 Y0 I12.7 J0\nG83 X0 Y0 Z-25.4 R2.54 Q6.35 F100\n", "inch");
    expect(result.gcode).toMatch(/I0\.5/);
    expect(result.gcode).toMatch(/Q0\.25/);
  });

  it("refuses to convert a program that never declared its units", () => {
    const result = convertUnits("G90\nG1 X10 F100\n", "inch");
    expect(result.changed).toBe(0);
    expect(result.notes.join(" ")).toMatch(/never declares/);
  });

  it("does nothing when the program is already in the target units", () => {
    const result = convertUnits("G20 G90\nG1 X1 F10\n", "inch");
    expect(result.changed).toBe(0);
  });

  it("round-trips a unit conversion back to the original values", () => {
    const source = "G21 G90\nG1 X25.4000 Y50.8000 F254.0000\n";
    const there = convertUnits(source, "inch");
    const back = convertUnits(there.gcode, "mm");
    const program = interpretGcode(back.gcode);
    const motion = program.blocks.find((b) => b.motion)!.motion!;

    expect(motion.to.x).toBeCloseTo(25.4, 6);
    expect(motion.to.y).toBeCloseTo(50.8, 6);
  });

  it("adds a safety preamble that lints clean", () => {
    const result = addSafetyPreamble("S1000 M3\nG1 X10 F100\nM5\nM30\n", "mm");
    const report = lintGcode(result.gcode);
    expect(report.findings.map((f) => f.code)).not.toContain("UNITS_NOT_DECLARED");
    expect(result.gcode).toContain("G91 G28 Z0");
  });
});

describe("program summary", () => {
  it("reports tools, extents and an estimated run time", () => {
    const summary = summarizeGcode(SAFE_PROGRAM);

    expect(summary.tools).toEqual([1]);
    expect(summary.unitsDeclared).toBe(true);
    expect(summary.extents).not.toBeNull();
    expect(summary.estimatedSeconds).toBeGreaterThan(0);
    expect(summary.feedDistanceMm).toBeGreaterThan(0);
  });

  it("summarises an inch program in millimetres internally", () => {
    const summary = summarizeGcode("G20 G90\nS1 M3\nG0 X0 Y0\nG1 X4 F10\nM30\n");
    expect(summary.extents!.max.x).toBeCloseTo(inchToMm(4), 6);
  });
});
