import { describe, expect, it } from "vitest";
import { countHoles, expandDrillCycle, planDrilling } from "./drill";
import {
  drillPointLength,
  findThread,
  holeCenters,
  needsPecking,
  orderHoles,
  THREADS,
} from "./holes";
import { ALL_TOOLS, MACHINES, MATERIALS } from "../machine/catalog";
import { inchToMm } from "./units";
import type { HolePattern, Stock } from "./types";

const STOCK: Stock = { x: 0, y: 0, z: 0, w: inchToMm(4), d: inchToMm(4), h: inchToMm(1) };
const FINISHED_TOP = inchToMm(1);

function plan(patterns: HolePattern[], tools = ALL_TOOLS) {
  return planDrilling({
    patterns,
    stock: STOCK,
    finishedTopZMm: FINISHED_TOP,
    tools,
    material: MATERIALS[0],
    machine: MACHINES[2],
  });
}

function pattern(overrides: Partial<HolePattern> = {}): HolePattern {
  return {
    id: "p1",
    layout: { kind: "single", x: inchToMm(2), y: inchToMm(2) },
    diameterMm: inchToMm(0.25),
    depthBelowTopMm: inchToMm(0.5),
    through: false,
    operations: ["drill"],
    ...overrides,
  };
}

describe("hole layouts", () => {
  it("places a bolt circle by trigonometry, not a table", () => {
    const centers = holeCenters({
      kind: "bolt-circle",
      cx: 100,
      cy: 100,
      boltCircleDiameterMm: 100,
      count: 4,
      startAngleDeg: 0,
    });

    expect(centers).toHaveLength(4);
    expect(centers[0].x).toBeCloseTo(150, 9);
    expect(centers[0].y).toBeCloseTo(100, 9);
    expect(centers[1].x).toBeCloseTo(100, 9);
    expect(centers[1].y).toBeCloseTo(150, 9);
    expect(centers[2].x).toBeCloseTo(50, 9);
    expect(centers[3].y).toBeCloseTo(50, 9);
  });

  it("keeps every bolt-circle hole exactly on the circle", () => {
    const centers = holeCenters({
      kind: "bolt-circle",
      cx: 0,
      cy: 0,
      boltCircleDiameterMm: 77,
      count: 7,
      startAngleDeg: 13,
    });

    expect(centers).toHaveLength(7);
    for (const center of centers) {
      expect(Math.hypot(center.x, center.y)).toBeCloseTo(38.5, 9);
    }
  });

  it("honours the bolt-circle start angle", () => {
    const [first] = holeCenters({
      kind: "bolt-circle",
      cx: 0,
      cy: 0,
      boltCircleDiameterMm: 20,
      count: 3,
      startAngleDeg: 90,
    });
    expect(first.x).toBeCloseTo(0, 9);
    expect(first.y).toBeCloseTo(10, 9);
  });

  it("lays out a grid in rows and columns", () => {
    const centers = holeCenters({
      kind: "grid",
      x: 10,
      y: 20,
      cols: 3,
      rows: 2,
      pitchXMm: 5,
      pitchYMm: 7,
    });

    expect(centers).toHaveLength(6);
    expect(centers[0]).toEqual({ x: 10, y: 20 });
    expect(centers[2]).toEqual({ x: 20, y: 20 });
    expect(centers[3]).toEqual({ x: 10, y: 27 });
  });

  it("lays out an angled line", () => {
    const centers = holeCenters({ kind: "line", x: 0, y: 0, count: 3, pitchMm: 10, angleDeg: 90 });
    expect(centers[2].x).toBeCloseTo(0, 9);
    expect(centers[2].y).toBeCloseTo(20, 9);
  });

  it("orders holes to shorten the rapid between them", () => {
    // Deliberately out of order: a naive walk would criss-cross.
    const ordered = orderHoles([
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 10, y: 0 },
      { x: 90, y: 0 },
    ]);
    const travel = ordered
      .slice(1)
      .reduce((sum, p, i) => sum + Math.hypot(p.x - ordered[i].x, p.y - ordered[i].y), 0);

    expect(travel).toBeLessThan(200);
    expect(ordered).toHaveLength(4);
  });

  it("is deterministic for the same input", () => {
    const input = [{ x: 0, y: 0 }, { x: 5, y: 5 }, { x: 5, y: 0 }, { x: 0, y: 5 }];
    expect(orderHoles(input)).toEqual(orderHoles(input));
  });
});

