# SetupNinja Autonomous Product Quality Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use incremental-implementation to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a faster, safer SetupNinja prototype whose main guided workflow is pleasant on a phone, saves a real G-code file on Android, and passes repeatable browser and physical-device tests.

**Architecture:** Keep deterministic CAM behavior in `src/kernel` and treat the React UI as a short setup, review, verify, and export workflow. Use Playwright plus axe-core for browser behavior, accessibility, viewport, download, and visual checks. Use AndroidX UI Automator on the packaged WebView and ADB assertions on the connected phone; use a small JavaScript bridge only for native file saving.

**Tech Stack:** React 19, TypeScript 5.9, Vite 7, Vitest, Playwright Test, axe-core, Kotlin, Android WebView, AndroidX UI Automator, Gradle 9.5, AGP 9.3.1.

## Global Constraints

- Wrong G-code can damage a machine; generated output remains clearly labeled as a proof program.
- Toolpaths, compensation, feeds, and safety checks remain deterministic and auditable.
- Export is unavailable until simulation finishes and every operator safety acknowledgment is checked.
- The primary guided workflow must fit phone portrait widths from 360 to 430 CSS pixels without horizontal overflow.
- Every interactive target must be at least 44 by 44 CSS pixels and keyboard focus must be visible.
- Existing demo and STL workflows must remain usable.
- Existing user and Claude changes in the dirty worktree must be preserved.

---

## Acceptance Checklist

- [x] App launches into a clear phone workflow with Setup, Review, Verify, and Export represented in order.
- [x] Guided setup is reachable in one tap and can generate a face, pocket, or boss job with valid dimensions.
- [x] Invalid or out-of-stock feature dimensions produce inline, actionable errors before worker execution.
- [x] Machine and material remain easy to change; compute and tool-library controls are collapsed as advanced setup.
- [x] Primary verify/export controls remain reachable and clear without colliding with Android system navigation.
- [x] Any job or setup change invalidates prior verification and safety acknowledgments.
- [x] Export remains disabled until simulation is complete and all safety items are acknowledged.
- [x] Browser export produces the expected `.nc` download.
- [x] Android export writes the expected `.nc` file to public Downloads and reports its final location.
- [x] Async planning, errors, verification, and export results are announced through an `aria-live` status region.
- [x] No automated WCAG A/AA violations are reported by axe on the main and guided states.
- [x] No horizontal overflow occurs at 360x800, 390x844, 430x932, or 768x1024.
- [x] Playwright verifies demo, guided setup, validation, safety gating, download, and visual layout.
- [x] UI Automator verifies launch and the guided workflow in the installed Android WebView.
- [x] Vitest, TypeScript, Vite build, Gradle build, and connected Android tests all exit successfully.
- [x] Fresh APK is installed and foregrounded on device `R3GL405E98X` with a final screenshot and clean crash log.

---

### Task 1: Workflow State & Safety Gate

**Files:**
- Create: `src/ui/SafetyReview.tsx`
- Modify: `src/ui/App.tsx`
- Modify: `src/ui/styles.css`

**Interfaces:**
- Consumes: `JobPlan`, current `Status`, and the generated G-code string.
- Produces: `SafetyReview({ checked, onChange, disabled })` and an export-ready boolean.

- [x] Add a four-item safety review for work offset, tool/tool length, stock/fixturing clearance, and controller dry run.
- [x] Reset verification and all acknowledgments whenever the machine, material, tools, model, or guided specification changes.
- [x] Require `status === "done"` and all four acknowledgments before export.
- [x] Reduce the simulation duration to a useful proof wait while preserving visible progress and a reduced-motion fast path.
- [x] Add an `aria-live="polite"` status region with actionable planning, error, verification, and export messages.
- [x] Run `npm test` and `npm run build`; both must exit 0.

### Task 2: Phone-First Information Architecture

**Files:**
- Modify: `src/ui/App.tsx`
- Modify: `src/ui/ToolLibrary.tsx`
- Modify: `src/ui/styles.css`

**Interfaces:**
- Consumes: existing mode, picker, tool, plan, and status state.
- Produces: compact primary controls and semantic `<details>` sections for advanced setup and tool management.

