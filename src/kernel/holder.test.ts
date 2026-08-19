import { describe, expect, it } from "vitest";
import { checkHolderClearance, holderRadiusAt } from "./holder";
import { createHeightmap, fillHeightmap } from "./heightmap";
import type { Heightmap, Tool, ToolHolder, Toolpath, Waypoint } from "./types";

const HOLDER: ToolHolder = {
  id: "test-holder",
  name: "Test holder",
  taper: "er-collet",
  noseDiameterMm: 20,
  bodyDiameterMm: 40,
  noseLengthMm: 10,
  lengthMm: 60,
};

describe("holder geometry", () => {
  it("reports the nose radius at the nose face and the body radius above the flare", () => {
    expect(holderRadiusAt(HOLDER, 0)).toBe(10);
    expect(holderRadiusAt(HOLDER, 10)).toBe(20);
    expect(holderRadiusAt(HOLDER, 50)).toBe(20);
  });

  it("flares linearly across the nose length", () => {
    expect(holderRadiusAt(HOLDER, 5)).toBeCloseTo(15, 6);
  });
});

describe("holder clearance against the part", () => {
  it("clears a flat part when stickout exceeds the cut depth", () => {
    // Flat plate at Z=0; tool tip cutting at Z=0 with 25 mm of stickout.
    const hm = flat(0);
    const report = checkHolderClearance(hm, path(tool({ stickoutMm: 25 }), [cut(50, 50, 0)]));

    expect(report.collides).toBe(false);
    expect(report.requiredStickoutMm).toBe(0);
  });

  it("detects the holder dropping into a pocket beside a tall wall", () => {
    // Boss 30 mm tall covering the right half; tool cutting the floor at Z=0
    // immediately beside it, with only 10 mm of stickout.
    const hm = step(30, 55);
    const report = checkHolderClearance(hm, path(tool({ stickoutMm: 10 }), [cut(50, 50, 0)]));

    expect(report.collides).toBe(true);
    expect(report.minClearanceMm).toBeLessThan(0);
    expect(report.worstAt).toEqual({ x: 50, y: 50, z: 0 });
  });

  it("reports a stickout that actually clears the obstruction", () => {
    const hm = step(30, 55);
    const short = tool({ stickoutMm: 10 });
    const report = checkHolderClearance(hm, path(short, [cut(50, 50, 0)]));

    expect(report.requiredStickoutMm).toBeGreaterThan(10);

    const fixed = checkHolderClearance(
      hm,
      path(tool({ stickoutMm: report.requiredStickoutMm }), [cut(50, 50, 0)]),
    );
    expect(fixed.collides).toBe(false);
  });

  it("lets a tall wall pass when it sits outside the holder body radius", () => {
    // Wall starts 30 mm away; the 40 mm body is only 20 mm in radius.
    const hm = step(30, 80);
    const report = checkHolderClearance(hm, path(tool({ stickoutMm: 5 }), [cut(50, 50, 0)]));

    expect(report.collides).toBe(false);
  });

  it("credits the nose flare when a wall sits partway out the taper", () => {
    // Wall 13 mm out: inside the body radius (20) but outside the nose radius
    // (10), so the holder is only 3 mm up its flare where it meets the wall.
    const hm = step(30, 63);

    expect(checkHolderClearance(hm, path(tool({ stickoutMm: 12 }), [cut(50, 50, 0)])).collides).toBe(true);
    expect(checkHolderClearance(hm, path(tool({ stickoutMm: 28 }), [cut(50, 50, 0)])).collides).toBe(false);

    // A straight-sided body would have to clear the full 30 mm wall; the flare
    // buys back the 3 mm of taper, so the requirement lands below that.
    const report = checkHolderClearance(hm, path(tool({ stickoutMm: 12 }), [cut(50, 50, 0)]));
    expect(report.requiredStickoutMm).toBeLessThan(30);
    expect(report.requiredStickoutMm).toBeGreaterThan(25);
  });

  it("reports no collision when the tool has no holder modeled", () => {
    const hm = step(30, 55);
    const bare = tool({ stickoutMm: 5 });
    delete bare.holder;
    const report = checkHolderClearance(hm, path(bare, [cut(50, 50, 0)]));

    expect(report.collides).toBe(false);
    expect(report.actualStickoutMm).toBe(5);
  });

  it("measures the deepest wall the flutes have to reach past", () => {
    const hm = step(30, 55);
    // Cutting the floor at Z=0 right against a 30 mm wall.
    const report = checkHolderClearance(hm, path(tool({ stickoutMm: 60 }), [cut(54, 50, 0)]));

    expect(report.maxEngagementDepthMm).toBeCloseTo(30, 5);
  });

  it("ignores rapid moves, which happen above the part", () => {
    const hm = step(30, 55);
    const report = checkHolderClearance(hm, path(tool({ stickoutMm: 1 }), [rapid(50, 50, 0)]));

    expect(report.collides).toBe(false);
    expect(report.minClearanceMm).toBe(Infinity);
  });
});

function flat(z: number): Heightmap {
  return fillHeightmap(createHeightmap(0, 0, 100, 100, 1), () => z);
}

/** Floor at Z=0 left of `wallX`, a wall of `height` at and right of it. */
function step(height: number, wallX: number): Heightmap {
  return fillHeightmap(createHeightmap(0, 0, 100, 100, 1), (x) => (x >= wallX ? height : 0));
}

function tool(overrides: Partial<Tool>): Tool {
  return {
    id: "t1",
    name: "Test endmill",
    type: "endmill",
    diameterMm: 6,
    flutes: 3,
    maxDocMm: 2,
    maxStepover: 0.4,
    material: "carbide",
    fluteLengthMm: 20,
    holder: HOLDER,
    ...overrides,
  };
}

function path(t: Tool, points: Waypoint[]): Toolpath {
  return { tool: t, points };
}

function cut(x: number, y: number, z: number): Waypoint {
  return {
    x,
    y,
    z,
    feedMmMin: 300,
    rpm: 6000,
    toolId: "t1",
    engagementRad: 1,
    slotting: false,
    kind: "cut",
  };
}

function rapid(x: number, y: number, z: number): Waypoint {
  return { ...cut(x, y, z), kind: "rapid" };
}
