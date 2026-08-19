import { expandDrillCycle } from "./drill";
import { resolvePost, supportsCannedCycle } from "./postConfig";
import { formatDiameter, formatLength, lengthIn, feedIn, unitGCode } from "./units";
import type { DrillCycle, JobPlan, PostConfig, Toolpath, UnitSystem, Waypoint } from "./types";

/**
 * Post a job plan to G-code.
 *
 * All kernel geometry is millimetres; coordinates and feeds are converted once,
 * here, so an inch shop reads an inch program. The unit word (G20/G21) always
 * matches the numbers that follow it.
 */
export function postGcode(plan: JobPlan): string {
  const post = resolvePost(plan.machine);
  const units = post.units;
  const num = coordinateFormatter(units);
  const safeRetractMm = plan.stock.z + plan.stock.h + 5;

  const lines: string[] = [];
  if (post.tapeMarkers) lines.push("%");
  if (post.programNumber) lines.push(`${post.programNumber} (${cleanComment(plan.partName).toUpperCase()})`);

  lines.push(
    "(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)",
    `(PART: ${cleanComment(plan.partName)})`,
    `(MACHINE: ${cleanComment(plan.machine.name)})`,
    `(CONTROLLER: ${post.controller.toUpperCase()} STYLE POST; COMPATIBILITY IS NOT VERIFIED)`,
    `(MATERIAL: ${cleanComment(plan.material.name)})`,
    `(STOCK: X${num(plan.stock.w)} Y${num(plan.stock.d)} Z${num(plan.stock.h)} ${unitWord(units)})`,
    `(UNITS: ${units === "inch" ? "INCH / SAE" : "METRIC"})`,
    `(DATUM: ${post.workOffset} X0 Y0 = MODELED PART LOWER-LEFT; Z0 = STOCK BOTTOM)`,
    "(TOOL LENGTHS, WORKHOLDING, AND CLEARANCE MUST BE SET BY OPERATOR)",
    "(AI MAY INTERPRET THE JOB; THIS FILE IS POSTED FROM DETERMINISTIC TOOLPATH MATH)",
  );

  for (const tool of toolSummary(plan)) lines.push(tool);

  lines.push(`${unitGCode(units)} G90 G17 G40 G80 G94`, post.workOffset);
  lines.push(...safeZLines(post));

  let currentToolId: string | null = null;
  let coolantOn = false;
  for (const [pathIndex, path] of plan.paths.entries()) {
    if (path.points.length === 0) continue;
    const configuredIndex = plan.tools.findIndex((tool) => tool.id === path.tool.id);
    const toolNumber = configuredIndex >= 0 ? configuredIndex + 1 : pathIndex + 1;
    const first = path.points[0];

    lines.push("", `(TOOL ${toolNumber}: ${cleanComment(path.tool.name)} ${formatDiameter(units, path.tool.diameterMm)})`);

    if (currentToolId !== path.tool.id) {
      lines.push("M5");
      if (coolantOn) {
        lines.push("M9");
        coolantOn = false;
      }
      // Clear Z before the changer moves. On an ATC this must be machine home,
      // not just above the stock, or the carousel swings into the part.
      lines.push(...toolChangeClearanceLines(post, num, safeRetractMm));
      lines.push(`T${toolNumber} M6`);
      // G43 is a tool-length mode, not a motion command. After G80 or G28 no
      // modal motion is active, so the rapid is stated rather than inherited.
      if (post.toolLengthComp) {
        lines.push(`G0 G43 H${toolNumber} Z${num(safeRetractMm)}`);
      } else {
        lines.push(`G0 Z${num(safeRetractMm)}`);
      }
      currentToolId = path.tool.id;
    }

    lines.push(`S${Math.round(first.rpm)} M3`);
    const coolantWord = coolantCode(post.coolant);
    if (coolantWord && !coolantOn) {
      lines.push(coolantWord);
      coolantOn = true;
    }
    appendPath(lines, path, safeRetractMm, units, num);
  }

  for (const cycle of plan.drillCycles ?? []) {
    if (cycle.centers.length === 0) continue;
    const configuredIndex = plan.tools.findIndex((tool) => tool.id === cycle.tool.id);
    const toolNumber = configuredIndex >= 0 ? configuredIndex + 1 : plan.paths.length + 1;

    lines.push(
      "",
      `(${cycle.operation.toUpperCase()} ${cycle.centers.length} HOLE${cycle.centers.length === 1 ? "" : "S"}` +
        ` - ${cleanComment(cycle.tool.name)})`,
    );

    if (currentToolId !== cycle.tool.id) {
      lines.push("M5");
      if (coolantOn) {
        lines.push("M9");
        coolantOn = false;
      }
      lines.push(...toolChangeClearanceLines(post, num, safeRetractMm));
      lines.push(`T${toolNumber} M6`);
      if (post.toolLengthComp) {
        lines.push(`G0 G43 H${toolNumber} Z${num(safeRetractMm)}`);
      } else {
        lines.push(`G0 Z${num(safeRetractMm)}`);
      }
      currentToolId = cycle.tool.id;
    }

    // Tapping runs the spindle in step with the feed; the direction word matters
    // because the tap has to reverse back out of the thread it just cut.
    lines.push(`S${Math.round(cycle.rpm)} M3`);
    const coolantWord = coolantCode(post.coolant);
    if (coolantWord && !coolantOn) {
      lines.push(coolantWord);
      coolantOn = true;
    }

    const cycleWord = cannedCycleWord(cycle);
    if (post.cannedCycles && supportsCannedCycle(post.controller, cycleWord)) {
      lines.push(...cannedCycleLines(cycle, units, num));
    } else {
      const why = post.cannedCycles
        ? `${post.controller.toUpperCase()} HAS NO ${cycleWord}`
        : "CONTROL HAS NO CANNED CYCLES";
      lines.push(`(${why}; CYCLE WRITTEN AS EXPLICIT MOVES)`);
      appendPath(lines, { tool: cycle.tool, points: expandDrillCycle(cycle) }, safeRetractMm, units, num);
    }
  }

  lines.push(`G0 Z${num(safeRetractMm)}`, "M5");
  if (coolantOn) lines.push("M9");
  lines.push(...safeZLines(post));
  lines.push("M30");
  if (post.tapeMarkers) lines.push("%");

  const numbered = post.blockNumbers ? withBlockNumbers(lines) : lines;
  return `${numbered.join("\n")}\n`;
}

