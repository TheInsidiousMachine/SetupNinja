import { DEFAULT_UNIT_SYSTEM, mmToInch, inchToMm } from "../kernel/units";
import type { UnitSystem } from "../kernel/types";

/**
 * G-code reader.
 *
 * Written rather than borrowed: the available parsers are Node-bound and stop at
 * tokenising, while editing a posted program safely needs the modal state behind
 * every block — what units it is in, whether it is absolute, which offset and
 * tool are live. Getting that wrong on someone's CAM output is how a machine
 * gets hurt, so it stays in code we can audit.
 *
 * The reader keeps the original text of every line. Edits are applied by
 * replacing individual words in place, so a program comes back out with its
 * comments, spacing, and block numbers intact.
 */

export type GWord = { letter: string; value: number };

export type GBlock = {
  /** 1-based line number in the source. */
  line: number;
  /** Original text, unmodified. */
  raw: string;
  words: GWord[];
  comments: string[];
  /** True when the line carries a leading `/` block-delete slash. */
  blockDelete: boolean;
};

const WORD_PATTERN = /([A-Za-z])\s*([+-]?(?:\d+\.?\d*|\.\d+))/g;

/**
 * Split a program into blocks and words.
 *
 * Comments come in two forms: parentheses anywhere in the line, and a semicolon
 * running to end of line. Both are stripped before word matching so an `X` in a
 * comment is never read as an axis word.
 */
export function tokenizeGcode(source: string): GBlock[] {
  const blocks: GBlock[] = [];
  const lines = source.split(/\r\n|\r|\n/);

  for (const [index, raw] of lines.entries()) {
    const comments: string[] = [];
    let text = raw;

    // Parenthesised comments, including several on one line.
    text = text.replace(/\(([^)]*)\)/g, (_match, body: string) => {
      comments.push(body.trim());
      return " ";
    });
    // Semicolon comment runs to the end of the line.
    const semicolon = text.indexOf(";");
    if (semicolon >= 0) {
      comments.push(text.slice(semicolon + 1).trim());
      text = text.slice(0, semicolon);
    }

    const trimmed = text.trim();
    const blockDelete = trimmed.startsWith("/");
    const body = blockDelete ? trimmed.slice(1) : trimmed;

    const words: GWord[] = [];
    // Tape markers are not words and must not be read as one.
    if (body !== "%") {
      for (const match of body.matchAll(WORD_PATTERN)) {
        const value = Number(match[2]);
        if (Number.isFinite(value)) {
          words.push({ letter: match[1].toUpperCase(), value });
        }
      }
    }

    blocks.push({ line: index + 1, raw, words, comments, blockDelete });
  }

  return blocks;
}

// ---------------------------------------------------------------------------
// Modal interpretation
// ---------------------------------------------------------------------------

export type DistanceMode = "absolute" | "incremental";
export type SpindleState = "off" | "cw" | "ccw";
export type CutterComp = "off" | "left" | "right";
export type Plane = "XY" | "XZ" | "YZ";

export type ModalState = {
  /** Active motion code, e.g. 0, 1, 2, 3, or a canned cycle like 81. */
  motion: number | null;
  units: UnitSystem;
  /** True once a G20 or G21 has actually been seen. */
  unitsDeclared: boolean;
  distance: DistanceMode;
  distanceDeclared: boolean;
  plane: Plane;
  workOffset: string | null;
  toolLengthComp: boolean;
  cutterComp: CutterComp;
  spindle: SpindleState;
  coolant: boolean;
  /** Currently loaded tool number, after M6. */
  tool: number | null;
  /** Tool number selected by a T word but not yet changed in. */
  pendingTool: number | null;
  /** Feed in mm/min, converted from whatever units were active. */
  feedMmMin: number | null;
  rpm: number | null;
  /** Absolute machine position in mm. */
  position: { x: number; y: number; z: number };
  /** True while inside a canned cycle (G81-G89 without G80). */
  cannedCycleActive: boolean;
};

export type BlockMotion = {
  from: { x: number; y: number; z: number };
  to: { x: number; y: number; z: number };
  /** 0 for rapid, 1 for feed, 2/3 for arcs. */
  code: number;
  rapid: boolean;
};

