import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Maximize, RotateCcw } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { JobPlan, MoveKind, SenseSample, Tool, Waypoint } from "../kernel/types";
import { hmIndex } from "../kernel/heightmap";

export type MachineViewProjection = "perspective" | "orthographic";
export type MachineViewPreset = "isometric" | "top" | "front" | "right";

export type MachineViewVisibility = {
  stock: boolean;
  target: boolean;
  tool: boolean;
  datum: boolean;
  rapid: boolean;
  lead: boolean;
  cut: boolean;
};

export type PathPointInspection = {
  pathIndex: number;
  pointIndex: number;
  toolId: string;
  toolName: string;
  kind: MoveKind;
  x: number;
  y: number;
  z: number;
  feedMmMin: number;
  rpm: number;
  engagementRad: number;
  slotting: boolean;
};

export type MachineViewProps = {
  plan: JobPlan | null;
  samples: SenseSample[];
  playhead: number;
  visibility?: Partial<MachineViewVisibility>;
  projection?: MachineViewProjection;
  visibleToolIds?: readonly string[];
  maxRenderablePoints?: number;
  showToolbar?: boolean;
  onInspectPathPoint?: (inspection: PathPointInspection | null) => void;
  onVisibilityChange?: (visibility: MachineViewVisibility) => void;
  onProjectionChange?: (projection: MachineViewProjection) => void;
  onViewChange?: (view: MachineViewPreset) => void;
};

type ViewState = {
  renderer: THREE.WebGLRenderer | null;
  scene: THREE.Scene | null;
  perspective: THREE.PerspectiveCamera | null;
  orthographic: THREE.OrthographicCamera | null;
  camera: THREE.PerspectiveCamera | THREE.OrthographicCamera | null;
  controls: OrbitControls | null;
  tool: THREE.Object3D | null;
  currentMarker: THREE.Mesh | null;
  inspectionMarker: THREE.Mesh | null;
  jobBounds: THREE.Box3 | null;
  pathPointObjects: THREE.Points[];
  projection: MachineViewProjection;
  preset: MachineViewPreset;
  orthoHalfHeight: number;
  frame: number;
  render: () => void;
  resize: () => void;
  pointerStart: { x: number; y: number } | null;
  raycastThreshold: number;
};

const DEFAULT_VISIBILITY: MachineViewVisibility = {
  stock: true,
  target: true,
  tool: true,
  datum: true,
  rapid: true,
  lead: true,
  cut: true,
};

const JOB_NAME = "machine-job";
const MIN_PATH_BUDGET = 1_000;
const MAX_PATH_BUDGET = 100_000;

