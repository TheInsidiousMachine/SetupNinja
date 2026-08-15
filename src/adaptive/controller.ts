import type { MachineProfile, Material, SenseSample, Tool, Waypoint } from "../kernel/types";

/**
 * Per-engagement controller. Each flute into material gets a load,
 * chatter risk, and feed override. This is the on-machine loop:
 * sense → override → next tooth.
 */
export function senseCut(
  point: Waypoint,
  i: number,
  tool: Tool,
  machine: MachineProfile,
  material: Material,
): SenseSample {
  const width = radialWidth(tool.diameterMm, point.engagementRad);
  const doc = Math.max(0.05, point.kind === "cut" ? 1.2 : 0.05);
  const programmed = Math.max(1, point.feedMmMin);
  const mrr = width * doc * (programmed / 60);
  const forceN = mrr * material.kc;
  const powerW =
    ((forceN * Math.PI * tool.diameterMm * point.rpm) / 60_000) * 0.35;
  const ratedW = machine.spindleKw * 1000;
  const load = 1.45 * (1 - Math.exp(-powerW / Math.max(1, ratedW * 0.85)));

  const toothHz = (point.rpm / 60) * tool.flutes;
  const detune = Math.abs(toothHz - machine.naturalHz) / machine.naturalHz;
  const regenerative = point.slotting ? 1 : point.engagementRad / Math.PI;
  const chatterRisk = clamp(
    regenerative * (1 - clamp(detune * 2.2, 0, 1)) * (0.45 + load),
    0,
    1,
  );

  let feedOverride = 1;
  if (load > 0.82) feedOverride *= 0.82 / load;
  if (chatterRisk > 0.55) feedOverride *= 1 - (chatterRisk - 0.55) * 0.9;
  if (point.engagementRad < 0.35 && point.kind === "cut") feedOverride *= 1.18;
  feedOverride = clamp(feedOverride, 0.25, 1.35);

  const vibration = clamp(chatterRisk * 0.75 + load * 0.2, 0, 1);
  const feedMmMin = programmed * feedOverride;
  const dt = 60 / Math.max(point.rpm, 1) / tool.flutes;
  const flute = Math.floor(i % tool.flutes);

  return {
    i,
    tSec: i * dt,
    load,
    vibration,
    chatterRisk,
    feedOverride,
    rpm: point.rpm,
    feedMmMin,
    engagementRad: point.engagementRad,
    flute,
    x: point.x,
    y: point.y,
    z: point.z,
    kind: point.kind,
  };
}

export function simulatePath(
  points: Waypoint[],
  tool: Tool,
  machine: MachineProfile,
  material: Material,
): SenseSample[] {
  const out: SenseSample[] = [];
  for (let i = 0; i < points.length; i++) {
    out.push(senseCut(points[i], i, tool, machine, material));
  }
  return out;
}

function radialWidth(diameterMm: number, engagementRad: number): number {
  const r = diameterMm / 2;
  return 2 * r * Math.sin(engagementRad / 2);
}

function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v));
}
