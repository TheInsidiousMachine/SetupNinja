import { formatLength, inchToMm } from "./units";
import type { MachineProfile, ParametricSpec, Tool, UnitSystem } from "./types";

/**
 * Setup and workholding strategy.
 *
 * This is the desk work a machinist does before touching the machine: decide
 * how many setups the part needs, which way up it sits in each, what holds it,
 * where the datums go, and which order the cuts run in. The rules below are the
 * conventional shop ones, applied deterministically so the output is auditable
 * rather than guessed — a machinist can disagree with a specific number and see
 * exactly which rule produced it.
 *
 * It covers the prismatic parts the guided flow can describe today. It is a
 * starting sheet for a machinist to correct, not a substitute for one.
 */

/** Least material that can be trusted in vise jaws. Below this the part walks. */
export const MIN_GRIP_MM = inchToMm(0.2);

/** Grip we aim for when there is material to spare. */
export const PREFERRED_GRIP_MM = inchToMm(0.375);

/** Typical hard jaw height on a 6" vise. */
export const VISE_JAW_HEIGHT_MM = inchToMm(1.0);

/** Below this thickness a part cannot be gripped on edge at all. */
export const THIN_PART_MM = inchToMm(0.25);

/** Above this ratio of unsupported height to width, the part rocks under load. */
const TIPPING_RATIO = 2.5;

export type WorkholdingKind = "vise-hard-jaws" | "vise-soft-jaws" | "fixture-plate";

export type Workholding = {
  kind: WorkholdingKind;
  label: string;
  /** Why this choice and not the cheaper one below it. */
  reason: string;
  /** Depth of part held in the jaws, mm. Zero for a fixture plate. */
  gripDepthMm: number;
  /** How far the part stands above the jaw tops, mm. */
  standoffMm: number;
  /** Concrete things to set up before the first cut. */
  preparation: string[];
};

export type SetupStep = {
  index: number;
  title: string;
  /** Which face of the stock points at the spindle. */
  faceUp: "top" | "bottom";
  workholding: Workholding;
  datumX: string;
  datumY: string;
  datumZ: string;
  operations: string[];
  warnings: string[];
};

export type SetupPlan = {
  partName: string;
  setups: SetupStep[];
  notes: string[];
  warnings: string[];
};

export type SetupPlanInput = {
  spec: ParametricSpec;
  machine: MachineProfile;
  tools: Tool[];
  units: UnitSystem;
};

export function planSetups(input: SetupPlanInput): SetupPlan {
  const { spec, machine, tools, units } = input;
  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 3 : 1);
  const { widthMm: width, depthMm: depth, heightMm: height } = spec.stock;
  const feature = spec.feature;

  const notes: string[] = [];
  const warnings: string[] = [];

  // How deep the cutting reaches below the top face, and how far material
  // stands above it. Together these decide what is left to grip.
  const cutDepthBelowTop = feature.kind === "pocket" ? feature.depthBelowTopMm : 0;
  const bossHeight = feature.kind === "boss" ? feature.heightAboveTopMm : 0;
  const materialBelowCut = height - cutDepthBelowTop;

  const workholding = chooseWorkholding({
    width,
    depth,
    height,
    cutDepthBelowTop,
    bossHeight,
    materialBelowCut,
    feature,
    length,
  });

  const operations = buildOperations(spec, tools, length);
  const setupWarnings: string[] = [];

  if (materialBelowCut < MIN_GRIP_MM) {
    setupWarnings.push(
      `Only ${length(Math.max(0, materialBelowCut))} of material sits below the deepest cut. ` +
        `That is less than the ${length(MIN_GRIP_MM)} minimum grip — the cutter will reach the jaws.`,
    );
  }

  const standoff = Math.max(0, height - workholding.gripDepthMm) + bossHeight;
  const narrowest = Math.min(width, depth);
  if (standoff > narrowest * TIPPING_RATIO) {
    setupWarnings.push(
      `The part stands ${length(standoff)} above the jaws on a ${length(narrowest)} footprint. ` +
        `Expect it to rock under load; support it or take lighter cuts.`,
    );
  }

  if (machine.travelZMm && height + bossHeight + longestTool(tools) > machine.travelZMm) {
    setupWarnings.push(
      `Part plus tool is taller than the ${machine.name} Z travel. Check the tool reaches the work.`,
    );
  }

  const setups: SetupStep[] = [
    {
      index: 1,
      title: feature.kind === "face" ? "Face the top" : `Machine the ${feature.kind}`,
      faceUp: "top",
      workholding,
      datumX: "Part X zero at the left edge of the stock, found with an edge finder.",
      datumY: "Part Y zero at the front edge of the stock, found with an edge finder.",
      datumZ: "Z zero on the finished top face after the facing pass, not on raw stock.",
      operations,
      warnings: setupWarnings,
    },
  ];

  notes.push(
    "Datums are set from the stock edges. If the stock is saw-cut and out of square, face two " +
      "adjacent edges first or the whole part inherits that error.",
  );

  if (feature.kind === "boss") {
    notes.push(
      `The stock must start at least ${length(height + bossHeight)} thick to leave the boss standing.`,
    );
  }

  if (cutDepthBelowTop > 0 && materialBelowCut >= MIN_GRIP_MM) {
    notes.push(
      `Jaws grip the bottom ${length(workholding.gripDepthMm)}; the pocket floor stops ` +
        `${length(materialBelowCut)} above the bottom face.`,
    );
  }

  warnings.push(...crossSetupWarnings(spec, tools, length));

  return { partName: spec.partName, setups, notes, warnings };
}

