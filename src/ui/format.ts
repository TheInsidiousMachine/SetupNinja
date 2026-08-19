import {
  DEFAULT_UNIT_SYSTEM,
  formatFeed,
  formatLength,
  type UnitSystem,
} from "../kernel/units";

/**
 * Display formatting.
 *
 * Every length and feed the operator reads goes through here so a shop running
 * inch tooling never has to convert in their head. The kernel stays metric; the
 * conversion happens at the point of display.
 */

/** Length in the given system. Defaults to SAE. */
export function len(n: number, system: UnitSystem = DEFAULT_UNIT_SYSTEM, digits?: number): string {
  return formatLength(system, n, digits);
}

/** Feed rate in the given system: ipm for inch, mm/min for metric. */
export function feed(n: number, system: UnitSystem = DEFAULT_UNIT_SYSTEM): string {
  return formatFeed(system, n);
}

export function rpm(n: number): string {
  return `${Math.round(n)} rpm`;
}

export function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

export function deg(rad: number): string {
  return `${Math.round((rad * 180) / Math.PI)}°`;
}

/** Millimetres, explicitly. Kept for places that must show kernel-native values. */
export function mm(n: number, digits = 1): string {
  return `${n.toFixed(digits)} mm`;
}
