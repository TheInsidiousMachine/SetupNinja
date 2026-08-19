import { describe, expect, it } from "vitest";
import {
  blockFaces,
  brepFromParametric,
  brepVolume,
  faceNormal,
  validateBrep,
  type Brep,
} from "./brep";
import { stepFileName, writeStep } from "./step";
import type { ParametricSpec } from "./types";

const STOCK = { widthMm: 100, depthMm: 60, heightMm: 20 };

function spec(feature: ParametricSpec["feature"], partName = "Test part"): ParametricSpec {
  return { partName, stock: STOCK, feature };
}

function build(feature: ParametricSpec["feature"]): Brep {
  const result = brepFromParametric(spec(feature));
  if (!result.ok) throw new Error(result.reason);
  return result.brep;
}

describe("B-rep construction", () => {
  it("builds a watertight block with the right volume", () => {
    const brep = build({ kind: "face" });

    expect(validateBrep(brep).problems).toEqual([]);
    expect(brepVolume(brep)).toBeCloseTo(100 * 60 * 20, 6);
  });

  it("points every block face outward", () => {
    const brep: Brep = { name: "block", faces: blockFaces(0, 10, 0, 20, 0, 30) };
    const normals = brep.faces.map((face) => faceNormal(face.outer));

    expect(normals).toContainEqual({ x: 0, y: 0, z: 1 });
    expect(normals).toContainEqual({ x: 0, y: 0, z: -1 });
    expect(normals).toContainEqual({ x: 0, y: 1, z: 0 });
    expect(normals).toContainEqual({ x: 0, y: -1, z: 0 });
    expect(normals).toContainEqual({ x: 1, y: 0, z: 0 });
    expect(normals).toContainEqual({ x: -1, y: 0, z: 0 });
  });

  it("removes exactly the pocket volume from the block", () => {
    const brep = build({
      kind: "pocket",
      x: 20,
      y: 15,
      widthMm: 40,
      depthMm: 25,
      depthBelowTopMm: 8,
    });

    expect(validateBrep(brep).problems).toEqual([]);
    expect(brepVolume(brep)).toBeCloseTo(100 * 60 * 20 - 40 * 25 * 8, 6);
  });

  it("adds exactly the boss volume to the block", () => {
    const brep = build({
      kind: "boss",
      x: 20,
      y: 15,
      widthMm: 30,
      depthMm: 20,
      heightAboveTopMm: 12,
    });

    expect(validateBrep(brep).problems).toEqual([]);
    expect(brepVolume(brep)).toBeCloseTo(100 * 60 * 20 + 30 * 20 * 12, 6);
  });

  it("winds a pocket opening opposite to the face it cuts through", () => {
    const brep = build({
      kind: "pocket",
      x: 20,
      y: 15,
      widthMm: 40,
      depthMm: 25,
      depthBelowTopMm: 8,
    });
    const top = brep.faces.find((face) => face.inners?.length)!;

    expect(faceNormal(top.outer)).toEqual({ x: 0, y: 0, z: 1 });
    expect(faceNormal(top.inners![0])).toEqual({ x: 0, y: 0, z: -1 });
  });

  it("refuses a feature that breaks out of the stock edge", () => {
    const result = brepFromParametric(
      spec({ kind: "pocket", x: 0, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 8 }),
    );

    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.reason).toMatch(/stock edge/i);
  });

  it("refuses a pocket deeper than the stock", () => {
    const result = brepFromParametric(
      spec({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 25 }),
    );

    expect(result.ok).toBe(false);
  });

  it("detects an inside-out solid", () => {
    const flipped: Brep = {
      name: "flipped",
      faces: blockFaces(0, 10, 0, 10, 0, 10).map((face) => ({ outer: [...face.outer].reverse() })),
    };
    const report = validateBrep(flipped);

    expect(report.valid).toBe(false);
    expect(report.problems.join(" ")).toMatch(/inside out/i);
  });

  it("detects a shell with a missing face", () => {
    const open: Brep = { name: "open", faces: blockFaces(0, 10, 0, 10, 0, 10).slice(1) };
    const report = validateBrep(open);

    expect(report.valid).toBe(false);
    expect(report.problems.join(" ")).toMatch(/watertight/i);
  });
});

