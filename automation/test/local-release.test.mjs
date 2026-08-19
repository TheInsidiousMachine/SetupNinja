import assert from "node:assert/strict";
import { generateKeyPairSync } from "node:crypto";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { LocalReleasePublisher } from "../src/local-release.mjs";

async function fixture(expectedCertificateSha256 = "ab".repeat(32)) {
  const root = await mkdtemp(path.join(tmpdir(), "setupninja-local-release-"));
  const worktreePath = path.join(root, "worktree");
  const releaseRoot = path.join(root, "releases");
  const output = path.join(worktreePath, "android/app/build/outputs/apk/release");
  await mkdir(path.join(worktreePath, "dist"), { recursive: true });
  await mkdir(path.join(worktreePath, "android/app/src/main/assets/www"), { recursive: true });
  await mkdir(releaseRoot, { recursive: true });
  await writeFile(path.join(worktreePath, "dist/index.html"), "new web bundle");
  await writeFile(path.join(worktreePath, "android/app/src/main/assets/www/old.js"), "old");
  await writeFile(path.join(releaseRoot, "manifest.json"), JSON.stringify({ versionCode: 2 }));
  const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  const privateKeyFile = path.join(root, "update.pem");
  const publicKeyFile = path.join(root, "update.b64");
  await writeFile(privateKeyFile, privateKey.export({ type: "pkcs8", format: "pem" }));
  await writeFile(publicKeyFile, "public-key-base64");

  const commands = [];
  const execute = async (argv, options) => {
    commands.push({ argv, options });
    if (argv[0] === "android/gradlew") {
      await mkdir(output, { recursive: true });
      await writeFile(path.join(output, "app-release.apk"), "signed apk bytes");
      return { exitCode: 0, stdout: "BUILD SUCCESSFUL", stderr: "" };
    }
    return {
      exitCode: 0,
      stdout: `Signer #1 certificate SHA-256 digest: ${expectedCertificateSha256}`,
      stderr: ""
    };
  };
  const publisher = new LocalReleasePublisher({
    releaseRoot,
    releaseBaseUrl: "http://100.127.108.57:8877/releases",
    updateSigningKeyFile: privateKeyFile,
    updatePublicKeyFile: publicKeyFile,
    feedbackUrl: "http://100.127.108.57:8877/v1/feedback",
    updateUrl: "http://100.127.108.57:8877/v1/update/demo.json",
    androidHome: path.join(root, "android-sdk"),
    expectedCertificateSha256,
    execute,
    apkSignerPath: "/fake/apksigner"
  });
  return { publisher, root, worktreePath, releaseRoot, commands };
}

test("builds, certificate-checks, and atomically advances a signed demo release", async () => {
  const { publisher, worktreePath, releaseRoot, commands } = await fixture();
  const manifest = await publisher.publish({
    worktree: { path: worktreePath },
    feedbackId: "fb_0123456789abcdef01234567",
    summary: "Improve viewport controls"
  });

  assert.equal(manifest.versionCode, 3);
  assert.equal(manifest.versionName, "0.2.0-demo.3");
  assert.equal(await readFile(path.join(worktreePath, "android/app/src/main/assets/www/index.html"), "utf8"), "new web bundle");
  await assert.rejects(readFile(path.join(worktreePath, "android/app/src/main/assets/www/old.js")), /ENOENT/);
  assert.equal(await readFile(path.join(releaseRoot, "setupninja-demo-3.apk"), "utf8"), "signed apk bytes");
  assert.equal(JSON.parse(await readFile(path.join(releaseRoot, "manifest.json"))).versionCode, 3);
  assert.equal(commands[0].options.env.SETUPNINJA_VERSION_CODE, "3");
  assert.equal(commands[0].options.env.SETUPNINJA_UPDATE_PUBLIC_KEY, "public-key-base64");
});

test("refuses to publish an APK signed by a different identity", async () => {
  const { publisher, worktreePath, releaseRoot } = await fixture("cd".repeat(32));
  publisher.expectedCertificateSha256 = "ab".repeat(32);
  await assert.rejects(
    publisher.publish({
      worktree: { path: worktreePath },
      feedbackId: "fb_0123456789abcdef01234567",
      summary: "Unsafe release"
    }),
    /certificate.*pinned demo identity/i
  );
  assert.equal(JSON.parse(await readFile(path.join(releaseRoot, "manifest.json"))).versionCode, 2);
});
