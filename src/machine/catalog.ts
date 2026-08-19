import { defaultPostConfig } from "../kernel/postConfig";
import { inchToMm } from "../kernel/units";
import type { MachineProfile, Material, Tool, ToolHolder } from "../kernel/types";

/**
 * Stock toolholders.
 *
 * Dimensions describe the body below the spindle face: `noseDiameterMm` at the
 * face nearest the part, flaring to `bodyDiameterMm` over `noseLengthMm`. These
 * are the numbers that decide whether a holder clears a tall boss or a vise jaw.
 */
export const HOLDERS: ToolHolder[] = [
  {
    id: "er16",
    name: 'ER16 collet chuck',
    taper: "er-collet",
    noseDiameterMm: 28,
    bodyDiameterMm: 33,
    noseLengthMm: 20,
    lengthMm: 70,
  },
  {
    id: "er32",
    name: "ER32 collet chuck",
    taper: "er-collet",
    noseDiameterMm: 41,
    bodyDiameterMm: 50,
    noseLengthMm: 28,
    lengthMm: 90,
  },
  {
    id: "cat40-em",
    name: "CAT40 endmill holder",
    taper: "cat40",
    noseDiameterMm: 32,
    bodyDiameterMm: 44,
    noseLengthMm: 25,
    lengthMm: 85,
  },
  {
    id: "shrink-375",
    name: 'Shrink fit 3/8"',
    taper: "shrink",
    noseDiameterMm: 21,
    bodyDiameterMm: 32,
    noseLengthMm: 40,
    lengthMm: 90,
  },
  {
    id: "r8",
    name: "R8 collet",
    taper: "r8",
    noseDiameterMm: 25,
    bodyDiameterMm: 33,
    noseLengthMm: 30,
    lengthMm: 75,
  },
];

export function getHolder(id: string): ToolHolder {
  const holder = HOLDERS.find((item) => item.id === id);
  if (!holder) throw new Error(`Unknown holder ${id}`);
  return holder;
}

/**
 * Default tool library, SAE sizes.
 *
 * `stickoutMm` is the distance from the holder nose to the tool tip. It is set
 * to a conservative shop default of roughly 3x diameter plus the flute length,
 * which is what a machinist reaches for before deciding they need more reach.
 */
export const TOOLS: Tool[] = [
  {
    id: "em-500",
    name: '1/2" 4-flute',
    type: "endmill",
    diameterMm: inchToMm(0.5),
    flutes: 4,
    maxDocMm: 4.0,
    maxStepover: 0.4,
    material: "carbide",
    fluteLengthMm: inchToMm(1.0),
    stickoutMm: inchToMm(1.5),
    holder: HOLDERS[2],
  },
  {
    id: "em-375",
    name: '3/8" 3-flute',
    type: "endmill",
    diameterMm: inchToMm(0.375),
    flutes: 3,
    maxDocMm: 3.0,
    maxStepover: 0.4,
    material: "carbide",
    fluteLengthMm: inchToMm(0.875),
    stickoutMm: inchToMm(1.25),
    holder: HOLDERS[2],
  },
  {
    id: "em-250",
    name: '1/4" 4-flute',
    type: "endmill",
    diameterMm: inchToMm(0.25),
    flutes: 4,
    maxDocMm: 2.0,
    maxStepover: 0.4,
    material: "carbide",
    fluteLengthMm: inchToMm(0.75),
    stickoutMm: inchToMm(1.0),
    holder: HOLDERS[1],
  },
  {
    id: "em-125",
    name: '1/8" 3-flute',
    type: "endmill",
    diameterMm: inchToMm(0.125),
    flutes: 3,
    maxDocMm: 1.0,
    maxStepover: 0.35,
    material: "carbide",
    fluteLengthMm: inchToMm(0.5),
    stickoutMm: inchToMm(0.625),
    holder: HOLDERS[0],
  },
];

/**
 * Drilling and tapping tools.
 *
 * Drill diameters are the letter/number/fractional sizes a shop actually stocks,
 * chosen to match the tap drills in the thread table so a tapped hole has a real
 * drill behind it.
 */
