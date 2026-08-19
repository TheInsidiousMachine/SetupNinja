import { describe, expect, it } from "vitest";
import { senseCut } from "../adaptive/controller";
import { engagementFromStepover, getMachine, getMaterial, getTool, speedsAndFeeds } from "../machine/catalog";
import { createHeightmap, fillHeightmap, sampleHeight } from "./heightmap";
import { rasterizeMesh } from "./mesh";
import { BRACKET, bracketMesh, sampleBracket } from "./part";
import { planDemo } from "./plan";
import { encodeBinaryStl, parseStl } from "./stl";
import { generateToolpaths } from "./toolpath";

describe("demo bracket", () => {
  it("is 6 mm on the flange and 18 mm on the boss", () => {
    expect(sampleBracket(8, 8)).toBe(BRACKET.base);
    expect(sampleBracket(48, 32)).toBe(BRACKET.pocketFloor);
    expect(sampleBracket(30, 14)).toBe(BRACKET.bossH);
  });

  it("drops through both mounting holes", () => {
    expect(sampleBracket(16, 32)).toBe(0);
    expect(sampleBracket(80, 32)).toBe(0);
  });

  it("is empty outside the blank", () => {
    expect(Number.isFinite(sampleBracket(-1, 10))).toBe(false);
  });
});

describe("heightmap", () => {
  it("samples the function at cell centers", () => {
    const hm = fillHeightmap(createHeightmap(0, 0, 10, 10, 1), (x, y) => x + y);
    expect(sampleHeight(hm, 0.5, 0.5)).toBeCloseTo(1, 5);
  });

  it("rasterizes a raised triangle to a higher Z than the floor", () => {
    const mesh = {
      units: "mm" as const,
      triangles: [
        {
          a: { x: 0, y: 0, z: 2 },
          b: { x: 10, y: 0, z: 2 },
          c: { x: 0, y: 10, z: 2 },
        },
      ],
    };
    const hm = rasterizeMesh(mesh, 1, 0);
    expect(sampleHeight(hm, 2, 2)).toBeCloseTo(2, 1);
  });
});

describe("STL", () => {
  it("round-trips the bracket mesh", () => {
    const mesh = bracketMesh(8);
    const buf = encodeBinaryStl(mesh);
    const back = parseStl(buf);
    expect(back.triangles.length).toBe(mesh.triangles.length);
    expect(back.triangles[0].a.z).toBeCloseTo(mesh.triangles[0].a.z, 5);
  });
});

describe("speeds", () => {
  it("clamps rpm to the machine", () => {
    const tool = getTool("em-250");
    const router = getMachine("router");
    const vmc = getMachine("vmc");
    const alu = getMaterial("6061");
    expect(speedsAndFeeds(tool, alu, router).rpm).toBeLessThanOrEqual(router.maxRpm);
    expect(speedsAndFeeds(tool, alu, vmc).rpm).toBeLessThanOrEqual(vmc.maxRpm);
  });

  it("treats full-diameter stepover as a slot (π rad)", () => {
    expect(engagementFromStepover(6.35, 6.35)).toBeCloseTo(Math.PI, 5);
  });
});

describe("toolpath", () => {
  it("only cuts where the part is below the pass Z", () => {
    const hm = fillHeightmap(
      createHeightmap(0, 0, BRACKET.width, BRACKET.depth, 2),
      sampleBracket,
    );
    const paths = generateToolpaths(
      hm,
      [getTool("em-250")],
      getMaterial("6061"),
      getMachine("knee"),
      { leaveMm: 0.2, stockTop: 20, stockPadMm: 2 },
    );
    const cuts = paths[0].points.filter((p) => p.kind === "cut");
    expect(cuts.length).toBeGreaterThan(50);
    for (const p of cuts) {
      const zPart = sampleBracket(p.x, p.y);
      if (!Number.isFinite(zPart)) continue;
      expect(p.z).toBeGreaterThanOrEqual(zPart - 0.35);
    }
  });
});

describe("adaptive controller", () => {
  it("pulls feed back when the tool is slotting in steel", () => {
    const tool = getTool("em-250");
    const machine = getMachine("router");
    const steel = getMaterial("4140");
    const { rpm, feedMmMin } = speedsAndFeeds(tool, steel, machine);
    const slot = senseCut(
      {
        x: 0,
        y: 0,
        z: 10,
        feedMmMin,
        rpm,
        toolId: tool.id,
        engagementRad: Math.PI,
        slotting: true,
        kind: "cut",
      },
      0,
      tool,
      machine,
      steel,
    );
    const light = senseCut(
      {
        x: 0,
        y: 0,
        z: 10,
        feedMmMin,
        rpm,
        toolId: tool.id,
        engagementRad: 0.4,
        slotting: false,
        kind: "cut",
      },
      1,
      tool,
      machine,
      steel,
    );
    expect(slot.feedOverride).toBeLessThan(light.feedOverride);
    expect(slot.load).toBeGreaterThan(light.load);
  });

  it("raises chatter risk when tooth-passing matches the machine mode", () => {
    const tool = getTool("em-250");
    const alu = getMaterial("6061");
    const tuned = {
      ...getMachine("knee"),
      naturalHz: (2400 / 60) * tool.flutes,
    };
    const detuned = { ...tuned, naturalHz: 800 };
    const pt = {
      x: 0,
      y: 0,
      z: 10,
      feedMmMin: 400,
      rpm: 2400,
      toolId: tool.id,
      engagementRad: Math.PI * 0.7,
      slotting: true,
      kind: "cut" as const,
    };
    const a = senseCut(pt, 0, tool, tuned, alu);
    const b = senseCut(pt, 0, tool, detuned, alu);
    expect(a.chatterRisk).toBeGreaterThan(b.chatterRisk);
  });
});

describe("job plan", () => {
  it("builds a demo job with roughing and finishing", () => {
    const job = planDemo("knee", "6061", "phone");
    expect(job.paths.length).toBe(2);
    expect(job.stock.h).toBeGreaterThan(BRACKET.bossH);
    expect(job.partName).toBe(BRACKET.name);
  });
});
