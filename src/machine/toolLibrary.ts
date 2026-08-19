import type { Tool } from "../kernel/types";
import { TOOLS } from "./catalog";

export const TOOL_LIBRARY_KEY = "setupninja.tools.v1";

/**
 * Operator-editable tool list, persisted to localStorage and seeded from the
 * built-in catalog defaults on first run. Falls back to the catalog defaults
 * whenever storage is unavailable or corrupt so the app never has zero tools.
 */
export function loadTools(): Tool[] {
  const raw = readRaw();
  if (!raw) {
    saveTools(TOOLS);
    return cloneTools(TOOLS);
  }
  try {
    const parsed = JSON.parse(raw);
    const tools = sanitizeTools(parsed);
    if (tools.length === 0) return cloneTools(TOOLS);
    return tools;
  } catch {
    return cloneTools(TOOLS);
  }
}

export function saveTools(tools: Tool[]): void {
  writeRaw(JSON.stringify(tools));
}

export function resetTools(): Tool[] {
  saveTools(TOOLS);
  return cloneTools(TOOLS);
}

/** Look up a tool from the user library, falling back to catalog defaults. */
export function getUserTool(id: string, tools: Tool[]): Tool {
  const found = tools.find((t) => t.id === id) ?? TOOLS.find((t) => t.id === id);
  if (!found) throw new Error(`Unknown tool ${id}`);
  return found;
}

function cloneTools(tools: Tool[]): Tool[] {
  return tools.map((t) => ({ ...t }));
}

function sanitizeTools(value: unknown): Tool[] {
  if (!Array.isArray(value)) return [];
  const out: Tool[] = [];
  for (const item of value) {
    const tool = sanitizeTool(item);
    if (tool) out.push(tool);
  }
  return out;
}

function sanitizeTool(item: unknown): Tool | null {
  if (!item || typeof item !== "object") return null;
  const o = item as Record<string, unknown>;
  if (typeof o.id !== "string" || !o.id) return null;
  if (typeof o.name !== "string" || !o.name) return null;
  if (o.type !== "endmill" && o.type !== "ball") return null;
  if (o.material !== "carbide" && o.material !== "hss") return null;
  const diameterMm = Number(o.diameterMm);
  const flutes = Number(o.flutes);
  const maxDocMm = Number(o.maxDocMm);
  const maxStepover = Number(o.maxStepover);
  if (!Number.isFinite(diameterMm) || diameterMm <= 0) return null;
  if (!Number.isFinite(flutes) || flutes <= 0) return null;
  if (!Number.isFinite(maxDocMm) || maxDocMm <= 0) return null;
  if (!Number.isFinite(maxStepover) || maxStepover <= 0) return null;
  return {
    id: o.id,
    name: o.name,
    type: o.type,
    diameterMm,
    flutes: Math.round(flutes),
    maxDocMm,
    maxStepover: Math.min(1, maxStepover),
    material: o.material,
  };
}

function readRaw(): string | null {
  try {
    return globalThis.localStorage?.getItem(TOOL_LIBRARY_KEY) ?? null;
  } catch {
    return null;
  }
}

function writeRaw(raw: string): void {
  try {
    globalThis.localStorage?.setItem(TOOL_LIBRARY_KEY, raw);
  } catch {
    // Storage unavailable (private mode, quota, etc.) — in-memory list still works this session.
  }
}