describe("thread data", () => {
  it("finds the standard tap drill for 1/4-20", () => {
    const thread = findThread("1/4-20")!;
    expect(thread.tapDrillName).toBe("#7");
    expect(thread.tapDrillMm).toBeCloseTo(inchToMm(0.201), 9);
    expect(thread.pitchMm).toBeCloseTo(inchToMm(0.05), 9);
  });

  it("finds metric threads", () => {
    expect(findThread("M6x1.0")!.tapDrillMm).toBeCloseTo(5.0, 9);
    expect(findThread("M8x1.25")!.tapDrillMm).toBeCloseTo(6.8, 9);
  });

  it("matches regardless of spacing and case", () => {
    expect(findThread(" m6 x 1.0 ")).not.toBeNull();
  });

  it("returns null for an unknown thread rather than guessing", () => {
    expect(findThread("1/4-19")).toBeNull();
  });

  it("keeps every tap drill smaller than its major diameter", () => {
    for (const thread of THREADS) {
      expect(thread.tapDrillMm).toBeLessThan(thread.majorDiameterMm);
      // 75% engagement lands well above the minor diameter; a tap drill below
      // ~70% of major would be a transcription error.
      expect(thread.tapDrillMm).toBeGreaterThan(thread.majorDiameterMm * 0.7);
    }
  });
});

describe("drill geometry", () => {
  it("computes the point length from the included angle", () => {
    // A 118 degree drill: r / tan(59 deg).
    const expected = inchToMm(0.25) / 2 / Math.tan((59 * Math.PI) / 180);
    expect(drillPointLength(inchToMm(0.25), 118)).toBeCloseTo(expected, 9);
  });

  it("gives a shallower point for a 135 degree split point", () => {
    expect(drillPointLength(10, 135)).toBeLessThan(drillPointLength(10, 118));
  });

  it("requires pecking beyond three diameters of depth", () => {
    expect(needsPecking(6, 17)).toBe(false);
    expect(needsPecking(6, 19)).toBe(true);
  });
});

describe("drill cycle planning", () => {
  it("measures blind hole depth from the finished face", () => {
    const result = plan([pattern({ depthBelowTopMm: inchToMm(0.5) })]);
    const cycle = result.cycles[0];

    expect(FINISHED_TOP - cycle.zBottomMm).toBeCloseTo(inchToMm(0.5), 9);
  });

  it("runs a through hole past the far face by the point length plus breakout", () => {
    const result = plan([pattern({ through: true })]);
    const cycle = result.cycles[0];

    expect(cycle.zBottomMm).toBeLessThan(STOCK.z);
    const past = STOCK.z - cycle.zBottomMm;
    expect(past).toBeGreaterThan(drillPointLength(cycle.tool.diameterMm, 135));
  });

  it("keeps the clearance and retract planes above the raw stock", () => {
    const result = plan([pattern()]);
    const cycle = result.cycles[0];
    const stockTop = STOCK.z + STOCK.h;

    expect(cycle.zRetractMm).toBeGreaterThan(stockTop);
    expect(cycle.zClearMm).toBeGreaterThan(cycle.zRetractMm);
  });

  it("drills a tapped hole at the tap drill size, not the thread size", () => {
    const result = plan([
      pattern({ operations: ["drill", "tap"], threadSpec: "1/4-20", diameterMm: inchToMm(0.25) }),
    ]);
    const drill = result.cycles.find((c) => c.operation === "drill")!;

    expect(drill.tool.diameterMm).toBeCloseTo(inchToMm(0.201), 4);
  });

  it("feeds a tap at exactly pitch times spindle speed", () => {
    const result = plan([
      pattern({ operations: ["tap"], threadSpec: "1/4-20", diameterMm: inchToMm(0.25) }),
    ]);
    const tap = result.cycles[0];

    expect(tap.operation).toBe("tap");
    expect(tap.feedMmMin).toBeCloseTo(tap.rpm * inchToMm(0.05), 6);
  });

  it("stops a blind tap short of the drilled depth", () => {
    const tapped = plan([
      pattern({ operations: ["drill", "tap"], threadSpec: "1/4-20", depthBelowTopMm: inchToMm(0.5) }),
    ]);
    const drill = tapped.cycles.find((c) => c.operation === "drill")!;
    const tap = tapped.cycles.find((c) => c.operation === "tap")!;

    expect(tap.zBottomMm).toBeGreaterThan(drill.zBottomMm);
  });

  it("pecks a deep hole and does not peck a shallow one", () => {
    const deep = plan([pattern({ depthBelowTopMm: inchToMm(0.9), diameterMm: inchToMm(0.25) })]);
    expect(deep.cycles[0].peckMm).toBeGreaterThan(0);

    const shallow = plan([pattern({ depthBelowTopMm: inchToMm(0.1) })]);
    expect(shallow.cycles[0].peckMm).toBeUndefined();
  });

  it("spots shallower than it drills, and wider than the hole", () => {
    const result = plan([pattern({ operations: ["spot", "drill"] })]);
    const spot = result.cycles.find((c) => c.operation === "spot")!;
    const drill = result.cycles.find((c) => c.operation === "drill")!;

    expect(spot.zBottomMm).toBeGreaterThan(drill.zBottomMm);
    expect(spot.tool.diameterMm).toBeGreaterThan(drill.tool.diameterMm);
  });

  it("keeps operations in the order they were requested", () => {
    const result = plan([
      pattern({ operations: ["spot", "drill", "tap"], threadSpec: "1/4-20" }),
    ]);
    expect(result.cycles.map((c) => c.operation)).toEqual(["spot", "drill", "tap"]);
  });

  it("reports a tool it does not have rather than substituting one", () => {
    const result = plan([pattern({ diameterMm: inchToMm(0.9) })]);
    expect(result.cycles).toHaveLength(0);
    expect(result.missingTools.join(" ")).toMatch(/drill/);
  });

  it("warns about an unknown thread instead of tapping the wrong size", () => {
    const result = plan([pattern({ operations: ["tap"], threadSpec: "1/4-19" })]);
    expect(result.warnings.join(" ")).toMatch(/not in the thread table/i);
    expect(result.cycles).toHaveLength(0);
  });

  it("respects the machine feed and speed limits", () => {
    const result = plan([pattern({ operations: ["spot", "drill"] })]);
    for (const cycle of result.cycles) {
      expect(cycle.rpm).toBeLessThanOrEqual(MACHINES[2].maxRpm);
      expect(cycle.feedMmMin).toBeLessThanOrEqual(MACHINES[2].maxFeedMmMin);
      expect(cycle.feedMmMin).toBeGreaterThan(0);
    }
  });

  it("counts holes across every cycle", () => {
    const result = plan([
      pattern({
        layout: { kind: "grid", x: 10, y: 10, cols: 2, rows: 2, pitchXMm: 10, pitchYMm: 10 },
        operations: ["spot", "drill"],
      }),
    ]);
    expect(countHoles(result.cycles)).toBe(8);
  });
});

