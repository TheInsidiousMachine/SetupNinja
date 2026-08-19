# SetupNinja

Phone-first setup software for turning a print, stock measurements, and available tools into deterministic proof G-code for review.

SetupNinja is built around a simple shop promise: take a picture of the print, enter the minimum missing setup details, verify the math, and get a program onto the machine from the phone.

## Source Of Truth

The product direction now comes from the recorded Clayton kickoff call. The audio file is stored locally in this workspace and is intentionally not committed.

The transcript, product brief, and non-negotiables are captured in [docs/source-of-truth.md](docs/source-of-truth.md).

## What SetupNinja Must Do

- Read a print/photo and ask for only the dimensions, stock, machine, and tool details it still needs.
- Generate G-code with best-practice feeds, speeds, compensation, and cut strategy.
- Keep toolpaths and safety checks deterministic, auditable, and testable.
- Edit generated G-code or existing complex G-code posted from CAM software.
- Recalculate changed parameters correctly, especially tool compensation and cut geometry.
- Move programs from an Android phone to CNC controls through phone storage, USB-style transfer, or compact flash adapters.
- Reduce setup time on the shop floor without hiding dangerous assumptions.

## Current Demo

This repo currently ships a deterministic TypeScript machining kernel and phone-friendly React demo. It includes:

| Built | Next |
| --- | --- |
| Height-map CAM, facing, pocket, boss, roughing, and finishing | Print/photo extraction workflow |
| STL parser, guided setup, and demo model import | G-code import, edit, and repost |
| Native Android `.nc` export and offline APK | Controller-specific posts and removable-media transfer |
| Machine, material, and editable tool catalogs | Fixture, holder, offset, and machine-envelope models |
| Interactive Three.js toolpath review | External RS-274 validation and supervised cut trials |
| Offline feedback queue, GitHub feedback fallback, and gated agent workflow | Authenticated public tester distribution |

Latest demo builds are published to GitHub Releases:

`https://github.com/TheInsidiousMachine/SetupNinja/releases/latest/download/setupninja-demo.apk`

The public SetupNinja release feed lets Clayton download the APK and lets the app check for signed updates without a tailnet or embedded GitHub token.

`src/kernel` plans the job. `src/adaptive` simulates feedback. The UI now presents that engine as SetupNinja's first verified-G-code demo path.

Generated G-code is a proof output for inspection and simulation. Do not run it on a machine until the controller post, work offset, tool length, safe retract, stock setup, and dry-run checklist have been verified for that machine.

## Run Locally

```bash
npm install
npm test
npm run dev
```

Vite prints a LAN URL. Open that on a phone on the same Wi-Fi.

See [Clayton demo handoff](docs/clayton-handoff.md), [testing](docs/testing.md), and [feedback automation](docs/feedback-automation.md) for the APK workflow and current production boundary.

## License

[MIT](LICENSE)

<details>
<summary>GitHub Settings clicks (once, after push)</summary>

**Description:** `Phone-first setup assistant for deterministic, controller-ready G-code.`

**Homepage:** `https://theinsidiousmachine.github.io/SetupNinja/`

**Topics:** `gcode` `cnc` `cam` `machining` `android` `typescript`

</details>
