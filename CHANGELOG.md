# Changelog

## [0.3.0] - 2026-08-19

### Added

- **Holes, drilling and tapping.** Hole patterns as single points, grids, lines, or bolt circles computed by trigonometry. Spot, drill, peck, ream, and tap operations with G81/G82/G83/G84 canned cycles, and the identical motion written out explicitly for controls that have none.
- Tap drill table at 75% thread engagement for Unified coarse, Unified fine, and metric coarse threads. Calling out `1/4-20` selects the #7 drill and feeds the tap at exactly pitch x rpm.
- Drilling-specific math: surface speed and feed per revolution for drills, automatic pecking past three diameters of depth, drill-point breakout allowance on through holes, and spot depth derived from the spot's own point angle.
- **G-code import, review and editing.** Opens a program posted from CAM or pulled off a machine, resolves its modal state block by block, and reports tools, extents, feeds, speeds and an estimated run time.
- Program safety review with fifteen checks, including tool changes with no Z home, tool changes with the spindle running, cuts before the spindle starts or before a feed is set, cutter compensation or a canned cycle left active at the end, arcs with no geometry, diagonal rapids that dip below the job, and limits beyond the machine.
- Program edits that rewrite individual words in place, preserving comments, block numbers and formatting: scale feeds or speeds, change the work offset, renumber tools with their length offsets, convert between inch and metric, and prepend a safety preamble.
- **Write straight to a USB stick or CompactFlash card** over the phone's OTG port, through the Storage Access Framework. The card's folder is chosen once and remembered; writes afterwards need no prompt and are verified by reading the length back.
- Independent validation of every posted program against pygcode, a G-code interpreter with no knowledge of this codebase (`npx vite-node scripts/validate-gcode.ts`).
- Drilling verification: plane ordering, flute length against hole depth, tap feed synchronisation, and breakthrough warnings.
- SAE (inch) units throughout as the default: G20 posts, inch coordinates and feeds, fractional tool sizes, and inch entry in guided setup. Metric stays available per machine profile.
- Machine-aware tool changes. Machines with a changer now home Z (`G91 G28 Z0` / `G90`) before every `M6`, at program start, and at program end.
- Saved machine profiles with per-machine post settings: controller flavour, units, tool-change strategy, work offset, tool length compensation, coolant, sequence numbers, program number, tape markers, and travels.
- Toolholder modelling. Tools carry flute length, stickout, and a holder; verification reports holder collisions, tight clearance, flute-length shortfalls, and excess stickout, and the 3D view draws the holder to scale.
- Setup sheet: deterministic workholding choice (hard jaws, soft jaws, fixture plate) with reasoning and grip numbers, datum plan, operation order, and pitfall warnings the operator can acknowledge.
- STEP (ISO 10303-21, AP214) export of guided parts as watertight B-rep solids.
- FAT16 disk-image export with 8.3 file names, for controls that only read FAT16 media under 2 GB.
- Machine travel-envelope checks against the stock size.

### Fixed

- **Hole depths datumed from raw stock instead of the finished face**, leaving every hole short by the facing allowance. A 0.500" hole came out 0.4528".
- **LinuxCNC has no G84**, so tapping now falls back to explicit motion on that controller instead of emitting a cycle its interpreter rejects.
- `G43 H# Z…` followed a `G80`/`G28` with no modal motion active, leaving the Z move's mode undefined. The rapid is now stated explicitly as `G0 G43 H# Z…`.
- The 3D viewport clipped the entire model away when zooming in: the near plane was fixed at fit distance while the dolly limit allowed moving far closer. Near and far planes now track the camera distance.
- "Fit" did not fit in orthographic projection because the camera's zoom factor survived the frustum rebuild.
- The viewport framed the reference grid rather than the part, so the job appeared at roughly half size and orbited around the grid's centre instead of its own.
- The 3D viewport failed to initialise on any remount, including every React StrictMode pass in development, because `forceContextLoss()` permanently prevented the canvas from providing another WebGL context.
- A missing WebGL context now degrades to a message instead of throwing through the whole app.
- G-code comments are folded to ASCII so typographic characters in tool names cannot reach an ASCII-only control.
- Tool sizes at or above one inch are written as mixed numbers (`1-1/2"`), not improper fractions.
- Icon buttons meet the 44 px touch target.

### Changed

- The tool library now ships drills, spot drills and taps alongside endmills, and milling and drilling tools are selected separately.

## [0.2.0] - 2026-08-19

### Added

- Offline Android APK with native proof-program export and stable demo signing.
- Guided face, pocket, and boss setup with editable machine, material, and tool data.
- Machinist Three.js viewport with standard views, projections, path layers, datum, and point inspection.
- In-app offline feedback queue, private relay, gated coding-agent dispatch, and low-risk UI auto-merge workflow.
- Signed and checksummed demo update manifest with Android installer handoff.

### Changed

- Expanded deterministic verification, property, browser, accessibility, visual, lifecycle, and device coverage.
- Clarified that generated G-code is proof output requiring machine-specific review.

### Security

- Feedback is validated as untrusted data and coding workers run in isolated worktrees without shell parsing or embedded credentials.
- CAM, export, Android native, updater, signing, dependency, and automation changes are excluded from automatic approval.
