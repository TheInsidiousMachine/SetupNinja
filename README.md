# SetupNinja

Phone-first setup software for turning a print, stock measurements, and available tools into deterministic, controller-ready G-code.

SetupNinja is built around a simple shop promise: take a picture of the print, enter the minimum missing setup details, verify the math, and get a program onto the machine from the phone.

## Source Of Truth

The product direction now comes from the recorded call at:

`/home/timothybright/Projects/ClayCam/Call Clayton Bubba Allen_260818_202000.m4a`

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
| Height-map CAM, raster roughing, and finishing | Print/photo extraction workflow |
| STL parser and demo model import | G-code import, edit, and repost |
| Machine, material, and tool catalogs | Android storage/USB/compact flash handoff |
| Feed/load/chatter simulation | Explicit safety checklist before post |

`src/kernel` plans the job. `src/adaptive` simulates feedback. The UI now presents that engine as SetupNinja's first verified-G-code demo path.

## Run Locally

```bash
npm install
npm test
npm run dev
```

Vite prints a LAN URL. Open that on a phone on the same Wi-Fi.

## License

[MIT](LICENSE)

<details>
<summary>GitHub Settings clicks (once, after push)</summary>

**Description:** `Phone-first setup assistant for deterministic, controller-ready G-code.`

**Homepage:** `https://theinsidiousmachine.github.io/SetupNinja/`

**Topics:** `gcode` `cnc` `cam` `machining` `android` `typescript`

</details>
