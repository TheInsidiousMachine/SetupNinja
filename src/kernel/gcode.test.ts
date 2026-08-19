import { describe, expect, it } from "vitest";
import { planDemo } from "./plan";
import { postGcode } from "./gcode";
import type { JobPlan } from "./types";

describe("G-code postprocessor", () => {
  it("posts a conservative metric program with safety notes and end code", () => {
    const plan = planDemo("knee", "6061", "phone");
    const code = postGcode(plan);

    expect(code).toContain("(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)");
    expect(code).toContain("(PART: Setup demo bracket)");
    expect(code).toContain("(MACHINE: Knee mill)");
    expect(code).toContain("(MATERIAL: 6061-T6)");
    expect(code).toContain("(STOCK: X");
    expect(code).toContain("G21 G90 G17 G40 G49 G80");
    expect(code).toContain("G54");
    expect(code).toContain("T1 M6");
    expect(code).toContain("S");
    expect(code).toContain(" M3");
    expect(code).toContain("G0 Z");
    expect(code).toContain("G1 X");
    expect(code).toContain(" F");
    expect(code).toContain("M5");
    expect(code).toContain("M30");
    expect(code.endsWith("\n")).toBe(true);
  });

  it("omits duplicate consecutive coordinates to keep output inspectable", () => {
    const plan = tinyPlan([
      {
        x: 0,
        y: 0,
        z: 5,
        feedMmMin: 100,
        rpm: 1200,
        toolId: "t1",
        engagementRad: 0,
        slotting: false,
        kind: "rapid",
      },
      {
        x: 10,
        y: 0,
        z: 0,
        feedMmMin: 100,
        rpm: 1200,
        toolId: "t1",
        engagementRad: 1,
        slotting: false,
        kind: "cut",
      },
      {
        x: 10,
        y: 0,
        z: 0,
        feedMmMin: 100,
        rpm: 1200,
        toolId: "t1",
        engagementRad: 1,
        slotting: false,
        kind: "cut",
      },
    ]);

    const code = postGcode(plan);

    expect(code.match(/G1 X10\.000 Y0\.000 Z0\.000 F100/g)).toHaveLength(1);
  });
});

function tinyPlan(points: JobPlan["paths"][number]["points"]): JobPlan {
  return {
    partName: "Test part",
    stock: { x: 0, y: 0, z: 0, w: 20, d: 10, h: 8 },
    heightmap: {
      originX: 0,
      originY: 0,
      cell: 1,
      nx: 1,
      ny: 1,
      z: Float32Array.from([0]),
    },
    tools: [
      {
        id: "t1",
        name: "Test endmill",
        type: "endmill",
        diameterMm: 6,
        flutes: 2,
        maxDocMm: 1,
        maxStepover: 0.25,
        material: "carbide",
      },
    ],
    machine: {
      id: "test",
      name: "Test mill",
      kind: "knee-mill",
      maxFeedMmMin: 1000,
      maxRpm: 4000,
      spindleKw: 1,
      naturalHz: 100,
      stiffnessNPerMm: 1000,
    },
    material: { id: "test", name: "Test aluminum", kc: 700 },
    paths: [
      {
        tool: {
          id: "t1",
          name: "Test endmill",
          type: "endmill",
          diameterMm: 6,
          flutes: 2,
          maxDocMm: 1,
          maxStepover: 0.25,
          material: "carbide",
        },
        points,
      },
    ],
    compute: "phone",
  };
}
