# Clayton demo handoff

## Ready for feedback

- Signed Android APK with all planning/viewing/export assets packaged for offline use.
- Quick demo, guided face/pocket/boss setup, STL import, machine/material selection, editable tool library, deterministic planning, basic consistency checks, required shop-review checklist, G-code preview, and native `.nc` export.
- Machinist viewport with orbit/pan/zoom, fit/reset, ISO/top/front/right, perspective/orthographic, stock/target/tool/datum controls, rapid/lead/cut controls, tool-separated paths, XYZ datum, grid, stock edges, current cutter, and selectable path-point readout for coordinates/feed/RPM/tool.
- Fast in-app feedback dialog with category, severity, details, explicit diagnostics opt-in, offline queue, online retry, and Android share fallback.
- GitHub issue feedback fallback, optional HTTPS feedback intake, GitHub issue polling into the local worker queue, isolated OpenCode worktrees, path/test gates, low-risk UI PR publication, and gated auto-merge workflow.
- Push-to-demo signed APK publication with monotonic versions, pinned certificate verification, and a GitHub Release-hosted signed/checksummed update manifest. The app checks for newer builds and hands a verified APK to Android's installer.

## Demo boundary

SetupNinja currently produces a **proof program**, not a controller-certified production program. It must not be run unattended or treated as collision proof.

The remaining production blockers are:

1. Controller/post profiles and external RS-274 validation against Clayton's actual control.
2. Physical blank, workholding, fixture, holder, spindle, and machine-envelope collision models.
3. Explicit work offset, datum probing, tool length/radius offsets, and safe machine-coordinate retract policy.
4. Tool reach, flute length, holder clearance, plunge/ramp capability, chip evacuation, and material-specific engagement limits.
5. STL unit declaration, topology repair, orientation, stock placement, and feature-recognition review.
6. Real machine cut trials with measured dimensions, finish, load, chatter, and post-run inspection records.
7. Release distribution outside the private tailnet, preferably Firebase App Distribution or a public binary-only signed feed.

## Clayton's first feedback pass

1. Download the latest APK from `https://github.com/TheInsidiousMachine/ClayCam/releases/latest/download/setupninja-demo.apk`, install it, and open it while online once; then enable airplane mode and complete Quick demo through `.nc` export.
2. Orbit, pan, pinch zoom, use each standard view/projection, and hide/show every viewport layer.
3. Create one guided job that resembles a common shop part and inspect the proof G-code.
4. Import one representative STL and report incorrect scale/orientation or missing setup information.
5. Submit separate in-app reports for each workflow issue. If the app opens GitHub, submit the prefilled issue there. Use **Toolpath** or **Export** for machining-affecting requests so automation holds them for review.
6. Reconnect, reopen the app, and confirm queued feedback changes from Pending to Sent.

## Next stage checklist

- [ ] Interview Clayton against the first feedback pass and rank the top five shop workflows.
- [ ] Capture exact controller models, supported dialects, canned cycles, macros, and transfer media.
- [ ] Implement one controller profile end to end with golden external-parser tests.
- [ ] Add stock origin, fixture, workholding, holder, machine travel, and safe retract setup.
- [ ] Add tool assembly/reach and offset tables tied to the selected machine.
- [ ] Add STL units/orientation/repair workflow and explicit operator confirmation.
- [ ] Add material/tool manufacturer data provenance and conservative chip-load limits.
- [ ] Run supervised air cuts, foam/wax cuts, then material trials; record discrepancies.
- [ ] Move the release feed to Firebase App Distribution or another authenticated tester service.
- [ ] Invite Clayton to this private repository or mirror demo releases to a public repo/binary feed.
- [ ] Upgrade GitHub ruleset/branch-protection capability before expanding automatic merge scope.
- [ ] Complete a machinist safety review and define the production-release sign-off owner.
