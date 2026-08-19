import { DEFAULT_UNIT_SYSTEM } from "./units";
import type { ControllerFlavor, MachineKind, MachineProfile, PostConfig } from "./types";

/**
 * Posting defaults per machine class.
 *
 * The tool-change strategy is the safety-relevant one. A VMC with a carousel
 * must be at machine Z home before M6 — retracting to a clearance plane above
 * the stock is not enough, because the changer arm swings through the envelope.
 * Routers and knee mills change by hand at the clearance plane.
 */
export function defaultPostConfig(kind: MachineKind): PostConfig {
  const base: PostConfig = {
    controller: "fanuc",
    units: DEFAULT_UNIT_SYSTEM,
    toolChange: "g28-home",
    workOffset: "G54",
    toolLengthComp: true,
    coolant: "flood",
    blockNumbers: false,
    programNumber: "O0001",
    tapeMarkers: true,
    cannedCycles: true,
  };

  if (kind === "router") {
    return {
      ...base,
      controller: "grbl",
      toolChange: "safe-retract",
      toolLengthComp: false,
      coolant: "air",
      programNumber: "",
      tapeMarkers: false,
      // GRBL has no canned cycles; drilling must be written out as moves.
      cannedCycles: false,
    };
  }

  if (kind === "knee-mill") {
    return {
      ...base,
      controller: "mach3",
      toolChange: "safe-retract",
      coolant: "mist",
      programNumber: "",
    };
  }

  return base;
}

/** Resolve a machine's post config, filling in class defaults for anything unset. */
export function resolvePost(machine: MachineProfile): PostConfig {
  return { ...defaultPostConfig(machine.kind), ...(machine.post ?? {}) };
}

/**
 * Which drilling canned cycles a controller actually has.
 *
 * These dialects diverge, and the divergence matters: LinuxCNC has no G84 at
 * all — it does rigid tapping through G33.1, which needs a spindle encoder and
 * a configured setup. Emitting G84 there would fault the interpreter, so
 * tapping is written out as explicit motion instead, which every control can
 * run.
 */
export function supportsCannedCycle(controller: ControllerFlavor, word: string): boolean {
  if (controller === "grbl") return false;
  if (controller === "linuxcnc") return word !== "G84";
  return true;
}

/**
 * Whether this machine changes tools automatically. Defaults by class when the
 * profile does not say, because that is what decides if M6 needs a Z home.
 */
export function hasToolChanger(machine: MachineProfile): boolean {
  return machine.hasToolChanger ?? machine.kind === "vmc";
}
