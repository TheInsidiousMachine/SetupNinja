import { simulatePath } from "../adaptive/controller";
import { getMachine, getMaterial, ALL_TOOLS } from "../machine/catalog";
import { expandDrillCycle, planDrilling } from "./drill";
import { createHeightmap, fillHeightmap, heightmapMinMax } from "./heightmap";
import { rasterizeMesh } from "./mesh";
import { buildParametricHeightmap } from "./parametric";
import { BRACKET, sampleBracket } from "./part";
import { generateToolpaths } from "./toolpath";
import type {
  ComputeTarget,
  Heightmap,
  HolePattern,
  JobPlan,
  MachineProfile,
  Mesh,
  ParametricSpec,
  SenseSample,
  Tool,
} from "./types";

export type PlanRequest = {
  partName: string;
  heightmap?: Heightmap;
  mesh?: Mesh;
  /** Machine id from the catalog, or a full profile for an operator-saved machine. */
  machine: string | MachineProfile;
  materialId: string;
  compute: ComputeTarget;
  cellMm?: number;
  tools?: Tool[];
  cutBounds?: { x0: number; y0: number; x1: number; y1: number };
  /** Hole patterns drilled after the milling passes. */
  holes?: HolePattern[];
};

/** Tools that remove material by milling, as opposed to drilling. */
export function millingTools(tools: Tool[]): Tool[] {
  return tools.filter((tool) => tool.type === "endmill" || tool.type === "ball");
}

export function planJob(req: PlanRequest): JobPlan {
  const machine = typeof req.machine === "string" ? getMachine(req.machine) : req.machine;
  const material = getMaterial(req.materialId);
  const cell = req.cellMm ?? 1.2;
  const heightmap =
    req.heightmap ??
    (req.mesh
      ? rasterizeMesh(req.mesh, cell)
      : fillHeightmap(createHeightmap(0, 0, BRACKET.width, BRACKET.depth, cell), sampleBracket));

  const { max } = heightmapMinMax(heightmap);
  const stockPad = 3;
  const stockTop = max + 1.2;
  const stock = {
    x: heightmap.originX - stockPad,
    y: heightmap.originY - stockPad,
    z: 0,
    w: heightmap.nx * heightmap.cell + stockPad * 2,
    d: heightmap.ny * heightmap.cell + stockPad * 2,
    h: stockTop,
  };

  const tools = req.tools && req.tools.length > 0 ? req.tools : ALL_TOOLS;
  const cutters = millingTools(tools);
  if (cutters.length === 0) {
    throw new Error("This job needs at least one endmill in the tool library.");
  }
  const unsupportedTool = cutters.slice(0, 2).find((tool) => tool.material !== "carbide");
  if (unsupportedTool) {
    throw new Error(
      `${unsupportedTool.name} is not supported by this proof planner. Use a carbide flat endmill.`,
    );
  }
  const paths = generateToolpaths(heightmap, cutters, material, machine, {
    leaveMm: 0.25,
    stockTop,
    stockPadMm: stockPad,
    cutBounds: req.cutBounds,
  });

  const drilling = planDrilling({
    patterns: req.holes ?? [],
    stock,
    // Depths datum from the finished face, which sits below the raw stock top by
    // the facing allowance.
    finishedTopZMm: max,
    tools,
    material,
    machine,
  });
  if (drilling.missingTools.length > 0) {
    throw new Error(
      `The tool library has no ${[...new Set(drilling.missingTools)].join(", ")} for the holes in this job.`,
    );
  }

  const hasMilling = paths.some((path) => path.points.some((point) => point.kind === "cut"));
  if (!hasMilling && drilling.cycles.length === 0) {
    throw new Error("No selected cutter fits inside this job. Increase the stock footprint or add a smaller tool.");
  }

  return {
    partName: req.partName,
    stock,
    heightmap,
    tools,
    machine,
    material,
    paths,
    drillCycles: drilling.cycles,
    compute: req.compute,
  };
}

export function planDemo(
  machine: string | MachineProfile,
  materialId: string,
  compute: ComputeTarget,
  tools?: Tool[],
): JobPlan {
  return planJob({
    partName: BRACKET.name,
    machine,
    materialId,
    compute,
    tools,
  });
}

/**
 * Plan a job from a guided-setup parametric spec. The heightmap comes
 * straight from closed-form math (see ./parametric.ts) — no mesh, no
 * AI-derived geometry — then flows through the same generateToolpaths()
 * pipeline as the STL and demo paths.
 */
export function planParametric(
  spec: ParametricSpec,
  tools: Tool[],
  machine: string | MachineProfile,
  materialId: string,
  compute: ComputeTarget,
): JobPlan {
  const heightmap = buildParametricHeightmap(spec);
  return planJob({
    partName: spec.partName,
    heightmap,
    machine,
    materialId,
    compute,
    cellMm: spec.cellMm,
    tools,
    holes: spec.holes,
    cutBounds: {
      x0: 0,
      y0: 0,
      x1: spec.stock.widthMm,
      y1: spec.stock.depthMm,
    },
  });
}

export function simulateJob(plan: JobPlan): SenseSample[] {
  const samples: SenseSample[] = [];
  for (const path of plan.paths) {
    samples.push(...simulatePath(path.points, path.tool, plan.machine, plan.material));
  }
  // Drilling is simulated from the expanded cycle, so the preview and the load
  // model see the same motion the control will actually run.
  for (const cycle of plan.drillCycles ?? []) {
    samples.push(
      ...simulatePath(expandDrillCycle(cycle), cycle.tool, plan.machine, plan.material),
    );
  }
  return samples;
}

export function serializeHeightmap(hm: Heightmap) {
  return {
    originX: hm.originX,
    originY: hm.originY,
    cell: hm.cell,
    nx: hm.nx,
    ny: hm.ny,
    z: Array.from(hm.z),
  };
}

export function hydrateHeightmap(raw: {
  originX: number;
  originY: number;
  cell: number;
  nx: number;
  ny: number;
  z: number[];
}): Heightmap {
  return {
    originX: raw.originX,
    originY: raw.originY,
    cell: raw.cell,
    nx: raw.nx,
    ny: raw.ny,
    z: Float32Array.from(raw.z),
  };
}
