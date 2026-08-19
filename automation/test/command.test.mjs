import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { childEnvironment, expandArgv, parseArgvJson, runArgv } from "../src/command.mjs";

test("parses an argv array and rejects shell command wrappers", () => {
  assert.deepEqual(
    parseArgvJson('["opencode","run","{promptFile}"]', "dispatcher", ["opencode"]),
    ["opencode", "run", "{promptFile}"]
  );
  assert.throws(
    () => parseArgvJson('["sh","-c","opencode run $PROMPT"]', "dispatcher", ["opencode"]),
    /not allowed/
  );
  assert.throws(
    () => parseArgvJson('"opencode run prompt"', "dispatcher", ["opencode"]),
    /JSON array/
  );
});

test("expands only allowlisted placeholders without parsing feedback as commands", () => {
  assert.deepEqual(
    expandArgv(["opencode", "run", "Fix {feedbackId}", "{promptFile}"], {
      feedbackId: "fb_123",
      promptFile: "/tmp/prompt; touch /tmp/not-run"
    }),
    ["opencode", "run", "Fix fb_123", "/tmp/prompt; touch /tmp/not-run"]
  );
  assert.throws(() => expandArgv(["opencode", "{unknown}"], {}), /unknown placeholder/);
});

test("runs argv directly without shell interpretation", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "claycam-command-"));
  const marker = path.join(root, "injected");
  const result = await runArgv(
    [process.execPath, "-e", "process.stdout.write(process.argv[1])", `safe; touch ${marker}`],
    { cwd: root, timeoutMs: 5_000, maxOutputBytes: 1024 }
  );
  assert.equal(result.stdout, `safe; touch ${marker}`);
  await assert.rejects(readFile(marker), /ENOENT/);
});

test("terminates commands that exceed their timeout", async () => {
  await assert.rejects(
    runArgv([process.execPath, "-e", "setTimeout(() => {}, 5000)"], {
      cwd: process.cwd(), timeoutMs: 20, maxOutputBytes: 1024
    }),
    /timed out/
  );
});

test("removes repository and release credentials from coding-agent environments", () => {
  const environment = childEnvironment({
    PATH: "/bin",
    GITHUB_TOKEN: "github",
    FEEDBACK_ADMIN_TOKEN: "feedback",
    DEMO_UPDATE_SIGNING_KEY_PEM: "private",
    SETUPNINJA_UPDATE_SIGNING_KEY_FILE: "/private/key",
    DEMO_ANDROID_KEYSTORE_BASE64: "keystore"
  });
  assert.deepEqual(environment, { PATH: "/bin" });
});
