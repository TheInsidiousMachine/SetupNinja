import assert from "node:assert/strict";
import test from "node:test";

import { loadWorkerConfig } from "../src/config.mjs";

test("defaults to dry-run with a visible plan", () => {
  const config = loadWorkerConfig({});
  assert.equal(config.dryRun, true);
  assert.equal(config.dispatcherArgv[0], "opencode");
  assert.deepEqual(config.testCommands, [["npm", "test"], ["npm", "run", "build"]]);
});

test("live mode requires GitHub and an explicit dispatcher command", () => {
  assert.throws(() => loadWorkerConfig({ FEEDBACK_DRY_RUN: "false" }), /FEEDBACK_DISPATCH_COMMAND_JSON/);
  assert.throws(() => loadWorkerConfig({
    FEEDBACK_DRY_RUN: "false",
    FEEDBACK_DISPATCH_COMMAND_JSON: '["opencode","run","{promptFile}"]'
  }), /GITHUB_TOKEN/);
});

test("live mode parses shell-free dispatcher and test command arrays", () => {
  const config = loadWorkerConfig({
    FEEDBACK_DRY_RUN: "false",
    FEEDBACK_DISPATCH_COMMAND_JSON: '["omnigent","run","--harness","opencode","-p","Use {promptFile}"]',
    FEEDBACK_TEST_COMMANDS_JSON: '[["npm","test"],["npm","run","build"]]',
    GITHUB_TOKEN: "token",
    GITHUB_REPOSITORY: "owner/repo"
  });
  assert.equal(config.dryRun, false);
  assert.equal(config.dispatcherArgv[0], "omnigent");
  assert.equal(config.testCommands.length, 2);
});
