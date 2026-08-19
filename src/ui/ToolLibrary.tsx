import { useState } from "react";
import type { Tool, ToolType } from "../kernel/types";

let nextId = 1;

function blankTool(): Tool {
  return {
    id: `tool-${Date.now()}-${nextId++}`,
    name: "New tool",
    type: "endmill",
    diameterMm: 6,
    flutes: 2,
    maxDocMm: 1,
    maxStepover: 0.4,
    material: "carbide",
  };
}

export function ToolLibrary({
  tools,
  onChange,
  onReset,
}: {
  tools: Tool[];
  onChange: (tools: Tool[]) => void;
  onReset: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  function updateTool(id: string, patch: Partial<Tool>) {
    onChange(tools.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  function removeTool(id: string) {
    if (tools.length <= 1) return;
    const tool = tools.find((item) => item.id === id);
    if (!window.confirm(`Remove ${tool?.name || "this tool"} from the saved library?`)) return;
    onChange(tools.filter((t) => t.id !== id));
    if (expanded === id) setExpanded(null);
  }

  function addTool() {
    const t = blankTool();
    onChange([...tools, t]);
    setExpanded(t.id);
  }

  return (
    <section className="tool-library" aria-label="Tool library">
      <div className="tool-library-head">
        <p className="note">Your tools, saved on this phone. Used by every setup mode.</p>
        <button type="button" className="btn small" onClick={onReset}>
          Reset to defaults
        </button>
      </div>
      <ul className="tool-list">
        {tools.map((tool) => (
          <li key={tool.id} className="tool-row">
            <button
              type="button"
              className="tool-row-summary"
              aria-expanded={expanded === tool.id}
              aria-controls={`tool-editor-${tool.id}`}
              onClick={() => setExpanded(expanded === tool.id ? null : tool.id)}
            >
              <span className="tool-row-name">{tool.name}</span>
              <span className="tool-row-sub">
                {tool.type} · {tool.diameterMm.toFixed(2)}mm · {tool.flutes}fl
              </span>
            </button>
            {expanded === tool.id ? (
              <div className="tool-edit" id={`tool-editor-${tool.id}`}>
                <label>
                  Name
                  <input
                    type="text"
                    name={`tool-name-${tool.id}`}
                    autoComplete="off"
                    value={tool.name}
                    onChange={(e) => updateTool(tool.id, { name: e.target.value })}
                  />
                </label>
                <label>
                  Type
                  <select
                    name={`tool-type-${tool.id}`}
                    value={tool.type}
                    onChange={(e) => updateTool(tool.id, { type: e.target.value as ToolType })}
                  >
                    <option value="endmill">Endmill</option>
                    <option value="ball">Ball nose</option>
                  </select>
                </label>
                <label>
                  Diameter (mm)
                  <input
                    type="number"
                    name={`tool-diameter-${tool.id}`}
                    min={0.1}
                    step={0.05}
                    value={tool.diameterMm}
                    onChange={(e) => updateTool(tool.id, { diameterMm: Number(e.target.value) })}
                  />
                </label>
                <label>
                  Flutes
                  <input
                    type="number"
                    name={`tool-flutes-${tool.id}`}
                    min={1}
                    step={1}
                    value={tool.flutes}
                    onChange={(e) => updateTool(tool.id, { flutes: Number(e.target.value) })}
                  />
                </label>
                <label>
                  Max DOC (mm)
                  <input
                    type="number"
                    name={`tool-doc-${tool.id}`}
                    min={0.05}
                    step={0.05}
                    value={tool.maxDocMm}
                    onChange={(e) => updateTool(tool.id, { maxDocMm: Number(e.target.value) })}
                  />
                </label>
                <label>
                  Max stepover (0-1)
                  <input
                    type="number"
                    name={`tool-stepover-${tool.id}`}
                    min={0.05}
                    max={1}
                    step={0.05}
                    value={tool.maxStepover}
                    onChange={(e) => updateTool(tool.id, { maxStepover: Number(e.target.value) })}
                  />
                </label>
                <label>
                  Material
                  <select
                    name={`tool-material-${tool.id}`}
                    value={tool.material}
                    onChange={(e) =>
                      updateTool(tool.id, { material: e.target.value as Tool["material"] })
                    }
                  >
                    <option value="carbide">Carbide</option>
                    <option value="hss">HSS</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="btn small danger"
                  onClick={() => removeTool(tool.id)}
                  disabled={tools.length <= 1}
                >
                  Remove tool
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <button type="button" className="btn" onClick={addTool}>
        Add tool
      </button>
    </section>
  );
}
