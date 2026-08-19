import { describe, expect, it } from "vitest";
import { planDemo } from "./plan";
import { postGcode } from "./gcode";
import { mmToInch } from "./units";
import type { JobPlan, MachineProfile, PostConfig } from "./types";

describe("G-code postprocessor", () => {
  it("posts a conservative inch program with safety notes and end code", () => {
    const plan = planDemo("knee", "6061", "phone");
    const code = postGcode(plan);

    expect(code).toContain("(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)");
    expect(code).toContain("(PART: Setup demo bracket)");
    expect(code).toContain("(MACHINE: Knee mill)");
    expect(code).toContain("(MATERIAL: 6061-T6)");
    expect(code).toContain("(STOCK: X");
    expect(code).toContain("(UNITS: INCH / SAE)");
    expect(code).toContain("G20 G90 G17 G40 G80 G94");
    expect(code).toContain("G54");
    expect(code).toContain("T1 M6");
    expect(code).toContain("G0 G43 H1 Z");
    expect(code).toContain("S");
    expect(code).toContain(" M3");
    expect(code).toContain("G0 Z");
    expect(code).toContain("G1 X");
    expect(code).toContain(" F");
    expect(code).toContain("M5");
    expect(code).toContain("M30");
    expect(code.endsWith("\n")).toBe(true);

    const safeZ = mmToInch(plan.stock.z + plan.stock.h + 5).toFixed(4);
    expect(code).toContain(`G0 Z${safeZ}`);

    const lines = code.trim().split("\n");
    expect(lines.filter((line) => line.startsWith("G0 ")).every((line) => !(/X/.test(line) && /Z/.test(line)))).toBe(
      true,
    );
  });

  it("never emits a metric unit word alongside inch coordinates", () => {
    const code = postGcode(planDemo("knee", "6061", "phone"));
    expect(code).not.toContain("G21");
  });

  it("posts metric coordinates and G21 when the profile selects millimetres", () => {
    const plan = planDemo("knee", "6061", "phone");
    plan.machine = withPost(plan.machine, { units: "mm" });
    const code = postGcode(plan);

    expect(code).toContain("G21 G90 G17 G40 G80 G94");
    expect(code).toContain("(UNITS: METRIC)");
    expect(code).toContain(`G0 Z${(plan.stock.z + plan.stock.h + 5).toFixed(3)}`);
  });

  describe("tool change safety", () => {
    it("homes Z to machine zero before M6 on a machine with a tool changer", () => {
      const plan = tinyPlan(twoPoints(), { kind: "vmc" });
      const lines = postGcode(plan).trim().split("\n");

      const changeIndex = lines.findIndex((line) => /^T\d+ M6$/.test(line));
      expect(changeIndex).toBeGreaterThan(0);
      // Clayton's rule: G91 G28 Z0, then straight back to G90 on the next line.
      expect(lines[changeIndex - 2]).toBe("G91 G28 Z0");
      expect(lines[changeIndex - 1]).toBe("G90");
      expect(lines[changeIndex + 1]).toMatch(/^G0 G43 H\d+ Z/);
    });

    it("restores absolute mode immediately after every incremental home", () => {
      const plan = tinyPlan(twoPoints(), { kind: "vmc" });
      const lines = postGcode(plan).trim().split("\n");

      const homeIndexes = lines.flatMap((line, index) => (line === "G91 G28 Z0" ? [index] : []));
      expect(homeIndexes.length).toBeGreaterThan(0);
      for (const index of homeIndexes) {
        expect(lines[index + 1]).toBe("G90");
      }
    });

    it("homes Z at program start and at program end on an industrial post", () => {
      const lines = postGcode(tinyPlan(twoPoints(), { kind: "vmc" })).trim().split("\n");

      const firstMotion = lines.findIndex((line) => line.startsWith("G0 ") || line.startsWith("G1 "));
      const startHome = lines.findIndex((line) => line === "G91 G28 Z0");
      expect(startHome).toBeGreaterThan(-1);
      expect(startHome).toBeLessThan(firstMotion);

      const endIndex = lines.indexOf("M30");
      expect(lines[endIndex - 2]).toBe("G91 G28 Z0");
      expect(lines[endIndex - 1]).toBe("G90");
    });

    it("stops the spindle before the Z home that precedes a tool change", () => {
      const lines = postGcode(tinyPlan(twoPoints(), { kind: "vmc" })).trim().split("\n");
      const changeIndex = lines.findIndex((line) => /^T\d+ M6$/.test(line));
      expect(lines.slice(0, changeIndex)).toContain("M5");
    });

    it("uses a clearance-plane retract on a manual-change router", () => {
      const plan = tinyPlan(twoPoints(), { kind: "router" });
      const code = postGcode(plan);
      const lines = code.trim().split("\n");

      expect(code).not.toContain("G91 G28 Z0");
      const changeIndex = lines.findIndex((line) => /^T\d+ M6$/.test(line));
      expect(lines[changeIndex - 1]).toMatch(/^G0 Z/);
    });
  });

  it("omits duplicate consecutive coordinates to keep output inspectable", () => {
    const plan = tinyPlan([
      point({ x: 0, y: 0, z: 5, kind: "rapid", engagementRad: 0 }),
      point({ x: 10, y: 0, z: 0, kind: "cut", engagementRad: 1 }),
      point({ x: 10, y: 0, z: 0, kind: "cut", engagementRad: 1 }),
    ]);
    plan.machine = withPost(plan.machine, { units: "mm" });

    const code = postGcode(plan);

    expect(code.match(/G1 X10\.000 Y0\.000 Z0\.000 F100/g)).toHaveLength(1);
  });

  it("does not repeat a tool change when consecutive paths use the same tool", () => {
    const plan = tinyPlan(twoPoints());
    plan.paths.push({ ...plan.paths[0], points: [...plan.paths[0].points] });

    expect(postGcode(plan).match(/T1 M6/g)).toHaveLength(1);
  });

  it("turns coolant off before a tool change and back on for the next cut", () => {
    const plan = tinyPlan(twoPoints(), { kind: "vmc" });
    const code = postGcode(plan);
    expect(code).toContain("M8");
    expect(code).toContain("M9");
    expect(code.indexOf("M8")).toBeLessThan(code.lastIndexOf("M9"));
  });

  it("emits a program number and tape markers on a Fanuc-style post", () => {
    const code = postGcode(tinyPlan(twoPoints(), { kind: "vmc" }));
    expect(code.startsWith("%\n")).toBe(true);
    expect(code).toContain("O0001 (TEST PART)");
    expect(code.trimEnd().endsWith("%")).toBe(true);
  });

  it("numbers motion blocks but never comments or tape markers when asked", () => {
    const plan = tinyPlan(twoPoints(), { kind: "vmc" });
    plan.machine = withPost(plan.machine, { blockNumbers: true });
    const lines = postGcode(plan).trim().split("\n");

    expect(lines[0]).toBe("%");
    expect(lines.some((line) => /^N\d+ G0 /.test(line))).toBe(true);
    expect(lines.filter((line) => line.startsWith("(")).every((line) => !/^N\d+/.test(line))).toBe(true);
  });
});

