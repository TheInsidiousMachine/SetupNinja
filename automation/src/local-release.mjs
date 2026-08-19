import { cp, mkdir, readFile, readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

import { childEnvironment, runArgv } from "./command.mjs";
import { writeReleaseBundle } from "./release.mjs";

async function readCurrentVersion(releaseRoot) {
  try {
    const manifest = JSON.parse(await readFile(path.join(releaseRoot, "manifest.json"), "utf8"));
    if (!Number.isInteger(manifest.versionCode) || manifest.versionCode < 1) throw new Error("invalid release version");
    return manifest.versionCode;
  } catch (error) {
    if (error.code === "ENOENT") return 0;
    throw error;
  }
}

async function latestApkSigner(androidHome) {
  const root = path.join(androidHome, "build-tools");
  const versions = (await readdir(root, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
  if (!versions.length) throw new Error("Android build-tools are unavailable");
  return path.join(root, versions.at(-1), "apksigner");
}

export class LocalReleasePublisher {
  constructor({
    releaseRoot,
    releaseBaseUrl,
    updateSigningKeyFile,
    updatePublicKeyFile,
    feedbackUrl,
    updateUrl,
    androidHome,
    expectedCertificateSha256,
    versionNamePrefix = "0.2.0-demo",
    timeoutMs = 30 * 60_000,
    maxOutputBytes = 2 * 1024 * 1024,
    execute = runArgv,
    apkSignerPath
  }) {
    if (!releaseRoot || !releaseBaseUrl || !updateSigningKeyFile || !updatePublicKeyFile) {
      throw new Error("local release paths and URLs are required");
    }
    if (!feedbackUrl || !updateUrl || !androidHome) throw new Error("Android release configuration is incomplete");
    if (!/^[a-f0-9]{64}$/i.test(expectedCertificateSha256 ?? "")) {
      throw new Error("the expected Android certificate SHA-256 is required");
    }
    this.releaseRoot = path.resolve(releaseRoot);
    this.releaseBaseUrl = releaseBaseUrl.replace(/\/$/, "");
    this.updateSigningKeyFile = path.resolve(updateSigningKeyFile);
    this.updatePublicKeyFile = path.resolve(updatePublicKeyFile);
    this.feedbackUrl = feedbackUrl;
    this.updateUrl = updateUrl;
    this.androidHome = path.resolve(androidHome);
    this.expectedCertificateSha256 = expectedCertificateSha256.toLowerCase();
    this.versionNamePrefix = versionNamePrefix;
    this.timeoutMs = timeoutMs;
    this.maxOutputBytes = maxOutputBytes;
    this.execute = execute;
    this.apkSignerPath = apkSignerPath;
  }

  options(cwd, extraEnvironment = {}) {
    return {
      cwd,
      timeoutMs: this.timeoutMs,
      maxOutputBytes: this.maxOutputBytes,
      env: { ...childEnvironment(), ...extraEnvironment }
    };
  }

  async publish({ worktree, feedbackId, summary }) {
    const versionCode = await readCurrentVersion(this.releaseRoot) + 1;
    const versionName = `${this.versionNamePrefix}.${versionCode}`;
    const webAssets = path.join(worktree.path, "android/app/src/main/assets/www");
    const dist = path.join(worktree.path, "dist");
    await rm(webAssets, { recursive: true, force: true });
    await mkdir(path.dirname(webAssets), { recursive: true });
    await cp(dist, webAssets, { recursive: true });

    const updatePublicKey = (await readFile(this.updatePublicKeyFile, "utf8")).trim();
    await this.execute([
      "android/gradlew", "-p", "android", "lintRelease", "assembleRelease", "--no-daemon"
    ], this.options(worktree.path, {
      SETUPNINJA_FEEDBACK_URL: this.feedbackUrl,
      SETUPNINJA_UPDATE_URL: this.updateUrl,
      SETUPNINJA_UPDATE_PUBLIC_KEY: updatePublicKey,
      SETUPNINJA_VERSION_CODE: String(versionCode),
      SETUPNINJA_VERSION_NAME: versionName
    }));

    const apkPath = path.join(worktree.path, "android/app/build/outputs/apk/release/app-release.apk");
    const apkSigner = this.apkSignerPath ?? await latestApkSigner(this.androidHome);
    const verification = await this.execute(
      [apkSigner, "verify", "--verbose", "--print-certs", apkPath],
      this.options(worktree.path)
    );
    const certificateOutput = `${verification.stdout}\n${verification.stderr}`.toLowerCase().replaceAll(":", "");
    if (!certificateOutput.includes(this.expectedCertificateSha256)) {
      throw new Error("release APK certificate does not match the pinned demo identity");
    }

    const apkName = `setupninja-demo-${versionCode}.apk`;
    const apkUrl = `${this.releaseBaseUrl}/${apkName}`;
    const staging = path.join(this.releaseRoot, `.staging-${feedbackId}`);
    await rm(staging, { recursive: true, force: true });
    try {
      const bundle = await writeReleaseBundle({
        apkPath,
        outputDir: staging,
        versionCode,
        versionName,
        apkUrl,
        notes: `Approved feedback update: ${summary}`,
        privateKeyPem: await readFile(this.updateSigningKeyFile, "utf8")
      });
      await mkdir(this.releaseRoot, { recursive: true, mode: 0o700 });
      await rename(bundle.apkPath, path.join(this.releaseRoot, apkName));
      await rename(bundle.manifestPath, path.join(this.releaseRoot, "manifest.json"));
      return bundle.manifest;
    } finally {
      await rm(staging, { recursive: true, force: true });
    }
  }
}
