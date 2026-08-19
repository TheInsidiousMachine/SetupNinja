const CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u;
const SENSITIVE_KEY = /(authorization|cookie|credential|password|passwd|secret|session|token|api.?key)/iu;
const CATEGORY_VALUES = new Set(["bug", "workflow", "toolpath", "viewer", "export", "other"]);
const SEVERITY_VALUES = new Set(["blocker", "high", "normal", "low"]);

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 422;
  }
}

function assertObject(value, field) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new ValidationError(`${field} must be an object`);
  }
}

function assertKnownFields(value, allowed, field = "feedback") {
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) throw new ValidationError(`${field} contains unknown field: ${key}`);
  }
}

function text(value, field, maximum, { blank = false } = {}) {
  if (typeof value !== "string") throw new ValidationError(`${field} must be text`);
  if (!blank && value.trim().length === 0) throw new ValidationError(`${field} must not be blank`);
  if (value.length > maximum) throw new ValidationError(`${field} exceeds ${maximum} characters`);
  if (CONTROL_CHARACTERS.test(value)) throw new ValidationError(`${field} contains control characters`);
}

function timestamp(value, field) {
  text(value, field, 40);
  try {
    if (new Date(value).toISOString() !== value) throw new Error();
  } catch {
    throw new ValidationError(`${field} must be an ISO-8601 UTC timestamp`);
  }
}

function diagnostic(value, field, depth) {
  if (depth > 4) throw new ValidationError(`${field} exceeds maximum depth`);
  if (value === null || typeof value === "boolean") return;
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new ValidationError(`${field} contains a non-finite number`);
    return;
  }
  if (typeof value === "string") return text(value, field, 500, { blank: true });
  if (Array.isArray(value)) {
    if (value.length > 20) throw new ValidationError(`${field} exceeds 20 array items`);
    return value.forEach((item, index) => diagnostic(item, `${field}[${index}]`, depth + 1));
  }
  assertObject(value, field);
  const entries = Object.entries(value);
  if (entries.length > 30) throw new ValidationError(`${field} exceeds 30 object fields`);
  for (const [key, child] of entries) {
    text(key, `${field} key`, 60);
    if (SENSITIVE_KEY.test(key)) throw new ValidationError(`${field} contains a sensitive key`);
    diagnostic(child, `${field}.${key}`, depth + 1);
  }
}

export function validateFeedback(value) {
  assertObject(value, "feedback");
  assertKnownFields(value, new Set([
    "schemaVersion", "id", "createdAt", "appVersion", "category", "severity",
    "summary", "details", "diagnostics", "sentAt"
  ]));

  if (value.schemaVersion !== 1) throw new ValidationError("schemaVersion must be 1");
  text(value.id, "id", 100);
  if (!/^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(value.id)) throw new ValidationError("id has unsupported characters");
  timestamp(value.createdAt, "createdAt");
  timestamp(value.sentAt, "sentAt");
  if (Date.parse(value.sentAt) < Date.parse(value.createdAt)) {
    throw new ValidationError("sentAt must not precede createdAt");
  }
  text(value.appVersion, "appVersion", 40);
  if (!CATEGORY_VALUES.has(value.category)) throw new ValidationError("category is invalid");
  if (!SEVERITY_VALUES.has(value.severity)) throw new ValidationError("severity is invalid");
  text(value.summary, "summary", 120);
  text(value.details, "details", 2000, { blank: true });
  if (value.diagnostics !== undefined) {
    assertObject(value.diagnostics, "diagnostics");
    diagnostic(value.diagnostics, "diagnostics", 0);
    if (Buffer.byteLength(JSON.stringify(value.diagnostics)) > 16 * 1024) {
      throw new ValidationError("diagnostics exceeds 16384 bytes");
    }
  }
  return structuredClone(value);
}
