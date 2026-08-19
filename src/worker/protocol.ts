import type { ComputeTarget, JobPlan, ParametricSpec, SenseSample, Tool } from "../kernel/types";

export type WorkerRequest =
  | {
      type: "demo";
      machineId: string;
      materialId: string;
      compute: ComputeTarget;
      tools: Tool[];
    }
  | {
      type: "stl";
      name: string;
      buffer: ArrayBuffer;
      machineId: string;
      materialId: string;
      compute: ComputeTarget;
      tools: Tool[];
    }
  | {
      type: "parametric";
      spec: ParametricSpec;
      tools: Tool[];
      machineId: string;
      materialId: string;
      compute: ComputeTarget;
    };

export type WorkerIn = WorkerRequest & { requestId: number };

export type WorkerOut =
  | { type: "ready"; requestId: number; plan: JobPlan; samples: SenseSample[] }
  | { type: "error"; requestId: number; message: string };
