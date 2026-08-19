import { useMemo, useRef, useState } from "react";
import { AlertTriangle, Download, FileUp, Info, Undo2 } from "lucide-react";
import { lintGcode, type LintFinding } from "../gcode/lint";
import {
  addSafetyPreamble,
  convertUnits,
  scaleFeeds,
  scaleSpeeds,
  setWorkOffset,
  summarizeGcode,
  type EditResult,
} from "../gcode/edit";
import { formatFeed, formatLength } from "../kernel/units";
import type { MachineProfile, UnitSystem } from "../kernel/types";

export type GcodeEditorProps = {
  machine: MachineProfile;
  units: UnitSystem;
  onExport: (fileName: string, gcode: string) => void;
};

/**
 * Import, review and edit an existing program.
 *
 * This is for the file that already exists — posted from CAM, handed over on a
 * stick, inherited from whoever ran the job last time. The review names the
 * things that hurt a machine, and the edits change one parameter at a time
 * without rewriting anything else in the file.
 */
export function GcodeEditor({ machine, units, onExport }: GcodeEditorProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [source, setSource] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [notes, setNotes] = useState<string[]>([]);
  const [feedPercent, setFeedPercent] = useState(100);
  const [speedPercent, setSpeedPercent] = useState(100);
  const fileRef = useRef<HTMLInputElement>(null);

  const report = useMemo(() => (source ? lintGcode(source, { machine }) : null), [source, machine]);
  const summary = useMemo(() => (source ? summarizeGcode(source) : null), [source]);

  function load(file: File) {
    file.text().then((text) => {
      setSource(text);
      setFileName(file.name);
      setHistory([]);
      setNotes([`Loaded ${file.name}.`]);
      setFeedPercent(100);
      setSpeedPercent(100);
    });
  }

  function apply(result: EditResult) {
    if (result.changed === 0) {
      setNotes(result.notes);
      return;
    }
    setHistory((current) => [...current, source]);
    setSource(result.gcode);
    setNotes(result.notes);
  }

  function undo() {
    setHistory((current) => {
      if (current.length === 0) return current;
      const previous = current[current.length - 1];
      setSource(previous);
      setNotes(["Reverted the last edit."]);
      return current.slice(0, -1);
    });
  }

  return (
    <section className="gcode-editor" aria-labelledby="gcode-editor-title">
      <div className="section-heading">
        <div>
          <p className="step-label">Existing program</p>
          <h2 id="gcode-editor-title">Import, review &amp; edit</h2>
          <p className="section-copy">
            Open a program posted from CAM or pulled off a machine. The review flags what damages a
            machine; edits change one parameter and leave the rest of the file alone.
          </p>
        </div>
        {report ? (
          <span className={report.errorCount > 0 ? "state-pill pending" : "state-pill ready"}>
            {report.errorCount > 0
              ? `${report.errorCount} blocking`
              : report.warningCount > 0
                ? `${report.warningCount} to check`
                : "Clean"}
          </span>
        ) : null}
      </div>

      <div className="editor-actions">
        <button type="button" className="btn" onClick={() => fileRef.current?.click()}>
          <FileUp aria-hidden="true" />
          {fileName ? "Open another" : "Open a program"}
        </button>
        {source ? (
          <>
            <button type="button" className="btn" onClick={undo} disabled={history.length === 0}>
              <Undo2 aria-hidden="true" />
              Undo
            </button>
            <button
              type="button"
              className="btn export"
              onClick={() => onExport(editedName(fileName), source)}
            >
              <Download aria-hidden="true" />
              Save edited
            </button>
          </>
        ) : null}
      </div>

      <input
        ref={fileRef}
        className="sr"
        type="file"
        name="gcode-file"
        aria-label="G-code program file"
        accept=".nc,.gcode,.tap,.ngc,.cnc,.txt,text/plain"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) load(file);
          event.target.value = "";
        }}
      />

      {summary && source ? (
        <>
          <div className="editor-summary">
            <Fact label="File" value={fileName ?? "program"} />
            <Fact label="Blocks" value={String(summary.lines)} />
            <Fact label="Units" value={summary.unitsDeclared ? (summary.units === "inch" ? "Inch (G20)" : "Metric (G21)") : "Not declared"} />
            <Fact label="Tools" value={summary.tools.length > 0 ? summary.tools.map((t) => `T${t}`).join(" ") : "none"} />
            <Fact label="Max feed" value={summary.maxFeedMmMin > 0 ? formatFeed(units, summary.maxFeedMmMin) : "--"} />
            <Fact label="Max speed" value={summary.maxRpm > 0 ? `${Math.round(summary.maxRpm)} rpm` : "--"} />
            <Fact label="Est. run" value={formatDuration(summary.estimatedSeconds)} />
            {summary.extents ? (
              <Fact
                label="Extent"
                value={
                  `${formatLength(units, summary.extents.max.x - summary.extents.min.x, units === "inch" ? 2 : 0)} x ` +
                  `${formatLength(units, summary.extents.max.y - summary.extents.min.y, units === "inch" ? 2 : 0)}`
                }
              />
            ) : null}
          </div>

          <div className="editor-edits">
            <h4>Change a parameter</h4>

            <div className="editor-edit-row">
              <label className="field">
                <span>Feed %</span>
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={feedPercent}
                  onChange={(event) => setFeedPercent(Number(event.target.value))}
                />
              </label>
              <button type="button" className="btn small" onClick={() => apply(scaleFeeds(source, feedPercent))}>
                Apply to feeds
              </button>
            </div>

            <div className="editor-edit-row">
              <label className="field">
                <span>Speed %</span>
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={speedPercent}
                  onChange={(event) => setSpeedPercent(Number(event.target.value))}
                />
              </label>
              <button type="button" className="btn small" onClick={() => apply(scaleSpeeds(source, speedPercent))}>
                Apply to speeds
              </button>
            </div>

            <div className="editor-edit-row">
              <label className="field">
                <span>Work offset</span>
                <select
                  defaultValue=""
                  onChange={(event) => {
                    if (event.target.value) apply(setWorkOffset(source, event.target.value));
                    event.target.value = "";
                  }}
                >
                  <option value="">Change to…</option>
                  {["G54", "G55", "G56", "G57", "G58", "G59"].map((offset) => (
                    <option key={offset} value={offset}>
                      {offset}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="editor-edit-row wrap">
              <button
                type="button"
                className="btn small"
                onClick={() => apply(convertUnits(source, summary.units === "inch" ? "mm" : "inch"))}
              >
                Convert to {summary.units === "inch" ? "metric" : "inch"}
              </button>
              <button
                type="button"
                className="btn small"
                onClick={() => apply(addSafetyPreamble(source, summary.units))}
              >
                Add safety preamble
              </button>
            </div>
          </div>

          {notes.length > 0 ? (
            <div className="setup-notes">
              {notes.map((note) => (
                <p key={note}>
                  <Info aria-hidden="true" size={15} /> {note}
                </p>
              ))}
            </div>
          ) : null}

          {report && report.findings.length > 0 ? (
            <div className="setup-issues">
              <h4>Program review</h4>
              {report.findings.map((finding) => (
                <Finding key={`${finding.code}-${finding.line}`} finding={finding} />
              ))}
            </div>
          ) : report ? (
            <p className="mode-note">The review found nothing to flag in this program.</p>
          ) : null}

          <details className="program-preview">
            <summary>Inspect the program ({summary.lines} blocks)</summary>
            <pre tabIndex={0}>{source}</pre>
          </details>
        </>
      ) : null}
    </section>
  );
}

function Finding({ finding }: { finding: LintFinding }) {
  const tone = finding.severity === "error" ? "error" : finding.severity === "warning" ? "warning" : "";
  return (
    <p className={`setup-issue ${tone}`}>
      {finding.severity === "info" ? (
        <Info aria-hidden="true" size={15} />
      ) : (
        <AlertTriangle aria-hidden="true" size={15} />
      )}
      <span>
        {finding.line !== null ? <strong>Line {finding.line}: </strong> : null}
        {finding.message}
      </span>
    </p>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="editor-fact">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "--";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.round(seconds % 60);
  if (minutes < 60) return `${minutes}m ${remaining}s`;
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function editedName(fileName: string | null): string {
  if (!fileName) return "edited-program.nc";
  const dot = fileName.lastIndexOf(".");
  const stem = dot > 0 ? fileName.slice(0, dot) : fileName;
  const extension = dot > 0 ? fileName.slice(dot) : ".nc";
  return `${stem}-edited${extension}`;
}