type WorkholdingInput = {
  width: number;
  depth: number;
  height: number;
  cutDepthBelowTop: number;
  bossHeight: number;
  materialBelowCut: number;
  feature: ParametricSpec["feature"];
  length: (mm: number) => string;
};

/**
 * Pick the cheapest workholding that actually holds the part.
 *
 * The order is deliberate: hard jaws are fastest to set, soft jaws cost an hour
 * to cut but hold awkward parts, and a fixture plate is the last resort because
 * it ties up the table. Most parts want soft jaws — that matches how these jobs
 * really run — but only when the geometry needs them.
 */
function chooseWorkholding(input: WorkholdingInput): Workholding {
  const { width, depth, height, bossHeight, materialBelowCut, length } = input;
  const footprint = Math.min(width, depth);

  // Too thin to stand in jaws at all.
  if (height < THIN_PART_MM) {
    return {
      kind: "fixture-plate",
      label: "Fixture plate",
      reason:
        `At ${length(height)} thick the part cannot be gripped on edge — there is nothing for the ` +
        `jaws to hold without the cutter reaching them.`,
      gripDepthMm: 0,
      standoffMm: height + bossHeight,
      preparation: [
        "Bolt or clamp the part to a surfaced fixture plate.",
        "Use toe clamps or vacuum rather than side pressure so the part stays flat.",
        "Leave the plate's own tapped holes clear of the toolpath.",
      ],
    };
  }

  // The cut eats into what the jaws would otherwise hold.
  if (materialBelowCut < PREFERRED_GRIP_MM + MIN_GRIP_MM) {
    return {
      kind: "vise-soft-jaws",
      label: "Soft jaws, stepped",
      reason:
        `Only ${length(materialBelowCut)} of material sits below the deepest cut. Stepped soft jaws ` +
        `hold that band precisely and keep the cutter clear of hardened jaw faces.`,
      gripDepthMm: Math.max(MIN_GRIP_MM, Math.min(materialBelowCut * 0.6, PREFERRED_GRIP_MM)),
      standoffMm: height - Math.min(materialBelowCut * 0.6, PREFERRED_GRIP_MM) + bossHeight,
      preparation: [
        `Cut a step in the soft jaws ${length(Math.min(materialBelowCut * 0.6, PREFERRED_GRIP_MM))} deep.`,
        "Bore the jaws at the same vise pressure you will clamp the part at.",
        "Mark the jaws so they go back in the same orientation.",
      ],
    };
  }

  // A tall narrow part levers itself out of hard jaws.
  if (height > footprint * TIPPING_RATIO) {
    return {
      kind: "vise-soft-jaws",
      label: "Soft jaws, full depth",
      reason:
        `The part is ${length(height)} tall on a ${length(footprint)} footprint. Full-depth soft jaws ` +
        `wrap more of the part and stop it levering out under side load.`,
      gripDepthMm: Math.min(VISE_JAW_HEIGHT_MM, height * 0.5),
      standoffMm: height - Math.min(VISE_JAW_HEIGHT_MM, height * 0.5) + bossHeight,
      preparation: [
        "Cut soft jaws to wrap the part profile.",
        "Set a parallel under the part so it seats to a repeatable Z.",
      ],
    };
  }

  const grip = Math.min(PREFERRED_GRIP_MM, VISE_JAW_HEIGHT_MM, materialBelowCut - MIN_GRIP_MM);
  return {
    kind: "vise-hard-jaws",
    label: "Vise, hard jaws",
    reason:
      `${length(materialBelowCut)} of material sits below the deepest cut, so standard jaws hold the ` +
      `part without reaching the toolpath.`,
    gripDepthMm: Math.max(MIN_GRIP_MM, grip),
    standoffMm: height - Math.max(MIN_GRIP_MM, grip) + bossHeight,
    preparation: [
      "Seat the part on parallels and tap it down before final clamping.",
      "Check the part is not riding up on a burr from the saw cut.",
    ],
  };
}

