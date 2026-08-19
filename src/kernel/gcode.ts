import type { JobPlan, Toolpath, Waypoint } from "./types";

export function postGcode(plan: JobPlan): string {
  const safeRetractMm = plan.stock.z + plan.stock.h + 5;
  const lines: string[] = [
    "%",
    "(SETUPNINJA PROOF PROGRAM - VERIFY BEFORE MACHINE USE)",
    `(PART: ${cleanComment(plan.partName)})`,
    `(MACHINE: ${cleanComment(plan.machine.name)})`,
    `(MATERIAL: ${cleanComment(plan.material.name)})`,
    `(STOCK: X${fmt(plan.stock.w)} Y${fmt(plan.stock.d)} Z${fmt(plan.stock.h)} MM)`,
    "(GENERIC FANUC-STYLE PROOF POST; CONTROLLER COMPATIBILITY IS NOT VERIFIED)",
    "(DATUM: G54 X0 Y0 = MODELED PART LOWER-LEFT; Z0 = STOCK BOTTOM)",
    "(TOOL LENGTHS, WORKHOLDING, AND CLEARANCE MUST BE SET BY OPERATOR)",
    "(AI MAY INTERPRET THE JOB; THIS FILE IS POSTED FROM DETERMINISTIC TOOLPATH MATH)",
    "G21 G90 G17 G40 G80 G94",
    "G54",
    `G0 Z${fmt(safeRetractMm)}`,
  ];

  let currentToolId: string | null = null;
  for (const [pathIndex, path] of plan.paths.entries()) {
    if (path.points.length === 0) continue;
    const configuredIndex = plan.tools.findIndex((tool) => tool.id === path.tool.id);
    const toolNumber = configuredIndex >= 0 ? configuredIndex + 1 : pathIndex + 1;
    const first = path.points[0];
    lines.push("", `(TOOL ${toolNumber}: ${cleanComment(path.tool.name)} ${fmt(path.tool.diameterMm)}MM)`);
    if (currentToolId !== path.tool.id) {
      lines.push(
        "M5",
        `G0 Z${fmt(safeRetractMm)}`,
        `T${toolNumber} M6`,
        `G43 H${toolNumber} Z${fmt(safeRetractMm)}`,
      );
      currentToolId = path.tool.id;
    }
    lines.push(`S${Math.round(first.rpm)} M3`);
    appendPath(lines, path, safeRetractMm);
  }

  lines.push(`G0 Z${fmt(safeRetractMm)}`, "M5", "M30", "%");
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

function appendPath(lines: string[], path: Toolpath, safeRetractMm: number): void {
  let last: string | null = null;
  for (const point of path.points) {
    const moveLines = point.kind === "rapid" ? rapidMoveLines(point, safeRetractMm) : [feedMoveLine(point)];
    for (const line of moveLines) {
      if (line === last) continue;
      lines.push(line);
      last = line;
    }
  }
}

function rapidMoveLines(point: Waypoint, safeRetractMm: number): string[] {
  const lines = [`G0 Z${fmt(safeRetractMm)}`, `G0 X${fmt(point.x)} Y${fmt(point.y)}`];
  if (Math.abs(point.z - safeRetractMm) > 1e-6) lines.push(`G0 Z${fmt(point.z)}`);
  return lines;
}

function feedMoveLine(point: Waypoint): string {
  const coords = `X${fmt(point.x)} Y${fmt(point.y)} Z${fmt(point.z)}`;
  const feed = point.kind === "lead" ? Math.max(25, point.feedMmMin * 0.25) : point.feedMmMin;
  return `G1 ${coords} F${Math.round(feed)}`;
}

function fmt(n: number): string {
  return n.toFixed(3);
}

function cleanComment(text: string): string {
  return text.replace(/[()]/g, "").trim();
}