export function MachineView({
  plan,
  samples,
  playhead,
  visibility,
  projection = "perspective",
  visibleToolIds,
  maxRenderablePoints = 24_000,
  showToolbar = true,
  onInspectPathPoint,
  onVisibilityChange,
  onProjectionChange,
  onViewChange,
}: MachineViewProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inspectRef = useRef(onInspectPathPoint);
  const [activeProjection, setActiveProjection] = useState<MachineViewProjection>(projection);
  const [activePreset, setActivePreset] = useState<MachineViewPreset>("isometric");
  const [activeVisibility, setActiveVisibility] = useState<MachineViewVisibility>({
    ...DEFAULT_VISIBILITY,
    ...visibility,
  });
  const [inspection, setInspection] = useState<PathPointInspection | null>(null);
  const state = useRef<ViewState>({
    renderer: null,
    scene: null,
    perspective: null,
    orthographic: null,
    camera: null,
    controls: null,
    tool: null,
    currentMarker: null,
    inspectionMarker: null,
    jobBounds: null,
    pathPointObjects: [],
    projection,
    preset: "isometric",
    orthoHalfHeight: 50,
    frame: 0,
    render: () => undefined,
    resize: () => undefined,
    pointerStart: null,
    raycastThreshold: 2,
  });

  inspectRef.current = onInspectPathPoint;

  useEffect(() => {
    setActiveVisibility((current) => ({ ...current, ...visibility }));
  }, [
    visibility?.stock,
    visibility?.target,
    visibility?.tool,
    visibility?.datum,
    visibility?.rapid,
    visibility?.lead,
    visibility?.cut,
  ]);

  useEffect(() => {
    setActiveProjection(projection);
  }, [projection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x111417, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x111417, 0.0018);

    const perspective = new THREE.PerspectiveCamera(38, 1, 0.1, 10_000);
    const orthographic = new THREE.OrthographicCamera(-50, 50, 50, -50, 0.1, 10_000);
    perspective.up.set(0, 1, 0);
    orthographic.up.set(0, 1, 0);
    const camera = activeProjection === "orthographic" ? orthographic : perspective;

    scene.add(new THREE.HemisphereLight(0xf2f5f6, 0x282c30, 1.35));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(80, 130, -70);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x86b7d8, 0.8);
    fill.position.set(-90, 45, 100);
    scene.add(fill);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.09;
    controls.screenSpacePanning = true;
    controls.zoomToCursor = true;
    controls.minDistance = 2;
    controls.maxDistance = 5_000;
    controls.minZoom = 0.05;
    controls.maxZoom = 100;

    const s = state.current;
    s.renderer = renderer;
    s.scene = scene;
    s.perspective = perspective;
    s.orthographic = orthographic;
    s.camera = camera;
    s.controls = controls;

    const requestRender = () => {
      if (s.frame !== 0) return;
      s.frame = requestAnimationFrame(() => {
        s.frame = 0;
        const moving = controls.update();
        renderer.render(scene, s.camera ?? camera);
        if (moving) requestRender();
      });
    };
    s.render = requestRender;

    const resize = () => {
      const width = Math.max(1, wrap.clientWidth);
      const height = Math.max(1, wrap.clientHeight);
      const aspect = width / height;
      renderer.setSize(width, height, false);
      perspective.aspect = aspect;
      perspective.updateProjectionMatrix();
      setOrthographicFrustum(orthographic, s.orthoHalfHeight, aspect);
      requestRender();
    };
    s.resize = resize;
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);
    controls.addEventListener("change", requestRender);

    const onPointerDown = (event: PointerEvent) => {
      s.pointerStart = { x: event.clientX, y: event.clientY };
    };
    const onPointerUp = (event: PointerEvent) => {
      const start = s.pointerStart;
      s.pointerStart = null;
      if (!start || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 7) return;
      const selected = inspectPathPoint(event, canvas, s);
      setInspection(selected);
      setInspectionMarker(s.inspectionMarker, selected);
      inspectRef.current?.(selected);
      requestRender();
    };
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);

    applyPreset(s, "isometric", true);
    requestRender();

    return () => {
      if (s.frame !== 0) cancelAnimationFrame(s.frame);
      resizeObserver.disconnect();
      controls.removeEventListener("change", requestRender);
      controls.dispose();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      disposeObject(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      Object.assign(s, {
        renderer: null,
        scene: null,
        perspective: null,
        orthographic: null,
        camera: null,
        controls: null,
        tool: null,
        currentMarker: null,
        inspectionMarker: null,
        jobBounds: null,
        pathPointObjects: [],
        frame: 0,
      });
    };
  }, []);

  useEffect(() => {
    const s = state.current;
    const scene = s.scene;
    if (!scene) return;

    removeNamedObject(scene, JOB_NAME);
    s.pathPointObjects = [];
    s.tool = null;
    s.currentMarker = null;
    s.inspectionMarker = null;
    s.jobBounds = null;
    setInspection(null);
    inspectRef.current?.(null);

    if (!plan) {
      s.render();
      return;
    }

    const pointBudget = clampInt(maxRenderablePoints, MIN_PATH_BUDGET, MAX_PATH_BUDGET);
    const result = makeJob(plan, pointBudget);
    scene.add(result.group);
    s.jobBounds = result.bounds;
    s.pathPointObjects = result.pathPointObjects;
    s.tool = result.tool;
    s.currentMarker = result.currentMarker;
    s.inspectionMarker = result.inspectionMarker;
    s.raycastThreshold = clamp(Math.max(plan.stock.w, plan.stock.d) * 0.018, 0.8, 4);
    applyLayerVisibility(s, activeVisibility, visibleToolIds);
    applyPreset(s, "isometric", true);
    s.resize();
    s.render();

    return () => {
      if (scene.getObjectByName(JOB_NAME) === result.group) {
        scene.remove(result.group);
        disposeObject(result.group);
      }
    };
  }, [plan, maxRenderablePoints]);

  useEffect(() => {
    applyLayerVisibility(state.current, activeVisibility, visibleToolIds);
    state.current.render();
  }, [activeVisibility, visibleToolIds]);

  useEffect(() => {
    const s = state.current;
    if (!s.perspective || !s.orthographic || !s.controls) return;
    const nextCamera = activeProjection === "orthographic" ? s.orthographic : s.perspective;
    if (s.camera === nextCamera) return;

    const direction = getViewDirection(s);
    s.camera = nextCamera;
    s.projection = activeProjection;
    setCameraUp(nextCamera, activePreset);
    s.controls.object = nextCamera;
    fitCamera(s, direction);
    s.resize();
    s.controls.update();
    s.render();
  }, [activeProjection, activePreset]);

  useEffect(() => {
    const s = state.current;
    const tool = s.tool;
    const marker = s.currentMarker;
    if (!tool || !marker || samples.length === 0) {
      if (tool) tool.visible = false;
      if (marker) marker.visible = false;
      s.render();
      return;
    }

    const index = clampInt(playhead, 0, samples.length - 1);
    const sample = samples[index];
    const activeTool = toolForSample(plan, index);
    tool.visible = activeVisibility.tool;
    marker.visible = true;
    tool.position.set(sample.x, sample.z, sample.y);
    marker.position.set(sample.x, sample.z + 0.25, sample.y);
    marker.material = markerMaterial(marker.material, colorForMove(sample.kind));
    if (activeTool) scaleTool(tool, activeTool.diameterMm);
    s.render();
  }, [plan, samples, playhead, activeVisibility.tool]);

  const changeView = useCallback(
    (preset: MachineViewPreset) => {
      setActivePreset(preset);
      state.current.preset = preset;
      applyPreset(state.current, preset, true);
      onViewChange?.(preset);
    },
    [onViewChange],
  );

  const fit = useCallback(() => {
    fitCamera(state.current, getViewDirection(state.current));
    state.current.render();
  }, []);

  const reset = useCallback(() => {
    setActivePreset("isometric");
    state.current.preset = "isometric";
    applyPreset(state.current, "isometric", true);
    onViewChange?.("isometric");
  }, [onViewChange]);

  const changeProjection = useCallback(
    (next: MachineViewProjection) => {
      setActiveProjection(next);
      onProjectionChange?.(next);
    },
    [onProjectionChange],
  );

  const toggleLayer = useCallback(
    (key: keyof MachineViewVisibility) => {
      setActiveVisibility((current) => {
        const next = { ...current, [key]: !current[key] };
        onVisibilityChange?.(next);
        return next;
      });
    },
    [onVisibilityChange],
  );

  const currentSample = samples.length > 0 ? samples[clampInt(playhead, 0, samples.length - 1)] : null;
  const toolLegend = useMemo(() => plan?.paths.map((path) => path.tool) ?? [], [plan]);

  return (
    <div
      className="viewport"
      ref={wrapRef}
      role="group"
      aria-label="Interactive three-dimensional machining preview"
      style={{ minHeight: "clamp(340px, 52dvh, 480px)" }}
    >
      <canvas
        ref={canvasRef}
        className="viewport-canvas"
        aria-label="Orbit, pan, zoom, and select toolpath points in the machining preview"
      />

      {showToolbar ? (
        <>
          <div role="toolbar" aria-label="Viewport camera controls" style={topToolbarStyle}>
            <ViewButton label={<Maximize aria-hidden="true" size={17} />} title="Fit the complete job in the current view" onClick={fit} />
            <ViewButton label={<RotateCcw aria-hidden="true" size={17} />} title="Reset to the fitted isometric view" onClick={reset} />
            {(["isometric", "top", "front", "right"] as const).map((view) => (
              <ViewButton
                key={view}
                label={view === "isometric" ? "ISO" : titleCase(view)}
                title={`${titleCase(view)} view`}
                pressed={activePreset === view}
                onClick={() => changeView(view)}
              />
            ))}
            <ViewButton
              label="Persp"
              title="Perspective projection"
              pressed={activeProjection === "perspective"}
              onClick={() => changeProjection("perspective")}
            />
            <ViewButton
              label="Ortho"
              title="Orthographic projection"
              pressed={activeProjection === "orthographic"}
              onClick={() => changeProjection("orthographic")}
            />
          </div>

          <div role="toolbar" aria-label="Viewport layer controls" style={layerToolbarStyle}>
            {(Object.keys(activeVisibility) as (keyof MachineViewVisibility)[]).map((key) => (
              <ViewButton
                key={key}
                label={titleCase(key)}
                title={`${activeVisibility[key] ? "Hide" : "Show"} ${key} layer`}
                pressed={activeVisibility[key]}
                onClick={() => toggleLayer(key)}
              />
            ))}
          </div>
        </>
      ) : null}

      <div style={readoutStyle} aria-live="polite">
        <div style={legendRowStyle}>
          <LegendSwatch color="#69b7ff" label="Rapid" />
          <LegendSwatch color="#ffc857" label="Lead" />
          <LegendSwatch color="#53d6a0" label="Cut" />
          <span><b style={{ color: "#ff5454" }}>X</b> <b style={{ color: "#50d070" }}>Y</b> <b style={{ color: "#4f8cff" }}>Z</b></span>
        </div>
        {inspection ? (
          <span>
            {inspection.toolName} | {inspection.kind.toUpperCase()} | X {mm(inspection.x)} Y {mm(inspection.y)} Z {mm(inspection.z)} | {Math.round(inspection.feedMmMin)} mm/min | {Math.round(inspection.rpm)} rpm
          </span>
        ) : currentSample ? (
          <span>
            Current {currentSample.kind.toUpperCase()} | X {mm(currentSample.x)} Y {mm(currentSample.y)} Z {mm(currentSample.z)} | {Math.round(currentSample.feedMmMin)} mm/min | {Math.round(currentSample.rpm)} rpm
          </span>
        ) : (
          <span>No path point selected.</span>
        )}
        {toolLegend.length > 0 ? (
          <span style={toolSummaryStyle}>{uniqueTools(toolLegend).map((tool) => `${tool.name} (${mm(tool.diameterMm)} mm)`).join(" | ")}</span>
        ) : null}
      </div>
    </div>
  );
}

