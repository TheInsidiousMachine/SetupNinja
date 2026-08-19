import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseArgvJson } from "./command.mjs";

const AUTOMATION_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REPO_ROOT = path.resolve(AUTOMATION_ROOT, "..");
const DEFAULT_DISPATCHER = ["opencode", "run", "Read and follow the fixed policy in {promptFile}"];
const DEFAULT_TESTS = [["npm", "test"], ["npm", "run", "build"]];
const DEFAULT_ALLOWED_PATHS = [
  "src/ui/", "tests/e2e/", "public/", "docs/"
];

function positiveInteger(raw, fallback, name, maximum) {
  if (raw === undefined || raw === "") return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value <= 0 || value > maximum) throw new Error(`${name} is invalid`);
  return value;
}

function stringArrayJson(raw, fallback, name) {
  if (!raw) return fallback;
  let value;
  try { value = JSON.parse(raw); } catch { throw new Error(`${name} must be valid JSON`); }
  if (!Array.isArray(value) || value.length === 0 || value.some((item) => typeof item !== "string" || !item)) {
    throw new Error(`${name} must be a non-empty JSON array of strings`);
  }
  return value;
}

function commandList(raw, allowedExecutables) {
  let value;
  try { value = JSON.parse(raw); } catch { throw new Error("FEEDBACK_TEST_COMMANDS_JSON must be valid JSON"); }
  if (!Array.isArray(value) || value.length === 0) throw new Error("at least one test command is required");
  return value.map((command, index) => parseArgvJson(
    JSON.stringify(command),
    `test command ${index + 1}`,
    allowedExecutables
  ));
}

export function loadWorkerConfig(env = process.env) {
  const dryRun = env.FEEDBACK_DRY_RUN !== "false";
  if (!dryRun && !env.FEEDBACK_DISPATCH_COMMAND_JSON) {
    throw new Error("FEEDBACK_DISPATCH_COMMAND_JSON is required outside dry-run mode");
  }
  if (!dryRun && !env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN is required outside dry-run mode");
  if (!dryRun && !env.GITHUB_REPOSITORY) throw new Error("GITHUB_REPOSITORY is required outside dry-run mode");

  const dispatcherAllowed = stringArrayJson(
    env.FEEDBACK_DISPATCH_EXECUTABLES_JSON,
    ["opencode", "omnigent", "antigravity"],
    "FEEDBACK_DISPATCH_EXECUTABLES_JSON"
  );
  const testAllowed = stringArrayJson(
    env.FEEDBACK_TEST_EXECUTABLES_JSON,
    ["npm", "npx", "gradle", "gradlew"],
    "FEEDBACK_TEST_EXECUTABLES_JSON"
  );
  const dispatcherArgv = env.FEEDBACK_DISPATCH_COMMAND_JSON
    ? parseArgvJson(env.FEEDBACK_DISPATCH_COMMAND_JSON, "dispatcher", dispatcherAllowed)
    : DEFAULT_DISPATCHER;
  const testCommands = commandList(
    env.FEEDBACK_TEST_COMMANDS_JSON ?? JSON.stringify(DEFAULT_TESTS),
    testAllowed
  );
  const repoRoot = path.resolve(env.FEEDBACK_REPO_ROOT ?? REPO_ROOT);
  const dataRoot = path.resolve(env.FEEDBACK_DATA_ROOT ?? path.join(AUTOMATION_ROOT, "runtime"));

  return {
    dryRun,
    repoRoot,
    dataRoot,
    worktreeRoot: path.resolve(env.FEEDBACK_WORKTREE_ROOT ?? path.join(repoRoot, "..", ".claycam-feedback-worktrees")),
    baseRef: env.FEEDBACK_BASE_REF ?? "origin/main",
    dispatcherArgv,
    testCommands,
    allowedPaths: stringArrayJson(env.FEEDBACK_ALLOWED_PATHS_JSON, DEFAULT_ALLOWED_PATHS, "FEEDBACK_ALLOWED_PATHS_JSON"),
    issueLabels: (env.FEEDBACK_ISSUE_LABELS ?? "clayton-feedback,demo").split(",").map((item) => item.trim()).filter(Boolean),
    pullRequestLabels: (env.FEEDBACK_PR_LABELS ?? "clayton-demo-auto,risk-reviewed-low").split(",").map((item) => item.trim()).filter(Boolean),
    pullRequestBaseBranch: env.FEEDBACK_PR_BASE_BRANCH ?? "main",
    autoMerge: env.FEEDBACK_AUTO_MERGE === "true",
    githubToken: env.GITHUB_TOKEN,
    githubRepository: env.GITHUB_REPOSITORY,
    commandTimeoutMs: positiveInteger(env.FEEDBACK_COMMAND_TIMEOUT_MS, 30 * 60_000, "FEEDBACK_COMMAND_TIMEOUT_MS", 2 * 60 * 60_000),
    maxOutputBytes: positiveInteger(env.FEEDBACK_MAX_OUTPUT_BYTES, 2 * 1024 * 1024, "FEEDBACK_MAX_OUTPUT_BYTES", 16 * 1024 * 1024),
    pollMs: positiveInteger(env.FEEDBACK_POLL_MS, 5_000, "FEEDBACK_POLL_MS", 60_000)
  };
}

export function loadRelayConfig(env = process.env) {
  if (!env.FEEDBACK_ADMIN_TOKEN) throw new Error("FEEDBACK_ADMIN_TOKEN is required");
  return {
    host: env.FEEDBACK_RELAY_HOST ?? "127.0.0.1",
    port: positiveInteger(env.FEEDBACK_RELAY_PORT, 8787, "FEEDBACK_RELAY_PORT", 65_535),
    token: env.FEEDBACK_ADMIN_TOKEN,
    dataRoot: path.resolve(env.FEEDBACK_DATA_ROOT ?? path.join(AUTOMATION_ROOT, "runtime")),
    maxBodyBytes: positiveInteger(env.FEEDBACK_MAX_BODY_BYTES, 64 * 1024, "FEEDBACK_MAX_BODY_BYTES", 256 * 1024),
    maxRequestsPerMinute: positiveInteger(env.FEEDBACK_RATE_LIMIT_PER_MINUTE, 5, "FEEDBACK_RATE_LIMIT_PER_MINUTE", 60),
    allowedOrigins: (env.FEEDBACK_ALLOWED_ORIGINS ?? "").split(",").map((item) => item.trim()).filter(Boolean),
    releaseRoot: path.resolve(env.SETUPNINJA_RELEASE_ROOT ?? path.join(AUTOMATION_ROOT, "runtime", "releases"))
  };
}
