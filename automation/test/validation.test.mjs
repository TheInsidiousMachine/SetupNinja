import assert from "node:assert/strict";
import test from "node:test";

import { validateFeedback } from "../src/validation.mjs";
import { validFeedback } from "./fixtures.mjs";

test("accepts the versioned feedback contract", () => {
  assert.deepEqual(validateFeedback(validFeedback), validFeedback);
});

test("rejects unsupported schema versions", () => {
  assert.throws(
    () => validateFeedback({ ...validFeedback, schemaVersion: 2 }),
    /schemaVersion/
  );
});

test("rejects unknown fields instead of silently persisting them", () => {
  assert.throws(
    () => validateFeedback({ ...validFeedback, dispatcherCommand: "rm -rf /" }),
    /unknown field/
  );
});

test("rejects overlong text and oversized diagnostic arrays", () => {
  assert.throws(
    () => validateFeedback({ ...validFeedback, summary: "x".repeat(161) }),
    /summary/
  );
  assert.throws(() => validateFeedback({
    ...validFeedback,
    diagnostics: { samples: Array(21).fill("sample") }
  }), /diagnostics/);
});

test("rejects malformed timestamps and sensitive diagnostic keys", () => {
  assert.throws(() => validateFeedback({ ...validFeedback, sentAt: "today" }), /sentAt/);
  assert.throws(() => validateFeedback({
    ...validFeedback,
    diagnostics: { apiToken: "must-not-arrive" }
  }), /diagnostics/);
});

test("rejects control characters while allowing multiline detail", () => {
  assert.equal(
    validateFeedback({ ...validFeedback, details: "first line\nsecond line" }).details,
    "first line\nsecond line"
  );
  assert.throws(
    () => validateFeedback({ ...validFeedback, details: "unsafe\u0000text" }),
    /details/
  );
});
