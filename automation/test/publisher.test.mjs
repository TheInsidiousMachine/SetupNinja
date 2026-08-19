import assert from "node:assert/strict";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GitPublisher } from "../src/publisher.mjs";

test("commits, pushes, and opens a labeled PR with fixed shell-free argv", async () => {
  const calls = [];
  const publisher = new GitPublisher({
    token: "secret",
    repository: "owner/repo",
    baseBranch: "main",
    labels: ["clayton-demo-auto", "risk-reviewed-low"],
    dataRoot: await mkdtemp(path.join(tmpdir(), "publisher-")),
    execute: async (argv) => {
      calls.push(argv);
      return { stdout: argv[0] === "gh" && argv[1] === "pr" ? "https://github.test/owner/repo/pull/12\n" : "" };
    }
  });
  const result = await publisher.publish({
    worktree: { path: "/tmp/worktree", branch: "feedback/fb_abc" },
    feedbackId: "fb_abc",
    issue: { number: 9, url: "https://github.test/owner/repo/issues/9" },
    changedFiles: ["src/ui/MachineView.tsx"]
  });
  assert.equal(result.url, "https://github.test/owner/repo/pull/12");
  assert.deepEqual(calls[0], ["git", "add", "--", "src/ui/MachineView.tsx"]);
  assert.ok(calls.some((argv) => argv[0] === "git" && argv.includes("push")));
  const create = calls.find((argv) => argv[0] === "gh" && argv[1] === "pr");
  assert.ok(create.includes("clayton-demo-auto"));
  assert.ok(create.includes("risk-reviewed-low"));
});