function ViewButton({
  label,
  title,
  pressed,
  onClick,
}: {
  label: ReactNode;
  title: string;
  pressed?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={pressed}
      onClick={onClick}
      style={{
        ...toolbarButtonStyle,
        borderColor: pressed ? "#53d6a0" : "#59636b",
        background: pressed ? "#163c31" : "#20262b",
        color: pressed ? "#d9fff0" : "#f0f3f4",
      }}
    >
      {label}
    </button>
  );
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      <span aria-hidden="true" style={{ width: 14, height: 3, background: color }} />
      {label}
    </span>
  );
}

function makeJob(plan: JobPlan, pointBudget: number) {
  const group = new THREE.Group();
  group.name = JOB_NAME;

  const targetLayer = new THREE.Group();
  targetLayer.name = "target-layer";
  targetLayer.add(makeTargetSurface(plan, Math.min(30_000, pointBudget)));
  group.add(targetLayer);

  const stockLayer = new THREE.Group();
  stockLayer.name = "stock-layer";
  const stockGeometry = new THREE.BoxGeometry(plan.stock.w, plan.stock.h, plan.stock.d);
  const stock = new THREE.Mesh(
    stockGeometry,
    new THREE.MeshStandardMaterial({
      color: 0xcbd2d5,
      transparent: true,
      opacity: 0.1,
      roughness: 0.78,
      metalness: 0.08,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
  stock.position.set(
    plan.stock.x + plan.stock.w / 2,
    plan.stock.z + plan.stock.h / 2,
    plan.stock.y + plan.stock.d / 2,
  );
  stockLayer.add(stock);
  const stockEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(stockGeometry),
    new THREE.LineBasicMaterial({ color: 0xe2eaed, transparent: true, opacity: 0.75 }),
  );
  stockEdges.position.copy(stock.position);
  stockLayer.add(stockEdges);
  group.add(stockLayer);

  const datumLayer = makeDatumLayer(plan);
  group.add(datumLayer);

  const pathResult = makePathLayers(plan, pointBudget);
  group.add(pathResult.root);

  const toolLayer = new THREE.Group();
  toolLayer.name = "tool-layer";
  const tool = makeTool(plan.paths[0]?.tool.diameterMm ?? 6.35);
  tool.name = "cutter";
  tool.visible = false;
  toolLayer.add(tool);
  const currentMarker = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 10, 8),
    new THREE.MeshBasicMaterial({ color: colorForMove("cut"), depthTest: false }),
  );
  currentMarker.name = "current-move-marker";
  currentMarker.renderOrder = 10;
  currentMarker.visible = false;
  toolLayer.add(currentMarker);
  group.add(toolLayer);

  const inspectionMarker = new THREE.Mesh(
    new THREE.SphereGeometry(1.05, 12, 8),
    new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false }),
  );
  inspectionMarker.name = "inspection-marker";
  inspectionMarker.renderOrder = 11;
  inspectionMarker.visible = false;
  group.add(inspectionMarker);

  const gridSize = Math.max(40, Math.ceil(Math.max(plan.stock.w, plan.stock.d) * 1.8 / 10) * 10);
  const grid = new THREE.GridHelper(gridSize, Math.min(40, Math.max(10, Math.round(gridSize / 5))), 0x596169, 0x30363b);
  grid.name = "datum-grid";
  grid.position.set(
    plan.stock.x + plan.stock.w / 2,
    plan.stock.z - 0.02,
    plan.stock.y + plan.stock.d / 2,
  );
  datumLayer.add(grid);

  const bounds = new THREE.Box3().setFromObject(group);
  if (bounds.isEmpty()) {
    bounds.set(
      new THREE.Vector3(plan.stock.x, plan.stock.z, plan.stock.y),
      new THREE.Vector3(plan.stock.x + plan.stock.w, plan.stock.z + plan.stock.h, plan.stock.y + plan.stock.d),
    );
  }

  return {
    group,
    bounds,
    pathPointObjects: pathResult.pointObjects,
    tool,
    currentMarker,
    inspectionMarker,
  };
}

