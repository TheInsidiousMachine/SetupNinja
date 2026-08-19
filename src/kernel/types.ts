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

export type ToolType = "endmill" | "ball";

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
};

export type MachineKind = "knee-mill" | "router" | "vmc";

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

export type ParametricSpec = {
  partName: string;
  stock: StockSpec;
  feature: ParametricFeature;
  /** Heightmap raster cell size, mm. Defaults applied by the generator if omitted. */
  cellMm?: number;
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