describe("cycle expansion to motion", () => {
  it("reaches the hole bottom and returns to clearance", () => {
    const cycle = plan([pattern()]).cycles[0];
    const points = expandDrillCycle(cycle);

    expect(points.length).toBeGreaterThan(2);
    expect(Math.min(...points.map((p) => p.z))).toBeCloseTo(cycle.zBottomMm, 9);
    expect(points.at(-1)!.z).toBeCloseTo(cycle.zClearMm, 9);
  });

  it("retracts fully between pecks so the chip clears", () => {
    const cycle = plan([pattern({ depthBelowTopMm: inchToMm(0.9) })]).cycles[0];
    const points = expandDrillCycle(cycle);

    const retracts = points.filter(
      (p) => p.kind === "rapid" && Math.abs(p.z - cycle.zRetractMm) < 1e-6,
    );
    expect(retracts.length).toBeGreaterThan(2);
  });

  it("feeds a tap back out instead of rapiding it", () => {
    const cycle = plan([
      pattern({ operations: ["tap"], threadSpec: "1/4-20" }),
    ]).cycles[0];
    const points = expandDrillCycle(cycle);

    const bottom = points.findIndex((p) => Math.abs(p.z - cycle.zBottomMm) < 1e-9);
    expect(points[bottom + 1].kind).toBe("cut");
  });

  it("visits every hole centre", () => {
    const cycle = plan([
      pattern({
        layout: { kind: "grid", x: 10, y: 10, cols: 2, rows: 2, pitchXMm: 20, pitchYMm: 20 },
      }),
    ]).cycles[0];
    const points = expandDrillCycle(cycle);

    for (const center of cycle.centers) {
      expect(
        points.some((p) => Math.abs(p.x - center.x) < 1e-9 && Math.abs(p.y - center.y) < 1e-9),
      ).toBe(true);
    }
  });

  it("produces only finite coordinates", () => {
    for (const operation of [["spot"], ["drill"], ["tap"]] as const) {
      const result = plan([
        pattern({ operations: [...operation], threadSpec: "1/4-20", depthBelowTopMm: inchToMm(0.6) }),
      ]);
      for (const cycle of result.cycles) {
        for (const point of expandDrillCycle(cycle)) {
          expect(Number.isFinite(point.x)).toBe(true);
          expect(Number.isFinite(point.y)).toBe(true);
          expect(Number.isFinite(point.z)).toBe(true);
          expect(point.feedMmMin).toBeGreaterThan(0);
        }
      }
    }
  });
});