function makeTargetSurface(plan: JobPlan, maxVertices: number): THREE.Mesh {
  const hm = plan.heightmap;
  const sourceCount = hm.nx * hm.ny;
  const step = Math.max(1, Math.ceil(Math.sqrt(sourceCount / Math.max(1, maxVertices))));
  const xIndices = sampledIndices(hm.nx, step);
  const yIndices = sampledIndices(hm.ny, step);
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  const topColor = new THREE.Color(0xc56b32);
  const lowColor = new THREE.Color(0x552b1a);

  for (const iy of yIndices) {
    for (const ix of xIndices) {
      const x = hm.originX + ix * hm.cell;
      const y = hm.originY + iy * hm.cell;
      const rawZ = hm.z[hmIndex(hm, ix, iy)];
      const z = Number.isFinite(rawZ) ? rawZ : 0;
      const tone = clamp01((z - plan.stock.z) / Math.max(1, plan.stock.h));
      const color = lowColor.clone().lerp(topColor, tone);
      positions.push(x, z, y);
      colors.push(color.r, color.g, color.b);
    }
  }

  const width = xIndices.length;
  for (let iy = 0; iy < yIndices.length - 1; iy++) {
    for (let ix = 0; ix < xIndices.length - 1; ix++) {
      const sourceX0 = xIndices[ix];
      const sourceX1 = xIndices[ix + 1];
      const sourceY0 = yIndices[iy];
      const sourceY1 = yIndices[iy + 1];
      if (
        !Number.isFinite(hm.z[hmIndex(hm, sourceX0, sourceY0)]) ||
        !Number.isFinite(hm.z[hmIndex(hm, sourceX1, sourceY0)]) ||
        !Number.isFinite(hm.z[hmIndex(hm, sourceX0, sourceY1)]) ||
        !Number.isFinite(hm.z[hmIndex(hm, sourceX1, sourceY1)])
      ) {
        continue;
      }
      const a = iy * width + ix;
      const b = a + 1;
      const c = a + width;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.58,
      metalness: 0.12,
      flatShading: false,
      side: THREE.DoubleSide,
    }),
  );
  mesh.name = "target-surface";
  return mesh;
}

