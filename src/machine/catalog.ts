import type { MachineProfile, Material, Tool } from "../kernel/types";

export const TOOLS: Tool[] = [
  {
    id: "em-250",
    name: '¼″ 4-flute',
    type: "endmill",
    diameterMm: 6.35,
    flutes: 4,
    maxDocMm: 2.0,
    maxStepover: 0.4,
    material: "carbide",
  },
  {
    id: "em-125",
    name: '⅛″ 3-flute',
    type: "endmill",
    diameterMm: 3.175,
    flutes: 3,
    maxDocMm: 1.0,
    maxStepover: 0.35,
    material: "carbide",
  },
];

export const MATERIALS: Material[] = [
  { id: "6061", name: "6061-T6", kc: 700 },
  { id: "4140", name: "4140 steel", kc: 1800 },
  { id: "delrin", name: "Delrin", kc: 280 },
];

export const MACHINES: MachineProfile[] = [
  {
    id: "knee",
    name: "Knee mill",
    kind: "knee-mill",
    maxFeedMmMin: 2500,
    maxRpm: 5000,
    spindleKw: 1.5,
    naturalHz: 87,
    stiffnessNPerMm: 12000,
  },
  {
    id: "router",
    name: "Hobby router",
    kind: "router",
    maxFeedMmMin: 4000,
    maxRpm: 18000,
    spindleKw: 1.2,
    naturalHz: 142,
    stiffnessNPerMm: 3500,
  },
  {
    id: "vmc",
    name: "Small VMC",
    kind: "vmc",
    maxFeedMmMin: 8000,
    maxRpm: 10000,
    spindleKw: 5.5,
    naturalHz: 310,
    stiffnessNPerMm: 28000,
  },
];

export function getTool(id: string): Tool {
  const t = TOOLS.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown tool ${id}`);
  return t;
}

export function getMachine(id: string): MachineProfile {
  const m = MACHINES.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown machine ${id}`);
  return m;
}

export function getMaterial(id: string): Material {
  const m = MATERIALS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown material ${id}`);
  return m;
}

/** Surface feet per minute for carbide in the given material. */
export function sfmFor(material: Material): number {
  if (material.id === "4140") return 180;
  if (material.id === "delrin") return 600;
  return 400;
}

/** Chip load per flute, inches, roughing. */
export function chipLoadInch(tool: Tool, material: Material): number {
  const base = tool.diameterMm < 4 ? 0.0012 : 0.0025;
  if (material.id === "4140") return base * 0.55;
  if (material.id === "delrin") return base * 1.6;
  return base;
}

export function speedsAndFeeds(
  tool: Tool,
  material: Material,
  machine: MachineProfile,
): { rpm: number; feedMmMin: number } {
  const diaIn = tool.diameterMm / 25.4;
  const sfm = sfmFor(material);
  const rpmUnclamped = (sfm * 3.82) / diaIn;
  const rpm = Math.min(machine.maxRpm, Math.max(800, Math.round(rpmUnclamped)));
  const ipt = chipLoadInch(tool, material);
  const feedMmMin = Math.min(
    machine.maxFeedMmMin,
    rpm * tool.flutes * ipt * 25.4,
  );
  return { rpm, feedMmMin };
}

/**
 * Radial engagement for a given stepover.
 * θ = acos(1 − ae / R), so a full-diameter slot is π rad.
 */
export function engagementFromStepover(diameterMm: number, stepoverMm: number): number {
  const r = diameterMm / 2;
  const ae = Math.min(Math.max(stepoverMm, 0), diameterMm);
  const inner = Math.min(1, Math.max(-1, 1 - ae / r));
  return Math.acos(inner);
}
