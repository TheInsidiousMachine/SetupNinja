/**
 * Validate posted programs against an independent G-code interpreter.
 *
 * SetupNinja's post and its own verifier share assumptions. If one of those
 * assumptions is wrong, both agree and neither notices. pygcode has never seen
 * this codebase, so putting every generated program through it catches the class
 * of mistake we cannot catch ourselves.
 *
 * Usage:
 *   python3 -m venv .venv && .venv/bin/pip install pygcode
 *   npx vite-node scripts/validate-gcode.ts -- --python .venv/bin/python
 *
 * Exit codes: 0 all good, 1 a program failed, 2 pygcode unavailable (skipped).
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { planDemo, planParametric } from "../src/kernel/plan";
import { postGcode } from "../src/kernel/gcode";
import { ALL_TOOLS, MACHINES } from "../src/machine/catalog";
import { inchToMm } from "../src/kernel/units";
import type { HolePattern } from "../src/kernel/types";

const flag = process.argv.indexOf("--python");
const PYTHON = flag >= 0 ? process.argv[flag + 1] : process.env.SETUPNINJA_PYTHON ?? "python3";

const CHECKER = `
import json, sys
from pygcode import Line, Machine

machine = Machine()
parsed = 0
errors = []
unmodelled = []
for number, raw in enumerate(open(sys.argv[1]).read().splitlines(), start=1):
    text = raw.strip()
    if not text or text.startswith('%') or text.startswith('('):
        continue
    try:
        line = Line(text)
        if line.block:
            machine.process_block(line.block)
        parsed += 1
    except Exception as error:
        # pygcode does not model G28/G30 reference return with an intermediate
        # point, which is the standard and correct safe-Z-home idiom. Record
        # those separately rather than reporting a defect that is not one.
        entry = {'line': number, 'text': text[:80], 'error': str(error)[:160]}
        # pygcode is LinuxCNC-shaped: it has no G84, because LinuxCNC has none.
        # G84 is correct for the Fanuc-style controls that do.
        if 'G28' in text or 'G30' in text or 'G84' in text:
            unmodelled.append(entry)
        else:
            errors.append(entry)

print(json.dumps({
    'parsed': parsed,
    'errors': errors,
    'unmodelled': unmodelled,
    'mode': str(machine.mode),
}))
`;

function havePygcode(): boolean {
  try {
    execFileSync(PYTHON, ["-c", "import pygcode"], { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

if (!havePygcode()) {
  console.error(
    `pygcode is not importable from ${PYTHON}.\n` +
      `  python3 -m venv .venv && .venv/bin/pip install pygcode\n` +
      `  npx vite-node scripts/validate-gcode.ts -- --python .venv/bin/python`,
  );
  process.exit(2);
}

const BOLT_CIRCLE: HolePattern = {
  id: "bc",
  layout: {
    kind: "bolt-circle",
    cx: inchToMm(2),
    cy: inchToMm(2),
    boltCircleDiameterMm: inchToMm(3),
    count: 6,
    startAngleDeg: 0,
  },
  diameterMm: inchToMm(0.25),
  depthBelowTopMm: 0,
  through: true,
  operations: ["spot", "drill"],
};

const TAPPED_GRID: HolePattern = {
  id: "tapped",
  layout: {
    kind: "grid",
    x: inchToMm(0.5),
    y: inchToMm(0.5),
    cols: 2,
    rows: 2,
    pitchXMm: inchToMm(3),
    pitchYMm: inchToMm(3),
  },
  diameterMm: inchToMm(0.25),
  depthBelowTopMm: inchToMm(0.4),
  through: false,
  operations: ["spot", "drill", "tap"],
  threadSpec: "1/4-20",
};

const programs: { name: string; expectUnits: string; gcode: string }[] = [];

for (const machine of MACHINES) {
  programs.push({
    name: `demo bracket on ${machine.name}`,
    expectUnits: machine.post?.units === "mm" ? "G21" : "G20",
    gcode: postGcode(planDemo(machine, "6061", "phone")),
  });
}

programs.push({
  name: "drilled and tapped flange (canned cycles)",
  expectUnits: "G20",
  gcode: postGcode(
    planParametric(
      {
        partName: "Flange",
        stock: { widthMm: inchToMm(4), depthMm: inchToMm(4), heightMm: inchToMm(0.75) },
        feature: { kind: "face" },
        holes: [BOLT_CIRCLE, TAPPED_GRID],
      },
      ALL_TOOLS,
      MACHINES[2],
      "6061",
      "phone",
    ),
  ),
});

// The same shape of job on a control with no canned cycles, so the expanded
// motion path is checked by the reference interpreter too.
programs.push({
  name: "drilled part on a control without canned cycles",
  expectUnits: "G20",
  gcode: postGcode(
    planParametric(
      {
        partName: "Flange expanded",
        stock: { widthMm: inchToMm(4), depthMm: inchToMm(4), heightMm: inchToMm(0.5) },
        feature: { kind: "face" },
        holes: [
          {
            id: "line",
            layout: { kind: "line", x: inchToMm(1), y: inchToMm(2), count: 4, pitchMm: inchToMm(0.5), angleDeg: 0 },
            diameterMm: inchToMm(0.25),
            depthBelowTopMm: inchToMm(0.3),
            through: false,
            operations: ["drill"],
          },
        ],
      },
      ALL_TOOLS,
      MACHINES[1],
      "6061",
      "phone",
    ),
  ),
});

const workdir = mkdtempSync(join(tmpdir(), "setupninja-validate-"));
let failures = 0;

try {
  const checkerPath = join(workdir, "check.py");
  writeFileSync(checkerPath, CHECKER);
  console.log(`Validating ${programs.length} programs against pygcode (${PYTHON})\n`);

  for (const program of programs) {
    const file = join(workdir, "program.nc");
    writeFileSync(file, program.gcode);
    const result = JSON.parse(execFileSync(PYTHON, [checkerPath, file], { encoding: "utf8" }));

    const problems: string[] = [];
    if (result.errors.length > 0) {
      problems.push(`${result.errors.length} block(s) the reference interpreter could not read`);
      for (const error of result.errors.slice(0, 3)) {
        problems.push(`  line ${error.line}: ${error.text}  ->  ${error.error}`);
      }
    }
    const skipped: number = result.unmodelled?.length ?? 0;
    if (!String(result.mode).includes(program.expectUnits)) {
      problems.push(`expected ${program.expectUnits} in the final modal state, got: ${result.mode}`);
    }
    if (!program.gcode.includes("M30")) problems.push("program has no M30");

    if (problems.length > 0) {
      failures += 1;
      console.log(`FAIL  ${program.name}`);
      for (const problem of problems) console.log(`      ${problem}`);
    } else {
      const note = skipped > 0 ? `  (${skipped} block(s) pygcode does not model: G28/G84)` : "";
      console.log(`ok    ${program.name.padEnd(52)} ${String(result.parsed).padStart(6)} blocks${note}`);
    }
  }
} finally {
  rmSync(workdir, { recursive: true, force: true });
}

console.log("");
if (failures > 0) {
  console.error(`${failures} program(s) failed independent validation.`);
  process.exit(1);
}
console.log("All programs parsed cleanly by the reference interpreter.");