export const DRILL_TOOLS: Tool[] = [
  {
    id: "spot-90",
    name: '1/2" 90 spot drill',
    type: "spot",
    diameterMm: inchToMm(0.5),
    flutes: 2,
    maxDocMm: 3,
    maxStepover: 1,
    material: "carbide",
    pointAngleDeg: 90,
    fluteLengthMm: inchToMm(0.5),
    stickoutMm: inchToMm(0.9),
    holder: HOLDERS[2],
  },
  {
    id: "drill-7",
    name: '#7 drill (0.201")',
    type: "drill",
    diameterMm: inchToMm(0.201),
    flutes: 2,
    maxDocMm: 20,
    maxStepover: 1,
    material: "carbide",
    pointAngleDeg: 135,
    fluteLengthMm: inchToMm(1.75),
    stickoutMm: inchToMm(2.2),
    holder: HOLDERS[1],
  },
  {
    id: "drill-2500",
    name: '1/4" drill',
    type: "drill",
    diameterMm: inchToMm(0.25),
    flutes: 2,
    maxDocMm: 25,
    maxStepover: 1,
    material: "carbide",
    pointAngleDeg: 135,
    fluteLengthMm: inchToMm(2.0),
    stickoutMm: inchToMm(2.5),
    holder: HOLDERS[1],
  },
  {
    id: "drill-3125",
    name: '5/16" drill',
    type: "drill",
    diameterMm: inchToMm(0.3125),
    flutes: 2,
    maxDocMm: 28,
    maxStepover: 1,
    material: "carbide",
    pointAngleDeg: 135,
    fluteLengthMm: inchToMm(2.25),
    stickoutMm: inchToMm(2.75),
    holder: HOLDERS[1],
  },
  {
    id: "tap-1420",
    name: '1/4-20 tap',
    type: "tap",
    diameterMm: inchToMm(0.25),
    flutes: 3,
    maxDocMm: 25,
    maxStepover: 1,
    material: "hss",
    threadSpec: "1/4-20",
    threadPitchMm: inchToMm(1 / 20),
    fluteLengthMm: inchToMm(1.0),
    stickoutMm: inchToMm(1.6),
    holder: HOLDERS[1],
  },
  {
    id: "tap-1032",
    name: "#10-32 tap",
    type: "tap",
    diameterMm: inchToMm(0.19),
    flutes: 3,
    maxDocMm: 20,
    maxStepover: 1,
    material: "hss",
    threadSpec: "#10-32",
    threadPitchMm: inchToMm(1 / 32),
    fluteLengthMm: inchToMm(0.75),
    stickoutMm: inchToMm(1.3),
    holder: HOLDERS[0],
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
    travelXMm: 762,
    travelYMm: 305,
    travelZMm: 400,
    hasToolChanger: false,
    post: defaultPostConfig("knee-mill"),
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
    travelXMm: 812,
    travelYMm: 812,
    travelZMm: 152,
    hasToolChanger: false,
    post: defaultPostConfig("router"),
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
    travelXMm: 762,
    travelYMm: 406,
    travelZMm: 508,
    hasToolChanger: true,
    post: defaultPostConfig("vmc"),
  },
];

/** Every tool the app ships with: milling plus drilling. */
export const ALL_TOOLS: Tool[] = [...TOOLS, ...DRILL_TOOLS];

export function getTool(id: string): Tool {
  const t = ALL_TOOLS.find((x) => x.id === id);
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

/** Stickout at or below this many diameters is treated as fully rigid. */
const RIGID_STICKOUT_RATIO = 3;

/**
 * Feed derate for a long tool.
 *
 * An end mill is a cantilever: deflection goes with L³/D⁴, so stiffness falls
 * off as the cube of the stickout ratio. Backing the feed off by the square
 * root of that loss keeps the deflection-driven chip thickness error roughly
 * constant instead of letting a 5xD tool push the same load as a 3xD one.
 */
export function stickoutDerate(tool: Tool): number {
  const stickout = tool.stickoutMm;
  if (!stickout || !Number.isFinite(stickout) || stickout <= 0) return 1;
  const ratio = stickout / Math.max(0.01, tool.diameterMm);
  if (ratio <= RIGID_STICKOUT_RATIO) return 1;
  const stiffnessLoss = (RIGID_STICKOUT_RATIO / ratio) ** 3;
  return Math.max(0.25, Math.sqrt(stiffnessLoss));
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
    rpm * tool.flutes * ipt * 25.4 * stickoutDerate(tool),
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
