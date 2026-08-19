/**
 * Unit handling for SetupNinja.
 *
 * The kernel computes in millimetres because the heightmap, mesh, and toolpath
 * math are all mm-native. Display and posting are converted at the edges, so a
 * shop running inch tooling never has to read a metric number.
 *
 * SAE (inch) is the default unit system. Clayton's shops are inch shops.
 */

export type UnitSystem = "inch" | "mm";

export const DEFAULT_UNIT_SYSTEM: UnitSystem = "inch";

export const MM_PER_INCH = 25.4;

export function mmToInch(mm: number): number {
  return mm / MM_PER_INCH;
}

export function inchToMm(inch: number): number {
  return inch * MM_PER_INCH;
}

/** Convert a length in mm into the given system's native number. */
export function lengthIn(system: UnitSystem, mm: number): number {
  return system === "inch" ? mmToInch(mm) : mm;
}

/** Convert a native length in the given system back to mm. */
export function lengthToMm(system: UnitSystem, value: number): number {
  return system === "inch" ? inchToMm(value) : value;
}

/** Convert a feed in mm/min into the given system's native feed. */
export function feedIn(system: UnitSystem, mmPerMin: number): number {
  return system === "inch" ? mmToInch(mmPerMin) : mmPerMin;
}

export function lengthUnitLabel(system: UnitSystem): string {
  return system === "inch" ? "in" : "mm";
}

export function feedUnitLabel(system: UnitSystem): string {
  return system === "inch" ? "ipm" : "mm/min";
}

/**
 * Decimal places for a length readout. Inch work needs four places to resolve a
 * tenth; millimetre work reads naturally at three.
 */
export function lengthDigits(system: UnitSystem): number {
  return system === "inch" ? 4 : 3;
}

/** G-code unit word: G20 selects inch, G21 selects millimetre. */
export function unitGCode(system: UnitSystem): "G20" | "G21" {
  return system === "inch" ? "G20" : "G21";
}

/**
 * Format a mm length for display in the given system, with the unit suffix.
 * `digits` overrides the system default when a coarser readout reads better.
 */
export function formatLength(system: UnitSystem, mm: number, digits?: number): string {
  const value = lengthIn(system, mm);
  const places = digits ?? (system === "inch" ? 3 : 1);
  return `${value.toFixed(places)} ${lengthUnitLabel(system)}`;
}

/** Format a mm/min feed for display in the given system, with the unit suffix. */
export function formatFeed(system: UnitSystem, mmPerMin: number): string {
  const value = feedIn(system, mmPerMin);
  const text = system === "inch" ? value.toFixed(1) : String(Math.round(value));
  return `${text} ${feedUnitLabel(system)}`;
}

/**
 * Format a tool diameter the way a machinist names it. Common fractional inch
 * cutters get their fraction back ("1/4"), everything else gets a decimal.
 */
export function formatDiameter(system: UnitSystem, diameterMm: number): string {
  if (system !== "inch") return `${diameterMm.toFixed(2)} mm`;
  const inch = mmToInch(diameterMm);
  const fraction = nearestCommonFraction(inch);
  if (fraction) return `${fraction}"`;
  return `${inch.toFixed(4)}"`;
}

const FRACTION_DENOMINATORS = [2, 4, 8, 16, 32, 64];
const FRACTION_TOLERANCE_INCH = 0.0005;

/**
 * Nearest common shop fraction, written the way a machinist writes it.
 *
 * Anything at or above one inch becomes a mixed number — 1-1/2, not 3/2 —
 * because an improper fraction on a tool list reads as a mistake.
 */
function nearestCommonFraction(inch: number): string | null {
  if (!Number.isFinite(inch) || inch <= 0) return null;
  const whole = Math.floor(inch + FRACTION_TOLERANCE_INCH);
  const remainder = inch - whole;

  if (remainder <= FRACTION_TOLERANCE_INCH) return String(whole);

  for (const denominator of FRACTION_DENOMINATORS) {
    const numerator = Math.round(remainder * denominator);
    if (numerator <= 0) continue;
    if (Math.abs(numerator / denominator - remainder) > FRACTION_TOLERANCE_INCH) continue;
    // Reduce so 2/4 reads as 1/2.
    const divisor = gcd(numerator, denominator);
    const n = numerator / divisor;
    const d = denominator / divisor;
    if (d === 1) return String(whole + n);
    return whole > 0 ? `${whole}-${n}/${d}` : `${n}/${d}`;
  }
  return null;
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}
