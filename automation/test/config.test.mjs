import assert from "node:assert/strict";
import test from "node:test";

import { loadWorkerConfig } from "../src/config.mjs";

test("defaults to dry-run with a visible plan", () => {
  const config = loadWorkerConfig({});
  assert.equal(config.dryRun, true);
  assert.deepEqual(config.dispatcherArgv.slice(0, 4), ["opencode", "run", "--dir", "{worktree}"]);
  assert.deepEqual(config.testCommands, [["npm", "ci"], ["npm", "test"], ["npm", "run", "build"]]);
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

test("loads opt-in local signed release settings", () => {
  const config = loadWorkerConfig({
    SETUPNINJA_AUTO_RELEASE: "true",
    SETUPNINJA_RELEASE_ROOT: "/tmp/releases",
    SETUPNINJA_RELEASE_BASE_URL: "https://downloads.example.test",
    SETUPNINJA_UPDATE_SIGNING_KEY_FILE: "/tmp/update.pem",
    SETUPNINJA_UPDATE_PUBLIC_KEY_FILE: "/tmp/update.b64",
    SETUPNINJA_FEEDBACK_URL: "https://feedback.example.test",
    SETUPNINJA_UPDATE_URL: "https://updates.example.test/demo.json",
    SETUPNINJA_ANDROID_CERT_SHA256: "a".repeat(64),
    ANDROID_HOME: "/tmp/android"
  });
  assert.equal(config.autoRelease, true);
  assert.equal(config.releaseBaseUrl, "https://downloads.example.test");
  assert.equal(config.updateSigningKeyFile, "/tmp/update.pem");
});