- [x] Keep the source mode and machine/material choices near the top of the setup flow.
- [x] Move compute selection and the complete tool library into collapsed advanced sections.
- [x] Keep verification and export in a sticky phone action bar with safe-area padding.
- [x] Ensure sticky controls do not cover focused fields or the final page content.
- [x] Add visible `:focus-visible`, pressed, disabled, and hover states; use `touch-action: manipulation`.
- [x] Add responsive rules for compact phone, tall phone, tablet, desktop, and 1.5x text without fixed viewport-font scaling.
- [x] Run `npm run build`; it must exit 0.

### Task 3: Guided Setup Validation

**Files:**
- Modify: `src/ui/GuidedSetup.tsx`
- Test: `tests/e2e/setupninja.spec.ts`

**Interfaces:**
- Consumes: `ParametricSpec` bounds from the form.
- Produces: field-level validation and only valid `onGenerate(spec)` calls.

- [x] Give every input a stable `name`, `autocomplete="off"`, and useful numeric constraints.
- [x] Reject non-finite or non-positive stock dimensions.
- [x] Require pocket/boss width and depth to be positive and fully contained in stock X/Y bounds.
- [x] Require pocket depth to be less than stock height and boss height to be positive.
- [x] Show one concise inline error summary with `role="alert"` and focus it after invalid submission.
- [x] Preserve optional camera capture and add fixed image dimensions to prevent layout shift.
- [x] Run the targeted Playwright guided-setup test and `npm run build`; both must exit 0.

