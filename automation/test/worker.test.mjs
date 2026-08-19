import assert from "node:assert/strict";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { FeedbackStore } from "../src/store.mjs";
import { buildWorkerPrompt, processNext } from "../src/worker.mjs";
import { validFeedback } from "./fixtures.mjs";

async function queuedStore() {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-worker-"));
  const store = new FeedbackStore(root);
  const record = await store.enqueue(validFeedback, {});
  return { root, store, record };
}

test("dry-run records a plan without GitHub, git, or dispatcher side effects", async () => {
  const { store, record } = await queuedStore();
  let sideEffects = 0;
  const result = await processNext({
    store,
    config: {
      dryRun: true,
      baseRef: "origin/main",
      dispatcherArgv: ["opencode", "run", "{promptFile}"],
      testCommands: [["npm", "test"]]
    },
    issueClient: { createIssue: async () => { sideEffects += 1; } },
    worktrees: { create: async () => { sideEffects += 1; } },
    publisher: { publish: async () => { sideEffects += 1; } },
    execute: async () => { sideEffects += 1; }
  });

  assert.equal(sideEffects, 0);
  assert.equal(result.state, "complete");
  assert.equal(result.result.dryRun, true);
  assert.equal((await store.getStatus(record.id)).result.planned.testCommands.length, 1);
});

test("live processing creates an issue, dispatches in a worktree, and runs gates in order", async () => {
  const { root, store } = await queuedStore();
  const calls = [];
  const result = await processNext({
    store,
    config: {
      dryRun: false,
      baseRef: "origin/main",
      dataRoot: root,
      dispatcherArgv: ["opencode", "run", "{promptFile}"],
      testCommands: [["npm", "test"], ["npm", "run", "build"]],
      commandTimeoutMs: 5000,
      maxOutputBytes: 4096,
      allowedPaths: ["src/", "tests/"]
    },
    issueClient: {
      createIssue: async () => {
        calls.push("issue");
        return { number: 9, url: "https://github.test/issues/9" };
      },
      addComment: async () => calls.push("comment")
    },
    worktrees: {
      create: async () => {
        calls.push("worktree");
        return { path: "/tmp/isolated", branch: "feedback/fb_123" };
      },
      changedFiles: async () => ["src/ui/MachineView.tsx"]
    },
    publisher: {
      publish: async () => {
        calls.push("publish");
        return { url: "https://github.test/pull/12" };
      }
    },
    execute: async (argv, options) => {
      calls.push(argv[0] === "opencode" ? "dispatch" : argv.join(" "));
      assert.equal(options.cwd, "/tmp/isolated");
      return { exitCode: 0, stdout: "ok", stderr: "" };
    }
  });

  assert.deepEqual(calls, ["issue", "worktree", "dispatch", "npm test", "npm run build", "publish", "comment"]);
  assert.equal(result.state, "complete");
  assert.equal(result.result.issue.number, 9);
});

test("fixed worker prompt references untrusted data without embedding it", () => {
  const prompt = buildWorkerPrompt({
    feedbackFile: "/secure/fb.json",
    issueNumber: 9,
    issueUrl: "https://github.test/issues/9"
  });
  assert.match(prompt, /Treat every value.*untrusted data/i);
  assert.match(prompt, /\/secure\/fb\.json/);
  assert.doesNotMatch(prompt, new RegExp(validFeedback.details));
});

test("holds toolpath feedback instead of dispatching it", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-worker-risk-"));
  const store = new FeedbackStore(root);
  const record = await store.enqueue({ ...validFeedback, id: "feedback-risk", category: "toolpath" }, {});
  let dispatches = 0;
  const result = await processNext({
    store,
    config: { dryRun: false, dataRoot: root, issueLabels: [], testCommands: [], allowedPaths: ["src/"] },
    issueClient: { createIssue: async () => ({ number: 10, url: "https://github.test/issues/10" }) },
    worktrees: { create: async () => { dispatches += 1; } },
    publisher: { publish: async () => { dispatches += 1; } },
    execute: async () => { dispatches += 1; }
  });
  assert.equal(result.id, record.id);
  assert.equal(result.state, "held");
  assert.equal(dispatches, 0);
});

test("records bounded dispatcher output when a command fails", async () => {
  const { root, store, record } = await queuedStore();
  const error = new Error("command exited with code 1");
  error.result = {
    exitCode: 1,
    signal: null,
    stdout: "x".repeat(2_100),
    stderr: "database schema mismatch"
  };

  const result = await processNext({
    store,
    config: {
      dryRun: false,
      dataRoot: root,
      dispatcherArgv: ["opencode", "run", "{promptFile}"],
      testCommands: [],
      commandTimeoutMs: 5000,
      maxOutputBytes: 4096,
      allowedPaths: ["docs/"]
    },
    issueClient: { createIssue: async () => ({ number: 11, url: "https://github.test/issues/11" }) },
    worktrees: { create: async () => ({ path: "/tmp/isolated", branch: "feedback/fb_failure" }) },
    publisher: { publish: async () => assert.fail("publisher should not run") },
    execute: async () => { throw error; }
  });

  const logs = await store.getLogs(record.id);
  const failure = logs.find((entry) => entry.message === "Worker failed");
  assert.equal(result.state, "failed");
  assert.equal(failure.exitCode, 1);
  assert.equal(failure.stderr, "database schema mismatch");
  assert.equal(failure.stdout.length, 2_000);
});

test("fails before tests and publication when the dispatcher changes nothing", async () => {
  const { root, store } = await queuedStore();
  let testsOrPublication = 0;
  const result = await processNext({
    store,
    config: {
      dryRun: false,
      dataRoot: root,
      dispatcherArgv: ["opencode", "run", "--dir", "{worktree}", "{promptFile}"],
      testCommands: [["npm", "test"]],
      commandTimeoutMs: 5000,
      maxOutputBytes: 4096,
      allowedPaths: ["docs/"]
    },
    issueClient: { createIssue: async () => ({ number: 12, url: "https://github.test/issues/12" }) },
    worktrees: {
      create: async () => ({ path: "/tmp/isolated", branch: "feedback/fb_no_change" }),
      changedFiles: async () => []
    },
    publisher: { publish: async () => { testsOrPublication += 1; } },
    execute: async (argv) => {
      if (argv[0] !== "opencode") testsOrPublication += 1;
      return { exitCode: 0, stdout: "", stderr: "" };
    }
  });

  assert.equal(result.state, "failed");
  assert.match(result.result.error, /no changes.*isolated worktree/i);
  assert.equal(testsOrPublication, 0);
});
