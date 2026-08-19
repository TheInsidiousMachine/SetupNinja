import { useEffect, useMemo, useRef, useState } from "react";
import { MACHINES, MATERIALS } from "../machine/catalog";
import type { ComputeTarget, JobPlan, SenseSample } from "../kernel/types";
import { deg, feed, pct } from "./format";
import { gcodeFileName, postGcode } from "../kernel/gcode";
import { MachineView } from "./MachineView";
import type { WorkerIn, WorkerOut } from "../worker/protocol";

type Status = "planning" | "ready" | "running" | "done" | "error";

export function App() {
  const workerRef = useRef<Worker | null>(null);
  const [machineId, setMachineId] = useState("knee");
  const [materialId, setMaterialId] = useState("6061");
  const [compute, setCompute] = useState<ComputeTarget>("phone");
  const [status, setStatus] = useState<Status>("planning");
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<JobPlan | null>(null);
  const [samples, setSamples] = useState<SenseSample[]>([]);
  const [playhead, setPlayhead] = useState(0);
  const [partLabel, setPartLabel] = useState("Demo bracket");
  const fileRef = useRef<HTMLInputElement>(null);
  const runRef = useRef<number | null>(null);
  const stlRef = useRef<{ name: string; buffer: ArrayBuffer } | null>(null);

  const skipPicker = useRef(true);

  useEffect(() => {
    const worker = new Worker(new URL("../worker/cam.worker.ts", import.meta.url), {
      type: "module",
    });
    workerRef.current = worker;
    worker.onmessage = (event: MessageEvent<WorkerOut>) => {
      const msg = event.data;
      if (msg.type === "error") {
        setStatus("error");
        setError(msg.message);
        return;
      }
      setPlan(msg.plan);
      setSamples(msg.samples);
      setPartLabel(msg.plan.partName);
      setPlayhead(0);
      setStatus("ready");
      setError(null);
    };
    worker.postMessage({
      type: "demo",
      machineId,
      materialId,
      compute,
    } satisfies WorkerIn);
    return () => worker.terminate();
  }, []);

  useEffect(() => {
    if (skipPicker.current) {
      skipPicker.current = false;
      return;
    }
    const worker = workerRef.current;
    if (!worker) return;
    setStatus("planning");
    if (stlRef.current) {
      const msg: WorkerIn = {
        type: "stl",
        name: stlRef.current.name,
        buffer: stlRef.current.buffer,
        machineId,
        materialId,
        compute,
      };
      worker.postMessage(msg);
      return;
    }
    const msg: WorkerIn = {
      type: "demo",
      machineId,
      materialId,
      compute,
    };
    worker.postMessage(msg);
  }, [machineId, materialId, compute]);

  useEffect(() => {
    if (status !== "running") {
      if (runRef.current) cancelAnimationFrame(runRef.current);
      return;
    }
    const start = performance.now();
    const duration = Math.min(22000, 8000 + samples.length * 0.8);
    const tick = (now: number) => {
      const t = (now - start) / duration;
      if (t >= 1) {
        setPlayhead(samples.length - 1);
        setStatus("done");
        return;
      }
      setPlayhead(Math.floor(t * Math.max(0, samples.length - 1)));
      runRef.current = requestAnimationFrame(tick);
    };
    runRef.current = requestAnimationFrame(tick);
    return () => {
      if (runRef.current) cancelAnimationFrame(runRef.current);
    };
  }, [status, samples.length]);

  const sample = useMemo(() => {
    if (!samples.length) return undefined;
    const i = Math.min(playhead, samples.length - 1);
    for (let k = i; k >= 0; k--) {
      if (samples[k].kind === "cut") return samples[k];
    }
    return samples[i];
  }, [samples, playhead]);
  const cuts = useMemo(() => samples.filter((s) => s.kind === "cut").length, [samples]);
  const machine = MACHINES.find((m) => m.id === machineId)!;
  const material = MATERIALS.find((m) => m.id === materialId)!;

  function run() {
    if (!samples.length) return;
    setPlayhead(0);
    setStatus("running");
  }

  function exportGcode() {
    if (!plan) return;
    const blob = new Blob([postGcode(plan)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = gcodeFileName(plan);
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function onStl(file: File) {
    setStatus("planning");
    setPartLabel(file.name);
    file.arrayBuffer().then((buffer) => {
      stlRef.current = { name: file.name, buffer };
      workerRef.current?.postMessage({
        type: "stl",
        name: file.name,
        buffer,
        machineId,
        materialId,
        compute,
      } satisfies WorkerIn);
    });
  }

  return (
    <div className="app">
      <header className="top">
        <div>
          <p className="eyebrow">Print to verified G-code</p>
          <h1>SetupNinja</h1>
        </div>
        <p className="machine-name">{machine.name}</p>
      </header>

      <MachineView plan={plan} samples={samples} playhead={playhead} />

      <section className="gauges" aria-label="Verified cut math">
        <Gauge label="Load" value={sample ? sample.load : 0} tone={tone(sample?.load ?? 0, 0.7, 1)} />
        <Gauge
          label="Vibe"
          value={sample ? sample.vibration : 0}
          tone={tone(sample?.chatterRisk ?? 0, 0.45, 0.7)}
        />
        <div className="gauge gauge-num">
          <span className="gauge-label">Post</span>
          <strong>{sample ? feed(sample.feedMmMin) : "—"}</strong>
          <span className="gauge-sub">
            {sample ? `${pct(sample.feedOverride)} verified` : "waiting"}
          </span>
        </div>
      </section>

      <section className="meta" aria-label="Job">
        <Chip>{partLabel}</Chip>
        <Chip>{material.name}</Chip>
        <Chip>{plan?.tools[0]?.name ?? "tool"}</Chip>
        <Chip>
          {sample
            ? `flute ${sample.flute + 1} of ${plan?.paths[0]?.tool.flutes ?? 4}`
            : "idle"}
        </Chip>
        <Chip>{sample ? `${deg(sample.engagementRad)} engage` : `${cuts} cuts`}</Chip>
      </section>

      <section className="pickers">
        <Picker
          legend="Machine"
          value={machineId}
          options={MACHINES.map((m) => ({ id: m.id, label: m.name }))}
          onChange={setMachineId}
        />
        <Picker
          legend="Material"
          value={materialId}
          options={MATERIALS.map((m) => ({ id: m.id, label: m.name }))}
          onChange={setMaterialId}
        />
        <Picker
          legend="Compute"
          value={compute}
          options={[
            { id: "phone", label: "Phone" },
            { id: "local", label: "Local" },
            { id: "cloud", label: "Cloud" },
          ]}
          onChange={(id) => setCompute(id as ComputeTarget)}
        />
      </section>

      {compute === "cloud" ? (
        <p className="note">
          Cloud or a Linux tunnel can help with print reading later. This demo still verifies
          the deterministic kernel on-device.
        </p>
      ) : (
        <p className="note">
          {status === "planning"
            ? "Solving deterministic toolpaths from setup data..."
            : status === "error"
              ? error
              : "AI can read the job. Deterministic math owns the toolpath."}
        </p>
      )}

      <div className="actions">
        <button
          className="btn primary"
          onClick={run}
          disabled={status === "planning" || status === "running" || !samples.length}
        >
          {status === "running" ? "Verifying..." : status === "done" ? "Verify again" : "Verify G-code"}
        </button>
        <button className="btn" onClick={exportGcode} disabled={!plan || status === "planning"}>
          Export proof .nc
        </button>
        <button className="btn" onClick={() => fileRef.current?.click()} disabled={status === "running"}>
          Load model
        </button>
        <input
          ref={fileRef}
          className="sr"
          type="file"
          accept=".stl,model/stl"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onStl(f);
            e.target.value = "";
          }}
        />
      </div>
    </div>
  );
}

function Gauge({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "ok" | "warn" | "bad";
}) {
  return (
    <div className={`gauge ${tone}`}>
      <span className="gauge-label">{label}</span>
      <div className="bar" aria-hidden="true">
        <span style={{ width: `${Math.min(100, value * 100)}%` }} />
      </div>
      <strong>{pct(value)}</strong>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function Picker({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (id: string) => void;
}) {
  return (
    <fieldset className="picker">
      <legend>{legend}</legend>
      <div className="seg">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={o.id === value ? "on" : ""}
            onClick={() => onChange(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function tone(v: number, warn: number, bad: number): "ok" | "warn" | "bad" {
  if (v >= bad) return "bad";
  if (v >= warn) return "warn";
  return "ok";
}
