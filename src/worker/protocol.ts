import type {
  ComputeTarget,
  JobPlan,
  MachineProfile,
  ParametricSpec,
  SenseSample,
  Tool,
} from "../kernel/types";

export type WorkerRequest =
  | {
      type: "demo";
      machine: MachineProfile;
      materialId: string;
      compute: ComputeTarget;
      tools: Tool[];
    }
  | {
      type: "stl";
      name: string;
      buffer: ArrayBuffer;
      machine: MachineProfile;
      materialId: string;
      compute: ComputeTarget;
      tools: Tool[];
    }
  | {
      type: "parametric";
      spec: ParametricSpec;
      tools: Tool[];
      machine: MachineProfile;
      materialId: string;
      compute: ComputeTarget;
    };

export type WorkerIn = WorkerRequest & { requestId: number };

export type WorkerOut =
  | { type: "ready"; requestId: number; plan: JobPlan; samples: SenseSample[] }
  | { type: "error"; requestId: number; message: string };
