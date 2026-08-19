import type { UnitSystem } from "./units";

export type { UnitSystem };

export type Vec3 = { x: number; y: number; z: number };

export type Triangle = { a: Vec3; b: Vec3; c: Vec3 };

export type Mesh = {
  triangles: Triangle[];
  units: "mm";
};

export type Heightmap = {
  originX: number;
  originY: number;
  cell: number;
  nx: number;
  ny: number;
  /** Part surface Z in mm. NaN means empty cell. */
  z: Float32Array;
};

export type ToolType =
  | "endmill"
  | "ball"
  | "drill"
  | "spot"
  | "tap"
  | "reamer"
  | "centerdrill";

/**
 * Toolholder body below the spindle face.
 *
 * Modeled as a truncated cone: `noseDiameterMm` at the bottom face growing to
 * `bodyDiameterMm` over `noseLengthMm`, then straight to the spindle. This is
 * the shape that actually decides whether a holder clears a tall boss or a
 * fixture, which is the collision a machinist checks by eye today.
 */
export type ToolHolder = {
  id: string;
  name: string;
  taper: "bt30" | "bt40" | "cat40" | "iso30" | "r8" | "er-collet" | "hydraulic" | "shrink";
  /** Diameter of the holder nose face nearest the part, mm. */
  noseDiameterMm: number;
  /** Largest diameter of the holder body, mm. */
  bodyDiameterMm: number;
  /** Distance over which the nose flares out to the body diameter, mm. */
  noseLengthMm: number;
  /** Total holder length below the spindle face, mm. */
  lengthMm: number;
};

export type Tool = {
  id: string;
  name: string;
  type: ToolType;
  diameterMm: number;
  flutes: number;
  maxDocMm: number;
  /** Stepover as a fraction of diameter (0–1). */
  maxStepover: number;
  material: "carbide" | "hss";
  /** Cutting-edge length, mm. Limits the deepest wall a single pass may leave. */
  fluteLengthMm?: number;
  /**
   * Included point angle for drills, degrees. 118 is the general-purpose
   * standard, 135 is the split point used in harder material. Drives the extra
   * depth a through hole needs to break out cleanly.
   */
  pointAngleDeg?: number;
  /** Thread pitch for a tap, mm per revolution. Tapping feed is pitch x rpm. */
  threadPitchMm?: number;
  /** Thread designation a tap cuts, e.g. "1/4-20" or "M6x1.0". */
  threadSpec?: string;
  /**
   * Distance from the holder nose face to the tool tip, mm. Drives both the
   * holder-collision envelope and the deflection derate — short is stiff.
   */
  stickoutMm?: number;
  holder?: ToolHolder;
};

export type MachineKind = "knee-mill" | "router" | "vmc";

/**
 * How the post gets Z clear of the part before an M6.
 *
 * `g28-home` emits `G91 G28 Z0` / `G90`, which is what an industrial control
 * with an ATC expects — the changer needs the spindle at the machine Z home,
 * not merely above the stock. `safe-retract` only lifts to the clearance plane
 * and suits a manual-change router or knee mill.
 */
export type ToolChangeStrategy = "g28-home" | "safe-retract";

export type ControllerFlavor = "fanuc" | "haas" | "linuxcnc" | "grbl" | "mach3";

export type CoolantMode = "none" | "flood" | "mist" | "air";

/** Controller-specific posting preferences, saved with a machine profile. */
export type PostConfig = {
  controller: ControllerFlavor;
  units: UnitSystem;
  toolChange: ToolChangeStrategy;
  /** Work offset word, e.g. "G54". */
  workOffset: string;
  /** Emit `G43 H#` tool length compensation after a change. */
  toolLengthComp: boolean;
  coolant: CoolantMode;
  /** Emit sequence numbers (N10, N20, ...). */
  blockNumbers: boolean;
  /** Fanuc-style program number, e.g. "O0001". Empty to omit. */
  programNumber: string;
  /** Wrap the program in `%` tape markers. */
  tapeMarkers: boolean;
  /**
   * Emit G81/G82/G83/G84 canned cycles. Controls without them (GRBL, most
   * hobby firmware) need the identical motion written out as explicit moves.
   */
  cannedCycles: boolean;
};

export type MachineProfile = {
  id: string;
  name: string;
  kind: MachineKind;
  maxFeedMmMin: number;
  maxRpm: number;
  spindleKw: number;
  /** Dominant structural mode used by the chatter model. */
  naturalHz: number;
  stiffnessNPerMm: number;
  /** Table travel, mm. Used to check the job fits the machine. */
  travelXMm?: number;
  travelYMm?: number;
  travelZMm?: number;
  /** Controller posting preferences. Defaults applied when omitted. */
  post?: PostConfig;
  /** True when the machine has an automatic tool changer. */
  hasToolChanger?: boolean;
  /** Marks profiles the operator created or edited, versus built-in catalog entries. */
  userDefined?: boolean;
};