function makeDatumLayer(plan: JobPlan): THREE.Group {
  const layer = new THREE.Group();
  layer.name = "datum-layer";
  const size = clamp(Math.max(plan.stock.w, plan.stock.d, plan.stock.h) * 0.22, 8, 28);
  const origin = new THREE.Vector3(plan.stock.x, plan.stock.z, plan.stock.y);
  const axes = [
    { direction: new THREE.Vector3(1, 0, 0), color: 0xff4545, name: "machine-x-axis" },
    { direction: new THREE.Vector3(0, 0, 1), color: 0x46d66b, name: "machine-y-axis" },
    { direction: new THREE.Vector3(0, 1, 0), color: 0x4388ff, name: "machine-z-axis" },
  ];
  for (const axis of axes) {
    const arrow = new THREE.ArrowHelper(axis.direction, origin, size, axis.color, size * 0.18, size * 0.1);
    arrow.name = axis.name;
    layer.add(arrow);
  }
  const datum = new THREE.Mesh(
    new THREE.SphereGeometry(Math.max(0.7, size * 0.045), 10, 8),
    new THREE.MeshBasicMaterial({ color: 0xffffff }),
  );
  datum.position.copy(origin);
  datum.name = "work-datum";
  layer.add(datum);
  return layer;
}

function makePathLayers(plan: JobPlan, pointBudget: number) {
  const root = new THREE.Group();
  root.name = "path-layer";
  const pointObjects: THREE.Points[] = [];
  const totalPoints = plan.paths.reduce((sum, path) => sum + path.points.length, 0);
  const stride = Math.max(1, Math.ceil(totalPoints / pointBudget));
  const toolIndices = new Map<string, number>();
  plan.paths.forEach((path) => {
    if (!toolIndices.has(path.tool.id)) toolIndices.set(path.tool.id, toolIndices.size);
  });

  plan.paths.forEach((path, pathIndex) => {
    const sampled = sampleWaypoints(path.points, stride);
    const byKind = new Map<MoveKind, { segments: number[]; points: number[]; inspections: PathPointInspection[] }>();
    for (const kind of ["rapid", "lead", "cut"] as const) {
      byKind.set(kind, { segments: [], points: [], inspections: [] });
    }

    sampled.forEach(({ point, sourceIndex }, sampledIndex) => {
      const bucket = byKind.get(point.kind);
      if (!bucket) return;
      bucket.points.push(point.x, point.z + 0.12, point.y);
      bucket.inspections.push(toInspection(pathIndex, sourceIndex, path.tool, point));
      if (sampledIndex > 0) {
        const previous = sampled[sampledIndex - 1].point;
        bucket.segments.push(previous.x, previous.z + 0.12, previous.y, point.x, point.z + 0.12, point.y);
      }
    });

    for (const [kind, bucket] of byKind) {
      if (bucket.segments.length === 0 && bucket.points.length === 0) continue;
      const toolIndex = toolIndices.get(path.tool.id) ?? 0;
      const color = pathColor(kind, toolIndex);
      const kindGroup = new THREE.Group();
      kindGroup.name = `path-${kind}-${path.tool.id}-${pathIndex}`;
      kindGroup.userData.kind = kind;
      kindGroup.userData.toolId = path.tool.id;

      if (bucket.segments.length > 0) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(bucket.segments, 3));
        const material = kind === "rapid"
          ? new THREE.LineDashedMaterial({ color, dashSize: 3, gapSize: 2, transparent: true, opacity: 0.72 })
          : new THREE.LineBasicMaterial({ color, transparent: true, opacity: kind === "lead" ? 0.9 : 0.94 });
        const line = new THREE.LineSegments(geometry, material);
        if (kind === "rapid") line.computeLineDistances();
        line.name = `${kind}-segments`;
        kindGroup.add(line);
      }

      if (bucket.points.length > 0) {
        const pointGeometry = new THREE.BufferGeometry();
        pointGeometry.setAttribute("position", new THREE.Float32BufferAttribute(bucket.points, 3));
        const pointMaterial = new THREE.PointsMaterial({ size: 7, sizeAttenuation: false });
        pointMaterial.colorWrite = false;
        pointMaterial.depthWrite = false;
        const points = new THREE.Points(pointGeometry, pointMaterial);
        points.name = `${kind}-inspection-points`;
        points.userData.inspections = bucket.inspections;
        points.userData.kind = kind;
        points.userData.toolId = path.tool.id;
        pointObjects.push(points);
        kindGroup.add(points);
      }
      root.add(kindGroup);
    }
  });

  return { root, pointObjects };
}