function twoPoints(): JobPlan["paths"][number]["points"] {
  return [
    point({ x: 0, y: 0, z: 5, kind: "rapid", engagementRad: 0 }),
    point({ x: 0, y: 0, z: 0, kind: "cut", engagementRad: 1 }),
  ];
}

function point(
  overrides: Partial<JobPlan["paths"][number]["points"][number]>,
): JobPlan["paths"][number]["points"][number] {
  return {
    x: 0,
    y: 0,
    z: 0,
    feedMmMin: 100,
    rpm: 1200,
    toolId: "t1",
    engagementRad: 0,
    slotting: false,
    kind: "cut",
    ...overrides,
  };
}

function withPost(machine: MachineProfile, post: Partial<PostConfig>): MachineProfile {
  return { ...machine, post: { ...(machine.post ?? {}), ...post } as PostConfig };
}

function tinyPlan(
  points: JobPlan["paths"][number]["points"],
  machine: Partial<MachineProfile> = {},
): JobPlan {
  const tool: JobPlan["tools"][number] = {
    id: "t1",
    name: "Test endmill",
    type: "endmill",
    diameterMm: 6,
    flutes: 2,
    maxDocMm: 1,
    maxStepover: 0.25,
    material: "carbide",
  };
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
    tools: [tool],
    machine: {
      id: "test",
      name: "Test mill",
      kind: "knee-mill",
      maxFeedMmMin: 1000,
      maxRpm: 4000,
      spindleKw: 1,
      naturalHz: 100,
      stiffnessNPerMm: 1000,
      ...machine,
    },
    material: { id: "test", name: "Test aluminum", kc: 700 },
    paths: [{ tool: { ...tool }, points }],
    compute: "phone",
  };
}
