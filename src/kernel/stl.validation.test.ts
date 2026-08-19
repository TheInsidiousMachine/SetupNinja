import { describe, expect, it } from "vitest";
import { rasterizeMesh } from "./mesh";
import { parseStl } from "./stl";

describe("STL input validation", () => {
  it("rejects empty and vertex-free ASCII files", () => {
    expect(() => parseStl(new ArrayBuffer(0))).toThrow(/no triangles/i);
    expect(() => parseStl(new TextEncoder().encode("solid empty\nendsolid").buffer)).toThrow(
      /no triangles/i,
    );
  });

  it("rejects a truncated binary triangle table", () => {
    const bytes = new Uint8Array(84);
    bytes.set(new TextEncoder().encode("binary"));
    new DataView(bytes.buffer).setUint32(80, 1, true);
    expect(() => parseStl(bytes.buffer)).toThrow(/truncated|length/i);
  });

  it("rejects non-finite ASCII coordinates", () => {
    const source = `solid bad
      facet normal 0 0 1
        outer loop
          vertex 0 0 0
          vertex Infinity 0 0
          vertex 0 1 0
        endloop
      endfacet
    endsolid`;
    expect(() => parseStl(new TextEncoder().encode(source).buffer)).toThrow(/finite/i);
  });

  it("rejects meshes with no two-dimensional cutting footprint", () => {
    expect(() =>
      rasterizeMesh(
        {
          units: "mm",
          triangles: [
            {
              a: { x: 0, y: 0, z: 0 },
              b: { x: 10, y: 0, z: 0 },
              c: { x: 20, y: 0, z: 0 },
            },
          ],
        },
        1.2,
      ),
    ).toThrow(/footprint/i);
  });

  it("rejects a mesh that would allocate an excessive heightmap", () => {
    expect(() =>
      rasterizeMesh(
        {
          units: "mm",
          triangles: [
            {
              a: { x: 0, y: 0, z: 0 },
              b: { x: 10_000, y: 0, z: 0 },
              c: { x: 0, y: 10_000, z: 0 },
            },
          ],
        },
        1.2,
      ),
    ).toThrow(/too large/i);
  });
});
