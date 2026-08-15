import type { ComputeTarget, JobPlan, SenseSample } from "../kernel/types";

export type WorkerIn =
  | {
      type: "demo";
      machineId: string;
      materialId: string;
      compute: ComputeTarget;
    }
  | {
      type: "stl";
      name: string;
      buffer: ArrayBuffer;
      machineId: string;
      materialId: string;
      compute: ComputeTarget;
    };

export type WorkerOut =
  | { type: "ready"; plan: JobPlan; samples: SenseSample[] }
  | { type: "error"; message: string };
