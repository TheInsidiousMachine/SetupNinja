import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  FEEDBACK_CATEGORIES,
  FEEDBACK_SEVERITIES,
  FeedbackQueue,
  type FeedbackCategory,
  type FeedbackPayload,
  type FeedbackQueueRecord,
  type FeedbackSeverity,
} from "../feedback/feedback";

export interface FeedbackPanelProps {
  appVersion: string;
  endpoint?: string;
  diagnosticContext?: Record<string, unknown> | (() => Record<string, unknown>);
  onShareFallback?: (payload: FeedbackPayload) => void | Promise<void>;
  storageKey?: string;
  className?: string;
  title?: string;
}

const CATEGORY_LABELS: Record<FeedbackCategory, string> = {
  bug: "Bug",
  workflow: "Workflow",
  toolpath: "Toolpath",
  viewer: "3D viewer",
  export: "Export",
  other: "Other",
};

const SEVERITY_LABELS: Record<FeedbackSeverity, string> = {
  blocker: "Blocked",
  high: "Major",
  normal: "Normal",
  low: "Minor",
};

function diagnosticValue(context: FeedbackPanelProps["diagnosticContext"]) {
  return typeof context === "function" ? context() : context;
}

function feedbackState(record: FeedbackQueueRecord) {
  if (record.status === "sending") return "Sending";
  if (record.status === "sent") return "Sent";
  return record.lastError ? "Needs retry" : "Pending";
}

export function FeedbackPanel({
  appVersion,
  endpoint,
  diagnosticContext,
  onShareFallback,
  storageKey,
  className,
  title = "Send feedback",
}: FeedbackPanelProps) {
  const prefix = useId();
  const queueRef = useRef<FeedbackQueue | undefined>(undefined);
  const [records, setRecords] = useState<FeedbackQueueRecord[]>([]);
  const [category, setCategory] = useState<FeedbackCategory>("workflow");
  const [severity, setSeverity] = useState<FeedbackSeverity>("normal");
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");
  const [includeDiagnostics, setIncludeDiagnostics] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const queue = new FeedbackQueue({ appVersion, endpoint, storageKey });
    queueRef.current = queue;
    const unsubscribe = queue.subscribe(setRecords);
    void queue.sendPending();
    return () => {
      unsubscribe();
      queue.destroy();
      queueRef.current = undefined;
    };
  }, [appVersion, endpoint, storageKey]);

  const pending = records.filter((record) => record.status !== "sent");
  const sentCount = records.length - pending.length;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const queue = queueRef.current;
    if (!queue || busy) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const record = await queue.submit(
        { category, severity, summary, details },
        includeDiagnostics ? diagnosticValue(diagnosticContext) : undefined,
      );
      setSummary("");
      setDetails("");
      setMessage(
        record.status === "sent"
          ? "Feedback sent."
          : record.lastError
            ? "Feedback saved. Sending failed; retry when ready."
            : "Feedback saved offline and will retry automatically.",
      );
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Feedback could not be saved.");
    } finally {
      setBusy(false);
    }
  }

  async function retry(id: string) {
    const queue = queueRef.current;
    if (!queue) return;
    setError("");
    setMessage("Retrying feedback…");
    const record = await queue.retry(id);
    setMessage(record.status === "sent" ? "Feedback sent." : record.lastError ?? "Feedback remains pending.");
  }

  async function retryAll() {
    const queue = queueRef.current;
    if (!queue) return;
    setError("");
    setMessage("Retrying pending feedback…");
    await queue.sendPending();
    setMessage("Retry complete.");
  }

  async function share(payload: FeedbackPayload) {
    if (!onShareFallback) return;
    setError("");
    try {
      await onShareFallback(payload);
      setMessage("Feedback opened in the device share sheet.");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Feedback could not be shared.");
    }
  }

  return (
    <section className={["feedback-panel", className].filter(Boolean).join(" ")} aria-labelledby={`${prefix}-title`}>
      <header className="feedback-head">
        <h2 id={`${prefix}-title`}>{title}</h2>
        <span className="feedback-count">
          {pending.length} pending · {sentCount} sent
        </span>
      </header>

      <form onSubmit={submit} className="feedback-form">
        <div className="feedback-grid">
          <label className="feedback-field" htmlFor={`${prefix}-category`}>
            Category
            <select
              id={`${prefix}-category`}
              name="feedback-category"
              value={category}
              onChange={(event) => setCategory(event.target.value as FeedbackCategory)}
              className="feedback-control"
            >
              {FEEDBACK_CATEGORIES.map((value) => (
                <option value={value} key={value}>{CATEGORY_LABELS[value]}</option>
              ))}
            </select>
          </label>
          <label className="feedback-field" htmlFor={`${prefix}-severity`}>
            Severity
            <select
              id={`${prefix}-severity`}
              name="feedback-severity"
              value={severity}
              onChange={(event) => setSeverity(event.target.value as FeedbackSeverity)}
              className="feedback-control"
            >
              {FEEDBACK_SEVERITIES.map((value) => (
                <option value={value} key={value}>{SEVERITY_LABELS[value]}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="feedback-field" htmlFor={`${prefix}-summary`}>
          Summary
          <input
            id={`${prefix}-summary`}
            name="feedback-summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            maxLength={120}
            required
            autoComplete="off"
            className="feedback-control"
          />
        </label>

        <label className="feedback-field" htmlFor={`${prefix}-details`}>
          Details
          <textarea
            id={`${prefix}-details`}
            name="feedback-details"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            maxLength={2_000}
            rows={3}
            className="feedback-control feedback-details"
          />
        </label>

        {diagnosticContext && (
          <label className="feedback-diagnostics">
            <input
              type="checkbox"
              checked={includeDiagnostics}
              onChange={(event) => setIncludeDiagnostics(event.target.checked)}
            />
            Include app diagnostics
          </label>
        )}

        <button type="submit" disabled={busy || !summary.trim()} className="btn primary">
          {busy ? "Saving…" : endpoint ? "Send feedback" : "Save feedback"}
        </button>
      </form>

      <div aria-live="polite" role="status" className="feedback-message">
        {message}
      </div>
      {error && <p role="alert" className="feedback-error">{error}</p>}

      {pending.length > 0 && (
        <div className="feedback-pending">
          <div className="feedback-pending-head">
            <strong>Pending</strong>
            {endpoint && (
              <button type="button" onClick={() => void retryAll()} className="btn small">
                Retry all
              </button>
            )}
          </div>
          {pending.slice(0, 5).map((record) => (
            <article
              key={record.payload.id}
              className="feedback-item"
            >
              <div className="feedback-item-head">
                <span>{record.payload.summary}</span>
                <small>{feedbackState(record)}</small>
              </div>
              {record.lastError && <small className="feedback-error">{record.lastError}</small>}
              <div className="feedback-item-actions">
                {endpoint && (
                  <button
                    type="button"
                    disabled={record.status === "sending"}
                    onClick={() => void retry(record.payload.id)}
                    className="btn small"
                  >
                    Retry
                  </button>
                )}
                {onShareFallback && (
                  <button type="button" onClick={() => void share(record.payload)} className="btn small">
                    Share
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
