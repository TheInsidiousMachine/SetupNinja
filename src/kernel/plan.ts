import { simulatePath } from "../adaptive/controller";
import { getMachine, getMaterial, TOOLS } from "../machine/catalog";
import { createHeightmap, fillHeightmap, heightmapMinMax } from "./heightmap";
import { rasterizeMesh } from "./mesh";
import { BRACKET, sampleBracket } from "./part";
import { generateToolpaths } from "./toolpath";
import type { ComputeTarget, Heightmap, JobPlan, Mesh, SenseSample } from "./types";

export type PlanRequest = {
  partName: string;
  heightmap?: Heightmap;
  mesh?: Mesh;
  machineId: string;
  materialId: string;
  compute: ComputeTarget;
  cellMm?: number;
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

  const paths = generateToolpaths(heightmap, TOOLS, material, machine, {
    leaveMm: 0.25,
    stockTop,
    stockPadMm: stockPad,
  });

  return {
    partName: req.partName,
    stock,
    heightmap,
    tools: TOOLS,
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
): JobPlan {
  return planJob({
    partName: BRACKET.name,
    machineId,
    materialId,
    compute,
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
