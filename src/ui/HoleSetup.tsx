import { Plus, Trash2 } from "lucide-react";
import { THREADS } from "../kernel/holes";
import { lengthIn, lengthToMm, lengthUnitLabel } from "../kernel/units";
import type { HoleLayout, HoleOperation, HolePattern, UnitSystem } from "../kernel/types";

export type HoleSetupProps = {
  patterns: HolePattern[];
  units: UnitSystem;
  onChange: (patterns: HolePattern[]) => void;
};

type LayoutKind = HoleLayout["kind"];

const LAYOUT_LABELS: Record<LayoutKind, string> = {
  single: "Single",
  grid: "Grid",
  "bolt-circle": "Bolt circle",
  line: "Line",
};

const OPERATIONS: { id: HoleOperation; label: string; hint: string }[] = [
  { id: "spot", label: "Spot", hint: "Chamfers the mouth so the drill cannot walk" },
  { id: "drill", label: "Drill", hint: "Pecks automatically past three diameters deep" },
  { id: "ream", label: "Ream", hint: "Finishes to size; needs a reamer in the library" },
  { id: "tap", label: "Tap", hint: "Drills at tap-drill size and feeds at the thread pitch" },
];

/**
 * Hole pattern entry.
 *
 * Most parts are mostly holes, so this is the fastest path from a print to a
 * program. A tapped pattern only needs the thread called out — the tap drill
 * size comes from the thread table rather than the operator.
 */
