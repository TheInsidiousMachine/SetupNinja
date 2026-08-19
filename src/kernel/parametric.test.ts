import { describe, expect, it } from "vitest";
import { heightmapMinMax, sampleHeight } from "./heightmap";
import { buildParametricHeightmap } from "./parametric";
import type { ParametricSpec } from "./types";

const stock = { widthMm: 40, depthMm: 30, heightMm: 10 };

describe("parametric: face only", () => {
  it("produces a uniformly flat heightmap at the stock top", () => {
    const spec: ParametricSpec = { partName: "Face proof", stock, feature: { kind: "face" }, cellMm: 1 };
    const hm = buildParametricHeightmap(spec);
    const { min, max } = heightmapMinMax(hm);
    expect(min).toBeCloseTo(stock.heightMm, 5);
    expect(max).toBeCloseTo(stock.heightMm, 5);
  });
});

describe("parametric: rectangular pocket", () => {
  const feature: ParametricSpec["feature"] = {
    kind: "pocket",
    x: 10,
    y: 8,
    widthMm: 12,
    depthMm: 10,
    depthBelowTopMm: 3,
  };
  const spec: ParametricSpec = { partName: "Pocket proof", stock, feature, cellMm: 1 };

  it("only lowers Z within the declared pocket bounds", () => {
    const hm = buildParametricHeightmap(spec);
    for (let iy = 0; iy < hm.ny; iy++) {
      for (let ix = 0; ix < hm.nx; ix++) {
        const x = hm.originX + (ix + 0.5) * hm.cell;
        const y = hm.originY + (iy + 0.5) * hm.cell;
        const z = hm.z[iy * hm.nx + ix];
        const insidePocket =
          x >= feature.x && x <= feature.x + feature.widthMm && y >= feature.y && y <= feature.y + feature.depthMm;
        if (insidePocket) {
          expect(z).toBeCloseTo(stock.heightMm - feature.depthBelowTopMm, 5);
        } else {
          expect(z).toBeCloseTo(stock.heightMm, 5);
        }
      }
    }
  });

  it("floor sits below the stock top by exactly the requested depth", () => {
    const hm = buildParametricHeightmap(spec);
    const z = sampleHeight(hm, feature.x + feature.widthMm / 2, feature.y + feature.depthMm / 2);
    expect(z).toBeCloseTo(stock.heightMm - feature.depthBelowTopMm, 5);
  });
});

describe("parametric: rectangular boss", () => {
  const feature: ParametricSpec["feature"] = {
    kind: "boss",
    x: 5,
    y: 5,
    widthMm: 15,
    depthMm: 10,
    heightAboveTopMm: 6,
  };
  const spec: ParametricSpec = { partName: "Boss proof", stock, feature, cellMm: 1 };

  it("raises Z only within the declared boss bounds", () => {
    const hm = buildParametricHeightmap(spec);
    const zInside = sampleHeight(hm, feature.x + feature.widthMm / 2, feature.y + feature.depthMm / 2);
    const zOutside = sampleHeight(hm, stock.widthMm - 2, stock.depthMm - 2);
    expect(zInside).toBeCloseTo(stock.heightMm + feature.heightAboveTopMm, 5);
    expect(zOutside).toBeCloseTo(stock.heightMm, 5);
  });
});

describe("parametric: degenerate and out-of-bounds inputs", () => {
  it("clamps a pocket depth deeper than the stock to the stock height (never below Z0)", () => {
    const feature: ParametricSpec["feature"] = {
      kind: "pocket",
      x: 5,
      y: 5,
      widthMm: 10,
      depthMm: 10,
      depthBelowTopMm: 999,
    };
    const spec: ParametricSpec = { partName: "Over-deep pocket", stock, feature, cellMm: 1 };
    const hm = buildParametricHeightmap(spec);
    const { min } = heightmapMinMax(hm);
    expect(min).toBeCloseTo(0, 5);
    expect(min).toBeGreaterThanOrEqual(0);
  });

  it("clamps a pocket that runs outside the stock footprint to the stock edge", () => {
    const feature: ParametricSpec["feature"] = {
      kind: "pocket",
      x: -50,
      y: -50,
      widthMm: 1000,
      depthMm: 1000,
      depthBelowTopMm: 2,
    };
    const spec: ParametricSpec = { partName: "Oversized pocket", stock, feature, cellMm: 1 };
    const hm = buildParametricHeightmap(spec);
    // Entire stock top should now be pocketed since bounds clamp to the full footprint.
    const { min, max } = heightmapMinMax(hm);
    expect(max).toBeCloseTo(stock.heightMm - 2, 5);
    expect(min).toBeCloseTo(stock.heightMm - 2, 5);
  });

  it("clamps a negative or zero stock dimension up to the minimum machinable size", () => {
    const tiny = { widthMm: -5, depthMm: 0, heightMm: 10 };
    const spec: ParametricSpec = { partName: "Degenerate stock", stock: tiny, feature: { kind: "face" }, cellMm: 1 };
    const hm = buildParametricHeightmap(spec);
    expect(hm.nx).toBeGreaterThanOrEqual(2);
    expect(hm.ny).toBeGreaterThanOrEqual(2);
    const { min, max } = heightmapMinMax(hm);
    expect(min).toBeCloseTo(10, 5);
    expect(max).toBeCloseTo(10, 5);
  });

  it("rejects a negative boss height by treating it as zero (no accidental pocketing)", () => {
    const feature: ParametricSpec["feature"] = {
      kind: "boss",
      x: 5,
      y: 5,
      widthMm: 10,
      depthMm: 10,
      heightAboveTopMm: -4,
    };
    const spec: ParametricSpec = { partName: "Negative boss", stock, feature, cellMm: 1 };
    const hm = buildParametricHeightmap(spec);
    const { min, max } = heightmapMinMax(hm);
    expect(min).toBeCloseTo(stock.heightMm, 5);
    expect(max).toBeCloseTo(stock.heightMm, 5);
  });
});
