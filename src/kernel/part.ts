import type { Mesh, Triangle, Vec3 } from "./types";

function vec(x: number, y: number, z: number): Vec3 {
  return { x, y, z };
}

function tri(a: Vec3, b: Vec3, c: Vec3): Triangle {
  return { a, b, c };
}

function quad(a: Vec3, b: Vec3, c: Vec3, d: Vec3): Triangle[] {
  return [tri(a, b, c), tri(a, c, d)];
}

/**
 * Clayton bracket: 96×64 mm flange, 6 mm thick, with a 12 mm boss,
 * a rectangular pocket, and two through-holes. Built as an explicit
 * triangle mesh so STL import and the demo share one rasterizer.
 */
export const BRACKET = {
  name: "Clayton bracket",
  width: 96,
  depth: 64,
  base: 6,
  bossH: 18,
  pocketFloor: 10,
  holeR: 4,
  hole1: { x: 16, y: 32 },
  hole2: { x: 80, y: 32 },
  boss: { x0: 28, y0: 12, x1: 68, y1: 52 },
  pocket: { x0: 36, y0: 22, x1: 60, y1: 42 },
};

export function inCircle(
  x: number,
  y: number,
  cx: number,
  cy: number,
  r: number,
): boolean {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

export function sampleBracket(x: number, y: number): number {
  const { width: w, depth: d } = BRACKET;
  if (x < 0 || y < 0 || x > w || y > d) return Number.NaN;
  if (inCircle(x, y, BRACKET.hole1.x, BRACKET.hole1.y, BRACKET.holeR)) return 0;
  if (inCircle(x, y, BRACKET.hole2.x, BRACKET.hole2.y, BRACKET.holeR)) return 0;

  const { boss, pocket } = BRACKET;
  const inBoss = x >= boss.x0 && x <= boss.x1 && y >= boss.y0 && y <= boss.y1;
  const inPocket =
    x >= pocket.x0 && x <= pocket.x1 && y >= pocket.y0 && y <= pocket.y1;

  if (inBoss && inPocket) return BRACKET.pocketFloor;
  if (inBoss) return BRACKET.bossH;
  return BRACKET.base;
}

export function bracketMesh(step = 2): Mesh {
  const triangles: Triangle[] = [];
  const { width: w, depth: d } = BRACKET;
  for (let y = 0; y < d; y += step) {
    for (let x = 0; x < w; x += step) {
      const x1 = Math.min(w, x + step);
      const y1 = Math.min(d, y + step);
      const z00 = sampleBracket(x + 0.01, y + 0.01);
      const z10 = sampleBracket(x1 - 0.01, y + 0.01);
      const z11 = sampleBracket(x1 - 0.01, y1 - 0.01);
      const z01 = sampleBracket(x + 0.01, y1 - 0.01);
      const a = vec(x, y, Number.isFinite(z00) ? z00 : 0);
      const b = vec(x1, y, Number.isFinite(z10) ? z10 : 0);
      const c = vec(x1, y1, Number.isFinite(z11) ? z11 : 0);
      const d0 = vec(x, y1, Number.isFinite(z01) ? z01 : 0);
      triangles.push(...quad(a, b, c, d0));
    }
  }
  return { triangles, units: "mm" };
}