export function gcodeFileName(plan: JobPlan): string {
  const slug = plan.partName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "setupninja-program"}.nc`;
}

/**
 * Retract to a safe Z for a tool change.
 *
 * `g28-home` sends the spindle to machine Z home in incremental mode, then
 * restores absolute. This is the sequence an industrial control expects before
 * M6; a clearance-plane retract alone will crash a carousel changer.
 */
function toolChangeClearanceLines(
  post: PostConfig,
  num: (mm: number) => string,
  safeRetractMm: number,
): string[] {
  if (post.toolChange === "g28-home") return safeZLines(post);
  return [`G0 Z${num(safeRetractMm)}`];
}

function safeZLines(post: PostConfig): string[] {
  if (post.toolChange !== "g28-home") return [];
  // Incremental G28 through Z0 parks at machine home without a mid-travel dogleg,
  // then G90 restores absolute for the next block.
  return ["G91 G28 Z0", "G90"];
}

/**
 * A drilling canned cycle as the control's own G-code.
 *
 * The cycle word is emitted once with the first hole's position, then each
 * further hole is just an X/Y line — the control repeats the cycle at every
 * position until G80 cancels it. G98 returns to the initial plane between holes
 * so the tool clears anything standing on the part.
 */
function cannedCycleLines(
  cycle: DrillCycle,
  units: UnitSystem,
  num: (mm: number) => string,
): string[] {
  const lines: string[] = [];
  const word = cannedCycleWord(cycle);
  const z = `Z${num(cycle.zBottomMm)}`;
  const r = `R${num(cycle.zRetractMm)}`;
  const f = `F${formatFeedWord(units, cycle.feedMmMin)}`;

  lines.push(`G0 X${num(cycle.centers[0].x)} Y${num(cycle.centers[0].y)}`);
  lines.push(`G0 Z${num(cycle.zClearMm)}`);
  lines.push("G98");

  const extras: string[] = [];
  if (cycle.peckMm && cycle.peckMm > 0) extras.push(`Q${num(cycle.peckMm)}`);
  if (cycle.dwellSec && cycle.dwellSec > 0) extras.push(`P${cycle.dwellSec.toFixed(2)}`);

  const first = cycle.centers[0];
  lines.push(
    [word, `X${num(first.x)}`, `Y${num(first.y)}`, z, r, ...extras, f].filter(Boolean).join(" "),
  );
  for (const center of cycle.centers.slice(1)) {
    lines.push(`X${num(center.x)} Y${num(center.y)}`);
  }
  lines.push("G80");
  lines.push(`G0 Z${num(cycle.zClearMm)}`);
  return lines;
}

function cannedCycleWord(cycle: DrillCycle): string {
  if (cycle.operation === "tap") return "G84";
  if (cycle.peckMm && cycle.peckMm > 0) return "G83";
  if (cycle.dwellSec && cycle.dwellSec > 0) return "G82";
  // A reamer must not stop and rub at the bottom, so it uses the plain cycle.
  return "G81";
}

function coolantCode(mode: PostConfig["coolant"]): string | null {
  if (mode === "flood") return "M8";
  if (mode === "mist") return "M7";
  if (mode === "air") return "M7 (AIR BLAST)";
  return null;
}

function toolSummary(plan: JobPlan): string[] {
  const units = resolvePost(plan.machine).units;
  const seen = new Set<string>();
  const lines: string[] = [];
  for (const [index, tool] of plan.tools.entries()) {
    if (seen.has(tool.id)) continue;
    seen.add(tool.id);
    const parts = [`(T${index + 1} ${cleanComment(tool.name)} ${formatDiameter(units, tool.diameterMm)}`];
    if (tool.stickoutMm) parts.push(` STICKOUT ${formatLength(units, tool.stickoutMm, units === "inch" ? 3 : 1)}`);
    if (tool.holder) parts.push(` HOLDER ${cleanComment(tool.holder.name)}`);
    lines.push(`${parts.join("")})`);
  }
  return lines;
}

function withBlockNumbers(lines: string[]): string[] {
  let n = 10;
  return lines.map((line) => {
    const trimmed = line.trim();
    // Tape markers, comments, and blank separators never take a sequence number.
    if (!trimmed || trimmed === "%" || trimmed.startsWith("(") || trimmed.startsWith("O")) return line;
    const numbered = `N${n} ${line}`;
    n += 10;
    return numbered;
  });
}

function appendPath(
  lines: string[],
  path: Toolpath,
  safeRetractMm: number,
  units: UnitSystem,
  num: (mm: number) => string,
): void {
  let last: string | null = null;
  for (const point of path.points) {
    const moveLines =
      point.kind === "rapid"
        ? rapidMoveLines(point, safeRetractMm, num)
        : [feedMoveLine(point, units, num)];
    for (const line of moveLines) {
      if (line === last) continue;
      lines.push(line);
      last = line;
    }
  }
}

function rapidMoveLines(point: Waypoint, safeRetractMm: number, num: (mm: number) => string): string[] {
  const lines = [`G0 Z${num(safeRetractMm)}`, `G0 X${num(point.x)} Y${num(point.y)}`];
  if (Math.abs(point.z - safeRetractMm) > 1e-6) lines.push(`G0 Z${num(point.z)}`);
  return lines;
}

function feedMoveLine(point: Waypoint, units: UnitSystem, num: (mm: number) => string): string {
  const coords = `X${num(point.x)} Y${num(point.y)} Z${num(point.z)}`;
  const feedMmMin = point.kind === "lead" ? Math.max(25, point.feedMmMin * 0.25) : point.feedMmMin;
  return `G1 ${coords} F${formatFeedWord(units, feedMmMin)}`;
}

/** Inch feeds need decimals; a rounded ipm number would drop most of the rate. */
function formatFeedWord(units: UnitSystem, mmPerMin: number): string {
  const value = feedIn(units, mmPerMin);
  return units === "inch" ? value.toFixed(2) : String(Math.round(value));
}

function coordinateFormatter(units: UnitSystem): (mm: number) => string {
  const digits = units === "inch" ? 4 : 3;
  return (mm: number) => lengthIn(units, mm).toFixed(digits);
}

function unitWord(units: UnitSystem): string {
  return units === "inch" ? "IN" : "MM";
}

/**
 * Comments must survive an ASCII-only control. Older Fanuc and Haas readers
 * either drop or fault on high characters, so typographic fractions and quotes
 * are folded to their plain equivalents rather than passed through.
 */
function cleanComment(text: string): string {
  return text
    .replace(/[()]/g, "")
    .replace(/[¼]/g, "1/4")
    .replace(/[½]/g, "1/2")
    .replace(/[¾]/g, "3/4")
    .replace(/[⅐-⅞]/g, (glyph) => VULGAR_FRACTIONS[glyph] ?? "")
    .replace(/[′‵]/g, "'")
    .replace(/[″‶“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[‐-―]/g, "-")
    // Anything still outside printable ASCII cannot be trusted to the control.
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const VULGAR_FRACTIONS: Record<string, string> = {
  "⅐": "1/7",
  "⅑": "1/9",
  "⅒": "1/10",
  "⅓": "1/3",
  "⅔": "2/3",
  "⅕": "1/5",
  "⅖": "2/5",
  "⅗": "3/5",
  "⅘": "4/5",
  "⅙": "1/6",
  "⅚": "5/6",
  "⅛": "1/8",
  "⅜": "3/8",
  "⅝": "5/8",
  "⅞": "7/8",
};
