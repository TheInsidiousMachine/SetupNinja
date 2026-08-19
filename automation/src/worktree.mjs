import { mkdir } from "node:fs/promises";
import path from "node:path";

import { runArgv } from "./command.mjs";

function validateRef(ref) {
  if (typeof ref !== "string" || ref.startsWith("-") || !/^[A-Za-z0-9_./-]+$/.test(ref)) {
    throw new Error("base ref contains unsupported characters");
  }
}

export class WorktreeManager {
  constructor({ repoRoot, worktreeRoot, baseRef, timeoutMs = 60_000, maxOutputBytes = 1024 * 1024 }) {
    this.repoRoot = path.resolve(repoRoot);
    this.worktreeRoot = path.resolve(worktreeRoot);
    this.baseRef = baseRef;
    this.timeoutMs = timeoutMs;
    this.maxOutputBytes = maxOutputBytes;
    validateRef(baseRef);
  }

  async create(feedbackId) {
    if (!/^fb_[0-9a-f]{24}$/.test(feedbackId)) throw new Error("invalid feedback id");
    await mkdir(this.worktreeRoot, { recursive: true, mode: 0o700 });
    const branch = `feedback/${feedbackId}`;
    const worktreePath = path.join(this.worktreeRoot, feedbackId);
    await runArgv(["git", "worktree", "add", "-b", branch, worktreePath, this.baseRef], {
      cwd: this.repoRoot,
      timeoutMs: this.timeoutMs,
      maxOutputBytes: this.maxOutputBytes
    });
    return { path: worktreePath, branch };
  }

  async changedFiles(worktreePath) {
    const options = {
      cwd: worktreePath,
      timeoutMs: this.timeoutMs,
      maxOutputBytes: this.maxOutputBytes
    };
    const [committed, modified, untracked] = await Promise.all([
      runArgv(["git", "diff", "--name-only", "--diff-filter=ACMR", `${this.baseRef}...HEAD`], options),
      runArgv(["git", "diff", "--name-only", "--diff-filter=ACMR"], options),
      runArgv(["git", "ls-files", "--others", "--exclude-standard"], options)
    ]);
    return [...new Set(`${committed.stdout}\n${modified.stdout}\n${untracked.stdout}`.split("\n").filter(Boolean))].sort();
  }
}
