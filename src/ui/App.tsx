import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Download, HardDrive, MessageSquare, Play, Usb, X } from "lucide-react";
import { MATERIALS } from "../machine/catalog";
import { loadTools, resetTools, saveTools } from "../machine/toolLibrary";
import { loadMachines, resetMachines, saveMachines } from "../machine/machineProfiles";
import type {
  ComputeTarget,
  HolePattern,
  JobPlan,
  MachineProfile,
  ParametricSpec,
  SenseSample,
  Tool,
} from "../kernel/types";
import { deg, feed, pct } from "./format";
import { gcodeFileName, postGcode } from "../kernel/gcode";
import { resolvePost } from "../kernel/postConfig";
import { brepFromParametric } from "../kernel/brep";
import { stepFileName, writeStep } from "../kernel/step";
import { buildFat16Image, fat16ImageName } from "../transfer/fat16";
import { verifyPlan, type VerificationIssue } from "../kernel/verify";
import { GuidedSetup } from "./GuidedSetup";
import { MachineProfiles } from "./MachineProfiles";
import { HoleSetup } from "./HoleSetup";
import { GcodeEditor } from "./GcodeEditor";
import { SetupSheet } from "./SetupSheet";
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

/**
 * The interface is split by what the machinist is doing, not by what the code
 * is made of. Everything used to sit on one scroll, which meant the tool
 * library and the transfer options competed for attention with the part.
 */
type Workspace = "job" | "tooling" | "review" | "program";

const WORKSPACES: { id: Workspace; label: string }[] = [
  { id: "job", label: "Job" },
  { id: "tooling", label: "Tooling" },
  { id: "review", label: "Review" },
  { id: "program", label: "Program" },
];

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
      chooseRemovableMedia?(): string;
      removableMediaTargets?(): string;
      writeToRemovableMedia?(treeUri: string, fileName: string, contents: string): string;
    };
    onRemovableMediaPicked?: (result: { ok: boolean; uri?: string; name?: string; message?: string }) => void;
  }
}

