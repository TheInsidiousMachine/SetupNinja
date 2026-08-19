import { describe, expect, it } from "vitest";
import { MIN_GRIP_MM, THIN_PART_MM, planSetups } from "./setupPlan";
import { MACHINES, TOOLS } from "../machine/catalog";
import { inchToMm } from "./units";
import type { ParametricSpec } from "./types";

function plan(spec: ParametricSpec, tools = TOOLS) {
  return planSetups({ spec, machine: MACHINES[2], tools, units: "inch" });
}

function spec(
  feature: ParametricSpec["feature"],
  stock = { widthMm: 100, depthMm: 60, heightMm: 25 },
): ParametricSpec {
  return { partName: "Test part", stock, feature };
}

describe("setup planning", () => {
  it("produces one setup with datums and an operation order", () => {
    const result = plan(spec({ kind: "face" }));

    expect(result.setups).toHaveLength(1);
    const setup = result.setups[0];
    expect(setup.faceUp).toBe("top");
    expect(setup.datumX).toMatch(/edge finder/i);
    expect(setup.datumZ).toMatch(/finished top face/i);
    expect(setup.operations.length).toBeGreaterThan(1);
  });

  it("zeroes Z on the finished face rather than raw stock", () => {
    const result = plan(spec({ kind: "face" }));
    expect(result.setups[0].datumZ).toMatch(/not on raw stock/i);
  });

  it("warns that saw-cut stock carries its own error into the part", () => {
    const result = plan(spec({ kind: "face" }));
    expect(result.notes.join(" ")).toMatch(/out of square/i);
  });
});

describe("workholding choice", () => {
  it("uses hard jaws for a shallow pocket in thick stock", () => {
    const result = plan(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 5 }),
    );

    expect(result.setups[0].workholding.kind).toBe("vise-hard-jaws");
    expect(result.setups[0].workholding.gripDepthMm).toBeGreaterThanOrEqual(MIN_GRIP_MM);
  });

  it("switches to stepped soft jaws when the cut eats the grip", () => {
    // 25 mm stock with a 22 mm deep pocket leaves only 3 mm below the cut.
    const result = plan(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 22 }),
    );
    const holding = result.setups[0].workholding;

    expect(holding.kind).toBe("vise-soft-jaws");
    expect(holding.reason).toMatch(/below the deepest cut/i);
    expect(holding.preparation.join(" ")).toMatch(/step/i);
  });

  it("calls for a fixture plate when the part is too thin to grip on edge", () => {
    const result = plan(
      spec({ kind: "face" }, { widthMm: 150, depthMm: 100, heightMm: THIN_PART_MM * 0.7 }),
    );
    const holding = result.setups[0].workholding;

    expect(holding.kind).toBe("fixture-plate");
    expect(holding.gripDepthMm).toBe(0);
    expect(holding.preparation.join(" ")).toMatch(/clamp|vacuum/i);
  });

  it("uses full-depth soft jaws for a tall narrow part", () => {
    const result = plan(spec({ kind: "face" }, { widthMm: 25, depthMm: 25, heightMm: 120 }));
    const holding = result.setups[0].workholding;

    expect(holding.kind).toBe("vise-soft-jaws");
    expect(holding.reason).toMatch(/levering|tall/i);
  });

  it("always explains the choice rather than just naming it", () => {
    for (const feature of [
      { kind: "face" } as const,
      { kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 5 } as const,
      { kind: "boss", x: 20, y: 15, widthMm: 40, depthMm: 25, heightAboveTopMm: 10 } as const,
    ]) {
      const holding = plan(spec(feature)).setups[0].workholding;
      expect(holding.reason.length).toBeGreaterThan(20);
      expect(holding.preparation.length).toBeGreaterThan(0);
    }
  });
});

describe("pitfall warnings", () => {
  it("warns that the cutter reaches the jaws when nothing is left to grip", () => {
    const result = plan(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 24.5 }),
    );

    expect(result.setups[0].warnings.join(" ")).toMatch(/reach the jaws|minimum grip/i);
  });

  it("warns that milled pocket corners cannot be sharp", () => {
    const result = plan(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 5 }),
    );

    expect(result.warnings.join(" ")).toMatch(/corner radi/i);
  });

  it("warns when no tool has the flute length for the pocket depth", () => {
    const shallow = TOOLS.map((tool) => ({ ...tool, fluteLengthMm: inchToMm(0.2) }));
    const result = planSetups({
      spec: spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 20 }),
      machine: MACHINES[2],
      tools: shallow,
      units: "inch",
    });

    expect(result.warnings.join(" ")).toMatch(/flute length/i);
  });

  it("warns when the roughing tool cannot fit beside a boss", () => {
    const result = plan(
      spec({ kind: "boss", x: 2, y: 2, widthMm: 40, depthMm: 25, heightAboveTopMm: 10 }),
    );

    expect(result.warnings.join(" ")).toMatch(/clearance/i);
  });

  it("warns that a tall part on a small footprint will rock", () => {
    const result = plan(spec({ kind: "face" }, { widthMm: 20, depthMm: 20, heightMm: 150 }));
    expect(result.setups[0].warnings.join(" ")).toMatch(/rock/i);
  });

  it("notes the stock thickness a boss demands", () => {
    const result = plan(
      spec({ kind: "boss", x: 20, y: 15, widthMm: 40, depthMm: 25, heightAboveTopMm: 10 }),
    );

    expect(result.notes.join(" ")).toMatch(/thick/i);
  });
});

describe("operation order", () => {
  it("faces before cutting the feature", () => {
    const result = plan(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 5 }),
    );
    const operations = result.setups[0].operations;

    expect(operations[0]).toMatch(/face the top/i);
    expect(operations.findIndex((op) => /rough/i.test(op))).toBeGreaterThan(0);
  });

  it("roughs before finishing", () => {
    const result = plan(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 5 }),
    );
    const operations = result.setups[0].operations;

    const rough = operations.findIndex((op) => /rough/i.test(op));
    const finish = operations.findIndex((op) => /finish/i.test(op));
    expect(rough).toBeGreaterThanOrEqual(0);
    expect(finish).toBeGreaterThan(rough);
  });

  it("finishes a boss wall in one pass to avoid a witness step", () => {
    const result = plan(
      spec({ kind: "boss", x: 20, y: 15, widthMm: 40, depthMm: 25, heightAboveTopMm: 10 }),
    );

    expect(result.setups[0].operations.join(" ")).toMatch(/one pass/i);
  });

  it("ends with deburr and inspection in the vise", () => {
    const result = plan(spec({ kind: "face" }));
    expect(result.setups[0].operations.at(-1)).toMatch(/deburr/i);
  });
});
