import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import { beginNativeUpdate, checkForUpdate, readAppInfo, readNativeUpdateStatus, type UpdateCheck } from "../update/update";

export function UpdatePanel() {
  const appInfo = useMemo(readAppInfo, []);
  const [result, setResult] = useState<UpdateCheck | null>(null);
  const [state, setState] = useState<"idle" | "checking" | "ready" | "current" | "error" | "installing">("idle");
  const [message, setMessage] = useState("");

  const check = useCallback(async (quiet = false) => {
    if (!appInfo.updateManifestUrl) return;
    if (!quiet) setState("checking");
    try {
      const next = await checkForUpdate(appInfo);
      setResult(next);
      setState(next.available ? "ready" : "current");
      setMessage(next.available ? `Version ${next.manifest.versionName} passed the release gates.` : "This demo is current.");
    } catch (error) {
      if (!quiet) {
        setState("error");
        setMessage(error instanceof Error ? error.message : "The update check failed.");
      }
    }
  }, [appInfo]);

  useEffect(() => {
    void check(true);
    const onVisible = () => {
      if (document.visibilityState === "visible") void check(true);
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [check]);

  useEffect(() => {
    if (state !== "installing") return;
    const id = window.setInterval(() => {
      const native = readNativeUpdateStatus();
      if (!native) return;
      setMessage(native.message);
      if (!native.ok) setState("error");
      if (native.state === "installing") setState("installing");
      if (native.state === "failed") setState("error");
    }, 1_500);
    return () => window.clearInterval(id);
  }, [state]);

  if (!appInfo.updateManifestUrl) return null;

  const latestPublished = result?.manifest.publishedAt
    ? new Date(result.manifest.publishedAt).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
    : "";

  const install = () => {
    if (!result?.available) return;
    const started = beginNativeUpdate(result.manifest);
    setState(started.ok ? "installing" : "error");
    setMessage(started.ok ? "Downloading and verifying the APK. Android will ask you to confirm installation." : (started.message ?? "The update could not start."));
  };

  return (
    <section className="update-panel" aria-labelledby="update-title">
      <div>
        <p className="step-label">Demo channel · v{appInfo.versionName}</p>
        <h2 id="update-title">App updates</h2>
        <p className="update-message" role="status">
          {message || "SetupNinja checks the public GitHub release feed when the app opens or resumes."}
        </p>
        {result?.available && result.manifest.notes ? <p className="update-notes">{result.manifest.notes}</p> : null}
        {latestPublished ? <p className="update-notes">Latest release: {latestPublished}</p> : null}
      </div>
      {state === "ready" ? (
        <button type="button" className="btn primary" onClick={install}>Install update</button>
      ) : (
        <button type="button" className="btn" onClick={() => void check()} disabled={state === "checking" || state === "installing"}>
          <RefreshCw aria-hidden="true" />
          {state === "checking" ? "Checking…" : state === "installing" ? "Downloading…" : "Check for update"}
        </button>
      )}
    </section>
  );
}
