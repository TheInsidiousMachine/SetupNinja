import { createHash, sign } from "node:crypto";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export async function writeReleaseBundle({
  apkPath,
  outputDir,
  versionCode,
  versionName,
  apkUrl,
  notes,
  privateKeyPem,
  publishedAt = new Date().toISOString()
}) {
  if (!Number.isInteger(versionCode) || versionCode <= 0) throw new Error("versionCode must be a positive integer");
  if (typeof versionName !== "string" || !versionName.trim()) throw new Error("versionName is required");
  if (!trustedArtifactUrl(apkUrl)) throw new Error("apkUrl must use HTTPS or the private Tailscale relay");
  if (!privateKeyPem) throw new Error("an RSA signing key is required");

  const apkBytes = await readFile(apkPath);
  const apkName = path.basename(new URL(apkUrl).pathname);
  if (!apkName.toLowerCase().endsWith(".apk")) throw new Error("apkUrl must end with .apk");
  await mkdir(outputDir, { recursive: true, mode: 0o700 });
  const destinationApk = path.join(outputDir, apkName);
  await copyFile(apkPath, destinationApk);
  const unsignedManifest = {
    schemaVersion: 1,
    channel: "demo",
    versionCode,
    versionName: versionName.trim(),
    apkUrl,
    sha256: createHash("sha256").update(apkBytes).digest("hex"),
    ...(notes ? { notes: String(notes).slice(0, 2000) } : {}),
    publishedAt
  };
  const canonical = Buffer.from([
    unsignedManifest.schemaVersion,
    unsignedManifest.channel,
    unsignedManifest.versionCode,
    unsignedManifest.versionName,
    unsignedManifest.apkUrl,
    unsignedManifest.sha256,
    ""
  ].join("\n"), "utf8");
  const signature = sign("RSA-SHA256", canonical, privateKeyPem).toString("base64");
  const manifest = { ...unsignedManifest, signature };
  const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`);
  const manifestPath = path.join(outputDir, "manifest.json");
  await writeFile(manifestPath, manifestBytes, { mode: 0o644 });
  return { apkPath: destinationApk, manifestPath, manifest, canonical };
}

function trustedArtifactUrl(value) {
  const url = new URL(value);
  if (url.protocol === "https:") return true;
  if (url.protocol !== "http:") return false;
  const octets = url.hostname.split(".").map(Number);
  return octets.length === 4 && octets.every((part) => Number.isInteger(part) && part >= 0 && part <= 255) &&
    octets[0] === 100 && octets[1] >= 64 && octets[1] <= 127;
}