export function App() {
  const workerRef = useRef<Worker | null>(null);
  const [machines, setMachines] = useState<MachineProfile[]>(() => loadMachines());
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
  const [issues, setIssues] = useState<VerificationIssue[]>([]);
  const [acknowledged, setAcknowledged] = useState<ReadonlySet<string>>(new Set());
  const [guidedSpec, setGuidedSpec] = useState<ParametricSpec | null>(null);
  const [holes, setHoles] = useState<HolePattern[]>([]);
  const [mediaTarget, setMediaTarget] = useState<{ uri: string; name: string } | null>(null);
  const [workspace, setWorkspace] = useState<Workspace>("job");
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
    sendWorker({ type: "demo", machine, materialId, compute, tools });
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

  // Removable media: pick the card's folder once, then write without prompting.
  useEffect(() => {
    if (!window.AndroidUsb?.removableMediaTargets) return;
    try {
      const targets = JSON.parse(window.AndroidUsb.removableMediaTargets()) as {
        uri: string;
        name: string;
        available: boolean;
      }[];
      const usable = targets.filter((target) => target.available).at(-1);
      if (usable) setMediaTarget({ uri: usable.uri, name: usable.name });
    } catch {
      // No grants yet, or the card was unplugged. The button will re-prompt.
    }
  }, []);

  useEffect(() => {
    window.onRemovableMediaPicked = (result) => {
      if (result.ok && result.uri) {
        setMediaTarget({ uri: result.uri, name: result.name ?? "removable media" });
        setNotice(`Ready to write to ${result.name ?? "the card"}.`);
      } else {
        setNotice(result.message || "No folder was chosen.");
      }
    };
    return () => {
      window.onRemovableMediaPicked = undefined;
    };
  }, []);

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
  const machine = machines.find((item) => item.id === machineId) ?? machines[0];
  const material = MATERIALS.find((item) => item.id === materialId)!;
  const units = resolvePost(machine).units;
  const gcode = useMemo(() => (plan ? postGcode(plan) : ""), [plan]);
  const reviewComplete = Object.values(safetyChecks).every(Boolean);
  const canExport = status === "done" && reviewComplete && Boolean(plan);
  const verificationProgress = samples.length
    ? Math.round((playhead / Math.max(1, samples.length - 1)) * 100)
    : 0;
  const reviewCount = Object.values(safetyChecks).filter(Boolean).length;
  const nextStep =
    status === "planning"
      ? "Planning the current job"
      : status === "running"
        ? `Checking motion ${verificationProgress}%`
        : status === "done" && !reviewComplete
          ? `Confirm shop review ${reviewCount}/4`
          : canExport
            ? "Ready to export proof program"
            : plan
              ? "Run checks before export"
              : "Choose a job source";

  function invalidateVerification() {
    setSafetyChecks(EMPTY_SAFETY_CHECKS);
    setIssues([]);
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
        machine,
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
        machine,
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
    postWorker({ type: "demo", machine, materialId, compute, tools: nextTools });
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

  function onMachinesChange(nextMachines: MachineProfile[]) {
    setMachines(nextMachines);
    saveMachines(nextMachines);
    regenerateCurrent(tools);
  }

  function onMachinesReset() {
    if (!window.confirm("Reset all machine profiles to their defaults?")) return;
    const defaults = resetMachines();
    setMachines(defaults);
    setMachineId(defaults[0].id);
  }

  function onAcknowledge(key: string, value: boolean) {
    setAcknowledged((current) => {
      const next = new Set(current);
      if (value) next.add(key);
      else next.delete(key);
      return next;
    });
  }

  /** Hand a generated file to the operator through Android storage or the browser. */
  function deliver(fileName: string, contents: string | Uint8Array, label: string) {
    if (typeof contents === "string" && window.AndroidUsb?.saveProgram) {
      try {
        const result = JSON.parse(window.AndroidUsb.saveProgram(fileName, contents)) as NativeSaveResult;
        if (!result.ok) throw new Error(result.error || "Android could not save the file.");
        setNotice(`Saved ${result.displayName || result.fileName || fileName} to ${result.location || "Downloads"}.`);
        return;
      } catch (saveError) {
        setNotice(saveError instanceof Error ? saveError.message : "Android could not save the file.");
        return;
      }
    }

    const blob =
      typeof contents === "string"
        ? new Blob([contents], { type: "text/plain;charset=utf-8" })
        : new Blob([contents as BlobPart], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setNotice(`Downloaded ${label}.`);
  }

  /** Ask Android for the card's folder; the result arrives via the callback above. */
  function chooseMedia() {
    if (!window.AndroidUsb?.chooseRemovableMedia) {
      setNotice("Writing to a card is available in the Android app.");
      return;
    }
    try {
      const result = JSON.parse(window.AndroidUsb.chooseRemovableMedia()) as { ok?: boolean; message?: string };
      if (!result.ok) setNotice(result.message || "Android could not open the folder picker.");
    } catch {
      setNotice("Android could not open the folder picker.");
    }
  }

  /**
   * Write the program straight onto a USB stick or CF card on the phone's OTG
   * port — the path from phone to control without a laptop in between.
   */
  function writeToCard() {
    if (!plan || !canExport) return;
    if (!window.AndroidUsb?.writeToRemovableMedia) {
      setNotice("Writing to a card is available in the Android app.");
      return;
    }
    if (!mediaTarget) {
      chooseMedia();
      return;
    }
    try {
      const result = JSON.parse(
        window.AndroidUsb.writeToRemovableMedia(mediaTarget.uri, gcodeFileName(plan), gcode),
      ) as { ok?: boolean; fileName?: string; location?: string; bytes?: number; message?: string };
      if (!result.ok) {
        setNotice(result.message || "The card would not accept the program.");
        return;
      }
      setNotice(`Wrote ${result.fileName} (${result.bytes} bytes) to ${result.location}.`);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "The card would not accept the program.");
    }
  }

  /** Write the guided part as a STEP solid so it can go straight into CAD. */
  function exportStep() {
    if (!guidedSpec) {
      setNotice("STEP export needs a guided setup part. Model geometry is not solid yet.");
      return;
    }
    const brep = brepFromParametric(guidedSpec);
    if (!brep.ok) {
      setNotice(`STEP export failed: ${brep.reason}`);
      return;
    }
    const step = writeStep(brep.brep, { timestamp: new Date().toISOString().slice(0, 19) });
    if (!step.ok) {
      setNotice(`STEP export failed: ${step.reason}`);
      return;
    }
    deliver(stepFileName(guidedSpec.partName), step.step, `${stepFileName(guidedSpec.partName)} (millimetre STEP)`);
  }

  /**
   * Build a FAT16 image the operator writes to a stick or CF card once.
   * Android cannot present itself as USB mass storage without root, so the
   * image is the honest way to get a program onto a control that needs FAT16.
   */
  function exportUsbImage() {
    if (!plan || !canExport) return;
    const now = new Date();
    const result = buildFat16Image([{ name: gcodeFileName(plan), contents: gcode }], {
      label: "SETUPNINJA",
      date: {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      },
    });
    if (!result.ok) {
      setNotice(`USB image failed: ${result.reason}`);
      return;
    }
    const stored = result.entries[0]?.storedName ?? "PROGRAM.NC";
    deliver(fat16ImageName(plan.partName), result.image, `FAT16 image containing ${stored}`);
  }

  function showDemo() {
    stlRef.current = null;
    guidedRef.current = null;
    setGuidedSpec(null);
    setMode("demo");
    postWorker({ type: "demo", machine, materialId, compute, tools });
  }

  function showGuided() {
    activeRequestId.current = ++nextRequestId.current;
    stlRef.current = null;
    guidedRef.current = null;
    setGuidedSpec(null);
    setPlan(null);
    setSamples([]);
    setPartLabel("New guided job");
    setMode("guided");
    invalidateVerification();
    setStatus("ready");
  }

  function onGuided(baseSpec: ParametricSpec) {
    const spec: ParametricSpec = { ...baseSpec, holes: holes.length > 0 ? holes : undefined };
    stlRef.current = null;
    guidedRef.current = spec;
    setGuidedSpec(spec);
    setMode("guided");
    postWorker({ type: "parametric", spec, machine, materialId, compute, tools });
  }

  function onGuidedDirty() {
    if (!guidedRef.current) return;
    activeRequestId.current = ++nextRequestId.current;
    guidedRef.current = null;
    setGuidedSpec(null);
    setPlan(null);
    setSamples([]);
    setPartLabel("Edited guided job");
    invalidateVerification();
    setStatus("ready");
  }

  function run() {
    if (!samples.length || !plan || status === "planning") return;
    const report = verifyPlan(plan);
    setIssues(report.issues);
    if (!report.passed) {
      setSafetyChecks(EMPTY_SAFETY_CHECKS);
      setStatus("error");
      const blocking = report.issues.find((issue) => issue.severity === "error");
      setError(blocking?.message || "The deterministic checks did not pass.");
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
      setGuidedSpec(null);
      setMode("stl");
      postWorker({
        type: "stl",
        name: file.name,
        buffer,
        machine,
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
        <div className="top-meta">
          <p className="machine-name">{machine.name}</p>
          <p className="machine-units">{units === "inch" ? "SAE / inch" : "Metric / mm"}</p>
        </div>
      </header>

      <nav className="workspace-tabs" aria-label="Workspace">
        {WORKSPACES.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={workspace === item.id}
            className={workspace === item.id ? "on" : ""}
            onClick={() => setWorkspace(item.id)}
          >
            {item.label}
            {item.id === "review" && status === "done" ? <i className="lamp ok" aria-hidden="true" /> : null}
            {item.id === "program" && canExport ? <i className="lamp ok" aria-hidden="true" /> : null}
          </button>
        ))}
      </nav>

      {workspace === "job" ? (
      <>
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
            options={machines.map((item) => ({ id: item.id, label: item.name }))}
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
          <>
            <GuidedSetup
              onGenerate={onGuided}
              onDirty={onGuidedDirty}
              units={units}
              disabled={status === "planning" || status === "running"}
            />
            <details className="advanced-setup" open={holes.length > 0}>
              <summary>Holes &amp; threads {holes.length > 0 ? `(${holes.length})` : ""}</summary>
              <HoleSetup
                patterns={holes}
                units={units}
                onChange={(next) => {
                  setHoles(next);
                  onGuidedDirty();
                }}
              />
            </details>
          </>
        ) : mode === "demo" ? (
          <p className="mode-note">Use the sample bracket to check the complete workflow before entering a shop job.</p>
        ) : (
          <p className="mode-note">Loaded model: {partLabel}</p>
        )}

      </section>
      </>
      ) : null}

      {workspace === "tooling" ? (
        <section className="setup-section" aria-labelledby="tooling-title">
          <div className="section-heading">
            <div>
              <p className="step-label">Tooling</p>
              <h2 id="tooling-title">Machine &amp; tools</h2>
              <p className="section-copy">
                Post settings travel with the machine, because every control wants slightly different
                G-code. Tool geometry drives the holder clearance and rigidity checks.
              </p>
            </div>
          </div>
        <details className="advanced-setup">
          <summary>Machine profile &amp; post settings</summary>
          <MachineProfiles
            machines={machines}
            activeId={machine.id}
            onChange={onMachinesChange}
            onSelect={setMachineId}
            onReset={onMachinesReset}
          />
        </details>

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
      ) : null}

      {workspace === "review" ? (
      <>
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
            <strong>{sample ? feed(sample.feedMmMin, units) : "--"}</strong>
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
        <div className={canExport ? "next-step ready" : "next-step"} aria-label="Next required action">
          <span>Next</span>
          <strong>{nextStep}</strong>
        </div>
      </section>

      <SetupSheet
        spec={guidedSpec}
        machine={machine}
        tools={tools}
        units={units}
        issues={issues}
        acknowledged={acknowledged}
        onAcknowledge={onAcknowledge}
      />

      </>
      ) : null}

      {workspace === "program" ? (
      <>
      <SafetyReview checked={safetyChecks} onChange={onSafetyChange} disabled={status !== "done"} gcode={gcode} />

      <GcodeEditor machine={machine} units={units} onExport={(name, contents) => deliver(name, contents, name)} />

      <section className="transfer-section" aria-labelledby="transfer-title">
        <div className="section-heading">
          <div>
            <p className="step-label">4 · Transfer &amp; CAD</p>
            <h2 id="transfer-title">Get it off the phone</h2>
          </div>
        </div>

        <div className="transfer-option">
          <div>
            <p className="transfer-label">Write to a USB stick or CF card</p>
            <p className="section-copy">
              Plug the card into the phone with an OTG adapter and write the program straight onto it.
              {mediaTarget ? ` Currently writing to ${mediaTarget.name}.` : " Pick the card's folder once; after that it writes without asking."}
            </p>
          </div>
          <div className="transfer-buttons">
            <button className="btn export" onClick={writeToCard} disabled={!canExport}>
              <Usb aria-hidden="true" />
              {mediaTarget ? "Write to card" : "Choose card"}
            </button>
            {mediaTarget ? (
              <button className="btn small" onClick={chooseMedia}>
                Change
              </button>
            ) : null}
          </div>
        </div>

        <div className="transfer-option">
          <div>
            <p className="transfer-label">FAT16 disk image</p>
            <p className="section-copy">
              Older controls only read FAT16 media under 2 GB with 8.3 file names. Android cannot pretend
              to be a USB drive without root, so write this image to a stick or CF card once — after that
              the stick stays formatted and only the programs change.
            </p>
          </div>
          <button className="btn" onClick={exportUsbImage} disabled={!canExport}>
            <HardDrive aria-hidden="true" />
            Build image
          </button>
        </div>

        <div className="transfer-option">
          <div>
            <p className="transfer-label">STEP solid</p>
            <p className="section-copy">
              Exports the guided part as a millimetre STEP solid so it opens in any CAD package. Available
              for guided setups, where the geometry is exact.
            </p>
          </div>
          <button className="btn" onClick={exportStep} disabled={!guidedSpec}>
            <Box aria-hidden="true" />
            Export .step
          </button>
        </div>
      </section>

      </>
      ) : null}

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
          <Play aria-hidden="true" />
          {status === "running" ? `Checking ${verificationProgress}%` : status === "done" ? "Check again" : "Run checks"}
        </button>
        <button className="btn export" onClick={exportGcode} disabled={!canExport}>
          <Download aria-hidden="true" />
          Export proof .nc
        </button>
        <button type="button" className="btn icon-action" aria-label="Send feedback" title="Send feedback" onClick={() => setFeedbackOpen(true)}>
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