export type Material = {
  id: string;
  name: string;
  /** Specific cutting force, N/mm². */
  kc: number;
};

export type MoveKind = "rapid" | "lead" | "cut";

export type Waypoint = {
  x: number;
  y: number;
  z: number;
  feedMmMin: number;
  rpm: number;
  toolId: string;
  /** Radial engagement, 0–π radians. */
  engagementRad: number;
  slotting: boolean;
  kind: MoveKind;
};

export type Toolpath = {
  tool: Tool;
  points: Waypoint[];
};

export type Stock = {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
};

export type JobPlan = {
  partName: string;
  stock: Stock;
  heightmap: Heightmap;
  tools: Tool[];
  machine: MachineProfile;
  material: Material;
  paths: Toolpath[];
  /** Drilling cycles, run after the milling paths. */
  drillCycles?: DrillCycle[];
  compute: ComputeTarget;
};

export type ComputeTarget = "phone" | "local" | "cloud";

/** Deterministic parametric part primitives for guided (photo-free) setup entry. */
export type StockSpec = {
  widthMm: number;
  depthMm: number;
  heightMm: number;
};

export type FaceFeature = {
  kind: "face";
};

export type PocketFeature = {
  kind: "pocket";
  /** Pocket origin (lower-left corner) in mm, relative to stock origin. */
  x: number;
  y: number;
  widthMm: number;
  depthMm: number;
  /** Depth of the pocket floor below the stock top face, mm. */
  depthBelowTopMm: number;
};

export type BossFeature = {
  kind: "boss";
  /** Boss origin (lower-left corner) in mm, relative to stock origin. */
  x: number;
  y: number;
  widthMm: number;
  depthMm: number;
  /** Height of the boss above the stock top face, mm. */
  heightAboveTopMm: number;
};

export type ParametricFeature = FaceFeature | PocketFeature | BossFeature;

/** Operations performed at a hole location, in the order they must run. */
export type HoleOperation = "spot" | "drill" | "peck" | "ream" | "tap";

/**
 * Where a set of holes sits. Centres are derived by closed-form trigonometry so
 * a bolt circle is exact rather than tabulated.
 */
export type HoleLayout =
  | { kind: "single"; x: number; y: number }
  | {
      kind: "grid";
      x: number;
      y: number;
      cols: number;
      rows: number;
      pitchXMm: number;
      pitchYMm: number;
    }
  | {
      kind: "bolt-circle";
      cx: number;
      cy: number;
      boltCircleDiameterMm: number;
      count: number;
      startAngleDeg: number;
    }
  | { kind: "line"; x: number; y: number; count: number; pitchMm: number; angleDeg: number };

export type HolePattern = {
  id: string;
  layout: HoleLayout;
  /** Finished hole diameter, mm. For a tapped hole this is the thread major diameter. */
  diameterMm: number;
  /** Depth below the stock top face, mm. Ignored when `through` is set. */
  depthBelowTopMm: number;
  /** True when the hole breaks through the bottom of the stock. */
  through: boolean;
  operations: HoleOperation[];
  /** Thread designation when the pattern is tapped, e.g. "1/4-20". */
  threadSpec?: string;
};

export type ParametricSpec = {
  partName: string;
  stock: StockSpec;
  feature: ParametricFeature;
  /** Hole patterns drilled into the top face, independent of the milled feature. */
  holes?: HolePattern[];
  /** Heightmap raster cell size, mm. Defaults applied by the generator if omitted. */
  cellMm?: number;
};

/**
 * A drilling canned cycle.
 *
 * Held as parameters rather than expanded moves so the post can emit a real
 * canned cycle (G81/G83/G84) on controls that have them, and the identical
 * motion as explicit moves on controls that do not. Simulation and verification
 * always run against the expanded form, so both paths are checked by the same
 * math.
 */
export type DrillCycle = {
  tool: Tool;
  operation: HoleOperation;
  /** Hole centres in part coordinates, mm. */
  centers: { x: number; y: number }[];
  /** Absolute Z of the hole bottom, mm. */
  zBottomMm: number;
  /** Absolute Z of the R retract plane between holes, mm. */
  zRetractMm: number;
  /** Absolute Z of the clearance plane above the part, mm. */
  zClearMm: number;
  feedMmMin: number;
  rpm: number;
  /** Peck increment for a peck cycle, mm. */
  peckMm?: number;
  /** Dwell at the hole bottom, seconds. */
  dwellSec?: number;
  /** Thread pitch for tapping, mm per revolution. */
  pitchMm?: number;
};

export type SenseSample = {
  i: number;
  tSec: number;
  load: number;
  vibration: number;
  chatterRisk: number;
  feedOverride: number;
  rpm: number;
  feedMmMin: number;
  engagementRad: number;
  /** Flute currently in the cut, 0 .. flutes-1. */
  flute: number;
  x: number;
  y: number;
  z: number;
  kind: MoveKind;
};
