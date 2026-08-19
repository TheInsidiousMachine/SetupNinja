import { describe, expect, it } from "vitest";
import { MACHINES, MATERIALS, getMachine, getMaterial, getTool } from "../machine/catalog";
import { heightmapMinMax, sampleHeight } from "./heightmap";
import { buildParametricHeightmap } from "./parametric";
import { planParametric } from "./plan";
import { generateToolpaths, type PathOptions } from "./toolpath";
import type { Heightmap, ParametricSpec, Toolpath } from "./types";

const SEED = 0x51e7_2026;
const SURFACE_TOLERANCE_MM = 0.02;
const tools = [getTool("em-250"), getTool("em-125")];

type GeneratedCase = {
  hm: Heightmap;
  options: PathOptions;
  paths: Toolpath[];
  spec: ParametricSpec;
};

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4_294_967_296;
  };
}

function between(random: () => number, min: number, max: number): number {
  return min + random() * (max - min);
}

function generatedCase(
  spec: ParametricSpec,
  machineId = "knee",
  materialId = "6061",
): GeneratedCase {
  const hm = buildParametricHeightmap(spec);
  const { max } = heightmapMinMax(hm);
  const options: PathOptions = {
    leaveMm: 0.25,
    stockTop: max + 1.2,
    stockPadMm: 3,
    cutBounds: { x0: 0, y0: 0, x1: spec.stock.widthMm, y1: spec.stock.depthMm },
  };
  const paths = generateToolpaths(
    hm,
    tools,
    getMaterial(materialId),
    getMachine(machineId),
    options,
  );
  return { hm, options, paths, spec };
}

function seededSpecs(countPerKind: number): ParametricSpec[] {
  const random = mulberry32(SEED);
  const specs: ParametricSpec[] = [];

  for (let i = 0; i < countPerKind; i++) {
    const widthMm = between(random, 18, 52);
    const depthMm = between(random, 16, 44);
    const heightMm = between(random, 2, 25);
    const cellMm = [0.5, 0.75, 1, 1.2, 1.75][Math.floor(random() * 5)];
    const stock = { widthMm, depthMm, heightMm };

    specs.push({ partName: `seed-face-${i}`, stock, feature: { kind: "face" }, cellMm });

    const pocketX = between(random, 0, widthMm * 0.25);
    const pocketY = between(random, 0, depthMm * 0.25);
    specs.push({
      partName: `seed-pocket-${i}`,
      stock,
      feature: {
        kind: "pocket",
        x: pocketX,
        y: pocketY,
        widthMm: between(random, Math.max(4, cellMm * 3), widthMm - pocketX),
        depthMm: between(random, Math.max(4, cellMm * 3), depthMm - pocketY),
        depthBelowTopMm: between(random, 0.01, heightMm - 0.01),
      },
      cellMm,
    });

    const bossMarginX = Math.max(7, cellMm * 3);
    const bossMarginY = Math.max(7, cellMm * 3);
    const bossX = between(random, bossMarginX, widthMm / 2);
    const bossY = between(random, bossMarginY, depthMm / 2);
    specs.push({
      partName: `seed-boss-${i}`,
      stock,
      feature: {
        kind: "boss",
        x: bossX,
        y: bossY,
        widthMm: between(random, 1, Math.max(1, widthMm - bossX - bossMarginX)),
        depthMm: between(random, 1, Math.max(1, depthMm - bossY - bossMarginY)),
        heightAboveTopMm: between(random, 0.01, 20),
      },
      cellMm,
    });
  }

  return specs;
}