describe("STEP output", () => {
  const pocket = build({ kind: "pocket", x: 20, y: 15, widthMm: 40, depthMm: 25, depthBelowTopMm: 8 });

  it("writes a well-formed ISO 10303-21 file", () => {
    const result = writeStep(pocket, { timestamp: "2026-08-19T12:00:00" });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    const step = result.step;
    expect(step.startsWith("ISO-10303-21;\n")).toBe(true);
    expect(step.trimEnd().endsWith("END-ISO-10303-21;")).toBe(true);
    expect(step).toContain("FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));");
    expect(step).toContain("MANIFOLD_SOLID_BREP");
    expect(step).toContain("ADVANCED_BREP_SHAPE_REPRESENTATION");
    expect(step).toContain("CLOSED_SHELL");
    expect(step).toContain("2026-08-19T12:00:00");

    const dataStart = step.indexOf("DATA;");
    const dataEnd = step.indexOf("ENDSEC;", dataStart);
    expect(dataStart).toBeGreaterThan(0);
    expect(dataEnd).toBeGreaterThan(dataStart);
  });

  it("numbers every entity uniquely and consecutively", () => {
    const result = writeStep(pocket);
    if (!result.ok) throw new Error(result.reason);

    const ids = [...result.step.matchAll(/^#(\d+) = /gm)].map((m) => Number(m[1]));
    expect(ids.length).toBeGreaterThan(50);
    expect(ids).toEqual(ids.map((_, index) => index + 1));
  });

  it("references only entities it defines", () => {
    const result = writeStep(pocket);
    if (!result.ok) throw new Error(result.reason);

    const defined = new Set([...result.step.matchAll(/^#(\d+) = /gm)].map((m) => m[1]));
    const referenced = [...result.step.matchAll(/#(\d+)/g)].map((m) => m[1]);
    const dangling = referenced.filter((id) => !defined.has(id));

    expect(dangling).toEqual([]);
  });

  it("terminates every entity line with a semicolon", () => {
    const result = writeStep(pocket);
    if (!result.ok) throw new Error(result.reason);

    const entityLines = result.step.split("\n").filter((line) => line.startsWith("#"));
    expect(entityLines.every((line) => line.endsWith(";"))).toBe(true);
  });

  it("writes every real with a decimal point", () => {
    const result = writeStep(pocket);
    if (!result.ok) throw new Error(result.reason);

    for (const match of result.step.matchAll(/CARTESIAN_POINT\('',\(([^)]*)\)\)/g)) {
      for (const value of match[1].split(",")) {
        expect(value).toMatch(/\./);
      }
    }
  });

  it("shares each edge between exactly the two faces that meet on it", () => {
    const result = writeStep(pocket);
    if (!result.ok) throw new Error(result.reason);

    const edgeCurves = [...result.step.matchAll(/^#(\d+) = EDGE_CURVE/gm)].map((m) => m[1]);
    for (const id of edgeCurves) {
      const uses = [...result.step.matchAll(new RegExp(`ORIENTED_EDGE\\('',\\*,\\*,#${id},`, "g"))];
      expect(uses).toHaveLength(2);
    }
  });

  it("produces identical bytes for identical input", () => {
    const a = writeStep(pocket, { timestamp: "2026-08-19T12:00:00" });
    const b = writeStep(pocket, { timestamp: "2026-08-19T12:00:00" });
    expect(a).toEqual(b);
  });

  it("escapes a quote in the part name rather than breaking the string", () => {
    const named = build({ kind: "face" });
    named.name = "Bob's 1/2\" plate";
    const result = writeStep(named);
    if (!result.ok) throw new Error(result.reason);

    expect(result.step).toContain("Bob''s");
  });

  it("refuses to write an invalid solid", () => {
    const open: Brep = { name: "open", faces: blockFaces(0, 10, 0, 10, 0, 10).slice(1) };
    const result = writeStep(open);

    expect(result.ok).toBe(false);
  });

  it("slugs a file name from the part name", () => {
    expect(stepFileName("Clayton Bracket Rev B")).toBe("clayton-bracket-rev-b.step");
    expect(stepFileName("   ")).toBe("setupninja-part.step");
  });
});
