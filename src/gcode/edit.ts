import { inchToMm, mmToInch } from "../kernel/units";
import { interpretGcode, tokenizeGcode } from "./parse";
import type { UnitSystem } from "../kernel/types";

/**
 * Editing an existing program.
 *
 * Edits rewrite individual words inside the original lines rather than
 * regenerating the file. A posted program carries operator notes, block numbers,
 * and formatting a machinist recognises; regenerating it would throw all of that
 * away and produce a file they cannot diff against the one they trust.
 *
 * Every edit reports exactly how many words it touched, so the change can be
 * checked before the program goes near a machine.
 */

export type EditResult = {
  gcode: string;
  /** How many words the edit rewrote. */
  changed: number;
  notes: string[];
};

/** Matches one word so it can be substituted in place, preserving spacing. */
function replaceWords(
  source: string,
  letters: string[],
  transform: (letter: string, value: number, line: number) => number | null,
): { text: string; changed: number } {
  const wanted = new Set(letters.map((letter) => letter.toUpperCase()));
  const lines = source.split(/(\r\n|\r|\n)/);
  let changed = 0;
  let lineNumber = 0;

  const out = lines.map((segment) => {
    if (/^(\r\n|\r|\n)$/.test(segment)) return segment;
    lineNumber += 1;

    // Split off comments so words inside them are never rewritten.
    const parts: string[] = [];
    let rest = segment;
    let guard = 0;
    while (guard++ < 64) {
      const open = rest.indexOf("(");
      const semi = rest.indexOf(";");
      const cut = semi >= 0 && (open < 0 || semi < open) ? semi : open;
      if (cut < 0) break;
      if (cut === semi) {
        parts.push(rewrite(rest.slice(0, cut)));
        parts.push(rest.slice(cut));
        rest = "";
        break;
      }
      const close = rest.indexOf(")", open);
      if (close < 0) break;
      parts.push(rewrite(rest.slice(0, open)));
      parts.push(rest.slice(open, close + 1));
      rest = rest.slice(close + 1);
    }
    parts.push(rewrite(rest));
    return parts.join("");

    function rewrite(text: string): string {
      return text.replace(
        /([A-Za-z])(\s*)([+-]?(?:\d+\.?\d*|\.\d+))/g,
        (match, letter: string, gap: string, digits: string) => {
          const upper = letter.toUpperCase();
          if (!wanted.has(upper)) return match;
          const value = Number(digits);
          if (!Number.isFinite(value)) return match;
          const next = transform(upper, value, lineNumber);
          if (next === null || next === value) return match;
          changed += 1;
          return `${letter}${gap}${formatLike(digits, next)}`;
        },
      );
    }
  });

  return { text: out.join(""), changed };
}

/** Keep the source's decimal style so the file still looks like itself. */
function formatLike(original: string, value: number): string {
  const dot = original.indexOf(".");
  const places = dot < 0 ? 0 : original.length - dot - 1;
  if (places === 0 && Number.isInteger(value)) return String(value);
  return value.toFixed(Math.max(places, decimalsNeeded(value)));
}

function decimalsNeeded(value: number): number {
  if (Number.isInteger(value)) return 0;
  // Four places resolves a tenth in inch and a micron in mm.
  return 4;
}

/** Scale every feed rate by a percentage. 100 leaves the program unchanged. */
export function scaleFeeds(source: string, percent: number): EditResult {
  if (!Number.isFinite(percent) || percent <= 0) {
    return { gcode: source, changed: 0, notes: ["Feed scale must be a positive percentage."] };
  }
  const factor = percent / 100;
  const { text, changed } = replaceWords(source, ["F"], (_letter, value) => value * factor);
  return {
    gcode: text,
    changed,
    notes: [`Scaled ${changed} feed word${changed === 1 ? "" : "s"} to ${percent}%.`],
  };
}

/** Scale every spindle speed by a percentage. */
export function scaleSpeeds(source: string, percent: number): EditResult {
  if (!Number.isFinite(percent) || percent <= 0) {
    return { gcode: source, changed: 0, notes: ["Speed scale must be a positive percentage."] };
  }
  const factor = percent / 100;
  const { text, changed } = replaceWords(source, ["S"], (_letter, value) => Math.round(value * factor));
  return {
    gcode: text,
    changed,
    notes: [`Scaled ${changed} spindle word${changed === 1 ? "" : "s"} to ${percent}%.`],
  };
}

/**
 * Change the work offset.
 *
 * Only G54-G59 are rewritten; an extended G54.1 P-offset is left alone because
 * its P word carries meaning this edit does not understand.
 */
