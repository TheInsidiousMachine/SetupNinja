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
| Height-map CAM, facing, pocket, boss, roughing, and finishing | Print/photo dimension extraction |
| Holes: single, grid, line, and bolt-circle patterns | Multi-setup and second-operation planning |
| Spot, drill, peck, ream, and tap with G81/G82/G83/G84 cycles | Contour and profile toolpaths with true offsetting |
| Tap drill table and pitch-synchronised tapping feeds | Fixture and vise-jaw geometry in the collision model |
| G-code import, modal interpretation, safety review, and editing | Interactive AI review of the strategy |
| SAE-first output: G20 posts, inch coordinates, fractional tool sizes | Photo-to-solid reconstruction |
| Machine-aware tool changes, including `G91 G28 Z0` Z-homing for changers | Supervised cut trials on real hardware |
| Saved machine profiles with per-machine post settings and dialects | Authenticated public tester distribution |
| Toolholder, stickout, flute-length, and travel-envelope collision checks | |
| Setup sheet: workholding choice, datums, operation order, pitfalls | |
| Direct write to USB/CF over OTG, FAT16 image, and STEP export | |
| Independent validation against an external RS-274 interpreter | |
| Interactive Three.js toolpath and holder review | |

Latest demo builds are published to GitHub Releases:

`https://github.com/TheInsidiousMachine/SetupNinja/releases/latest/download/setupninja-demo.apk`

The public SetupNinja release feed lets Clayton download the APK and lets the app check for signed updates without a tailnet or embedded GitHub token.

`src/kernel` plans the job. `src/adaptive` simulates feedback. The UI now presents that engine as SetupNinja's first verified-G-code demo path.

### Units

SetupNinja is SAE by default. Coordinates, feeds, and tool sizes read in inches, and programs post `G20`. Each machine profile can switch to metric independently; the unit word in the program always matches the numbers under it. The kernel computes in millimetres internally and converts only at the edges.

### Getting a program onto the machine

Two paths, because shops have two situations.

**Write straight to the card.** Plug a USB stick or CompactFlash adapter into the phone's OTG port, pick the card's folder once, and SetupNinja writes programs onto it from then on without prompting. This is the everyday path and needs no laptop. It is not USB mass-storage emulation — Android dropped that gadget in favour of MTP, which no control speaks, and re-enabling it needs root. The Storage Access Framework reaches the same card on a stock phone.

**Build a FAT16 image.** For a card that needs formatting first, SetupNinja generates a FAT16 filesystem image under 2 GB with 8.3 file names, which the operator writes to media once. Verified against `fsck.vfat` and `mtools`.

### Working with existing programs

SetupNinja reads a program posted from any CAM package, resolves the modal state behind every block, and reviews it for the mistakes that damage machines rather than parts — a tool change with no Z home, a cut before the spindle starts, cutter compensation left on at the end. Edits rewrite individual words in place, so comments, block numbers, and formatting survive and the result still diffs against the file the shop already trusts.

### Independent validation

Our post and our verifier share assumptions, so a mistake in that shared understanding would be invisible to both. Every generated program is also run through [pygcode](https://github.com/fragmuffin/pygcode), an interpreter with no knowledge of this codebase:

```bash
python3 -m venv .venv && .venv/bin/pip install pygcode
npx vite-node scripts/validate-gcode.ts -- --python .venv/bin/python
```

It has already earned its place: it caught an undefined motion mode on `G43` and the fact that LinuxCNC has no `G84`. See [docs/oss-evaluation.md](docs/oss-evaluation.md) for what else was assessed and why it was or was not adopted.

### STEP export

Guided-setup parts export as watertight ISO 10303-21 (AP214) B-rep solids in millimetres, the near-universal STEP convention that every CAD package converts on import. Solids are checked for manifold edge pairing and positive volume before the file is written. The exporter has been validated structurally and against its own geometry, but has not yet been round-tripped through a commercial CAD kernel.

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