export type InterpretedBlock = {
  block: GBlock;
  /** State after this block has executed. */
  state: ModalState;
  motion: BlockMotion | null;
};

export type GcodeProgram = {
  blocks: InterpretedBlock[];
  /** Tool numbers the program changes to, in order of first use. */
  tools: number[];
  /** Bounding box of all commanded motion, mm. Null when nothing moves. */
  extents: { min: { x: number; y: number; z: number }; max: { x: number; y: number; z: number } } | null;
  /** Unit system the program declares, or the default when it declares none. */
  units: UnitSystem;
  unitsDeclared: boolean;
  /** Total commanded distance, mm, split by move type. */
  rapidDistanceMm: number;
  feedDistanceMm: number;
  /** Estimated run time in seconds, from commanded feeds. */
  estimatedSeconds: number;
  maxFeedMmMin: number;
  maxRpm: number;
  /** Codes the interpreter does not model. */
  unsupportedCodes: string[];
};

function initialState(units: UnitSystem): ModalState {
  return {
    motion: null,
    units,
    unitsDeclared: false,
    distance: "absolute",
    distanceDeclared: false,
    plane: "XY",
    workOffset: null,
    toolLengthComp: false,
    cutterComp: "off",
    spindle: "off",
    coolant: false,
    tool: null,
    pendingTool: null,
    feedMmMin: null,
    rpm: null,
    position: { x: 0, y: 0, z: 0 },
    cannedCycleActive: false,
  };
}

/** Motion codes we model. Canned cycles move but their internal moves are implied. */
const CANNED_CYCLES = new Set([73, 74, 76, 81, 82, 83, 84, 85, 86, 87, 88, 89]);

/**
 * Walk a program, tracking modal state and resolving every motion block to an
 * absolute millimetre position.
 *
 * `assumedUnits` only applies until the program declares its own; a program that
 * never declares is reported through `unitsDeclared` so a caller can treat that
 * as the hazard it is.
 */
