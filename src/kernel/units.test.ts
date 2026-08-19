import { describe, expect, it } from "vitest";
import {
  MM_PER_INCH,
  formatDiameter,
  formatFeed,
  formatLength,
  inchToMm,
  lengthToMm,
  mmToInch,
  unitGCode,
} from "./units";

describe("unit conversion", () => {
  it("round-trips inch and millimetre", () => {
    expect(inchToMm(1)).toBe(MM_PER_INCH);
    expect(mmToInch(MM_PER_INCH)).toBe(1);
    expect(lengthToMm("inch", 2.5)).toBeCloseTo(63.5, 9);
    expect(lengthToMm("mm", 2.5)).toBe(2.5);
  });

  it("pairs the G-code unit word with the system", () => {
    expect(unitGCode("inch")).toBe("G20");
    expect(unitGCode("mm")).toBe("G21");
  });
});

describe("tool diameter as a shop fraction", () => {
  it("names the common fractional cutters", () => {
    const cases: [number, string][] = [
      [0.125, '1/8"'],
      [0.1875, '3/16"'],
      [0.25, '1/4"'],
      [0.3125, '5/16"'],
      [0.375, '3/8"'],
      [0.5, '1/2"'],
      [0.625, '5/8"'],
      [0.75, '3/4"'],
    ];
    for (const [inch, expected] of cases) {
      expect(formatDiameter("inch", inchToMm(inch))).toBe(expected);
    }
  });

  it("writes a whole inch without a fraction", () => {
    expect(formatDiameter("inch", inchToMm(1))).toBe('1"');
    expect(formatDiameter("inch", inchToMm(3))).toBe('3"');
  });

  it("writes over an inch as a mixed number, never an improper fraction", () => {
    expect(formatDiameter("inch", inchToMm(1.5))).toBe('1-1/2"');
    expect(formatDiameter("inch", inchToMm(1.25))).toBe('1-1/4"');
    expect(formatDiameter("inch", inchToMm(2.75))).toBe('2-3/4"');
  });

  it("never emits an improper fraction for any common size", () => {
    for (let sixteenths = 1; sixteenths <= 64; sixteenths++) {
      const text = formatDiameter("inch", inchToMm(sixteenths / 16));
      const fraction = text.replace(/"$/, "").split("-").at(-1);
      if (!fraction?.includes("/")) continue;
      const [n, d] = fraction.split("/").map(Number);
      expect(n).toBeLessThan(d);
    }
  });

  it("falls back to decimals for a size that is not a shop fraction", () => {
    expect(formatDiameter("inch", inchToMm(0.4))).toBe('0.4000"');
  });

  it("stays metric when the system is metric", () => {
    expect(formatDiameter("mm", 6.35)).toBe("6.35 mm");
  });
});

describe("display formatting", () => {
  it("labels lengths with the right unit", () => {
    expect(formatLength("inch", 25.4)).toBe("1.000 in");
    expect(formatLength("mm", 25.4)).toBe("25.4 mm");
  });

  it("converts feed to ipm for inch and leaves mm/min for metric", () => {
    expect(formatFeed("inch", 254)).toBe("10.0 ipm");
    expect(formatFeed("mm", 254)).toBe("254 mm/min");
  });

  it("keeps enough inch precision to resolve a tenth", () => {
    expect(formatLength("inch", inchToMm(0.0625), 4)).toBe("0.0625 in");
  });
});
