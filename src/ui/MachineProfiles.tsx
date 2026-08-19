import { Copy, RotateCcw, Trash2 } from "lucide-react";
import { resolvePost } from "../kernel/postConfig";
import { lengthIn, lengthToMm, lengthUnitLabel } from "../kernel/units";
import { duplicateMachine } from "../machine/machineProfiles";
import type {
  ControllerFlavor,
  CoolantMode,
  MachineProfile,
  PostConfig,
  ToolChangeStrategy,
  UnitSystem,
} from "../kernel/types";

export type MachineProfilesProps = {
  machines: MachineProfile[];
  activeId: string;
  onChange: (machines: MachineProfile[]) => void;
  onSelect: (id: string) => void;
  onReset: () => void;
};

const CONTROLLERS: { id: ControllerFlavor; label: string }[] = [
  { id: "fanuc", label: "Fanuc" },
  { id: "haas", label: "Haas" },
  { id: "mach3", label: "Mach3" },
  { id: "linuxcnc", label: "LinuxCNC" },
  { id: "grbl", label: "GRBL" },
];

const COOLANTS: { id: CoolantMode; label: string }[] = [
  { id: "flood", label: "Flood" },
  { id: "mist", label: "Mist" },
  { id: "air", label: "Air" },
  { id: "none", label: "None" },
];

const TOOL_CHANGES: { id: ToolChangeStrategy; label: string; hint: string }[] = [
  {
    id: "g28-home",
    label: "Home Z (G91 G28 Z0)",
    hint: "Required for a carousel or arm changer. Parks at machine Z home before M6.",
  },
  {
    id: "safe-retract",
    label: "Clearance plane only",
    hint: "For a manual change on a router or knee mill.",
  },
];

/**
 * Machine profile editor.
 *
 * Every shop's control wants slightly different G-code, and getting the tool
 * change wrong is the difference between a program that runs and a crashed
 * changer — so the post settings live with the machine and are saved per shop.
 */
export function MachineProfiles({
  machines,
  activeId,
  onChange,
  onSelect,
  onReset,
}: MachineProfilesProps) {
  const active = machines.find((machine) => machine.id === activeId) ?? machines[0];
  if (!active) return null;
  const post = resolvePost(active);
  const units = post.units;

  function update(changes: Partial<MachineProfile>) {
    onChange(machines.map((machine) => (machine.id === active.id ? { ...machine, ...changes } : machine)));
  }

  function updatePost(changes: Partial<PostConfig>) {
    update({ post: { ...post, ...changes } });
  }

  function duplicate() {
    const copy = duplicateMachine(active, machines);
    onChange([...machines, copy]);
    onSelect(copy.id);
  }

  function remove() {
    if (machines.length <= 1) return;
    if (!window.confirm(`Delete the ${active.name} profile?`)) return;
    const remaining = machines.filter((machine) => machine.id !== active.id);
    onChange(remaining);
    onSelect(remaining[0].id);
  }

  return (
    <div className="machine-profiles">
      <div className="profile-row">
        <label className="field">
          <span>Profile name</span>
          <input
            type="text"
            value={active.name}
            onChange={(event) => update({ name: event.target.value })}
          />
        </label>
        <div className="profile-actions">
          <button type="button" className="icon-button" title="Duplicate this profile" onClick={duplicate}>
            <Copy aria-hidden="true" size={16} />
          </button>
          <button
            type="button"
            className="icon-button"
            title="Delete this profile"
            onClick={remove}
            disabled={machines.length <= 1}
          >
            <Trash2 aria-hidden="true" size={16} />
          </button>
          <button type="button" className="icon-button" title="Reset all profiles" onClick={onReset}>
            <RotateCcw aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <fieldset className="field-group">
        <legend>Units</legend>
        <div className="seg">
          {(["inch", "mm"] as UnitSystem[]).map((system) => (
            <button
              key={system}
              type="button"
              aria-pressed={units === system}
              className={units === system ? "on" : ""}
              onClick={() => updatePost({ units: system })}
            >
              {system === "inch" ? "Inch (G20)" : "Metric (G21)"}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="field-group">
        <legend>Tool change</legend>
        <div className="seg vertical">
          {TOOL_CHANGES.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={post.toolChange === option.id}
              className={post.toolChange === option.id ? "on" : ""}
              onClick={() => updatePost({ toolChange: option.id })}
            >
              <strong>{option.label}</strong>
              <small>{option.hint}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="field-row">
        <label className="field">
          <span>Controller</span>
          <select
            value={post.controller}
            onChange={(event) => updatePost({ controller: event.target.value as ControllerFlavor })}
          >
            {CONTROLLERS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Coolant</span>
          <select
            value={post.coolant}
            onChange={(event) => updatePost({ coolant: event.target.value as CoolantMode })}
          >
            {COOLANTS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span>Work offset</span>
          <input
            type="text"
            value={post.workOffset}
            onChange={(event) => updatePost({ workOffset: event.target.value.toUpperCase() })}
            placeholder="G54"
          />
        </label>

        <label className="field">
          <span>Program number</span>
          <input
            type="text"
            value={post.programNumber}
            onChange={(event) => updatePost({ programNumber: event.target.value.toUpperCase() })}
            placeholder="O0001"
          />
        </label>
      </div>

      <div className="field-checks">
        <label className="check">
          <input
            type="checkbox"
            checked={post.toolLengthComp}
            onChange={(event) => updatePost({ toolLengthComp: event.target.checked })}
          />
          <span>Tool length compensation (G43 H#)</span>
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={post.blockNumbers}
            onChange={(event) => updatePost({ blockNumbers: event.target.checked })}
          />
          <span>Sequence numbers (N10, N20, …)</span>
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={post.tapeMarkers}
            onChange={(event) => updatePost({ tapeMarkers: event.target.checked })}
          />
          <span>Tape markers (%)</span>
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={active.hasToolChanger ?? active.kind === "vmc"}
            onChange={(event) => update({ hasToolChanger: event.target.checked })}
          />
          <span>Automatic tool changer</span>
        </label>
      </div>

      <fieldset className="field-group">
        <legend>Travels ({lengthUnitLabel(units)})</legend>
        <div className="field-row">
          {(["travelXMm", "travelYMm", "travelZMm"] as const).map((axis) => (
            <label className="field" key={axis}>
              <span>{axis.charAt(6)}</span>
              <input
                type="number"
                step={units === "inch" ? 0.1 : 1}
                value={round(lengthIn(units, active[axis] ?? 0))}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  update({ [axis]: value > 0 ? lengthToMm(units, value) : undefined });
                }}
              />
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field-row">
        <label className="field">
          <span>Max RPM</span>
          <input
            type="number"
            value={Math.round(active.maxRpm)}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (value > 0) update({ maxRpm: value });
            }}
          />
        </label>
        <label className="field">
          <span>Max feed ({units === "inch" ? "ipm" : "mm/min"})</span>
          <input
            type="number"
            value={round(lengthIn(units, active.maxFeedMmMin))}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (value > 0) update({ maxFeedMmMin: lengthToMm(units, value) });
            }}
          />
        </label>
      </div>
    </div>
  );
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
