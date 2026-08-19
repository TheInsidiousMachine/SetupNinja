export const FEEDBACK_SCHEMA_VERSION = 1 as const;
export const DEFAULT_FEEDBACK_STORAGE_KEY = "setupninja.feedback.queue.v1";

export const FEEDBACK_CATEGORIES = [
  "bug",
  "workflow",
  "toolpath",
  "viewer",
  "export",
  "other",
] as const;

export const FEEDBACK_SEVERITIES = ["blocker", "high", "normal", "low"] as const;

export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number];
export type FeedbackSeverity = (typeof FEEDBACK_SEVERITIES)[number];
export type FeedbackStatus = "pending" | "sending" | "sent";
export type DiagnosticValue = string | number | boolean | null | DiagnosticValue[] | DiagnosticContext;
export type DiagnosticContext = { [key: string]: DiagnosticValue };

export interface FeedbackInput {
  category: FeedbackCategory;
  severity: FeedbackSeverity;
  summary: string;
  details: string;
}

export interface FeedbackPayload extends FeedbackInput {
  schemaVersion: typeof FEEDBACK_SCHEMA_VERSION;
  appVersion: string;
  id: string;
  createdAt: string;
  diagnostics?: DiagnosticContext;
}

export interface FeedbackQueueRecord {
  payload: FeedbackPayload;
  status: FeedbackStatus;
  attempts: number;
  lastAttemptAt?: string;
  sentAt?: string;
  lastError?: string;
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface FeedbackPayloadOptions {
  appVersion: string;
  diagnostics?: Record<string, unknown>;
  id?: string;
  now?: () => Date;
}

export interface FeedbackQueueOptions {
  appVersion: string;
  endpoint?: string;
  storageKey?: string;
  storage?: StorageLike;
  fetchImpl?: typeof fetch;
  eventTarget?: Pick<EventTarget, "addEventListener" | "removeEventListener">;
  isOnline?: () => boolean;
  now?: () => Date;
  createId?: () => string;
}

const MAX_QUEUE_RECORDS = 100;
const SENSITIVE_KEY = /(authorization|cookie|credential|password|passwd|secret|session|token|api.?key)/i;

function cleanText(value: string, maxLength: number) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

function randomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `feedback-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function sanitizeDiagnostic(value: unknown, depth = 0): DiagnosticValue | undefined {
  if (depth > 4) return undefined;
  if (value === null || typeof value === "boolean") return value;
  if (typeof value === "string") return cleanText(value, 500);
  if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
  if (Array.isArray(value)) {
    return value
      .slice(0, 20)
      .map((item) => sanitizeDiagnostic(item, depth + 1))
      .filter((item): item is DiagnosticValue => item !== undefined);
  }
  if (typeof value !== "object") return undefined;

  const sanitized: DiagnosticContext = {};
  for (const [rawKey, child] of Object.entries(value).slice(0, 30)) {
    const key = cleanText(rawKey, 60);
    if (!key || SENSITIVE_KEY.test(key)) continue;
    const next = sanitizeDiagnostic(child, depth + 1);
    if (next !== undefined) sanitized[key] = next;
  }
  return sanitized;
}

function defaultStorage(): StorageLike | undefined {
  try {
    return typeof window === "undefined" ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

function defaultEventTarget() {
  return typeof window === "undefined" ? undefined : window;
}

function defaultOnlineState() {
  return typeof navigator === "undefined" || navigator.onLine;
}

function validRecord(value: unknown): value is FeedbackQueueRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<FeedbackQueueRecord>;
  const payload = record.payload as Partial<FeedbackPayload> | undefined;
  return Boolean(
    payload &&
      payload.schemaVersion === FEEDBACK_SCHEMA_VERSION &&
      typeof payload.id === "string" &&
      typeof payload.appVersion === "string" &&
      typeof payload.createdAt === "string" &&
      FEEDBACK_CATEGORIES.includes(payload.category as FeedbackCategory) &&
      FEEDBACK_SEVERITIES.includes(payload.severity as FeedbackSeverity) &&
      typeof payload.summary === "string" &&
      typeof payload.details === "string" &&
      (record.status === "pending" || record.status === "sending" || record.status === "sent") &&
      typeof record.attempts === "number",
  );
}

function endpointUrl(endpoint: string) {
  const url = new URL(endpoint);
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Feedback endpoint must use HTTP or HTTPS");
  }
  return url.toString();
}

export function createFeedbackPayload(input: FeedbackInput, options: FeedbackPayloadOptions): FeedbackPayload {
  const summary = cleanText(input.summary, 120);
  if (!summary) throw new Error("Feedback summary is required");
  if (!FEEDBACK_CATEGORIES.includes(input.category)) throw new Error("Unknown feedback category");
  if (!FEEDBACK_SEVERITIES.includes(input.severity)) throw new Error("Unknown feedback severity");

  const diagnostics = sanitizeDiagnostic(options.diagnostics);
  const safeDiagnostics =
    diagnostics && typeof diagnostics === "object" && !Array.isArray(diagnostics)
      ? diagnostics
      : undefined;
  return {
    schemaVersion: FEEDBACK_SCHEMA_VERSION,
    appVersion: cleanText(options.appVersion, 40) || "unknown",
    id: cleanText(options.id ?? randomId(), 100),
    createdAt: (options.now ?? (() => new Date()))().toISOString(),
    category: input.category,
    severity: input.severity,
    summary,
    details: cleanText(input.details, 2_000),
    ...(safeDiagnostics && Object.keys(safeDiagnostics).length > 0
      ? { diagnostics: safeDiagnostics }
      : {}),
  };
}

export class FeedbackQueue {
  private readonly appVersion: string;
  private readonly endpoint?: string;
  private readonly storageKey: string;
  private readonly storage?: StorageLike;
  private readonly fetchImpl?: typeof fetch;
  private readonly eventTarget?: Pick<EventTarget, "addEventListener" | "removeEventListener">;
  private readonly isOnline: () => boolean;
  private readonly now: () => Date;
  private readonly createId: () => string;
  private readonly listeners = new Set<(records: FeedbackQueueRecord[]) => void>();
  private readonly inFlight = new Map<string, Promise<FeedbackQueueRecord>>();
  private records: FeedbackQueueRecord[];

  private readonly handleOnline = () => {
    void this.sendPending();
  };

  constructor(options: FeedbackQueueOptions) {
    this.appVersion = options.appVersion;
    this.endpoint = options.endpoint?.trim() || undefined;
    this.storageKey = options.storageKey ?? DEFAULT_FEEDBACK_STORAGE_KEY;
    this.storage = options.storage ?? defaultStorage();
    this.fetchImpl = options.fetchImpl ?? (typeof fetch === "undefined" ? undefined : fetch.bind(globalThis));
    this.eventTarget = options.eventTarget ?? defaultEventTarget();
    this.isOnline = options.isOnline ?? defaultOnlineState;
    this.now = options.now ?? (() => new Date());
    this.createId = options.createId ?? randomId;
    this.records = this.read();
    this.eventTarget?.addEventListener("online", this.handleOnline);
  }

  list() {
    return this.records.map((record) => ({ ...record, payload: { ...record.payload } }));
  }

  subscribe(listener: (records: FeedbackQueueRecord[]) => void) {
    this.listeners.add(listener);
    listener(this.list());
    return () => this.listeners.delete(listener);
  }

  async submit(input: FeedbackInput, diagnostics?: Record<string, unknown>) {
    const payload = createFeedbackPayload(input, {
      appVersion: this.appVersion,
      diagnostics,
      id: this.createId(),
      now: this.now,
    });
    const record: FeedbackQueueRecord = { payload, status: "pending", attempts: 0 };
    this.records = [record, ...this.records].slice(0, MAX_QUEUE_RECORDS);
    this.commit();
    if (!this.endpoint || !this.isOnline()) return record;
    return this.send(record.payload.id);
  }

  async retry(id: string) {
    const record = this.records.find((item) => item.payload.id === id);
    if (!record) throw new Error("Feedback item was not found");
    if (!this.endpoint) return this.update(id, { status: "pending", lastError: "Feedback endpoint is not configured" });
    if (!this.isOnline()) return this.update(id, { status: "pending", lastError: "Device is offline" });
    return this.send(id);
  }

  async sendPending() {
    if (!this.endpoint || !this.isOnline()) return this.list();
    const pendingIds = this.records
      .filter((record) => record.status !== "sent")
      .map((record) => record.payload.id);
    await Promise.all(pendingIds.map((id) => this.send(id)));
    return this.list();
  }

  destroy() {
    this.eventTarget?.removeEventListener("online", this.handleOnline);
    this.listeners.clear();
  }

  private send(id: string): Promise<FeedbackQueueRecord> {
    const existing = this.inFlight.get(id);
    if (existing) return existing;
    const task = this.performSend(id).finally(() => this.inFlight.delete(id));
    this.inFlight.set(id, task);
    return task;
  }

  private async performSend(id: string) {
    const current = this.records.find((record) => record.payload.id === id);
    if (!current) throw new Error("Feedback item was not found");
    if (current.status === "sent") return current;

    const attemptedAt = this.now().toISOString();
    const sending = this.update(id, {
      status: "sending",
      attempts: current.attempts + 1,
      lastAttemptAt: attemptedAt,
      lastError: undefined,
    });

    try {
      if (!this.endpoint || !this.fetchImpl) throw new Error("Feedback transport is not available");
      const response = await this.fetchImpl(endpointUrl(this.endpoint), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...sending.payload, sentAt: attemptedAt }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Feedback service returned HTTP ${response.status}`);
      return this.update(id, { status: "sent", sentAt: attemptedAt, lastError: undefined });
    } catch (error) {
      const message = error instanceof Error ? cleanText(error.message, 200) : "Feedback could not be sent";
      return this.update(id, { status: "pending", lastError: message });
    }
  }

  private update(id: string, changes: Partial<FeedbackQueueRecord>) {
    let updated: FeedbackQueueRecord | undefined;
    this.records = this.records.map((record) => {
      if (record.payload.id !== id) return record;
      updated = { ...record, ...changes };
      return updated;
    });
    if (!updated) throw new Error("Feedback item was not found");
    this.commit();
    return updated;
  }

  private read() {
    try {
      const raw = this.storage?.getItem(this.storageKey);
      if (!raw) return [];
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(validRecord)
        .slice(0, MAX_QUEUE_RECORDS)
        .map((record) => (record.status === "sending" ? { ...record, status: "pending" as const } : record));
    } catch {
      return [];
    }
  }

  private commit() {
    try {
      this.storage?.setItem(this.storageKey, JSON.stringify(this.records));
    } catch {
      // Storage can be unavailable or full; the in-memory queue remains usable.
    }
    const snapshot = this.list();
    this.listeners.forEach((listener) => listener(snapshot));
  }
}
