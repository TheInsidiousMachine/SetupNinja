import { describe, expect, it, vi } from "vitest";
import { checkForUpdate, parseUpdateManifest, type AppInfo } from "./update";

const app: AppInfo = {
  versionCode: 1,
  versionName: "0.1.0",
  feedbackEndpoint: "",
  updateManifestUrl: "https://updates.example.test/demo.json",
  feedbackIssueUrl: "",
};

describe("update manifests", () => {
  it("accepts a newer checksum-pinned APK", () => {
    expect(parseUpdateManifest({
      schemaVersion: 1,
      channel: "demo",
      versionCode: 2,
      versionName: "0.2.0",
      apkUrl: "https://updates.example.test/setupninja.apk",
      sha256: "a".repeat(64),
      signature: "c2lnbmF0dXJl",
      notes: "Improved viewport",
    }).versionCode).toBe(2);
  });

  it("rejects non-HTTPS APKs and malformed checksums", () => {
    expect(() => parseUpdateManifest({
      schemaVersion: 1,
      channel: "demo",
      versionCode: 2,
      versionName: "0.2.0",
      apkUrl: "http://updates.example.test/setupninja.apk",
      sha256: "a".repeat(64),
      signature: "c2lnbmF0dXJl",
    })).toThrow(/HTTPS/);
    expect(() => parseUpdateManifest({
      schemaVersion: 1,
      channel: "demo",
      versionCode: 2,
      versionName: "0.2.0",
      apkUrl: "https://updates.example.test/setupninja.apk",
      sha256: "bad",
      signature: "c2lnbmF0dXJl",
    })).toThrow(/checksum/);
  });

  it("allows an encrypted tailnet route but rejects ordinary cleartext hosts", () => {
    expect(parseUpdateManifest({
      schemaVersion: 1,
      channel: "demo",
      versionCode: 2,
      versionName: "0.2.0",
      apkUrl: "http://100.127.108.57:8877/releases/setupninja.apk",
      sha256: "a".repeat(64),
      signature: "c2lnbmF0dXJl",
    }).apkUrl).toContain("100.127.108.57");
    expect(() => parseUpdateManifest({
      schemaVersion: 1,
      channel: "demo",
      versionCode: 2,
      versionName: "0.2.0",
      apkUrl: "http://192.168.1.2/setupninja.apk",
      sha256: "a".repeat(64),
      signature: "c2lnbmF0dXJl",
    })).toThrow(/Tailscale/);
  });

  it("distinguishes current and newer builds", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        schemaVersion: 1,
        channel: "demo",
        versionCode: 2,
        versionName: "0.2.0",
        apkUrl: "https://updates.example.test/setupninja.apk",
        sha256: "b".repeat(64),
        signature: "c2lnbmF0dXJl",
      }),
    });

    const result = await checkForUpdate(app, fetcher as typeof fetch);
    expect(result.available).toBe(true);
    expect(fetcher).toHaveBeenCalledWith(app.updateManifestUrl, expect.objectContaining({ cache: "no-store" }));
  });
});
