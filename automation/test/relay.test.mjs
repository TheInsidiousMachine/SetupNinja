import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { createRelayServer } from "../src/relay.mjs";
import { FeedbackStore } from "../src/store.mjs";
import { validFeedback } from "./fixtures.mjs";

async function withRelay(run) {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-relay-"));
  const store = new FeedbackStore(root);
  const server = createRelayServer({ store, token: "test-token", maxBodyBytes: 1024 });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    await run(`http://127.0.0.1:${port}`, store);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}

test("accepts anonymous feedback but protects status with a bearer token", async () => {
  await withRelay(async (baseUrl) => {
    const accepted = await fetch(`${baseUrl}/v1/feedback`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(validFeedback)
    });
    assert.equal(accepted.status, 202);
    const body = await accepted.json();
    assert.match(body.id, /^fb_/);

    const unauthorizedStatus = await fetch(`${baseUrl}/v1/status/${body.id}`);
    assert.equal(unauthorizedStatus.status, 401);
    const status = await fetch(`${baseUrl}/v1/status/${body.id}`, {
      headers: { authorization: "Bearer test-token" }
    });
    assert.equal(status.status, 200);
    assert.equal((await status.json()).state, "queued");
  });
});

test("rejects unsupported content types and oversized bodies", async () => {
  await withRelay(async (baseUrl) => {
    const wrongType = await fetch(`${baseUrl}/v1/feedback`, {
      method: "POST",
      headers: { "content-type": "text/plain" },
      body: "feedback"
    });
    assert.equal(wrongType.status, 415);

    const oversized = await fetch(`${baseUrl}/v1/feedback`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...validFeedback, details: "x".repeat(2000) })
    });
    assert.equal(oversized.status, 413);
  });
});

test("health is public but logs remain authenticated", async () => {
  await withRelay(async (baseUrl) => {
    assert.equal((await fetch(`${baseUrl}/healthz`)).status, 200);
    assert.equal((await fetch(`${baseUrl}/v1/logs/fb_000000000000000000000000`)).status, 401);
  });
});

test("serves only the signed demo manifest and safe APK names from the release directory", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-relay-release-"));
  const store = new FeedbackStore(path.join(root, "store"));
  await writeFile(path.join(root, "manifest.json"), '{"schemaVersion":1}\n');
  await writeFile(path.join(root, "setupninja-demo-2.apk"), "apk bytes");
  const server = createRelayServer({ store, token: "test-token", releaseRoot: root });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    const baseUrl = `http://127.0.0.1:${port}`;
    assert.equal((await fetch(`${baseUrl}/v1/update/demo.json`)).status, 200);
    const apk = await fetch(`${baseUrl}/releases/setupninja-demo-2.apk`);
    assert.equal(apk.status, 200);
    assert.equal(apk.headers.get("content-type"), "application/vnd.android.package-archive");
    assert.notEqual((await fetch(`${baseUrl}/releases/%2e%2e%2ffeedback.env`)).status, 200);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});

test("allows only explicitly configured WebView origins", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-relay-"));
  const store = new FeedbackStore(root);
  const server = createRelayServer({
    store,
    token: "test-token",
    allowedOrigins: ["https://appassets.androidplatform.net"]
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  try {
    const allowed = await fetch(`http://127.0.0.1:${port}/v1/feedback`, {
      method: "OPTIONS",
      headers: {
        origin: "https://appassets.androidplatform.net",
        "access-control-request-method": "POST",
        "access-control-request-headers": "authorization,content-type"
      }
    });
    assert.equal(allowed.status, 204);
    assert.equal(allowed.headers.get("access-control-allow-origin"), "https://appassets.androidplatform.net");

    const denied = await fetch(`http://127.0.0.1:${port}/v1/feedback`, {
      method: "OPTIONS",
      headers: { origin: "https://attacker.invalid", "access-control-request-method": "POST" }
    });
    assert.equal(denied.status, 403);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
});