function sampleWaypoints(points: Waypoint[], stride: number) {
  const sampled: { point: Waypoint; sourceIndex: number }[] = [];
  for (let index = 0; index < points.length; index++) {
    const isBoundary = index === 0 || index === points.length - 1 || points[index - 1].kind !== points[index].kind;
    if (isBoundary || index % stride === 0) sampled.push({ point: points[index], sourceIndex: index });
  }
  return sampled;
}

function toInspection(
  pathIndex: number,
  pointIndex: number,
  tool: Tool,
  point: Waypoint,
): PathPointInspection {
  return {
    pathIndex,
    pointIndex,
    toolId: tool.id,
    toolName: tool.name,
    kind: point.kind,
    x: point.x,
    y: point.y,
    z: point.z,
    feedMmMin: point.feedMmMin,
    rpm: point.rpm,
    engagementRad: point.engagementRad,
    slotting: point.slotting,
  };
}

function makeTool(diameterMm: number): THREE.Object3D {
  const group = new THREE.Group();
  const radius = diameterMm / 2;
  const flutes = new THREE.CylinderGeometry(radius, radius * 0.82, 16, 14);
  const shank = new THREE.CylinderGeometry(radius * 0.72, radius * 0.72, 22, 14);
  const material = new THREE.MeshStandardMaterial({ color: 0xe9eef0, metalness: 0.78, roughness: 0.2 });
  const cutter = new THREE.Mesh(flutes, material);
  const holder = new THREE.Mesh(shank, material);
  cutter.position.y = 8;
  holder.position.y = 19;
  group.add(cutter, holder);
  group.userData.baseDiameterMm = diameterMm;
  return group;
}