### Task 4: Browser Automation & Accessibility

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/setupninja.spec.ts`
- Create: `tests/e2e/setupninja.visual.spec.ts`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Consumes: production Vite preview on `127.0.0.1:4173`.
- Produces: `npm run test:e2e`, `npm run test:a11y`, and `npm run test:visual`.

- [x] Install `@playwright/test` and `@axe-core/playwright` as development dependencies.
- [x] Configure Playwright to build once, serve the production bundle, retain traces/screenshots on failure, and run phone plus tablet projects.
- [x] Test initial readiness, source-mode switching, guided job generation, invalid dimensions, changed-setup verification reset, safety gating, and `.nc` download contents.
- [x] Scan the initial and guided states for WCAG A/AA violations with axe-core.
- [x] Assert no horizontal overflow and minimum 44px interactive target sizes at each target viewport.
- [x] Add stable visual snapshots after dynamic canvas animation is masked.
- [x] Run `npm run test:e2e`; all projects and tests must pass.

### Task 5: Native Android Program Saving

**Files:**
- Modify: `android/app/src/main/kotlin/com/setupninja/app/UsbBridge.kt`
- Modify: `src/ui/App.tsx`
- Test: `android/app/src/androidTest/kotlin/com/setupninja/app/MainActivityTest.kt`

**Interfaces:**
- Produces: `@JavascriptInterface fun saveProgram(fileName: String, contents: String): String` returning JSON `{ ok, displayName, location, error? }`.
- Consumes in web UI: optional `window.AndroidUsb.saveProgram(name, contents)`; browser download remains the fallback.

- [x] Sanitize the file name to a conservative `.nc` name.
- [x] On Android 10+, write UTF-8 text through `MediaStore.Downloads` using a pending row and finalize only after success.
- [x] On Android 8-9, write to the app external Documents directory and return that exact location.
- [x] Return structured success/failure JSON without exposing stack traces to JavaScript.
- [x] Make export use the bridge when available and show the saved destination in the live status region.
- [x] Verify with an Android test and an ADB MediaStore/file query that a non-empty `.nc` file exists.

### Task 6: Physical-Device UI Automation

**Files:**
- Modify: `android/app/build.gradle.kts`
- Create: `android/app/src/androidTest/kotlin/com/setupninja/app/MainActivityTest.kt`
- Create: `scripts/test-android-device.sh`
- Create: `docs/testing.md`

**Interfaces:**
- Consumes: package `com.setupninja.app`, activity `.MainActivity`, and connected ADB serial via `ANDROID_SERIAL`.
- Produces: repeatable `./gradlew connectedDebugAndroidTest` plus an end-to-end host script.

- [x] Configure `AndroidJUnitRunner`, AndroidX Test, UI Automator, and Espresso-Web dependencies.
- [x] Launch from a clean activity state and assert `SetupNinja`, `Guided setup`, and the primary verify action are present in the accessibility tree.
- [x] Tap Guided setup, assert photo and generation controls, generate the default face job, and assert the new part name appears.
- [x] Rotate portrait to landscape and back, asserting the app remains responsive and foregrounded.
- [x] Have the host script build web assets, sync Android assets, assemble, install, grant camera, run tests, relaunch, capture screenshot/UI XML/logcat, and fail on crash markers.
- [x] Document exact local commands, artifact locations, and what each layer proves.

### Task 7: Final Verification & Device Delivery

**Files:**
- Modify: checklist status in this plan.

- [x] Run `npm test` and confirm 0 failures.
- [x] Run `npm run build` and confirm exit 0.
- [x] Run `npm run test:e2e` and confirm every browser, accessibility, and layout assertion passes.
- [x] Run `./gradlew :app:assembleDebug :app:connectedDebugAndroidTest` with JDK 21 and confirm exit 0.
- [x] Install the fresh APK on `R3GL405E98X`, grant camera permission, and launch `.MainActivity`.
- [x] Capture a physical-device screenshot and UI hierarchy; verify no overlap, clipping, blank WebView, or missing primary action.
- [x] Query logcat for `AndroidRuntime`, `FATAL`, uncaught exceptions, WebView load errors, and SetupNinja console errors; require no app failure.
- [x] Exercise native export, confirm a non-empty `.nc` file exists, and report its device path.
- [x] Re-read every acceptance item and mark only evidence-backed items complete.

---

## Tool Decisions

- **Playwright Test:** already adjacent to the project and provides role-based interaction, downloads, traces, multiple viewports, and deterministic screenshot comparison.
- **axe-core:** official Playwright guidance for common WCAG A/AA automation; it complements rather than replaces human review.
- **AndroidX UI Automator + Espresso-Web:** official, free Android libraries that exercise the installed WebView and system-facing behavior on the connected device.
- **Maestro:** useful later for readable cross-platform smoke flows, but not required for this pass because AndroidX can run inside the existing Gradle project without another host installation.
- **CAMotics/LinuxCNC simulation:** valuable second-opinion tooling once controller-specific posts exist. The current proof post uses a small subset of G-code, so kernel invariants and exported-text tests are the dependable gate now; CAMotics cannot validate machine setup, work offsets, fixtures, or every controller dialect.

---

## Adversarial Battle-Test Addendum

- [x] Run seeded face, pocket, and boss property tests across boundary-valid dimensions and every machine/material pair.
- [x] Reject stock that no selected cutter can enter and constrain cutter envelopes to fractional stock footprints.
- [x] Add cutter-radius-aware feature clearance and finish every modeled target Z level.
- [x] Verify cutter swept envelopes independently of center-point gouge checks.
- [x] Reject empty, truncated, non-finite, degenerate, and allocation-explosive STL input.
- [x] Enforce spindle-stop/retract/tool-change/tool-length order and split rapid XY travel from Z descent.
- [x] Reject unsupported ball/HSS tooling instead of silently treating it as a carbide flat endmill.
- [x] Run 1,000 seeded Android Monkey events and scan for crashes, ANRs, and WebView failures.
- [x] Run Android rotation, background/foreground, relaunch, and fully offline packaged-content tests.
- [x] Run Android lint with zero errors rather than accepting a baseline.
- [x] Block WebView navigation away from the bundled origin and restrict camera grants to that origin.
- [x] Run adversarial Playwright tests for churn, stale replies, repeated actions, keyboard-only use, refresh, draft invalidation, and 200% text.
- [x] Force Playwright to build fresh and own its preview server; tighten visual tolerance to 0.1%.
- [ ] Add explicit controller profiles and validate each post with a compatible external RS274 interpreter.
- [ ] Model physical blank dimensions separately from target geometry, including fixture and machine envelopes.
- [ ] Require STL unit, orientation, datum, and 2.5D topology confirmation before enabling imported-job export.
- [ ] Add tool reach, flute length, holder clearance, center-cutting/plunge capability, and machine tool-number/H-offset profiles.
