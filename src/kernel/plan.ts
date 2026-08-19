import { simulatePath } from "../adaptive/controller";
import { getMachine, getMaterial, TOOLS } from "../machine/catalog";
import { createHeightmap, fillHeightmap, heightmapMinMax } from "./heightmap";
import { rasterizeMesh } from "./mesh";
import { buildParametricHeightmap } from "./parametric";
import { BRACKET, sampleBracket } from "./part";
import { generateToolpaths } from "./toolpath";
import type {
  ComputeTarget,
  Heightmap,
  JobPlan,
  Mesh,
  ParametricSpec,
  SenseSample,
  Tool,
} from "./types";

export type PlanRequest = {
  partName: string;
  heightmap?: Heightmap;
  mesh?: Mesh;
  machineId: string;
  materialId: string;
  compute: ComputeTarget;
  cellMm?: number;
  tools?: Tool[];
  cutBounds?: { x0: number; y0: number; x1: number; y1: number };
};

export function planJob(req: PlanRequest): JobPlan {
  const machine = getMachine(req.machineId);
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

  const tools = req.tools && req.tools.length > 0 ? req.tools : TOOLS;
  const unsupportedTool = tools.slice(0, 2).find(
    (tool) => tool.type !== "endmill" || tool.material !== "carbide",
  );
  if (unsupportedTool) {
    throw new Error(
      `${unsupportedTool.name} is not supported by this proof planner. Use a carbide flat endmill.`,
    );
  }
  const paths = generateToolpaths(heightmap, tools, material, machine, {
    leaveMm: 0.25,
    stockTop,
    stockPadMm: stockPad,
    cutBounds: req.cutBounds,
  });
  if (!paths.some((path) => path.points.some((point) => point.kind === "cut"))) {
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
    compute: req.compute,
  };
}

export function planDemo(
  machineId: string,
  materialId: string,
  compute: ComputeTarget,
  tools?: Tool[],
): JobPlan {
  return planJob({
    partName: BRACKET.name,
    machineId,
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
  machineId: string,
  materialId: string,
  compute: ComputeTarget,
): JobPlan {
  const heightmap = buildParametricHeightmap(spec);
  return planJob({
    partName: spec.partName,
    heightmap,
    machineId,
    materialId,
    compute,
    cellMm: spec.cellMm,
    tools,
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