function buildOperations(
  spec: ParametricSpec,
  tools: Tool[],
  length: (mm: number) => string,
): string[] {
  const operations: string[] = [];
  const roughing = largestTool(tools);
  const finishing = smallestTool(tools);
  const feature = spec.feature;

  operations.push(
    roughing
      ? `Face the top with the ${roughing.name} to clean up the saw cut and establish Z zero.`
      : "Face the top to clean up the saw cut and establish Z zero.",
  );

  if (feature.kind === "pocket") {
    operations.push(
      `Rough the pocket${roughing ? ` with the ${roughing.name}` : ""}, leaving material on the walls and floor.`,
      `Finish the pocket walls and floor${finishing ? ` with the ${finishing.name}` : ""} to size.`,
    );
    operations.push(
      `Check the pocket depth of ${length(feature.depthBelowTopMm)} from the finished top face, not the raw stock.`,
    );
  } else if (feature.kind === "boss") {
    operations.push(
      `Rough around the boss${roughing ? ` with the ${roughing.name}` : ""}, leaving stock on the boss walls.`,
      `Finish the boss walls${finishing ? ` with the ${finishing.name}` : ""} in one pass so there is no step.`,
    );
    operations.push(
      `Check the boss height of ${length(feature.heightAboveTopMm)} above the finished top face.`,
    );
  }

  operations.push("Deburr, then inspect before the part comes out of the vise.");
  return operations;
}

/** Pitfalls worth flagging before anyone cuts metal. */
function crossSetupWarnings(
  spec: ParametricSpec,
  tools: Tool[],
  length: (mm: number) => string,
): string[] {
  const warnings: string[] = [];
  const feature = spec.feature;

  if (feature.kind === "pocket") {
    const smallest = smallestTool(tools);
    if (smallest) {
      const cornerRadius = smallest.diameterMm / 2;
      warnings.push(
        `A milled pocket corner cannot be sharp. The smallest tool leaves ${length(cornerRadius)} ` +
          `corner radii — confirm the print allows them.`,
      );
    }

    const deepest = feature.depthBelowTopMm;
    const capable = tools.filter((tool) => (tool.fluteLengthMm ?? 0) >= deepest);
    if (tools.length > 0 && capable.length === 0) {
      warnings.push(
        `No tool in the library has ${length(deepest)} of flute length for this pocket depth. ` +
          `The shank would rub the wall.`,
      );
    }
  }

  if (feature.kind === "boss") {
    const widest = tools.reduce<Tool | null>(
      (best, tool) => (!best || tool.diameterMm > best.diameterMm ? tool : best),
      null,
    );
    if (widest) {
      const clearance = Math.min(feature.x, feature.y);
      if (clearance < widest.diameterMm) {
        warnings.push(
          `Only ${length(clearance)} of clearance between the boss and the stock edge, but the ` +
            `${widest.name} is ${length(widest.diameterMm)} across. It will not fit alongside the boss.`,
        );
      }
    }
  }

  return warnings;
}

function largestTool(tools: Tool[]): Tool | null {
  return tools.reduce<Tool | null>(
    (best, tool) => (!best || tool.diameterMm > best.diameterMm ? tool : best),
    null,
  );
}

function smallestTool(tools: Tool[]): Tool | null {
  return tools.reduce<Tool | null>(
    (best, tool) => (!best || tool.diameterMm < best.diameterMm ? tool : best),
    null,
  );
}

function longestTool(tools: Tool[]): number {
  return tools.reduce((longest, tool) => Math.max(longest, tool.stickoutMm ?? 0), 0);
}
