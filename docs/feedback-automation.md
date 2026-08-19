# Clayton feedback automation

## Active demo topology

The APK keeps the CAM workflow, viewer, tests, and export assets inside the package. It does not need a connection to plan, inspect, verify, or export a proof program.

When the phone is online, it posts queued feedback to the Mahoraga host over its private Tailscale address. The relay validates and rate-limits anonymous intake, stores it durably, and keeps status/log endpoints behind an admin bearer token. The app never contains a GitHub token or agent credential.

The connected demo phone and Mahoraga are already on the same tailnet. The current endpoints are:

- Feedback: `http://100.127.108.57:8877/v1/feedback`
- Update manifest: `http://100.127.108.57:8877/v1/update/demo.json`
- APK artifacts: `http://100.127.108.57:8877/releases/<name>.apk`

This HTTP route is still WireGuard-encrypted by Tailscale. Android permits cleartext only for the exact tailnet host. APK installation additionally requires a build-pinned RSA signature over the update manifest and a matching SHA-256. Public or LAN HTTP artifact URLs are rejected.

`setupninja-feedback-relay.service` runs as a user service. Tailscale Serve could replace the direct tailnet URL with HTTPS after Serve is enabled in the tailnet admin console.

## Dispatch and approval

`automation/src/worker-cli.mjs` claims one queued report, creates a private GitHub issue, creates an isolated worktree, and runs OpenCode with a fixed prompt that treats the feedback JSON as untrusted data. Commands are argv arrays executed without a shell. Secret-bearing environment variables are removed from the coding-agent process.

Automatic publication is deliberately limited to these paths:

- `src/ui/`
- `tests/e2e/`
- `public/`
- `docs/`

Toolpath and export feedback, blocker severity, CAM/kernel changes, Android native changes, dependencies, signing, automation, and workflows are held or rejected. They do not auto-merge.

For an allowed UI change, the worker runs Vitest, the production build, Playwright, Android lint, and APK assembly, then commits, pushes, and opens a labeled PR. The current private-repository token cannot publish workflow files because it lacks GitHub's `workflow` OAuth scope, so the live worker can squash-merge that exact tested head itself. Once that scope is granted, `.github/workflows/feedback-pr-gate.yml` provides an independent duplicate gate before merge.

GitHub branch protection is unavailable on the current private-repository plan. The independent Actions job is therefore the enforceable auto-merge gate. Moving the repository to a plan with rulesets should precede broadening automatic approval.

## Release and update

`.github/workflows/demo-apk-release.yml` builds a versioned APK, signs it with protected repository secrets, verifies the signing certificate, emits a canonical RSA-SHA256-signed manifest, and publishes the bundle. A public binary host, Firebase App Distribution, or the private tailnet relay must mirror the bundle because unauthenticated clients cannot download a private GitHub release.

The app checks its configured manifest at startup/resume. A newer signed build produces an **Install update** action. Android then shows its required package-installer confirmation. Silent APK replacement is not available to an ordinary app on stock Android.

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