function expectFiniteAndBounded(
  generated: GeneratedCase,
  machineId = "knee",
): void {
  const { hm, options, paths } = generated;
  const machine = getMachine(machineId);
  const { min: surfaceMin, max: surfaceMax } = heightmapMinMax(hm);

  expect(paths).toHaveLength(2);
  expect(paths.some((path) => path.points.some((point) => point.kind === "cut"))).toBe(true);
  for (const path of paths) {
    const radius = path.tool.diameterMm / 2;
    const xMin = hm.originX + radius;
    const xMax = hm.originX + hm.nx * hm.cell - radius;
    const yMin = hm.originY + radius;
    const yMax = hm.originY + hm.ny * hm.cell - radius;
    const cuts = path.points.filter((point) => point.kind === "cut");

    if (cuts.length === 0) {
      expect(path.points, `${generated.spec.partName}/${path.tool.id} has non-cut orphan moves`).toEqual([]);
      continue;
    }
    for (const point of path.points) {
      expect(
        [
          point.x,
          point.y,
          point.z,
          point.feedMmMin,
          point.rpm,
          point.engagementRad,
        ].every(Number.isFinite),
      ).toBe(true);
      expect(point.x).toBeGreaterThanOrEqual(xMin - 1e-9);
      expect(point.x).toBeLessThanOrEqual(xMax + 1e-9);
      expect(point.y).toBeGreaterThanOrEqual(yMin - 1e-9);
      expect(point.y).toBeLessThanOrEqual(yMax + 1e-9);
      expect(point.z).toBeGreaterThanOrEqual(surfaceMin - SURFACE_TOLERANCE_MM);
      expect(point.z).toBeLessThanOrEqual(Math.max(options.stockTop, surfaceMax) + 2 + 1e-9);
      expect(point.feedMmMin).toBeGreaterThan(0);
      expect(point.feedMmMin).toBeLessThanOrEqual(machine.maxFeedMmMin);
      expect(point.rpm).toBeGreaterThan(0);
      expect(point.rpm).toBeLessThanOrEqual(machine.maxRpm);
      expect(point.engagementRad).toBeGreaterThanOrEqual(0);
      expect(point.engagementRad).toBeLessThanOrEqual(Math.PI);
      expect(point.toolId).toBe(path.tool.id);

      if (point.kind === "cut") {
        const surfaceZ = sampleHeight(hm, point.x, point.y);
        expect(Number.isFinite(surfaceZ)).toBe(true);
        expect(point.z).toBeGreaterThanOrEqual(surfaceZ - SURFACE_TOLERANCE_MM);
      }
    }
  }
}

function expectRetractOrdering(path: Toolpath): void {
  if (path.points.length === 0) return;
  expect(path.points[0]?.kind).toBe("rapid");
  expect(path.points.at(-1)?.kind).toBe("rapid");

  const nonRapids = path.points.filter((point) => point.kind !== "rapid");
  const rapidZ = path.points.find((point) => point.kind === "rapid")?.z;
  expect(nonRapids.length).toBeGreaterThan(0);
  expect(rapidZ).toBeDefined();
  expect(path.points.filter((point) => point.kind === "rapid").every((point) => point.z === rapidZ)).toBe(true);
  expect(rapidZ!).toBeGreaterThan(Math.max(...nonRapids.map((point) => point.z)));

  for (let index = 0; index < path.points.length; index++) {
    const point = path.points[index];
    if (point.kind !== "lead") continue;

    expect(path.points[index - 1]?.kind).toBe("rapid");
    expect(path.points[index + 1]?.kind).toBe("cut");

    let end = index + 1;
    while (path.points[end]?.kind === "cut") end++;
    expect(path.points[end]?.kind).toBe("rapid");
    expect(path.points[end].z).toBe(rapidZ);
  }

  for (let index = 0; index < path.points.length; index++) {
    if (path.points[index].kind !== "cut" || path.points[index - 1]?.kind === "cut") continue;
    expect(path.points[index - 1]?.kind).toBe("lead");
  }
}

