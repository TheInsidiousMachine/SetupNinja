import assert from "node:assert/strict";
import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { FeedbackStore } from "../src/store.mjs";
import { validFeedback } from "./fixtures.mjs";

test("persists queued feedback and exposes status", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-feedback-"));
  const store = new FeedbackStore(root);
  const record = await store.enqueue(validFeedback, { remoteAddress: "127.0.0.1" });

  assert.match(record.id, /^fb_[0-9a-f]{24}$/);
  assert.equal(record.state, "queued");
  assert.equal((await store.getStatus(record.id)).state, "queued");

  const persisted = JSON.parse(
    await readFile(path.join(root, "queue", "pending", `${record.id}.json`), "utf8")
  );
  assert.deepEqual(persisted.feedback, validFeedback);
});

test("claims each pending record at most once", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-feedback-"));
  const store = new FeedbackStore(root);
  const record = await store.enqueue(validFeedback, {});

  assert.equal((await store.claimNext()).id, record.id);
  assert.equal(await store.claimNext(), null);
  assert.equal((await store.getStatus(record.id)).state, "processing");
});

test("deduplicates retries using the client feedback id", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-feedback-"));
  const store = new FeedbackStore(root);
  const first = await store.enqueue(validFeedback, {});
  const retry = await store.enqueue(validFeedback, {});
  assert.equal(retry.id, first.id);
  assert.equal((await store.listStatuses()).length, 1);
});

test("appends structured logs and completes a record atomically", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-feedback-"));
  const store = new FeedbackStore(root);
  const record = await store.enqueue(validFeedback, {});
  await store.claimNext();
  await store.appendLog(record.id, "info", "dry run planned");
  await store.complete(record.id, { dryRun: true });

  const status = await store.getStatus(record.id);
  assert.equal(status.state, "complete");
  assert.equal(status.result.dryRun, true);
  assert.match((await store.getLogs(record.id))[0].timestamp, /^\d{4}-/);
});
