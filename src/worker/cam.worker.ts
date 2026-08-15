import { planDemo, planJob, simulateJob } from "../kernel/plan";
import { parseStl } from "../kernel/stl";
import type { JobPlan } from "../kernel/types";
import type { WorkerIn, WorkerOut } from "./protocol";

self.onmessage = (event: MessageEvent<WorkerIn>) => {
  try {
    const msg = event.data;
    let plan: JobPlan;
    if (msg.type === "demo") {
      plan = planDemo(msg.machineId, msg.materialId, msg.compute);
    } else {
      const mesh = parseStl(msg.buffer);
      plan = planJob({
        partName: msg.name.replace(/\.stl$/i, ""),
        mesh,
        machineId: msg.machineId,
        materialId: msg.materialId,
        compute: msg.compute,
      });
    }
    const samples = simulateJob(plan);
    const out: WorkerOut = { type: "ready", plan, samples };
    (self as unknown as Worker).postMessage(out);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const out: WorkerOut = { type: "error", message };
    (self as unknown as Worker).postMessage(out);
  }
};
