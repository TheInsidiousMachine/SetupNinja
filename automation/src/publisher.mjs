import { chmod, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { childEnvironment, runArgv } from "./command.mjs";

function safeName(value, label) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_.:/-]+$/.test(value) || value.startsWith("-")) {
    throw new Error(`${label} contains unsupported characters`);
  }
  return value;
}

export class GitPublisher {
  constructor({
    token,
    repository,
    baseBranch,
    labels,
    dataRoot,
    timeoutMs = 60_000,
    maxOutputBytes = 1024 * 1024,
    execute = runArgv
  }) {
    if (!token) throw new Error("publisher token is required");
    this.token = token;
    this.repository = safeName(repository, "repository");
    this.baseBranch = safeName(baseBranch, "base branch");
    this.labels = labels.map((label) => safeName(label, "label"));
    this.dataRoot = path.resolve(dataRoot);
    this.timeoutMs = timeoutMs;
    this.maxOutputBytes = maxOutputBytes;
    this.execute = execute;
  }

  options(cwd, github = false) {
    const env = childEnvironment();
    if (github) env.GH_TOKEN = this.token;
    return { cwd, timeoutMs: this.timeoutMs, maxOutputBytes: this.maxOutputBytes, env };
  }

  async publish({ worktree, feedbackId, issue, changedFiles }) {
    if (!changedFiles.length) throw new Error("dispatcher produced no changes to publish");
    safeName(worktree.branch, "branch");
    await this.execute(["git", "add", "--", ...changedFiles], this.options(worktree.path));
    await this.execute([
      "git",
      "-c", "user.name=SetupNinja Feedback Worker",
      "-c", "user.email=feedback-bot@users.noreply.github.com",
      "commit", "-m", `fix(feedback): address ${feedbackId}`
    ], this.options(worktree.path));

    await this.execute(["gh", "auth", "setup-git"], this.options(worktree.path, true));
    await this.execute(
      ["git", "push", "--set-upstream", "origin", worktree.branch],
      this.options(worktree.path, true)
    );

    const bodyRoot = path.join(this.dataRoot, "pull-requests");
    await mkdir(bodyRoot, { recursive: true, mode: 0o700 });
    const bodyFile = path.join(bodyRoot, `${feedbackId}.md`);
    await writeFile(bodyFile, [
      `Resolves #${issue.number}.`,
      "",
      `Automated low-risk feedback change for \`${feedbackId}\`.`,
      "Path and local test gates passed before publication. The repository's independent CI gate remains authoritative."
    ].join("\n"), { mode: 0o400 });
    await chmod(bodyFile, 0o400);

    const labelArguments = this.labels.flatMap((label) => ["--label", label]);
    const result = await this.execute([
      "gh", "pr", "create",
      "--repo", this.repository,
      "--base", this.baseBranch,
      "--head", worktree.branch,
      "--title", `Feedback ${feedbackId}`,
      "--body-file", bodyFile,
      ...labelArguments
    ], this.options(worktree.path, true));
    const url = result.stdout.trim();
    if (!/^https:\/\/github\.com\//.test(url) && !/^https:\/\/github\.test\//.test(url)) {
      throw new Error("gh pr create did not return a pull request URL");
    }
    return { url, branch: worktree.branch };
  }
}
