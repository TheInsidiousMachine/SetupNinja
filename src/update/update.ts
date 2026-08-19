export type AppInfo = {
  versionCode: number;
  versionName: string;
  feedbackEndpoint: string;
  updateManifestUrl: string;
  feedbackIssueUrl: string;
};

export type UpdateManifest = {
  schemaVersion: 1;
  channel: "demo";
  versionCode: number;
  versionName: string;
  apkUrl: string;
  sha256: string;
  signature: string;
  notes?: string;
  publishedAt?: string;
};

export type UpdateCheck = {
  available: boolean;
  manifest: UpdateManifest;
};

export type NativeUpdateStatus = {
  ok: boolean;
  state: string;
  message: string;
};

type NativeBridge = {
  appInfo?: () => string;
  installUpdate?: (apkUrl: string, sha256: string, versionCode: number, versionName: string, signature: string) => string;
  updateStatus?: () => string;
};

const FALLBACK_APP_INFO: AppInfo = {
  versionCode: 1,
  versionName: "web",
  feedbackEndpoint: import.meta.env.VITE_SETUPNINJA_FEEDBACK_URL ?? "",
  updateManifestUrl: import.meta.env.VITE_SETUPNINJA_UPDATE_URL ?? "",
  feedbackIssueUrl: import.meta.env.VITE_SETUPNINJA_FEEDBACK_ISSUE_URL ?? "",
};

function nativeBridge(): NativeBridge | undefined {
  return (window as Window & { AndroidUsb?: NativeBridge }).AndroidUsb;
}

export function readAppInfo(): AppInfo {
  const raw = nativeBridge()?.appInfo?.();
  if (!raw) return FALLBACK_APP_INFO;
  try {
    const value = JSON.parse(raw) as Partial<AppInfo>;
    return {
      versionCode: positiveInteger(value.versionCode) ? value.versionCode : FALLBACK_APP_INFO.versionCode,
      versionName: typeof value.versionName === "string" ? value.versionName : FALLBACK_APP_INFO.versionName,
      feedbackEndpoint: typeof value.feedbackEndpoint === "string" ? value.feedbackEndpoint : "",
      updateManifestUrl: typeof value.updateManifestUrl === "string" ? value.updateManifestUrl : "",
      feedbackIssueUrl: typeof value.feedbackIssueUrl === "string" ? value.feedbackIssueUrl : "",
    };
  } catch {
    return FALLBACK_APP_INFO;
  }
}

export function parseUpdateManifest(value: unknown): UpdateManifest {
  if (!value || typeof value !== "object") throw new Error("The update manifest is not an object.");
  const candidate = value as Partial<UpdateManifest>;
  if (candidate.schemaVersion !== 1 || candidate.channel !== "demo") {
    throw new Error("The update manifest schema or channel is unsupported.");
  }
  if (!positiveInteger(candidate.versionCode) || typeof candidate.versionName !== "string") {
    throw new Error("The update version is invalid.");
  }
  if (typeof candidate.apkUrl !== "string" || !trustedArtifactUrl(candidate.apkUrl)) {
    throw new Error("The update APK must use HTTPS or the private Tailscale relay.");
  }
  if (typeof candidate.sha256 !== "string" || !/^[a-fA-F0-9]{64}$/.test(candidate.sha256)) {
    throw new Error("The update checksum is invalid.");
  }
  if (typeof candidate.signature !== "string" || !/^[A-Za-z0-9+/]+={0,2}$/.test(candidate.signature)) {
    throw new Error("The update signature is invalid.");
  }
  return {
    schemaVersion: 1,
    channel: "demo",
    versionCode: candidate.versionCode,
    versionName: candidate.versionName,
    apkUrl: candidate.apkUrl,
    sha256: candidate.sha256.toLowerCase(),
    signature: candidate.signature,
    notes: typeof candidate.notes === "string" ? candidate.notes.slice(0, 2_000) : undefined,
    publishedAt: typeof candidate.publishedAt === "string" ? candidate.publishedAt : undefined,
  };
}

export async function checkForUpdate(
  appInfo: AppInfo,
  fetcher: typeof fetch = fetch,
): Promise<UpdateCheck> {
  if (!appInfo.updateManifestUrl) throw new Error("No demo update channel is configured.");
  const response = await fetcher(appInfo.updateManifestUrl, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`The update service returned HTTP ${response.status}.`);
  const manifest = parseUpdateManifest(await response.json());
  return { available: manifest.versionCode > appInfo.versionCode, manifest };
}

export function beginNativeUpdate(manifest: UpdateManifest): { ok: boolean; message?: string } {
  const bridge = nativeBridge();
  if (!bridge?.installUpdate) return { ok: false, message: "Install this APK from the download page." };
  try {
    const result = JSON.parse(
      bridge.installUpdate(
        manifest.apkUrl,
        manifest.sha256,
        manifest.versionCode,
        manifest.versionName,
        manifest.signature,
      ),
    ) as { ok?: boolean; message?: string };
    return { ok: result.ok === true, message: result.message };
  } catch {
    return { ok: false, message: "Android could not start the update." };
  }
}

export function readNativeUpdateStatus(): NativeUpdateStatus | null {
  const raw = nativeBridge()?.updateStatus?.();
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<NativeUpdateStatus>;
    if (typeof value.state !== "string" || typeof value.message !== "string") return null;
    return {
      ok: value.ok === true,
      state: value.state,
      message: value.message,
    };
  } catch {
    return null;
  }
}

function positiveInteger(value: unknown): value is number {
  return Number.isInteger(value) && Number(value) > 0;
}

function trustedArtifactUrl(value: string): boolean {
  const url = new URL(value);
  if (url.protocol === "https:") return true;
  if (url.protocol !== "http:") return false;
  const octets = url.hostname.split(".").map(Number);
  return octets.length === 4 && octets.every((part) => Number.isInteger(part) && part >= 0 && part <= 255) &&
    octets[0] === 100 && octets[1] >= 64 && octets[1] <= 127;
}
