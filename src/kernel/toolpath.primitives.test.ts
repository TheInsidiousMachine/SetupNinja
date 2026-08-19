import { describe, expect, it } from "vitest";
import { getMachine, getMaterial, getTool } from "../machine/catalog";
import { heightmapMinMax, sampleHeight } from "./heightmap";
import { buildParametricHeightmap } from "./parametric";
import { generateToolpaths } from "./toolpath";
import type { ParametricSpec, Waypoint } from "./types";

const stock = { widthMm: 40, depthMm: 30, heightMm: 10 };
const tools = [getTool("em-250"), getTool("em-125")];
const material = getMaterial("6061");
const machine = getMachine("knee");
const targetToleranceMm = 0.02;

function cutsFor(spec: ParametricSpec): { rough: Waypoint[]; finish: Waypoint[] } {
  const hm = buildParametricHeightmap(spec);
  const { max } = heightmapMinMax(hm);
  const paths = generateToolpaths(hm, tools, material, machine, {
    leaveMm: 0.25,
    stockTop: max + 1.2,
    stockPadMm: 3,
  });

  const cuts = paths.map((path) => path.points.filter((point) => point.kind === "cut"));
  for (const point of cuts.flat()) {
    const targetZ = sampleHeight(hm, point.x, point.y);
    expect(Number.isFinite(targetZ)).toBe(true);
    expect(point.z).toBeGreaterThanOrEqual(targetZ - targetToleranceMm);
  }

  return { rough: cuts[0], finish: cuts[1] };
}

function expectTouchesSurface(points: Waypoint[], targetZ: number): void {
  expect(points.some((point) => Math.abs(point.z - targetZ) <= targetToleranceMm)).toBe(true);
}

function expectCutterClearsHigherSurfaces(
  points: Waypoint[],
  diameterMm: number,
  spec: ParametricSpec,
): void {
  const hm = buildParametricHeightmap(spec);
  const radius = diameterMm / 2;
  for (const point of points) {
    for (let y = point.y - radius; y <= point.y + radius; y += hm.cell) {
      for (let x = point.x - radius; x <= point.x + radius; x += hm.cell) {
        if (Math.hypot(x - point.x, y - point.y) > radius + 1e-9) continue;
        const surface = sampleHeight(hm, x, y);
        if (Number.isFinite(surface)) {
          expect(surface, `cutter at ${point.x},${point.y},${point.z} overlaps target`).toBeLessThanOrEqual(
            point.z + targetToleranceMm,
          );
        }
      }
    }
  }
}

describe("toolpaths for parametric primitives", () => {
  it("produces roughing and finishing cuts for a face", () => {
    const { rough, finish } = cutsFor({
      partName: "Face",
      stock,
      feature: { kind: "face" },
      cellMm: 1,
    });

    expect(rough.length).toBeGreaterThan(0);
    expect(finish.length).toBeGreaterThan(0);
    expectTouchesSurface(finish, 10);
  });

  it("produces roughing and finishing cuts for a pocket", () => {
    const spec: ParametricSpec = {
      partName: "Pocket",
      stock,
      feature: {
        kind: "pocket",
        x: 10,
        y: 8,
        widthMm: 12,
        depthMm: 10,
        depthBelowTopMm: 3,
      },
      cellMm: 1,
    };
    const { rough, finish } = cutsFor(spec);

    expect(rough.length).toBeGreaterThan(0);
    expect(finish.length).toBeGreaterThan(0);
    expectTouchesSurface(finish, 7);
    expectTouchesSurface(finish, 10);
    expectCutterClearsHigherSurfaces(finish, tools[1].diameterMm, spec);
  });

  it("produces roughing and finishing cuts around a boss", () => {
    const spec: ParametricSpec = {
      partName: "Boss",
      stock,
      feature: {
        kind: "boss",
        x: 8,
        y: 7,
        widthMm: 16,
        depthMm: 12,
        heightAboveTopMm: 6,
      },
      cellMm: 1,
    };
    const { rough, finish } = cutsFor(spec);

    expect(rough.length).toBeGreaterThan(0);
    expect(finish.length).toBeGreaterThan(0);
    expectTouchesSurface(finish, 10);
    expectTouchesSurface(finish, 16);
    expectCutterClearsHigherSurfaces(finish, tools[1].diameterMm, spec);
  });
});
