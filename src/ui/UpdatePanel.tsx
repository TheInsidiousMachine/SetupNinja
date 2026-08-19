import { useCallback, useEffect, useMemo, useState } from "react";
import { beginNativeUpdate, checkForUpdate, readAppInfo, type UpdateCheck } from "../update/update";

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

  if (!appInfo.updateManifestUrl) return null;

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
        {message ? <p className="update-message" role="status">{message}</p> : null}
        {result?.available && result.manifest.notes ? <p className="update-notes">{result.manifest.notes}</p> : null}
      </div>
      {state === "ready" ? (
        <button type="button" className="btn primary" onClick={install}>Install update</button>
      ) : (
        <button type="button" className="btn" onClick={() => void check()} disabled={state === "checking" || state === "installing"}>
          {state === "checking" ? "Checking…" : state === "installing" ? "Downloading…" : "Check for update"}
        </button>
      )}
    </section>
  );
}
