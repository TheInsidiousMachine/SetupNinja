import { describe, expect, it } from "vitest";
import { planDemo } from "./plan";
import { planParametric } from "./plan";
import { TOOLS } from "../machine/catalog";
import { verifyPlan } from "./verify";

describe("deterministic plan verification", () => {
  it("accepts the complete demo plan", () => {
    const report = verifyPlan(planDemo("knee", "6061", "phone"));

    expect(report.issues).toEqual([]);
    expect(report.cutMoves).toBeGreaterThan(0);
    expect(report.rapidMoves).toBeGreaterThan(0);
    expect(report.passed).toBe(true);
  });

  it("rejects an empty cutting program", () => {
    const plan = planDemo("knee", "6061", "phone");
    plan.paths = plan.paths.map((path) => ({ ...path, points: [] }));

    const report = verifyPlan(plan);

    expect(report.passed).toBe(false);
    expect(report.issues.map((issue) => issue.code)).toContain("NO_CUT_MOVES");
  });

  it("rejects non-finite and over-limit moves", () => {
    const plan = planDemo("knee", "6061", "phone");
    const point = plan.paths[0].points.find((item) => item.kind === "cut")!;
    point.x = Number.NaN;
    point.rpm = plan.machine.maxRpm + 1;

    const report = verifyPlan(plan);

    expect(report.passed).toBe(false);
    expect(report.issues.map((issue) => issue.code)).toContain("NON_FINITE_MOVE");
  });

  it("rejects a cutter-center move whose radius would gouge a boss", () => {
    const plan = planParametric(
      {
        partName: "Boss envelope",
        stock: { widthMm: 40, depthMm: 30, heightMm: 10 },
        feature: {
          kind: "boss",
          x: 8,
          y: 7,
          widthMm: 16,
          depthMm: 12,
          heightAboveTopMm: 6,
        },
        cellMm: 1,
      },
      TOOLS,
      "knee",
      "6061",
      "phone",
    );
    const point = plan.paths[0].points.find((item) => item.kind === "cut")!;
    point.x = 7;
    point.y = 10;
    point.z = 10;

    const report = verifyPlan(plan);

    expect(report.passed).toBe(false);
    expect(report.issues.map((issue) => issue.code)).toContain("CUTTER_ENVELOPE_GOUGE");
  });
});
