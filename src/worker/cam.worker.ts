import { planDemo, planJob, planParametric, simulateJob } from "../kernel/plan";
import { parseStl } from "../kernel/stl";
import type { JobPlan } from "../kernel/types";
import type { WorkerIn, WorkerOut } from "./protocol";

self.onmessage = (event: MessageEvent<WorkerIn>) => {
  try {
    const msg = event.data;
    let plan: JobPlan;
    if (msg.type === "demo") {
      plan = planDemo(msg.machineId, msg.materialId, msg.compute, msg.tools);
    } else if (msg.type === "parametric") {
      plan = planParametric(msg.spec, msg.tools, msg.machineId, msg.materialId, msg.compute);
    } else {
      const mesh = parseStl(msg.buffer);
      plan = planJob({
        partName: msg.name.replace(/\.stl$/i, ""),
        mesh,
        machineId: msg.machineId,
        materialId: msg.materialId,
        compute: msg.compute,
        tools: msg.tools,
      });
    }
    const samples = simulateJob(plan);
    const out: WorkerOut = { type: "ready", requestId: msg.requestId, plan, samples };
    (self as unknown as Worker).postMessage(out);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const out: WorkerOut = { type: "error", requestId: event.data.requestId, message };
    (self as unknown as Worker).postMessage(out);
  }
};