export function HoleSetup({ patterns, units, onChange }: HoleSetupProps) {
  // Patterns are stored in millimetres, so switching the machine's unit system
  // only changes how these fields are displayed.
  const unit = lengthUnitLabel(units);
  const step = units === "inch" ? 0.0625 : 0.5;

  function update(id: string, changes: Partial<HolePattern>) {
    onChange(patterns.map((pattern) => (pattern.id === id ? { ...pattern, ...changes } : pattern)));
  }

  function updateLayout(id: string, changes: Record<string, number | string>) {
    onChange(
      patterns.map((pattern) =>
        pattern.id === id
          ? ({ ...pattern, layout: { ...pattern.layout, ...changes } as HoleLayout } as HolePattern)
          : pattern,
      ),
    );
  }

  function addPattern() {
    const id = `holes-${Date.now().toString(36)}-${patterns.length}`;
    onChange([
      ...patterns,
      {
        id,
        layout: { kind: "single", x: lengthToMm(units, units === "inch" ? 0.5 : 15), y: lengthToMm(units, units === "inch" ? 0.5 : 15) },
        diameterMm: lengthToMm(units, units === "inch" ? 0.25 : 6),
        depthBelowTopMm: lengthToMm(units, units === "inch" ? 0.25 : 6),
        through: true,
        operations: ["spot", "drill"],
      },
    ]);
  }

  function removePattern(id: string) {
    onChange(patterns.filter((pattern) => pattern.id !== id));
  }

  function toggleOperation(pattern: HolePattern, operation: HoleOperation) {
    const has = pattern.operations.includes(operation);
    const next = has
      ? pattern.operations.filter((item) => item !== operation)
      : [...pattern.operations, operation];
    // Keep the shop order regardless of the order they were tapped in.
    const order: HoleOperation[] = ["spot", "drill", "peck", "ream", "tap"];
    next.sort((a, b) => order.indexOf(a) - order.indexOf(b));
    update(pattern.id, {
      operations: next,
      threadSpec: next.includes("tap") ? (pattern.threadSpec ?? THREADS[4].spec) : undefined,
    });
  }

  return (
    <div className="hole-setup">
      {patterns.length === 0 ? (
        <p className="mode-note">No holes yet. Most parts are mostly holes — add a pattern to drill or tap.</p>
      ) : null}

      {patterns.map((pattern, index) => {
        const value = (mm: number) => round(lengthIn(units, mm), units);
        const toMm = (raw: number) => lengthToMm(units, raw);

        return (
          <article className="hole-pattern" key={pattern.id}>
            <div className="hole-pattern-head">
              <h4>Holes {index + 1}</h4>
              <button
                type="button"
                className="icon-button"
                aria-label={`Remove hole pattern ${index + 1}`}
                title="Remove this pattern"
                onClick={() => removePattern(pattern.id)}
              >
                <Trash2 aria-hidden="true" size={16} />
              </button>
            </div>

            <fieldset className="field-group">
              <legend>Pattern</legend>
              <div className="seg four">
                {(Object.keys(LAYOUT_LABELS) as LayoutKind[]).map((kind) => (
                  <button
                    key={kind}
                    type="button"
                    aria-pressed={pattern.layout.kind === kind}
                    className={pattern.layout.kind === kind ? "on" : ""}
                    onClick={() => update(pattern.id, { layout: defaultLayout(kind, pattern.layout, units) })}
                  >
                    {LAYOUT_LABELS[kind]}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="field-row">{layoutFields(pattern, value, toMm, updateLayout, step)}</div>

            <div className="field-row">
              <label className="field">
                <span>{pattern.operations.includes("tap") ? `Thread` : `Diameter (${unit})`}</span>
                {pattern.operations.includes("tap") ? (
                  <select
                    value={pattern.threadSpec ?? THREADS[4].spec}
                    onChange={(event) => {
                      const thread = THREADS.find((t) => t.spec === event.target.value)!;
                      update(pattern.id, { threadSpec: thread.spec, diameterMm: thread.majorDiameterMm });
                    }}
                  >
                    {THREADS.map((thread) => (
                      <option key={thread.spec} value={thread.spec}>
                        {thread.spec} (drill {thread.tapDrillName})
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    step={step}
                    min={0}
                    value={value(pattern.diameterMm)}
                    onChange={(event) => update(pattern.id, { diameterMm: toMm(Number(event.target.value)) })}
                  />
                )}
              </label>

              <label className="field">
                <span>Depth ({unit})</span>
                <input
                  type="number"
                  step={step}
                  min={0}
                  disabled={pattern.through}
                  value={value(pattern.depthBelowTopMm)}
                  onChange={(event) => update(pattern.id, { depthBelowTopMm: toMm(Number(event.target.value)) })}
                />
              </label>
            </div>

            <label className="check">
              <input
                type="checkbox"
                checked={pattern.through}
                onChange={(event) => update(pattern.id, { through: event.target.checked })}
              />
              <span>Through hole</span>
            </label>

            <fieldset className="field-group">
              <legend>Operations</legend>
              <div className="seg four">
                {OPERATIONS.map((operation) => (
                  <button
                    key={operation.id}
                    type="button"
                    title={operation.hint}
                    aria-pressed={pattern.operations.includes(operation.id)}
                    className={pattern.operations.includes(operation.id) ? "on" : ""}
                    onClick={() => toggleOperation(pattern, operation.id)}
                  >
                    {operation.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </article>
        );
      })}

      <button type="button" className="btn" onClick={addPattern}>
        <Plus aria-hidden="true" />
        Add hole pattern
      </button>
    </div>
  );
}

function layoutFields(
  pattern: HolePattern,
  value: (mm: number) => number,
  toMm: (raw: number) => number,
  updateLayout: (id: string, changes: Record<string, number | string>) => void,
  step: number,
) {
  const layout = pattern.layout;
  const numberField = (label: string, key: string, raw: number, asLength = true) => (
    <label className="field" key={key}>
      <span>{label}</span>
      <input
        type="number"
        step={asLength ? step : 1}
        value={asLength ? value(raw) : raw}
        onChange={(event) => {
          const entered = Number(event.target.value);
          updateLayout(pattern.id, { [key]: asLength ? toMm(entered) : entered });
        }}
      />
    </label>
  );

  switch (layout.kind) {
    case "single":
      return [numberField("X", "x", layout.x), numberField("Y", "y", layout.y)];
    case "grid":
      return [
        numberField("X", "x", layout.x),
        numberField("Y", "y", layout.y),
        numberField("Cols", "cols", layout.cols, false),
        numberField("Rows", "rows", layout.rows, false),
        numberField("Pitch X", "pitchXMm", layout.pitchXMm),
        numberField("Pitch Y", "pitchYMm", layout.pitchYMm),
      ];
    case "bolt-circle":
      return [
        numberField("Centre X", "cx", layout.cx),
        numberField("Centre Y", "cy", layout.cy),
        numberField("B.C. dia", "boltCircleDiameterMm", layout.boltCircleDiameterMm),
        numberField("Count", "count", layout.count, false),
        numberField("Start angle", "startAngleDeg", layout.startAngleDeg, false),
      ];
    case "line":
      return [
        numberField("X", "x", layout.x),
        numberField("Y", "y", layout.y),
        numberField("Count", "count", layout.count, false),
        numberField("Pitch", "pitchMm", layout.pitchMm),
        numberField("Angle", "angleDeg", layout.angleDeg, false),
      ];
  }
}

/** A sensible layout of the requested kind, reusing the previous position. */
function defaultLayout(kind: LayoutKind, previous: HoleLayout, units: UnitSystem): HoleLayout {
  const inch = units === "inch";
  const anchorX = "x" in previous ? previous.x : previous.cx;
  const anchorY = "y" in previous ? previous.y : previous.cy;
  const pitch = lengthToMm(units, inch ? 1 : 25);

  switch (kind) {
    case "single":
      return { kind, x: anchorX, y: anchorY };
    case "grid":
      return { kind, x: anchorX, y: anchorY, cols: 2, rows: 2, pitchXMm: pitch, pitchYMm: pitch };
    case "bolt-circle":
      return {
        kind,
        cx: anchorX,
        cy: anchorY,
        boltCircleDiameterMm: lengthToMm(units, inch ? 2 : 50),
        count: 6,
        startAngleDeg: 0,
      };
    case "line":
      return { kind, x: anchorX, y: anchorY, count: 4, pitchMm: pitch, angleDeg: 0 };
  }
}

function round(value: number, units: UnitSystem): number {
  const places = units === "inch" ? 4 : 2;
  return Math.round(value * 10 ** places) / 10 ** places;
}
