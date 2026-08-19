import type { JobPlan, Toolpath, Waypoint } from "./types";

const SAFE_RETRACT_MM = 15;

export function postGcode(plan: JobPlan): string {
  const lines: string[] = [
    "%",
    "(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)",
    `(PART: ${cleanComment(plan.partName)})`,
    `(MACHINE: ${cleanComment(plan.machine.name)})`,
    `(MATERIAL: ${cleanComment(plan.material.name)})`,
    `(STOCK: X${fmt(plan.stock.w)} Y${fmt(plan.stock.d)} Z${fmt(plan.stock.h)} MM)`,
    "(ASSUMES G54 WORK ZERO, TOOL LENGTHS, AND CLEARANCE ARE SET BY OPERATOR)",
    "(AI MAY INTERPRET THE JOB; THIS FILE IS POSTED FROM DETERMINISTIC TOOLPATH MATH)",
    "G21 G90 G17 G40 G49 G80",
    "G54",
    `G0 Z${fmt(SAFE_RETRACT_MM)}`,
  ];

  plan.paths.forEach((path, i) => {
    appendPath(lines, path, i + 1);
  });

  lines.push(`G0 Z${fmt(SAFE_RETRACT_MM)}`, "M5", "M30", "%");
  return `${lines.join("\n")}\n`;
}

export function gcodeFileName(plan: JobPlan): string {
  const slug = plan.partName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "setupninja-program"}.nc`;
}

function appendPath(lines: string[], path: Toolpath, toolNumber: number): void {
  if (path.points.length === 0) return;

  const first = path.points[0];
  lines.push(
    "",
    `(TOOL ${toolNumber}: ${cleanComment(path.tool.name)} ${fmt(path.tool.diameterMm)}MM)`,
    `T${toolNumber} M6`,
    `S${Math.round(first.rpm)} M3`,
    `G0 Z${fmt(SAFE_RETRACT_MM)}`,
  );

  let last: string | null = null;
  for (const point of path.points) {
    const line = moveLine(point);
    if (line === last) continue;
    lines.push(line);
    last = line;
  }
}

function moveLine(point: Waypoint): string {
  const code = point.kind === "rapid" ? "G0" : "G1";
  const coords = `X${fmt(point.x)} Y${fmt(point.y)} Z${fmt(point.z)}`;
  if (code === "G0") return `${code} ${coords}`;
  return `${code} ${coords} F${Math.round(point.feedMmMin)}`;
}

function fmt(n: number): string {
  return n.toFixed(3);
}

function cleanComment(text: string): string {
  return text.replace(/[()]/g, "").trim();
}