export function interpretGcode(
  source: string,
  assumedUnits: UnitSystem = DEFAULT_UNIT_SYSTEM,
): GcodeProgram {
  const blocks = tokenizeGcode(source);
  const out: InterpretedBlock[] = [];
  const tools: number[] = [];
  const unsupported = new Set<string>();

  let state = initialState(assumedUnits);
  let min = { x: Infinity, y: Infinity, z: Infinity };
  let max = { x: -Infinity, y: -Infinity, z: -Infinity };
  let rapidDistance = 0;
  let feedDistance = 0;
  let seconds = 0;
  let maxFeed = 0;
  let maxRpm = 0;
  let sawMotion = false;

  for (const block of blocks) {
    if (block.blockDelete || block.words.length === 0) {
      out.push({ block, state: { ...state, position: { ...state.position } }, motion: null });
      continue;
    }

    const next: ModalState = { ...state, position: { ...state.position } };
    let axisSeen = false;
    const target = { ...state.position };

    // A length in this block's units, converted to mm.
    const toMm = (value: number) => (next.units === "inch" ? inchToMm(value) : value);

    for (const word of block.words) {
      switch (word.letter) {
        case "G": {
          const code = word.value;
          if (code === 0 || code === 1 || code === 2 || code === 3) next.motion = code;
          else if (code === 20) {
            next.units = "inch";
            next.unitsDeclared = true;
          } else if (code === 21) {
            next.units = "mm";
            next.unitsDeclared = true;
          } else if (code === 90) {
            next.distance = "absolute";
            next.distanceDeclared = true;
          } else if (code === 91) {
            next.distance = "incremental";
            next.distanceDeclared = true;
          } else if (code === 17) next.plane = "XY";
          else if (code === 18) next.plane = "XZ";
          else if (code === 19) next.plane = "YZ";
          else if (code === 40) next.cutterComp = "off";
          else if (code === 41) next.cutterComp = "left";
          else if (code === 42) next.cutterComp = "right";
          else if (code === 43) next.toolLengthComp = true;
          else if (code === 49) next.toolLengthComp = false;
          else if (code >= 54 && code <= 59) next.workOffset = `G${code}`;
          else if (code === 80) {
            next.cannedCycleActive = false;
            next.motion = null;
          } else if (CANNED_CYCLES.has(code)) {
            next.cannedCycleActive = true;
            next.motion = code;
          } else if (code === 28 || code === 30) {
            // Reference return: the control drives to machine home. Absolute
            // position afterwards is machine-dependent, so it is not tracked.
            next.motion = code;
          } else if (![4, 61, 64, 94, 95, 97, 98, 99, 53].includes(code)) {
            unsupported.add(`G${formatCode(code)}`);
          }
          break;
        }
        case "M": {
          const code = word.value;
          if (code === 3) next.spindle = "cw";
          else if (code === 4) next.spindle = "ccw";
          else if (code === 5) next.spindle = "off";
          else if (code === 7 || code === 8) next.coolant = true;
          else if (code === 9) next.coolant = false;
          else if (code === 6) {
            next.tool = next.pendingTool ?? next.tool;
            if (next.tool !== null && !tools.includes(next.tool)) tools.push(next.tool);
          } else if (![0, 1, 2, 30, 47, 98, 99].includes(code)) {
            unsupported.add(`M${formatCode(code)}`);
          }
          break;
        }
        case "T":
          next.pendingTool = word.value;
          break;
        case "F":
          next.feedMmMin = toMm(word.value);
          maxFeed = Math.max(maxFeed, next.feedMmMin);
          break;
        case "S":
          next.rpm = word.value;
          maxRpm = Math.max(maxRpm, word.value);
          break;
        case "X":
          axisSeen = true;
          target.x = next.distance === "absolute" ? toMm(word.value) : target.x + toMm(word.value);
          break;
        case "Y":
          axisSeen = true;
          target.y = next.distance === "absolute" ? toMm(word.value) : target.y + toMm(word.value);
          break;
        case "Z":
          axisSeen = true;
          target.z = next.distance === "absolute" ? toMm(word.value) : target.z + toMm(word.value);
          break;
        default:
          break;
      }
    }

    let motion: BlockMotion | null = null;
    const isReferenceReturn = next.motion === 28 || next.motion === 30;
    if (axisSeen && next.motion !== null && !isReferenceReturn) {
      const from = { ...state.position };
      motion = {
        from,
        to: { ...target },
        code: next.motion,
        rapid: next.motion === 0,
      };
      next.position = { ...target };
      sawMotion = true;

      const distance = Math.hypot(target.x - from.x, target.y - from.y, target.z - from.z);
      if (motion.rapid) {
        rapidDistance += distance;
        // Rapids are not instant; a nominal traverse rate keeps the estimate honest.
        seconds += distance / 10_000 * 60;
      } else {
        feedDistance += distance;
        if (next.feedMmMin && next.feedMmMin > 0) seconds += (distance / next.feedMmMin) * 60;
      }

      for (const axis of ["x", "y", "z"] as const) {
        min[axis] = Math.min(min[axis], from[axis], target[axis]);
        max[axis] = Math.max(max[axis], from[axis], target[axis]);
      }
    } else if (axisSeen && isReferenceReturn) {
      next.position = { ...target };
    }

    state = next;
    out.push({ block, state: { ...next, position: { ...next.position } }, motion });
  }

  return {
    blocks: out,
    tools,
    extents: sawMotion ? { min, max } : null,
    units: state.units,
    unitsDeclared: out.some((entry) => entry.state.unitsDeclared),
    rapidDistanceMm: rapidDistance,
    feedDistanceMm: feedDistance,
    estimatedSeconds: seconds,
    maxFeedMmMin: maxFeed,
    maxRpm,
    unsupportedCodes: [...unsupported].sort(),
  };
}

function formatCode(value: number): string {
  return Number.isInteger(value) ? String(value) : String(value);
}

/** Convert a length in `from` units to `to` units. */
export function convertLength(value: number, from: UnitSystem, to: UnitSystem): number {
  if (from === to) return value;
  return from === "inch" ? inchToMm(value) : mmToInch(value);
}
