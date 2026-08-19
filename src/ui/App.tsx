import { useEffect, useMemo, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { MACHINES, MATERIALS } from "../machine/catalog";
import { loadTools, resetTools, saveTools } from "../machine/toolLibrary";
import type { ComputeTarget, JobPlan, ParametricSpec, SenseSample, Tool } from "../kernel/types";
import { deg, feed, pct } from "./format";
import { gcodeFileName, postGcode } from "../kernel/gcode";
import { verifyPlan } from "../kernel/verify";
import { GuidedSetup } from "./GuidedSetup";
import { MachineView } from "./MachineView";
import {
  EMPTY_SAFETY_CHECKS,
  SafetyReview,
  type SafetyCheckId,
  type SafetyChecks,
} from "./SafetyReview";
import { ToolLibrary } from "./ToolLibrary";
import { FeedbackPanel } from "./FeedbackPanel";
import { UpdatePanel } from "./UpdatePanel";
import { readAppInfo } from "../update/update";
import type { FeedbackPayload } from "../feedback/feedback";
import type { WorkerIn, WorkerOut, WorkerRequest } from "../worker/protocol";

type Status = "planning" | "ready" | "running" | "done" | "error";
type SetupMode = "demo" | "guided" | "stl";

type NativeSaveResult = {
  ok: boolean;
  displayName?: string;
  fileName?: string;
  location?: string;
  error?: string;
};

declare global {
  interface Window {
    AndroidUsb?: {
      saveProgram(fileName: string, contents: string): string;
      appInfo?(): string;
      shareFeedback?(subject: string, body: string): string;
      openExternalUrl?(url: string): string;
      installUpdate?(apkUrl: string, sha256: string, versionCode: number, versionName: string, signature: string): string;
      updateStatus?(): string;
    };
  }
}

export function App() {
  const workerRef = useRef<Worker | null>(null);
  const [machineId, setMachineId] = useState("knee");
  const [materialId, setMaterialId] = useState("6061");
  const [compute, setCompute] = useState<ComputeTarget>("phone");
  const [mode, setMode] = useState<SetupMode>("demo");
  const [tools, setTools] = useState<Tool[]>(() => loadTools());
  const [status, setStatus] = useState<Status>("planning");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [plan, setPlan] = useState<JobPlan | null>(null);
  const [samples, setSamples] = useState<SenseSample[]>([]);
  const [playhead, setPlayhead] = useState(0);
  const [partLabel, setPartLabel] = useState("Demo bracket");
  const [safetyChecks, setSafetyChecks] = useState<SafetyChecks>(EMPTY_SAFETY_CHECKS);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const appInfo = useMemo(readAppInfo, []);
  const fileRef = useRef<HTMLInputElement>(null);
  const runRef = useRef<number | null>(null);
  const stlRef = useRef<{ name: string; buffer: ArrayBuffer } | null>(null);
  const guidedRef = useRef<ParametricSpec | null>(null);
  const skipPicker = useRef(true);
  const nextRequestId = useRef(0);
  const activeRequestId = useRef(0);

  useEffect(() => {
    const worker = new Worker(new URL("../worker/cam.worker.ts", import.meta.url), {
      type: "module",
    });
    workerRef.current = worker;
    worker.onmessage = (event: MessageEvent<WorkerOut>) => {
      const msg = event.data;
      if (msg.requestId !== activeRequestId.current) return;
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
    sendWorker({ type: "demo", machineId, materialId, compute, tools });
    return () => worker.terminate();
  }, []);

  useEffect(() => {
    if (skipPicker.current) {
      skipPicker.current = false;
      return;
    }
    if (!workerRef.current) return;
    regenerateCurrent(tools);
  }, [machineId, materialId, compute]);

  useEffect(() => {
    if (status !== "running") {
      if (runRef.current) cancelAnimationFrame(runRef.current);
      return;
    }
    const start = performance.now();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 350 : Math.min(5000, 1800 + samples.length * 0.12);
    const tick = (now: number) => {
      const t = (now - start) / duration;
      if (t >= 1) {
        setPlayhead(Math.max(0, samples.length - 1));
        setStatus("done");
        setNotice("Basic consistency checks complete. Confirm the shop review to unlock export.");
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

  useEffect(() => {
    if (!feedbackOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFeedbackOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.setTimeout(() => {
      document.querySelector<HTMLElement>(".feedback-dialog select")?.focus();
    });
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [feedbackOpen]);

  const sample = useMemo(() => {
    if (!samples.length) return undefined;
    const index = Math.min(playhead, samples.length - 1);
    for (let offset = index; offset >= 0; offset--) {
      if (samples[offset].kind === "cut") return samples[offset];
    }
    return samples[index];
  }, [samples, playhead]);
  const cuts = useMemo(() => samples.filter((item) => item.kind === "cut").length, [samples]);
  const machine = MACHINES.find((item) => item.id === machineId)!;
  const material = MATERIALS.find((item) => item.id === materialId)!;
  const gcode = useMemo(() => (plan ? postGcode(plan) : ""), [plan]);
  const reviewComplete = Object.values(safetyChecks).every(Boolean);
  const canExport = status === "done" && reviewComplete && Boolean(plan);
  const verificationProgress = samples.length
    ? Math.round((playhead / Math.max(1, samples.length - 1)) * 100)
    : 0;

  function invalidateVerification() {
    setSafetyChecks(EMPTY_SAFETY_CHECKS);
    setNotice(null);
    setPlayhead(0);
  }

  function sendWorker(message: WorkerRequest) {
    const requestId = ++nextRequestId.current;
    activeRequestId.current = requestId;
    workerRef.current?.postMessage({ ...message, requestId } satisfies WorkerIn);
  }

  function postWorker(message: WorkerRequest) {
    invalidateVerification();
    setStatus("planning");
    setError(null);
    sendWorker(message);
  }

  function regenerateCurrent(nextTools: Tool[]) {
    if (stlRef.current) {
      postWorker({
        type: "stl",
        name: stlRef.current.name,
        buffer: stlRef.current.buffer,
        machineId,
        materialId,
        compute,
        tools: nextTools,
      });
      return;
    }
    if (guidedRef.current) {
      postWorker({
        type: "parametric",
        spec: guidedRef.current,
        machineId,
        materialId,
        compute,
        tools: nextTools,
      });
      return;
    }
    if (mode === "guided") {
      setPlan(null);
      setSamples([]);
      setPartLabel("New guided job");
      invalidateVerification();
      setStatus("ready");
      return;
    }
    postWorker({ type: "demo", machineId, materialId, compute, tools: nextTools });
  }

  function onToolsChange(nextTools: Tool[]) {
    setTools(nextTools);
    saveTools(nextTools);
    regenerateCurrent(nextTools);
  }

  function onToolsReset() {
    if (!window.confirm("Reset the saved tool library to its defaults?")) return;
    const defaults = resetTools();
    setTools(defaults);
    regenerateCurrent(defaults);
  }

  function showDemo() {
    stlRef.current = null;
    guidedRef.current = null;
    setMode("demo");
    postWorker({ type: "demo", machineId, materialId, compute, tools });
  }

  function showGuided() {
    activeRequestId.current = ++nextRequestId.current;
    stlRef.current = null;
    guidedRef.current = null;
    setPlan(null);
    setSamples([]);
    setPartLabel("New guided job");
    setMode("guided");
    invalidateVerification();
    setStatus("ready");
  }

  function onGuided(spec: ParametricSpec) {
    stlRef.current = null;
    guidedRef.current = spec;
    setMode("guided");
    postWorker({ type: "parametric", spec, machineId, materialId, compute, tools });
  }

  function onGuidedDirty() {
    if (!guidedRef.current) return;
    activeRequestId.current = ++nextRequestId.current;
    guidedRef.current = null;
    setPlan(null);
    setSamples([]);
    setPartLabel("Edited guided job");
    invalidateVerification();
    setStatus("ready");
  }

  function run() {
    if (!samples.length || !plan || status === "planning") return;
    const report = verifyPlan(plan);
    if (!report.passed) {
      setSafetyChecks(EMPTY_SAFETY_CHECKS);
      setStatus("error");
      setError(report.issues[0]?.message || "The deterministic checks did not pass.");
      setNotice(null);
      return;
    }
    setSafetyChecks(EMPTY_SAFETY_CHECKS);
    setNotice(`Checking ${report.cutMoves} cutting moves and ${report.rapidMoves} retract moves.`);
    setPlayhead(0);
    setStatus("running");
  }

  function exportGcode() {
    if (!plan || !canExport) return;
    const fileName = gcodeFileName(plan);
    if (window.AndroidUsb?.saveProgram) {
      try {
        const result = JSON.parse(window.AndroidUsb.saveProgram(fileName, gcode)) as NativeSaveResult;
        if (!result.ok) throw new Error(result.error || "Android could not save the program.");
        setNotice(`Saved ${result.displayName || result.fileName || fileName} to ${result.location || "Downloads"}.`);
        return;
      } catch (saveError) {
        setNotice(saveError instanceof Error ? saveError.message : "Android could not save the program.");
        return;
      }
    }

    const blob = new Blob([gcode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setNotice(`Downloaded ${fileName}.`);
  }

  function onStl(file: File) {
    setPartLabel(file.name);
    file.arrayBuffer().then((buffer) => {
      stlRef.current = { name: file.name, buffer };
      guidedRef.current = null;
      setMode("stl");
      postWorker({
        type: "stl",
        name: file.name,
        buffer,
        machineId,
        materialId,
        compute,
        tools,
      });
    });
  }

  function onSafetyChange(id: SafetyCheckId, value: boolean) {
    setSafetyChecks((current) => ({ ...current, [id]: value }));
  }

  async function shareFeedback(payload: FeedbackPayload) {
    const body = [
      `${payload.category.toUpperCase()} · ${payload.severity.toUpperCase()}`,
      payload.summary,
      payload.details,
      payload.diagnostics ? `Diagnostics: ${JSON.stringify(payload.diagnostics)}` : "",
      `Report ${payload.id} · SetupNinja ${payload.appVersion}`,
    ].filter(Boolean).join("\n\n");
    if (window.AndroidUsb?.shareFeedback) {
      const result = JSON.parse(window.AndroidUsb.shareFeedback(`SetupNinja: ${payload.summary}`, body)) as {
        ok?: boolean;
        message?: string;
      };
      if (!result.ok) throw new Error(result.message || "Android could not share the feedback.");
      return;
    }
    if (navigator.share) {
      await navigator.share({ title: `SetupNinja: ${payload.summary}`, text: body });
      return;
    }
    throw new Error("Sharing is unavailable on this device. The report remains queued.");
  }

  function openFeedbackIssue(url: string) {
    if (window.AndroidUsb?.openExternalUrl) {
      const result = JSON.parse(window.AndroidUsb.openExternalUrl(url)) as { ok?: boolean; message?: string };
      if (!result.ok) throw new Error(result.message || "Android could not open GitHub.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const statusMessage =
    notice ||
    (status === "planning"
      ? "Building deterministic toolpaths from the current setup."
      : status === "running"
        ? `Running consistency checks: ${verificationProgress}% complete.`
        : status === "error"
          ? `${error || "The job could not be planned."} Check the setup values and try again.`
          : status === "done"
            ? "Basic consistency checks complete. Confirm the shop review to unlock export."
            : plan
              ? "Job ready. Run basic checks when the setup matches the machine."
              : "Enter the guided setup values, then generate the job.");

  return (
    <main className="app" id="main-content">
      <header className="top">
        <div>
          <p className="eyebrow">Print to proof program</p>
          <h1 translate="no">SetupNinja</h1>
        </div>
        <p className="machine-name">{machine.name}</p>
      </header>

      <ol className="flow-progress" aria-label="Job progress">
        <li className={plan ? "complete" : "active"}>Setup</li>
        <li className={status === "running" ? "active" : status === "done" ? "complete" : ""}>Checks</li>
        <li className={canExport ? "active" : ""}>Export</li>
      </ol>

      <section className="handoff-panel" aria-label="Demo status">
        <div>
          <p className="step-label">Clayton demo</p>
          <h2>Offline CAM, Online Feedback, Signed Updates</h2>
          <p>
            Try the bracket, send one issue at a time, and install newer builds after the release gates pass.
          </p>
        </div>
        <button type="button" className="btn" onClick={() => setFeedbackOpen(true)}>
          Send feedback
        </button>
      </section>

      <UpdatePanel />

      <section className="setup-section" aria-labelledby="setup-title">
        <div className="section-heading">
          <div>
            <p className="step-label">1 · Setup</p>
            <h2 id="setup-title">Describe the job</h2>
          </div>
          <span className="state-pill ready">On this phone</span>
        </div>

        <div className="mode-tabs" aria-label="Job source">
          <button type="button" aria-pressed={mode === "demo"} className={mode === "demo" ? "on" : ""} onClick={showDemo}>
            Quick demo
          </button>
          <button type="button" aria-pressed={mode === "guided"} className={mode === "guided" ? "on" : ""} onClick={showGuided}>
            Guided setup
          </button>
          <button type="button" aria-pressed={mode === "stl"} className={mode === "stl" ? "on" : ""} onClick={() => fileRef.current?.click()}>
            Import STL
          </button>
        </div>

        <div className="primary-pickers">
          <Picker
            legend="Machine"
            value={machineId}
            options={MACHINES.map((item) => ({ id: item.id, label: item.name }))}
            onChange={setMachineId}
          />
          <Picker
            legend="Material"
            value={materialId}
            options={MATERIALS.map((item) => ({ id: item.id, label: item.name }))}
            onChange={setMaterialId}
          />
        </div>

        {mode === "guided" ? (
          <GuidedSetup
            onGenerate={onGuided}
            onDirty={onGuidedDirty}
            disabled={status === "planning" || status === "running"}
          />
        ) : mode === "demo" ? (
          <p className="mode-note">Use the sample bracket to check the complete workflow before entering a shop job.</p>
        ) : (
          <p className="mode-note">Loaded model: {partLabel}</p>
        )}

        <details className="advanced-setup">
          <summary>Advanced setup &amp; tool library</summary>
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
          <ToolLibrary tools={tools} onChange={onToolsChange} onReset={onToolsReset} />
        </details>
      </section>

      <section className="review-section" aria-labelledby="review-title">
        <div className="section-heading">
          <div>
            <p className="step-label">2 · Review &amp; basic checks</p>
            <h2 id="review-title">{partLabel}</h2>
          </div>
          <span className={`state-pill ${status === "done" ? "ready" : "pending"}`}>
            {status === "done" ? "Basic checks" : status === "running" ? `${verificationProgress}%` : "Not checked"}
          </span>
        </div>

        <MachineView plan={plan} samples={samples} playhead={playhead} />

        <section className="gauges" aria-label="Cut simulation">
          <Gauge label="Load" value={sample ? sample.load : 0} tone={tone(sample?.load ?? 0, 0.7, 1)} />
          <Gauge label="Vibe" value={sample ? sample.vibration : 0} tone={tone(sample?.chatterRisk ?? 0, 0.45, 0.7)} />
          <div className="gauge gauge-num">
            <span className="gauge-label">Feed</span>
            <strong>{sample ? feed(sample.feedMmMin) : "--"}</strong>
            <span className="gauge-sub">{sample ? `${pct(sample.feedOverride)} simulated` : "waiting"}</span>
          </div>
        </section>

        <div className="meta" aria-label="Current job facts">
          <Chip>{material.name}</Chip>
          <Chip>{plan?.tools[0]?.name ?? "tool"}</Chip>
          <Chip>{sample ? `flute ${sample.flute + 1} of ${plan?.paths[0]?.tool.flutes ?? 4}` : `${cuts} cuts`}</Chip>
          <Chip>{sample ? `${deg(sample.engagementRad)} engage` : `${plan?.paths.length ?? 0} paths`}</Chip>
        </div>

        <p className={`status-message ${status === "error" ? "error" : ""}`} role="status" aria-live="polite">
          {statusMessage}
        </p>
      </section>

      <SafetyReview checked={safetyChecks} onChange={onSafetyChange} disabled={status !== "done"} gcode={gcode} />

      {feedbackOpen ? (
        <div className="feedback-dialog-backdrop" role="presentation" onMouseDown={() => setFeedbackOpen(false)}>
          <section
            className="feedback-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Send feedback"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="icon-button feedback-close" aria-label="Close feedback" title="Close" onClick={() => setFeedbackOpen(false)}>
              <X aria-hidden="true" />
            </button>
            <FeedbackPanel
              appVersion={appInfo.versionName}
              endpoint={appInfo.feedbackEndpoint || undefined}
              issueUrl={appInfo.feedbackIssueUrl || undefined}
              diagnosticContext={() => ({
                screen: "job-review",
                status,
                mode,
                machine: machine.id,
                material: material.id,
                part: partLabel,
                paths: plan?.paths.length ?? 0,
                samples: samples.length,
                viewport: `${window.innerWidth}x${window.innerHeight}`,
              })}
              onShareFallback={shareFeedback}
              onOpenIssue={openFeedbackIssue}
            />
          </section>
        </div>
      ) : null}

      <div className="actions" aria-label="Job actions">
        <button className="btn primary" onClick={run} disabled={status === "planning" || status === "running" || !samples.length}>
          {status === "running" ? `Checking ${verificationProgress}%` : status === "done" ? "Check again" : "Run checks"}
        </button>
        <button className="btn export" onClick={exportGcode} disabled={!canExport}>
          Export proof .nc
        </button>
        <button type="button" className="btn icon-action" aria-label="Open feedback" title="Open feedback" onClick={() => setFeedbackOpen(true)}>
          <MessageSquare aria-hidden="true" />
        </button>
      </div>

      <input
        ref={fileRef}
        className="sr"
        type="file"
        name="stl-file"
        aria-label="STL model file"
        accept=".stl,model/stl"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onStl(file);
          event.target.value = "";
        }}
      />
    </main>
  );
}

function Gauge({ label, value, tone: gaugeTone }: { label: string; value: number; tone: "ok" | "warn" | "bad" }) {
  return (
    <div className={`gauge ${gaugeTone}`}>
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
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={option.id === value}
            className={option.id === value ? "on" : ""}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function tone(value: number, warn: number, bad: number): "ok" | "warn" | "bad" {
  if (value >= bad) return "bad";
  if (value >= warn) return "warn";
  return "ok";
}