export function setWorkOffset(source: string, offset: string): EditResult {
  const match = /^G(5[4-9])$/.exec(offset.trim().toUpperCase());
  if (!match) {
    return { gcode: source, changed: 0, notes: [`${offset} is not a G54-G59 work offset.`] };
  }
  const target = Number(match[1]);
  const { text, changed } = replaceWords(source, ["G"], (_letter, value) =>
    value >= 54 && value <= 59 && Number.isInteger(value) ? target : null,
  );
  return {
    gcode: text,
    changed,
    notes: [`Rewrote ${changed} work offset word${changed === 1 ? "" : "s"} to ${offset.toUpperCase()}.`],
  };
}

/** Renumber tools, e.g. { 1: 4, 2: 7 }. Rewrites both T and H words. */
export function renumberTools(source: string, mapping: Record<number, number>): EditResult {
  const notes: string[] = [];
  const { text, changed } = replaceWords(source, ["T", "H", "D"], (_letter, value) => {
    const next = mapping[value];
    return next === undefined ? null : next;
  });
  const pairs = Object.entries(mapping).map(([from, to]) => `T${from}->T${to}`);
  notes.push(`Renumbered ${changed} word${changed === 1 ? "" : "s"} (${pairs.join(", ")}).`);
  return { gcode: text, changed, notes };
}

/**
 * Convert a program between inch and millimetre.
 *
 * Every length-bearing word is scaled and the unit word is swapped. Feed is a
 * length per minute so it scales too; spindle speed is not a length and must
 * not. Getting that distinction wrong by a factor of 25.4 is the reason this is
 * a single audited function rather than a find-and-replace.
 */
export function convertUnits(source: string, to: UnitSystem): EditResult {
  const program = interpretGcode(source);
  if (!program.unitsDeclared) {
    return {
      gcode: source,
      changed: 0,
      notes: [
        "This program never declares G20 or G21, so its current units are unknown. " +
          "Set them explicitly before converting.",
      ],
    };
  }
  if (program.units === to) {
    return { gcode: source, changed: 0, notes: [`The program is already in ${to === "inch" ? "inch" : "millimetre"}.`] };
  }

  const scale = to === "mm" ? 25.4 : 1 / 25.4;
  // Length-bearing words. R is an arc radius or a canned-cycle plane; I/J/K are
  // arc centre offsets; Q is a peck increment. All are lengths.
  const lengthWords = ["X", "Y", "Z", "A", "B", "C", "I", "J", "K", "R", "Q", "F"];
  const { text, changed } = replaceWords(source, lengthWords, (_letter, value) => value * scale);

  // Swap the unit word itself.
  const withUnit = text.replace(/\bG\s*2[01]\b/g, to === "inch" ? "G20" : "G21");

  return {
    gcode: withUnit,
    changed,
    notes: [
      `Converted ${changed} length word${changed === 1 ? "" : "s"} to ${to === "inch" ? "inch" : "millimetre"}.`,
      "Spindle speeds were left alone; rpm is not a length.",
    ],
  };
}

/**
 * Prepend a safe restart preamble.
 *
 * Useful when a program is being run from a control that may have been left in
 * an unknown modal state.
 */
export function addSafetyPreamble(source: string, units: UnitSystem, workOffset = "G54"): EditResult {
  const unitWord = units === "inch" ? "G20" : "G21";
  const preamble = [
    "(SAFETY PREAMBLE ADDED BY SETUPNINJA)",
    `${unitWord} G90 G17 G40 G49 G80 G94`,
    workOffset,
    "G91 G28 Z0",
    "G90",
  ].join("\n");
  return {
    gcode: `${preamble}\n${source}`,
    changed: 5,
    notes: ["Added an explicit modal reset and Z home to the top of the program."],
  };
}

export type ProgramSummary = {
  lines: number;
  tools: number[];
  units: UnitSystem;
  unitsDeclared: boolean;
  extents: { min: { x: number; y: number; z: number }; max: { x: number; y: number; z: number } } | null;
  rapidDistanceMm: number;
  feedDistanceMm: number;
  estimatedSeconds: number;
  maxFeedMmMin: number;
  maxRpm: number;
};

export function summarizeGcode(source: string, assumedUnits?: UnitSystem): ProgramSummary {
  const program = interpretGcode(source, assumedUnits);
  return {
    lines: tokenizeGcode(source).filter((block) => block.words.length > 0).length,
    tools: program.tools,
    units: program.units,
    unitsDeclared: program.unitsDeclared,
    extents: program.extents,
    rapidDistanceMm: program.rapidDistanceMm,
    feedDistanceMm: program.feedDistanceMm,
    estimatedSeconds: program.estimatedSeconds,
    maxFeedMmMin: program.maxFeedMmMin,
    maxRpm: program.maxRpm,
  };
}

export { inchToMm, mmToInch };
