export type SafetyCheckId = "workOffset" | "tooling" | "clearance" | "dryRun";

export type SafetyChecks = Record<SafetyCheckId, boolean>;

export const EMPTY_SAFETY_CHECKS: SafetyChecks = {
  workOffset: false,
  tooling: false,
  clearance: false,
  dryRun: false,
};

const ITEMS: { id: SafetyCheckId; label: string }[] = [
  { id: "workOffset", label: "G54 X0/Y0 is the part lower-left; Z0 is the stock bottom" },
  { id: "tooling", label: "Tool numbers and tool lengths are loaded" },
  { id: "clearance", label: "Stock, clamps, and retract clearance are confirmed" },
  { id: "dryRun", label: "I will simulate or dry-run on the target control" },
];

export function SafetyReview({
  checked,
  onChange,
  disabled,
  gcode,
}: {
  checked: SafetyChecks;
  onChange: (id: SafetyCheckId, value: boolean) => void;
  disabled: boolean;
  gcode: string;
}) {
  return (
    <section className="safety-review" aria-labelledby="safety-title">
      <div className="section-heading">
        <div>
          <p className="step-label">3 · Shop review</p>
          <h2 id="safety-title">Confirm before export</h2>
        </div>
        <span className={disabled ? "state-pill pending" : "state-pill ready"}>
          {disabled ? "Run checks first" : "Ready to review"}
        </span>
      </div>

      <div className="safety-list">
        {ITEMS.map((item) => (
          <label className="safety-item" key={item.id}>
            <input
              type="checkbox"
              checked={checked[item.id]}
              disabled={disabled}
              onChange={(event) => onChange(item.id, event.target.checked)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <p className="proof-limit">
        These checks do not validate controller dialect, tool reach, workholding, or machine clearance.
        Controller simulation and operator review are required.
      </p>

      <details className="program-preview">
        <summary>Inspect proof program</summary>
        <pre tabIndex={0}>{gcode || "Generate a job to inspect its proof program."}</pre>
      </details>
    </section>
  );
}