function scaleTool(tool: THREE.Object3D, diameterMm: number) {
  const base = Number(tool.userData.baseDiameterMm) || diameterMm;
  const radialScale = diameterMm / Math.max(0.01, base);
  tool.scale.set(radialScale, 1, radialScale);
}

function applyLayerVisibility(
  s: ViewState,
  visibility: MachineViewVisibility,
  visibleToolIds?: readonly string[],
) {
  const job = s.scene?.getObjectByName(JOB_NAME);
  if (!job) return;
  setNamedVisibility(job, "stock-layer", visibility.stock);
  setNamedVisibility(job, "target-layer", visibility.target);
  setNamedVisibility(job, "tool-layer", visibility.tool);
  setNamedVisibility(job, "datum-layer", visibility.datum);
  const allowedTools = visibleToolIds ? new Set(visibleToolIds) : null;
  job.getObjectByName("path-layer")?.children.forEach((child) => {
    const kind = child.userData.kind as MoveKind;
    const toolId = String(child.userData.toolId);
    child.visible = visibility[kind] && (!allowedTools || allowedTools.has(toolId));
  });
}

function applyPreset(s: ViewState, preset: MachineViewPreset, shouldFit: boolean) {
  if (!s.camera || !s.controls) return;
  const direction = presetDirection(preset);
  setCameraUp(s.camera, preset);
  if (shouldFit) fitCamera(s, direction);
  s.controls.update();
  s.render();
}

function fitCamera(s: ViewState, direction: THREE.Vector3) {
  const camera = s.camera;
  const controls = s.controls;
  if (!camera || !controls) return;
  const bounds = s.jobBounds;
  const center = bounds?.getCenter(new THREE.Vector3()) ?? new THREE.Vector3(50, 8, 35);
  const size = bounds?.getSize(new THREE.Vector3()) ?? new THREE.Vector3(100, 20, 70);
  const radius = Math.max(5, size.length() / 2);
  const normalized = direction.lengthSq() > 0 ? direction.clone().normalize() : presetDirection("isometric");
  controls.target.copy(center);

  if (camera instanceof THREE.PerspectiveCamera) {
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * Math.max(0.2, camera.aspect));
    const limitingFov = Math.min(verticalFov, horizontalFov);
    const distance = radius / Math.max(0.1, Math.sin(limitingFov / 2)) * 1.12;
    camera.position.copy(center).addScaledVector(normalized, distance);
    camera.near = Math.max(0.05, distance - radius * 2.2);
    camera.far = distance + radius * 5 + 1_000;
    camera.updateProjectionMatrix();
  } else {
    s.orthoHalfHeight = radius * 1.18;
    camera.position.copy(center).addScaledVector(normalized, radius * 3.2);
    camera.near = 0.05;
    camera.far = radius * 10 + 1_000;
    s.resize();
  }
  controls.cursor.copy(center);
}

function setOrthographicFrustum(camera: THREE.OrthographicCamera, halfHeight: number, aspect: number) {
  camera.left = -halfHeight * aspect;
  camera.right = halfHeight * aspect;
  camera.top = halfHeight;
  camera.bottom = -halfHeight;
  camera.updateProjectionMatrix();
}

function presetDirection(preset: MachineViewPreset): THREE.Vector3 {
  switch (preset) {
    case "top":
      return new THREE.Vector3(0, 1, 0);
    case "front":
      return new THREE.Vector3(0, 0, -1);
    case "right":
      return new THREE.Vector3(1, 0, 0);
    case "isometric":
      return new THREE.Vector3(1, 0.82, -1);
  }
}

function setCameraUp(camera: THREE.Camera, preset: MachineViewPreset) {
  camera.up.set(0, 1, 0);
  if (preset === "top") camera.up.set(0, 0, 1);
}

function getViewDirection(s: ViewState): THREE.Vector3 {
  if (!s.camera || !s.controls) return presetDirection(s.preset);
  return s.camera.position.clone().sub(s.controls.target).normalize();
}

