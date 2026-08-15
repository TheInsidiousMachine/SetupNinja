import type { Mesh, Triangle, Vec3 } from "./types";

function readF32(view: DataView, offset: number, le: boolean): number {
  return view.getFloat32(offset, le);
}

/**
 * Parse binary or ASCII STL. Binary is detected by header + triangle count.
 */
export function parseStl(buffer: ArrayBuffer): Mesh {
  const bytes = new Uint8Array(buffer);
  if (isAsciiStl(bytes)) return parseAscii(bytes);
  return parseBinary(bytes);
}

export function encodeBinaryStl(mesh: Mesh): ArrayBuffer {
  const count = mesh.triangles.length;
  const buf = new ArrayBuffer(84 + count * 50);
  const view = new DataView(buf);
  const header = "ClayCam STL";
  for (let i = 0; i < header.length; i++) view.setUint8(i, header.charCodeAt(i));
  view.setUint32(80, count, true);
  let o = 84;
  for (const t of mesh.triangles) {
    const n = normal(t);
    view.setFloat32(o, n.x, true);
    view.setFloat32(o + 4, n.y, true);
    view.setFloat32(o + 8, n.z, true);
    writeVertex(view, o + 12, t.a);
    writeVertex(view, o + 24, t.b);
    writeVertex(view, o + 36, t.c);
    view.setUint16(o + 48, 0, true);
    o += 50;
  }
  return buf;
}

function writeVertex(view: DataView, o: number, v: Vec3): void {
  view.setFloat32(o, v.x, true);
  view.setFloat32(o + 4, v.y, true);
  view.setFloat32(o + 8, v.z, true);
}

function normal(t: Triangle): Vec3 {
  const ux = t.b.x - t.a.x;
  const uy = t.b.y - t.a.y;
  const uz = t.b.z - t.a.z;
  const vx = t.c.x - t.a.x;
  const vy = t.c.y - t.a.y;
  const vz = t.c.z - t.a.z;
  const x = uy * vz - uz * vy;
  const y = uz * vx - ux * vz;
  const z = ux * vy - uy * vx;
  const len = Math.hypot(x, y, z) || 1;
  return { x: x / len, y: y / len, z: z / len };
}

function isAsciiStl(bytes: Uint8Array): boolean {
  if (bytes.byteLength < 84) return true;
  const head = new TextDecoder("latin1").decode(bytes.subarray(0, 5)).toLowerCase();
  if (head !== "solid") return false;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const tris = view.getUint32(80, true);
  const binarySize = 84 + tris * 50;
  return binarySize !== bytes.byteLength;
}

function parseBinary(bytes: Uint8Array): Mesh {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const count = view.getUint32(80, true);
  const triangles: Triangle[] = [];
  let o = 84;
  for (let i = 0; i < count; i++) {
    const a = {
      x: readF32(view, o + 12, true),
      y: readF32(view, o + 16, true),
      z: readF32(view, o + 20, true),
    };
    const b = {
      x: readF32(view, o + 24, true),
      y: readF32(view, o + 28, true),
      z: readF32(view, o + 32, true),
    };
    const c = {
      x: readF32(view, o + 36, true),
      y: readF32(view, o + 40, true),
      z: readF32(view, o + 44, true),
    };
    triangles.push({ a, b, c });
    o += 50;
  }
  return { triangles, units: "mm" };
}

function parseAscii(bytes: Uint8Array): Mesh {
  const text = new TextDecoder("utf-8").decode(bytes);
  const triangles: Triangle[] = [];
  const verts: Vec3[] = [];
  const vertexRe = /vertex\s+([^\s]+)\s+([^\s]+)\s+([^\s]+)/gi;
  let m: RegExpExecArray | null;
  while ((m = vertexRe.exec(text))) {
    verts.push({ x: Number(m[1]), y: Number(m[2]), z: Number(m[3]) });
    if (verts.length === 3) {
      triangles.push({ a: verts[0], b: verts[1], c: verts[2] });
      verts.length = 0;
    }
  }
  return { triangles, units: "mm" };
}
