import { setTimeout as delay } from "node:timers/promises";

import { loadWorkerConfig } from "./config.mjs";
import { GitHubIssueClient } from "./github.mjs";
import { FeedbackStore } from "./store.mjs";
import { processNext } from "./worker.mjs";
import { WorktreeManager } from "./worktree.mjs";
import { GitPublisher } from "./publisher.mjs";

const config = loadWorkerConfig();
const store = new FeedbackStore(config.dataRoot);
const issueClient = config.dryRun ? null : new GitHubIssueClient({
  token: config.githubToken,
  repository: config.githubRepository
});
const worktrees = config.dryRun ? null : new WorktreeManager(config);
const publisher = config.dryRun ? null : new GitPublisher({
  token: config.githubToken,
  repository: config.githubRepository,
  baseBranch: config.pullRequestBaseBranch,
  labels: config.pullRequestLabels,
  dataRoot: config.dataRoot,
  timeoutMs: config.commandTimeoutMs,
  maxOutputBytes: config.maxOutputBytes
});
const once = process.argv.includes("--once");
let stopping = false;
process.once("SIGINT", () => { stopping = true; });
process.once("SIGTERM", () => { stopping = true; });

do {
  const result = await processNext({ store, config, issueClient, worktrees, publisher });
  if (result) process.stdout.write(`${JSON.stringify({ id: result.id, state: result.state })}\n`);
  if (once) break;
  if (!result && !stopping) await delay(config.pollMs);
} while (!stopping);
