# Clayton feedback automation

## Active demo topology

The APK keeps the CAM workflow, viewer, tests, and export assets inside the package. It does not need a connection to plan, inspect, verify, or export a proof program.

The live relay-to-agent path was exercised during this smoke check.

When the phone is online, it can post queued feedback to a configured HTTPS intake service. If no public intake service is configured, the app opens a prefilled GitHub issue form instead. The GitHub path requires Clayton to have repository issue access, but it does not put a GitHub token or agent credential inside the APK. The local worker polls open `clayton-feedback,demo` issues, imports each issue once into the same durable queue, comments that it was queued, and then runs the normal gated worker path.

The old Mahoraga tailnet relay still works for local smoke tests, but it is not the Clayton distribution channel.

The connected demo phone and Mahoraga are already on the same tailnet. The current endpoints are:

- Local feedback relay: `http://100.127.108.57:8877/v1/feedback`
- Clayton update manifest: `https://github.com/TheInsidiousMachine/SetupNinja/releases/latest/download/manifest.json`
- Clayton APK download: `https://github.com/TheInsidiousMachine/SetupNinja/releases/latest/download/setupninja-demo.apk`
- Clayton feedback fallback: `https://github.com/TheInsidiousMachine/SetupNinja/issues/new?labels=clayton-feedback,demo`

This HTTP route is still WireGuard-encrypted by Tailscale. Android permits cleartext only for the exact tailnet host. APK installation additionally requires a build-pinned RSA signature over the update manifest and a matching SHA-256. Public or LAN HTTP artifact URLs are rejected.

`setupninja-feedback-relay.service` runs as a user service. Tailscale Serve could replace the direct tailnet URL with HTTPS after Serve is enabled in the tailnet admin console.

## Dispatch and approval

`automation/src/worker-cli.mjs` imports new GitHub issue feedback, claims one queued report, reuses the source issue when present, creates an isolated worktree, and runs OpenCode with a fixed prompt that treats the feedback JSON as untrusted data. Commands are argv arrays executed without a shell. Secret-bearing environment variables are removed from the coding-agent process.

Automatic publication is deliberately limited to these paths:

- `src/ui/`
- `tests/e2e/`
- `public/`
- `docs/`

Toolpath and export feedback, blocker severity, CAM/kernel changes, Android native changes, dependencies, signing, automation, and workflows are held or rejected. They do not auto-merge.

For an allowed UI change, the worker installs locked dependencies, runs Vitest, the production build, Playwright, Android lint, and APK assembly, then commits, pushes, and opens a labeled PR. The current private-repository token cannot publish workflow files because it lacks GitHub's `workflow` OAuth scope, so the live worker can squash-merge that exact tested head itself. Once that scope is granted, `.github/workflows/feedback-pr-gate.yml` provides an independent duplicate gate before merge.

After a successful local auto-merge, the worker creates the next monotonic Android version, copies the tested web bundle into packaged assets, builds the signed release, verifies the expected Android signing-certificate SHA-256, and publishes the APK plus RSA-signed update manifest to the private relay. Artifact publication happens before an atomic manifest replacement, so a phone cannot discover a release before its APK is available. Android still requires Clayton to confirm installation.

GitHub branch protection is unavailable on the current private-repository plan. The independent Actions job is therefore the enforceable auto-merge gate. Moving the repository to a plan with rulesets should precede broadening automatic approval.

## Release and update

`.github/workflows/demo-apk-release.yml` builds a versioned APK, signs it with protected repository secrets, verifies the signing certificate, emits a canonical RSA-SHA256-signed manifest, and publishes the bundle to GitHub Releases. A push to `codex/setupninja-demo` creates a new signed release automatically. Manual dispatch still works when an explicit version is needed.

The app checks its configured manifest at startup/resume. A newer signed build produces an **Install update** action. Android then shows its required package-installer confirmation. Silent APK replacement is not available to an ordinary app on stock Android.

The SetupNinja release repository is public so Clayton can download directly from GitHub and the app can fetch its update manifest without embedding a GitHub token.

## Local operations

```bash
# Relay health and logs
curl http://100.127.108.57:8877/healthz
systemctl --user status setupninja-feedback-relay.service
journalctl --user -u setupninja-feedback-relay.service

# Start worker after the integration branch is pushed
systemctl --user enable --now setupninja-feedback-worker.service

# Automation verification
npm --prefix automation test
npm --prefix automation run check
```

Runtime credentials and signing keys live under `~/.config/setupninja/` with mode `0600`; they are not in the repository. Queue and release data live under `~/.local/share/setupninja-feedback/` and `~/.local/share/setupninja-releases/`.

## Framework decisions

- Three.js `OrbitControls` powers the machinist viewport.
- Playwright, axe-core, Vitest, Android UI Automator, Android lint, and device Monkey provide the automated test protocol.
- OpenCode is the isolated coding worker; the dispatcher command can be changed to an Omnigent Codex or Antigravity harness.
- Firebase App Distribution is the recommended next distribution layer for tester sign-in, update alerts, and in-app screenshot feedback once a Firebase project is supplied.
- Obtainium is a reasonable open-source APK update alternative for a public binary-only release feed.
- Capgo/Capawesome live updates were not adopted because this app is a native WebView shell rather than Capacitor, and remote UI code would expand the supply-chain boundary.
