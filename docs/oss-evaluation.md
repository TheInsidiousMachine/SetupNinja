# Open source evaluation

Assessed for the drilling, G-code editing, and transfer work. Recorded here so the
decisions are auditable and can be revisited when the constraints change.

The binding constraints are: the app ships offline inside an Android WebView, every
toolpath number must come from auditable math, and APK size is a real cost on a shop
phone.

## Adopted

### pygcode — external validation (dev/test only, not shipped)

An independent G-code parser with modal-state tracking. Used in the test suite to
re-read every program SetupNinja posts and confirm it parses cleanly and lands in the
modal state we intended (G20/G21, G90, work offset, G43, M30).

This matters because it is the one check we cannot mark our own homework on: our post
and our verifier share assumptions, so a mistake in that shared understanding would be
invisible to both. A second implementation that has never seen our code catches it.

Dev dependency only — never bundled, so its license does not affect distribution.

## Evaluated and deferred

### Clipper2 / clipper2-wasm (BSL-1.0, ~1.2 MB)

The standard polygon clipping and offsetting library; it is what CAM packages and
slicers use for contour offsets, pockets with islands, and cutter compensation
geometry. It would genuinely beat anything hand-written here.

Deferred because the kernel is raster/height-map based end to end. Adopting Clipper
means carrying a second toolpath representation and integrating a WASM module into the
safety path, and it does not serve drilling, G-code editing, or transfer — the three
gaps this release closes. It is the right choice for the pocketing and contour upgrade
and should be revisited then, not bolted on now.

### cncjs/gcode-parser (MIT)

Rejected on fit, not quality. It depends on Node `fs` and `stream`, so it does not run
in the WebView without shimming, and it only tokenises words — no modal state and no
canned-cycle handling, which is most of what editing an existing program requires.
The tokenising itself is a small amount of code we can own and audit.

### Tesseract.js / tesseract-wasm — print OCR

The obvious candidate for reading a print, and deferred deliberately.

OCR returns text fragments. The hard part of reading a drawing is semantic: associating
"⌀.500 ±.002" with a specific feature, resolving datums, and understanding view
projection. OCR does not solve that, and a misread dimension produces a scrapped part
or a crash. It would also add roughly 15 MB of WASM and language data to a 4.6 MB APK.

When this is built it should extract *candidate* dimensions that the operator confirms
one by one, which matches the project's rule that AI may interpret while math stays
deterministic.

### OpenCascade.js / occt-import-js — real CAD kernel

Would give true B-rep and STEP import. Tens of megabytes of WASM for a phone-first
offline app, against a need that the current prismatic geometry does not have. Revisit
only if STEP *import* becomes a requirement.
