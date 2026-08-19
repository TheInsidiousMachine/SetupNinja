import { defaultPostConfig } from "../kernel/postConfig";
import type {
  ControllerFlavor,
  CoolantMode,
  MachineKind,
  MachineProfile,
  PostConfig,
  ToolChangeStrategy,
  UnitSystem,
} from "../kernel/types";
import { MACHINES } from "./catalog";

export const MACHINE_PROFILE_KEY = "setupninja.machines.v1";

const MACHINE_KINDS: MachineKind[] = ["knee-mill", "router", "vmc"];
const CONTROLLERS: ControllerFlavor[] = ["fanuc", "haas", "linuxcnc", "grbl", "mach3"];
const COOLANTS: CoolantMode[] = ["none", "flood", "mist", "air"];
const TOOL_CHANGES: ToolChangeStrategy[] = ["g28-home", "safe-retract"];
const UNIT_SYSTEMS: UnitSystem[] = ["inch", "mm"];

/**
 * Operator-editable machine list, persisted to localStorage and seeded from the
 * built-in catalog. Every shop's controller wants slightly different G-code, so
 * the post config travels with the machine rather than living in one global
 * setting.
 */
export function loadMachines(): MachineProfile[] {
  const raw = readRaw();
  if (!raw) {
    saveMachines(MACHINES);
    return cloneMachines(MACHINES);
  }
  try {
    const machines = sanitizeMachines(JSON.parse(raw));
    if (machines.length === 0) return cloneMachines(MACHINES);
    return machines;
  } catch {
    return cloneMachines(MACHINES);
  }
}

export function saveMachines(machines: MachineProfile[]): void {
  writeRaw(JSON.stringify(machines));
}

export function resetMachines(): MachineProfile[] {
  saveMachines(MACHINES);
  return cloneMachines(MACHINES);
}

/** Look up a machine from the saved list, falling back to catalog defaults. */
export function getUserMachine(id: string, machines: MachineProfile[]): MachineProfile {
  const found = machines.find((m) => m.id === id) ?? MACHINES.find((m) => m.id === id);
  if (!found) throw new Error(`Unknown machine ${id}`);
  return found;
}

/** A new profile seeded from an existing one, ready for the operator to edit. */
export function duplicateMachine(source: MachineProfile, machines: MachineProfile[]): MachineProfile {
  const base = `${source.id}-copy`;
  let id = base;
  let suffix = 2;
  while (machines.some((m) => m.id === id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  return {
    ...source,
    id,
    name: `${source.name} copy`,
    post: { ...resolveProfilePost(source) },
    userDefined: true,
  };
}

function resolveProfilePost(machine: MachineProfile): PostConfig {
  return { ...defaultPostConfig(machine.kind), ...(machine.post ?? {}) };
}

function cloneMachines(machines: MachineProfile[]): MachineProfile[] {
  return machines.map((m) => ({ ...m, post: m.post ? { ...m.post } : undefined }));
}

function sanitizeMachines(value: unknown): MachineProfile[] {
  if (!Array.isArray(value)) return [];
  const out: MachineProfile[] = [];
  const seen = new Set<string>();
  for (const item of value) {
    const machine = sanitizeMachine(item);
    if (!machine || seen.has(machine.id)) continue;
    seen.add(machine.id);
    out.push(machine);
  }
  return out;
}

function sanitizeMachine(item: unknown): MachineProfile | null {
  if (!item || typeof item !== "object") return null;
  const o = item as Record<string, unknown>;
  if (typeof o.id !== "string" || !o.id) return null;
  if (typeof o.name !== "string" || !o.name) return null;
  const kind = MACHINE_KINDS.includes(o.kind as MachineKind) ? (o.kind as MachineKind) : null;
  if (!kind) return null;

  const maxFeedMmMin = positive(o.maxFeedMmMin);
  const maxRpm = positive(o.maxRpm);
  const spindleKw = positive(o.spindleKw);
  const naturalHz = positive(o.naturalHz);
  const stiffnessNPerMm = positive(o.stiffnessNPerMm);
  if (!maxFeedMmMin || !maxRpm || !spindleKw || !naturalHz || !stiffnessNPerMm) return null;

  return {
    id: o.id,
    name: o.name,
    kind,
    maxFeedMmMin,
    maxRpm,
    spindleKw,
    naturalHz,
    stiffnessNPerMm,
    travelXMm: positive(o.travelXMm) ?? undefined,
    travelYMm: positive(o.travelYMm) ?? undefined,
    travelZMm: positive(o.travelZMm) ?? undefined,
    hasToolChanger: typeof o.hasToolChanger === "boolean" ? o.hasToolChanger : undefined,
    userDefined: typeof o.userDefined === "boolean" ? o.userDefined : undefined,
    post: sanitizePost(o.post, kind),
  };
}

function sanitizePost(value: unknown, kind: MachineKind): PostConfig {
  const defaults = defaultPostConfig(kind);
  if (!value || typeof value !== "object") return defaults;
  const o = value as Record<string, unknown>;
  return {
    controller: CONTROLLERS.includes(o.controller as ControllerFlavor)
      ? (o.controller as ControllerFlavor)
      : defaults.controller,
    units: UNIT_SYSTEMS.includes(o.units as UnitSystem) ? (o.units as UnitSystem) : defaults.units,
    toolChange: TOOL_CHANGES.includes(o.toolChange as ToolChangeStrategy)
      ? (o.toolChange as ToolChangeStrategy)
      : defaults.toolChange,
    workOffset: sanitizeWorkOffset(o.workOffset) ?? defaults.workOffset,
    toolLengthComp: typeof o.toolLengthComp === "boolean" ? o.toolLengthComp : defaults.toolLengthComp,
    coolant: COOLANTS.includes(o.coolant as CoolantMode) ? (o.coolant as CoolantMode) : defaults.coolant,
    blockNumbers: typeof o.blockNumbers === "boolean" ? o.blockNumbers : defaults.blockNumbers,
    programNumber: sanitizeProgramNumber(o.programNumber) ?? defaults.programNumber,
    tapeMarkers: typeof o.tapeMarkers === "boolean" ? o.tapeMarkers : defaults.tapeMarkers,
    cannedCycles: typeof o.cannedCycles === "boolean" ? o.cannedCycles : defaults.cannedCycles,
  };
}

/** G54–G59, or an extended G54.1 P# offset. Anything else falls back to the default. */
function sanitizeWorkOffset(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim().toUpperCase();
  return /^G5[4-9](\.1 P\d{1,3})?$/.test(text) ? text : null;
}

function sanitizeProgramNumber(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim().toUpperCase();
  if (text === "") return "";
  return /^O\d{1,5}$/.test(text) ? text : null;
}

function positive(value: unknown): number | null {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function readRaw(): string | null {
  try {
    return globalThis.localStorage?.getItem(MACHINE_PROFILE_KEY) ?? null;
  } catch {
    return null;
  }
}

function writeRaw(raw: string): void {
  try {
    globalThis.localStorage?.setItem(MACHINE_PROFILE_KEY, raw);
  } catch {
    // Storage unavailable (private mode, quota, etc.) — the session list still works.
  }
}