const boundarySpecs: ParametricSpec[] = [
  {
    partName: "face-near-tool-clearance",
    stock: { widthMm: 8, depthMm: 8, heightMm: 1 },
    feature: { kind: "face" },
    cellMm: 0.5,
  },
  {
    partName: "full-footprint-near-through-pocket",
    stock: { widthMm: 18, depthMm: 16, heightMm: 2 },
    feature: {
      kind: "pocket",
      x: 0,
      y: 0,
      widthMm: 18,
      depthMm: 16,
      depthBelowTopMm: 1.999,
    },
    cellMm: 0.5,
  },
  {
    partName: "edge-pocket-minimum-positive-depth",
    stock: { widthMm: 20, depthMm: 18, heightMm: 30 },
    feature: {
      kind: "pocket",
      x: 0,
      y: 8,
      widthMm: 20,
      depthMm: 10,
      depthBelowTopMm: 0.001,
    },
    cellMm: 1,
  },
  {
    partName: "edge-boss-minimum-positive-height",
    stock: { widthMm: 24, depthMm: 20, heightMm: 1 },
    feature: {
      kind: "boss",
      x: 8,
      y: 0,
      widthMm: 8,
      depthMm: 8,
      heightAboveTopMm: 0.001,
    },
    cellMm: 0.5,
  },
  {
    partName: "tall-boss-coarse-raster",
    stock: { widthMm: 30, depthMm: 25, heightMm: 12 },
    feature: {
      kind: "boss",
      x: 10,
      y: 8,
      widthMm: 8,
      depthMm: 7,
      heightAboveTopMm: 25,
    },
    cellMm: 2.5,
  },
];

describe("deterministic toolpath properties", () => {
  it("keeps seeded face, pocket, and boss paths finite, bounded, nonempty, and repeatable", () => {
    for (const spec of seededSpecs(8)) {
      const first = generatedCase(spec);
      const second = generatedCase(spec);

      expectFiniteAndBounded(first);
      expect(second.paths).toEqual(first.paths);
    }
  });

  it("holds the same invariants at boundary-valid dimensions", () => {
    for (const spec of boundarySpecs) expectFiniteAndBounded(generatedCase(spec));
  });

  it("retracts to clearance before and after every cutting engagement", () => {
    for (const spec of [...boundarySpecs, ...seededSpecs(3)]) {
      for (const path of generatedCase(spec).paths) expectRetractOrdering(path);
    }
  });

  it("respects every catalog machine feed and RPM limit for every material", () => {
    const spec: ParametricSpec = {
      partName: "catalog-limit-matrix",
      stock: { widthMm: 24, depthMm: 20, heightMm: 8 },
      feature: { kind: "pocket", x: 4, y: 4, widthMm: 12, depthMm: 10, depthBelowTopMm: 4 },
      cellMm: 1,
    };

    for (const machine of MACHINES) {
      for (const material of MATERIALS) {
        expectFiniteAndBounded(generatedCase(spec, machine.id, material.id), machine.id);
      }
    }
  });

  it("rejects stock that no selected cutter can enter", () => {
    const spec: ParametricSpec = {
      partName: "minimum-valid-face",
      stock: { widthMm: 1, depthMm: 1, heightMm: 1 },
      feature: { kind: "face" },
      cellMm: 0.5,
    };
    expect(() => planParametric(spec, tools, "knee", "6061", "phone")).toThrow(
      /selected tool|cutter/i,
    );
  });

  it("keeps the cutter envelope inside a non-grid-aligned stock footprint", () => {
    const spec: ParametricSpec = {
      partName: "fractional-stock-face",
      stock: { widthMm: 18.1, depthMm: 16.1, heightMm: 5 },
      feature: { kind: "face" },
      cellMm: 1,
    };
    const generated = generatedCase(spec);

    for (const path of generated.paths) {
      const radius = path.tool.diameterMm / 2;
      for (const point of path.points) {
        expect(point.x - radius).toBeGreaterThanOrEqual(0);
        expect(point.x + radius).toBeLessThanOrEqual(spec.stock.widthMm);
        expect(point.y - radius).toBeGreaterThanOrEqual(0);
        expect(point.y + radius).toBeLessThanOrEqual(spec.stock.depthMm);
      }
    }
  });
});
