# SetupNinja Testing

SetupNinja uses several independent test layers because a passing web test does not prove that the Android shell, file chooser, storage bridge, or physical-device layout works.

## Fast deterministic checks

```bash
npm test
npm run build
```

Vitest covers the heightmap, parametric features, seeded toolpath properties, cutter-envelope clearance, feed simulation, G-code modal sequencing, malformed STL limits, and deterministic plan verifier. The build command runs TypeScript checking before producing the Vite bundle.

## Browser workflow and accessibility

```bash
npm run test:e2e
npm run test:a11y
npm run test:visual
```

Playwright builds the production bundle and starts an isolated Vite preview for every run. It checks guided validation, stale worker replies, rapid setup churn, repeated actions, draft invalidation, deterministic-check and safety gating, downloads, keyboard-only use, refresh behavior, JavaScript errors, 150–200% text scaling, horizontal overflow, and touch target sizes across four phone/tablet widths. axe-core scans the main and guided states for automated WCAG A/AA failures.

Visual references live beside the specs in `tests/e2e/*.spec.ts-snapshots/`. Update them only after reviewing the rendered change:

```bash
npx playwright test tests/e2e/setupninja.visual.spec.ts --update-snapshots
```

Failure traces, screenshots, video, and the HTML report are written under `test-results/`.

## Physical Android device

Run Android lint before device delivery:

```bash
cd android
./gradlew :app:lintDebug
```

Connect and authorize a device, then run:

```bash
ANDROID_SERIAL=R3GL405E98X ./scripts/test-android-device.sh
```

The script builds the web bundle, synchronizes Android assets, assembles and installs the debug APK, grants camera permission, runs AndroidX instrumented tests, launches the final app, and captures a screenshot, accessibility tree, and logcat. Instrumented coverage includes rotation, HOME/background recovery, activity relaunch, and a packaged-content launch with device networks disabled. The script fails on a missing app UI or common crash/WebView load markers.

Artifacts are written to `test-results/android/`:

- `device.png`: final physical-device screenshot.
- `window.xml`: Android accessibility hierarchy used for assertions.
- `logcat.txt`: final clean-launch logs.

The APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.

## Scope of proof

These checks prove that the current proof-program workflow behaves consistently and that its generated moves satisfy the implemented deterministic invariants. They do not certify G-code for a specific CNC controller, fixture, tool reach, workholding, or machine envelope. STL remains a unit-assumed 2.5D heightmap import, and the generic Fanuc-style post is not a controller profile. A controller-specific post plus a compatible independent interpreter/simulator gate is required before machine use.
