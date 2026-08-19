import assert from "node:assert/strict";
import { generateKeyPairSync, verify } from "node:crypto";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { writeReleaseBundle } from "../src/release.mjs";

test("writes a checksum-pinned manifest with the native canonical RSA-SHA256 signature", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-release-"));
  const apkPath = path.join(root, "source.apk");
  const outputDir = path.join(root, "out");
  await writeFile(apkPath, "test apk bytes");
  const { privateKey, publicKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });

  const result = await writeReleaseBundle({
    apkPath,
    outputDir,
    versionCode: 7,
    versionName: "0.2.0-demo.7",
    apkUrl: "https://downloads.example.test/setupninja-demo-7.apk",
    notes: "Viewer improvements",
    privateKeyPem: privateKey.export({ type: "pkcs8", format: "pem" })
  });

  const manifestBytes = await readFile(result.manifestPath);
  const manifest = JSON.parse(manifestBytes);
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.versionCode, 7);
  assert.match(manifest.sha256, /^[a-f0-9]{64}$/);
  const canonical = Buffer.from(
    `1\ndemo\n${manifest.versionCode}\n${manifest.versionName}\n${manifest.apkUrl}\n${manifest.sha256}\n`,
    "utf8"
  );
  assert.equal(verify("RSA-SHA256", canonical, publicKey, Buffer.from(manifest.signature, "base64")), true);
  assert.deepEqual(await readFile(result.apkPath), await readFile(apkPath));
});

test("requires HTTPS artifact URLs and a signing key", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-release-"));
  const apkPath = path.join(root, "source.apk");
  await writeFile(apkPath, "apk");
  await assert.rejects(writeReleaseBundle({
    apkPath,
    outputDir: path.join(root, "out"),
    versionCode: 1,
    versionName: "1.0.0",
    apkUrl: "http://downloads.invalid/app.apk",
    privateKeyPem: ""
  }), /HTTPS|signing key/);
});

test("allows the encrypted private Tailscale artifact route", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-release-tailnet-"));
  const apkPath = path.join(root, "source.apk");
  await writeFile(apkPath, "apk");
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  const result = await writeReleaseBundle({
    apkPath,
    outputDir: path.join(root, "out"),
    versionCode: 2,
    versionName: "0.2.0",
    apkUrl: "http://100.127.108.57:8877/releases/setupninja-demo-2.apk",
    privateKeyPem: privateKey.export({ type: "pkcs8", format: "pem" })
  });
  assert.equal(result.manifest.channel, "demo");
});