function inspectPathPoint(event: PointerEvent, canvas: HTMLCanvasElement, s: ViewState) {
  if (!s.camera) return null;
  const rect = canvas.getBoundingClientRect();
  const pointer = new THREE.Vector2(
    ((event.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1,
    -((event.clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1,
  );
  const raycaster = new THREE.Raycaster();
  raycaster.params.Points = { threshold: s.raycastThreshold };
  raycaster.setFromCamera(pointer, s.camera);
  const hit = raycaster.intersectObjects(s.pathPointObjects, false)[0];
  if (!hit || hit.index === undefined) return null;
  const inspections = hit.object.userData.inspections as PathPointInspection[] | undefined;
  return inspections?.[hit.index] ?? null;
}

function setInspectionMarker(marker: THREE.Mesh | null, inspection: PathPointInspection | null) {
  if (!marker) return;
  marker.visible = inspection !== null;
  if (inspection) marker.position.set(inspection.x, inspection.z + 0.2, inspection.y);
}

function toolForSample(plan: JobPlan | null, sampleIndex: number): Tool | null {
  if (!plan) return null;
  let offset = 0;
  for (const path of plan.paths) {
    offset += path.points.length;
    if (sampleIndex < offset) return path.tool;
  }
  return plan.paths.at(-1)?.tool ?? null;
}

function colorForMove(kind: MoveKind): THREE.Color {
  if (kind === "rapid") return new THREE.Color(0x69b7ff);
  if (kind === "lead") return new THREE.Color(0xffc857);
  return new THREE.Color(0x53d6a0);
}

function pathColor(kind: MoveKind, toolIndex: number): THREE.Color {
  const base = colorForMove(kind);
  if (kind !== "cut" || toolIndex === 0) return base;
  return new THREE.Color().setHSL((0.44 + toolIndex * 0.17) % 1, 0.68, 0.58);
}

function markerMaterial(material: THREE.Material | THREE.Material[], color: THREE.Color) {
  const current = Array.isArray(material) ? material[0] : material;
  if (current instanceof THREE.MeshBasicMaterial) current.color.copy(color);
  return material;
}

function sampledIndices(length: number, stride: number): number[] {
  const result: number[] = [];
  for (let index = 0; index < length; index += stride) result.push(index);
  if (length > 0 && result.at(-1) !== length - 1) result.push(length - 1);
  return result;
}

function removeNamedObject(scene: THREE.Scene, name: string) {
  const object = scene.getObjectByName(name);
  if (!object) return;
  scene.remove(object);
  disposeObject(object);
}

function setNamedVisibility(root: THREE.Object3D, name: string, visible: boolean) {
  const object = root.getObjectByName(name);
  if (object) object.visible = visible;
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child.userData.__machineViewDisposed) return;
    child.userData.__machineViewDisposed = true;
    const renderable = child as THREE.Mesh;
    renderable.geometry?.dispose();
    const material = renderable.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else material?.dispose();
  });
}

function uniqueTools(tools: Tool[]): Tool[] {
  return [...new Map(tools.map((tool) => [tool.id, tool])).values()];
}

function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function mm(value: number): string {
  return value.toFixed(Math.abs(value) < 10 ? 2 : 1);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function clamp01(value: number): number {
  return clamp(value, 0, 1);
}

function clampInt(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Math.round(value)));
}

const topToolbarStyle: CSSProperties = {
  position: "absolute",
  zIndex: 3,
  top: 7,
  left: 7,
  right: 7,
  display: "flex",
  gap: 4,
  overflowX: "auto",
  padding: 3,
  borderRadius: 5,
  background: "rgba(13, 17, 20, 0.86)",
  scrollbarWidth: "thin",
};

const layerToolbarStyle: CSSProperties = {
  ...topToolbarStyle,
  top: 58,
};

const toolbarButtonStyle: CSSProperties = {
  flex: "0 0 auto",
  minWidth: 44,
  minHeight: 44,
  padding: "6px 8px",
  border: "1px solid",
  borderRadius: 4,
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: 0,
};

const readoutStyle: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  right: 7,
  bottom: 78,
  left: 7,
  display: "grid",
  gap: 3,
  minWidth: 0,
  padding: "7px 9px",
  border: "1px solid rgba(130, 145, 153, 0.45)",
  borderRadius: 4,
  background: "rgba(13, 17, 20, 0.88)",
  color: "#e8edef",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: 10,
  lineHeight: 1.3,
  pointerEvents: "none",
};

const legendRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 9,
  alignItems: "center",
};

const toolSummaryStyle: CSSProperties = {
  overflow: "hidden",
  color: "#abb7bc",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};
