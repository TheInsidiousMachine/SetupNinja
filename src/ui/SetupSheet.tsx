import { useMemo, useState } from "react";
import { AlertTriangle, Check, Info } from "lucide-react";
import { planSetups } from "../kernel/setupPlan";
import { formatLength } from "../kernel/units";
import type { MachineProfile, ParametricSpec, Tool, UnitSystem } from "../kernel/types";
import type { VerificationIssue } from "../kernel/verify";

export type SetupSheetProps = {
  spec: ParametricSpec | null;
  machine: MachineProfile;
  tools: Tool[];
  units: UnitSystem;
  /** Verification findings for the current plan, shown alongside setup advice. */
  issues: VerificationIssue[];
  /** Warnings the operator has explicitly overruled. */
  acknowledged: ReadonlySet<string>;
  onAcknowledge: (key: string, value: boolean) => void;
};

/**
 * The setup sheet: how to hold the part, where the datums go, what order to
 * cut in, and what is likely to bite.
 *
 * Warnings are the interactive part. A machinist who knows their setup better
 * than the model does can overrule any warning, but has to do it deliberately
 * and the override is recorded — the point is to stop a rookie mistake without
 * getting in an experienced machinist's way.
 */
export function SetupSheet({
  spec,
  machine,
  tools,
  units,
  issues,
  acknowledged,
  onAcknowledge,
}: SetupSheetProps) {
  const [open, setOpen] = useState(true);
  const plan = useMemo(
    () => (spec ? planSetups({ spec, machine, tools, units }) : null),
    [spec, machine, tools, units],
  );

  const warnings = issues.filter((issue) => issue.severity === "warning");
  const errors = issues.filter((issue) => issue.severity === "error");
  const planWarnings = plan
    ? [...plan.warnings, ...plan.setups.flatMap((setup) => setup.warnings)]
    : [];
  const outstanding =
    planWarnings.filter((text) => !acknowledged.has(text)).length +
    warnings.filter((issue) => !acknowledged.has(issue.message)).length;

  if (!plan) {
    return (
      <section className="setup-sheet" aria-labelledby="setup-sheet-title">
        <div className="section-heading">
          <div>
            <p className="step-label">Setup sheet</p>
            <h2 id="setup-sheet-title">Workholding &amp; strategy</h2>
          </div>
        </div>
        <p className="mode-note">
          Enter a guided setup to get a workholding recommendation, datum plan, and operation order.
        </p>
      </section>
    );
  }

  const length = (mm: number) => formatLength(units, mm, units === "inch" ? 3 : 1);

  return (
    <section className="setup-sheet" aria-labelledby="setup-sheet-title">
      <div className="section-heading">
        <div>
          <p className="step-label">Setup sheet</p>
          <h2 id="setup-sheet-title">Workholding &amp; strategy</h2>
          <p className="section-copy">
            A first-pass setup plan from the part geometry. Check it against the job before you cut.
          </p>
        </div>
        <span className={outstanding > 0 ? "state-pill pending" : "state-pill ready"}>
          {outstanding > 0 ? `${outstanding} to review` : "Reviewed"}
        </span>
      </div>

      <button
        type="button"
        className="sheet-toggle"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Hide setup detail" : "Show setup detail"}
      </button>

      {open ? (
        <>
          {plan.setups.map((setup) => (
            <article className="setup-step" key={setup.index}>
              <h3>
                Setup {setup.index} · {setup.title}
              </h3>

              <div className="setup-holding">
                <p className="setup-holding-label">{setup.workholding.label}</p>
                <p className="setup-holding-reason">{setup.workholding.reason}</p>
                {setup.workholding.gripDepthMm > 0 ? (
                  <p className="setup-holding-numbers">
                    Grip {length(setup.workholding.gripDepthMm)} · stands{" "}
                    {length(setup.workholding.standoffMm)} above the jaws
                  </p>
                ) : null}
                <ul className="setup-list">
                  {setup.workholding.preparation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <h4>Datums</h4>
              <ul className="setup-list">
                <li>{setup.datumX}</li>
                <li>{setup.datumY}</li>
                <li>{setup.datumZ}</li>
              </ul>

              <h4>Operation order</h4>
              <ol className="setup-list">
                {setup.operations.map((operation) => (
                  <li key={operation}>{operation}</li>
                ))}
              </ol>
            </article>
          ))}

          {plan.notes.length > 0 ? (
            <div className="setup-notes">
              {plan.notes.map((note) => (
                <p key={note}>
                  <Info aria-hidden="true" size={15} /> {note}
                </p>
              ))}
            </div>
          ) : null}
        </>
      ) : null}

      {errors.length > 0 ? (
        <div className="setup-issues" role="alert">
          <h4>Blocking</h4>
          {errors.map((issue) => (
            <p className="setup-issue error" key={issue.message}>
              <AlertTriangle aria-hidden="true" size={15} /> {issue.message}
            </p>
          ))}
        </div>
      ) : null}

      {planWarnings.length > 0 || warnings.length > 0 ? (
        <div className="setup-issues">
          <h4>Check before cutting</h4>
          <p className="section-copy">
            Tick anything you have already accounted for. Nothing here blocks the program.
          </p>
          {[...planWarnings, ...warnings.map((issue) => issue.message)].map((text) => (
            <label className="setup-issue warning" key={text}>
              <input
                type="checkbox"
                checked={acknowledged.has(text)}
                onChange={(event) => onAcknowledge(text, event.target.checked)}
              />
              <span>
                {acknowledged.has(text) ? (
                  <Check aria-hidden="true" size={15} />
                ) : (
                  <AlertTriangle aria-hidden="true" size={15} />
                )}{" "}
                {text}
              </span>
            </label>
          ))}
        </div>
      ) : null}
    </section>
  );
}
