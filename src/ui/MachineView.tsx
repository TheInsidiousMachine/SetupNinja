import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Layers, Maximize, RotateCcw, Scissors } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { JobPlan, MoveKind, SenseSample, Tool, UnitSystem, Waypoint } from "../kernel/types";
import { hmIndex } from "../kernel/heightmap";
import { resolvePost } from "../kernel/postConfig";
import { formatDiameter, feedIn, lengthIn, lengthUnitLabel, feedUnitLabel } from "../kernel/units";

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
  toolAssemblies: Map<string, THREE.Object3D>;
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
  /** Clips stock and target material so the operator can see into a pocket. */
  sectionPlane: THREE.Plane | null;
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
  const [contextFailed, setContextFailed] = useState(false);
  const [layersOpen, setLayersOpen] = useState(false);
  /** Section height as a fraction of the job bounds; 1 shows the whole part. */
  const [sectionAt, setSectionAt] = useState(1);
  const state = useRef<ViewState>({
    renderer: null,
    scene: null,
    perspective: null,
    orthographic: null,
    camera: null,
    controls: null,
    toolAssemblies: new Map(),
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
    sectionPlane: null,
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

    // A device without WebGL, or a canvas whose context was already taken,
    // must degrade to a message rather than throwing through the whole app —
    // there is no error boundary above this component.
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch (error) {
      console.warn("SetupNinja: 3D preview unavailable.", error);
      setContextFailed(true);
      return;
    }
    setContextFailed(false);
    // Local clipping lets the section control cut away material while leaving
    // the toolpaths whole, which is the view a machinist actually wants.
    renderer.localClippingEnabled = true;
    renderer.setClearColor(0x14181c, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    // Density is re-scaled per job; a fixed value greys out a large part at the
    // same distance that leaves a small one untouched.
    scene.fog = new THREE.FogExp2(0x14181c, 0.0018);

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
    // Distance limits are re-derived from the job in fitCamera; these only cover
    // the window before a plan loads.
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
        // The near plane has to track the dolly distance or zooming in clips
        // the part away entirely.
        updateClipping(s);
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
      // dispose() frees the three.js-side resources. forceContextLoss() must not
      // be called here: a canvas element only ever yields one WebGL context, so
      // killing it leaves the element unable to render if this component ever
      // mounts again — which React does on every StrictMode pass in development.
      renderer.dispose();
      Object.assign(s, {
        renderer: null,
        scene: null,
        perspective: null,
        orthographic: null,
        camera: null,
        controls: null,
        toolAssemblies: new Map(),
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
    s.toolAssemblies = new Map();
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
    const sectionPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), Number.POSITIVE_INFINITY);
    s.sectionPlane = sectionPlane;
    const result = makeJob(plan, pointBudget, sectionPlane);
    scene.add(result.group);
    s.jobBounds = result.bounds;
    s.pathPointObjects = result.pathPointObjects;
    s.toolAssemblies = result.toolAssemblies;
    s.currentMarker = result.currentMarker;
    s.inspectionMarker = result.inspectionMarker;
    s.raycastThreshold = clamp(Math.max(plan.stock.w, plan.stock.d) * 0.018, 0.8, 4);
    if (scene.fog instanceof THREE.FogExp2) {
      const span = Math.max(1, result.bounds.getSize(new THREE.Vector3()).length());
      scene.fog.density = 0.35 / span;
    }
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
    const marker = s.currentMarker;
    if (s.toolAssemblies.size === 0 || !marker || samples.length === 0) {
      for (const assembly of s.toolAssemblies.values()) assembly.visible = false;
      if (marker) marker.visible = false;
      s.render();
      return;
    }

    const index = clampInt(playhead, 0, samples.length - 1);
    const sample = samples[index];
    const activeTool = toolForSample(plan, index);

    // Only the tool actually in the spindle is drawn; the rest stay parked.
    for (const [toolId, assembly] of s.toolAssemblies) {
      const active = toolId === activeTool?.id;
      assembly.visible = active && activeVisibility.tool;
      if (active) assembly.position.set(sample.x, sample.z, sample.y);
    }

    marker.visible = true;
    marker.position.set(sample.x, sample.z + 0.25, sample.y);
    marker.material = markerMaterial(marker.material, colorForMove(sample.kind));
    s.render();
  }, [plan, samples, playhead, activeVisibility.tool]);

  useEffect(() => {
    const s = state.current;
    const plane = s.sectionPlane;
    const bounds = s.jobBounds;
    if (!plane || !bounds) return;
    if (sectionAt >= 1) {
      plane.constant = Number.POSITIVE_INFINITY;
    } else {
      const min = bounds.min.y;
      const max = bounds.max.y;
      // Plane normal is -Y, so the constant is the height material survives to.
      plane.constant = min + (max - min) * sectionAt;
    }
    s.render();
  }, [sectionAt, plan]);

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
  // The readout follows the machine's own unit setting, so an inch shop never
  // has to convert a coordinate in their head off the screen.
  const units: UnitSystem = plan ? resolvePost(plan.machine).units : "inch";
  const axis = (mm: number) => coordinate(units, mm);

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
          <div className="vp-bar vp-bar-top" role="toolbar" aria-label="Viewport camera controls">
            <div className="vp-scroll">
            <ViewButton
              label={<Maximize aria-hidden="true" size={16} />}
              title="Fit the complete job in the current view"
              onClick={fit}
            />
            <ViewButton
              label={<RotateCcw aria-hidden="true" size={16} />}
              title="Reset to the fitted isometric view"
              onClick={reset}
            />
            <span className="vp-divider" aria-hidden="true" />
            {(["isometric", "top", "front", "right"] as const).map((view) => (
              <ViewButton
                key={view}
                label={view === "isometric" ? "ISO" : titleCase(view)}
                title={`${titleCase(view)} view`}
                pressed={activePreset === view}
                onClick={() => changeView(view)}
              />
            ))}
            <span className="vp-divider" aria-hidden="true" />
            <ViewButton
              label={activeProjection === "perspective" ? "3D" : "2D"}
              title={
                activeProjection === "perspective"
                  ? "Perspective projection - switch to orthographic"
                  : "Orthographic projection - switch to perspective"
              }
              pressed={activeProjection === "orthographic"}
              onClick={() => changeProjection(activeProjection === "perspective" ? "orthographic" : "perspective")}
            />
            </div>
            {/* Pinned outside the scroller so the layer controls are always reachable. */}
            <ViewButton
              label={<Layers aria-hidden="true" size={16} />}
              title="Show or hide layers"
              pressed={layersOpen}
              onClick={() => setLayersOpen((open) => !open)}
            />
          </div>

          {layersOpen ? (
            <div className="vp-layers" role="toolbar" aria-label="Viewport layer controls">
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
          ) : null}

          {/*
            Sectioning cuts the stock and the finished surface away above a
            height while leaving the toolpaths drawn, so the operator can look
            straight down into a pocket and see what the cutter does there.
          */}
          <label className="vp-section">
            <Scissors aria-hidden="true" size={14} />
            <span className="sr-text">Section height</span>
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(sectionAt * 100)}
              aria-label="Section the part to see inside"
              onChange={(event) => setSectionAt(Number(event.target.value) / 100)}
            />
            <span className="vp-section-value">{sectionAt >= 1 ? "off" : `${Math.round(sectionAt * 100)}%`}</span>
          </label>
        </>
      ) : null}

      {contextFailed ? (
        <div className="vp-fallback" role="status">
          <p style={{ margin: 0, fontWeight: 700 }}>3D preview unavailable</p>
          <p style={{ margin: "6px 0 0", color: "#abb7bc" }}>
            This device could not open a WebGL context. Planning, checks, and export still work.
          </p>
        </div>
      ) : null}

      <div className="vp-readout" aria-live="polite">
        <div className="vp-legend">
          <LegendSwatch color="#69b7ff" label="Rapid" />
          <LegendSwatch color="#ffc857" label="Lead" />
          <LegendSwatch color="#53d6a0" label="Cut" />
          <span><b style={{ color: "#ff5454" }}>X</b> <b style={{ color: "#50d070" }}>Y</b> <b style={{ color: "#4f8cff" }}>Z</b></span>
        </div>
        {inspection ? (
          <span>
            {inspection.toolName} | {inspection.kind.toUpperCase()} | X {axis(inspection.x)} Y {axis(inspection.y)} Z{" "}
            {axis(inspection.z)} {lengthUnitLabel(units)} | {formatFeedValue(units, inspection.feedMmMin)} | {Math.round(inspection.rpm)} rpm
          </span>
        ) : currentSample ? (
          <span>
            Current {currentSample.kind.toUpperCase()} | X {axis(currentSample.x)} Y {axis(currentSample.y)} Z{" "}
            {axis(currentSample.z)} {lengthUnitLabel(units)} | {formatFeedValue(units, currentSample.feedMmMin)} |{" "}
            {Math.round(currentSample.rpm)} rpm
          </span>
        ) : (
          <span>No path point selected.</span>
        )}
        {toolLegend.length > 0 ? (
          <span className="vp-tools">
            {uniqueTools(toolLegend).map((tool) => describeTool(units, tool)).join(" | ")}
          </span>
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
      className={pressed ? "vp-btn on" : "vp-btn"}
      title={title}
      aria-label={title}
      aria-pressed={pressed}
      onClick={onClick}
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

function makeJob(plan: JobPlan, pointBudget: number, sectionPlane: THREE.Plane) {
  const group = new THREE.Group();
  group.name = JOB_NAME;

  const targetLayer = new THREE.Group();
  targetLayer.name = "target-layer";
  targetLayer.add(makeTargetSurface(plan, Math.min(30_000, pointBudget), sectionPlane));
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
      clippingPlanes: [sectionPlane],
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
  const toolAssemblies = new Map<string, THREE.Object3D>();
  for (const tool of uniqueTools(plan.paths.map((path) => path.tool))) {
    const assembly = makeToolAssembly(tool);
    assembly.visible = false;
    toolAssemblies.set(tool.id, assembly);
    toolLayer.add(assembly);
  }
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

  const bounds = jobBounds(plan);

  return {
    group,
    bounds,
    pathPointObjects: pathResult.pointObjects,
    toolAssemblies,
    currentMarker,
    inspectionMarker,
  };
}

/**
 * Bounds of the work itself: the stock and everything the tool does to it.
 *
 * Deliberately excludes the reference grid and datum arrows. Those are sized
 * generously around the part, so letting them into the bounds made "fit" frame
 * a box roughly twice the stock — the part landed small and orbited around the
 * grid's centre rather than its own.
 */
function jobBounds(plan: JobPlan): THREE.Box3 {
  const bounds = new THREE.Box3().set(
    new THREE.Vector3(plan.stock.x, plan.stock.z, plan.stock.y),
    new THREE.Vector3(
      plan.stock.x + plan.stock.w,
      plan.stock.z + plan.stock.h,
      plan.stock.y + plan.stock.d,
    ),
  );
  const point = new THREE.Vector3();
  for (const path of plan.paths) {
    for (const waypoint of path.points) {
      bounds.expandByPoint(point.set(waypoint.x, waypoint.z, waypoint.y));
    }
  }
  return bounds;
}

function makeTargetSurface(plan: JobPlan, maxVertices: number, sectionPlane: THREE.Plane): THREE.Mesh {
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
      clippingPlanes: [sectionPlane],
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

/**
 * The whole cutting assembly at true scale: flutes, shank, and toolholder.
 *
 * The holder is the part a machinist cannot watch while the spindle is down in
 * a pocket, and a wide holder is what actually crashes. Drawing it to the same
 * scale as the part makes an impending collision visible instead of implied.
 * The tool's origin is its tip, so the group can be parked straight onto a
 * waypoint.
 */
function makeToolAssembly(tool: Tool): THREE.Object3D {
  const group = new THREE.Group();
  const radius = tool.diameterMm / 2;
  const fluteLength = tool.fluteLengthMm ?? Math.max(tool.diameterMm * 2.5, 10);
  const stickout = tool.stickoutMm ?? fluteLength * 1.4;

  const cutterMaterial = new THREE.MeshStandardMaterial({
    color: 0xe9eef0,
    metalness: 0.78,
    roughness: 0.2,
  });
  const holderMaterial = new THREE.MeshStandardMaterial({
    color: 0x8d9aa4,
    metalness: 0.62,
    roughness: 0.36,
  });

  const flutes = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, fluteLength, 20), cutterMaterial);
  flutes.position.y = fluteLength / 2;
  group.add(flutes);

  // Shank runs from the top of the flutes up to the holder nose.
  const shankLength = Math.max(0, stickout - fluteLength);
  if (shankLength > 0) {
    const shank = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.98, radius * 0.98, shankLength, 16),
      cutterMaterial,
    );
    shank.position.y = fluteLength + shankLength / 2;
    group.add(shank);
  }

  const holder = tool.holder;
  if (holder) {
    const noseR = holder.noseDiameterMm / 2;
    const bodyR = holder.bodyDiameterMm / 2;
    if (holder.noseLengthMm > 0) {
      const taper = new THREE.Mesh(
        new THREE.CylinderGeometry(bodyR, noseR, holder.noseLengthMm, 24),
        holderMaterial,
      );
      taper.position.y = stickout + holder.noseLengthMm / 2;
      group.add(taper);
    }
    const bodyLength = Math.max(0, holder.lengthMm - holder.noseLengthMm);
    if (bodyLength > 0) {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(bodyR, bodyR, bodyLength, 24), holderMaterial);
      body.position.y = stickout + holder.noseLengthMm + bodyLength / 2;
      group.add(body);
    }
  }

  group.name = `tool-${tool.id}`;
  group.userData.toolId = tool.id;
  return group;
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

  // Keep the dolly limits proportional to the part. A fixed 2 mm minimum lets a
  // phone pinch drive the camera inside a small part; a fixed 5 m maximum sends
  // a large one out past the fog.
  controls.minDistance = radius * 0.08;
  controls.maxDistance = radius * 40;

  if (camera instanceof THREE.PerspectiveCamera) {
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * Math.max(0.2, camera.aspect));
    const limitingFov = Math.min(verticalFov, horizontalFov);
    const distance = radius / Math.max(0.1, Math.sin(limitingFov / 2)) * 1.12;
    camera.position.copy(center).addScaledVector(normalized, distance);
  } else {
    s.orthoHalfHeight = radius * 1.18;
    // OrbitControls dollies an orthographic camera through `zoom`, so a stale
    // zoom from an earlier gesture would survive the frustum rebuild and stop
    // "fit" from actually fitting.
    camera.zoom = 1;
    camera.position.copy(center).addScaledVector(normalized, radius * 3.2);
    s.resize();
  }
  updateClipping(s);
}

/**
 * Recompute the near and far planes for the camera's current distance.
 *
 * These cannot be set once at fit time: the near plane that frames the whole
 * job sits far in front of the lens, so dollying in past it clips the model out
 * of existence. Running this on every camera change keeps the part visible from
 * a full-envelope view down to a single toolpath point.
 */
function updateClipping(s: ViewState) {
  const camera = s.camera;
  const controls = s.controls;
  if (!camera || !controls) return;
  const bounds = s.jobBounds;
  const radius = Math.max(5, (bounds?.getSize(new THREE.Vector3()) ?? new THREE.Vector3(100, 20, 70)).length() / 2);
  const distance = camera.position.distanceTo(controls.target);

  if (camera instanceof THREE.PerspectiveCamera) {
    // Stay in front of the nearest geometry, but never so far back that a depth
    // buffer of this range loses resolution on the part itself.
    const near = Math.max(radius * 1e-3, (distance - radius) * 0.25);
    camera.near = Math.min(near, Math.max(radius * 1e-3, distance * 0.5));
    camera.far = distance + radius * 6 + 100;
  } else {
    camera.near = -radius * 10;
    camera.far = distance + radius * 20 + 100;
  }
  camera.updateProjectionMatrix();
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

/** Tool name plus its diameter, unless the name already states it. */
function describeTool(units: UnitSystem, tool: Tool): string {
  const diameter = formatDiameter(units, tool.diameterMm);
  return tool.name.includes(diameter) ? tool.name : `${tool.name} (${diameter})`;
}

/** Coordinate readout: four places resolves a tenth in inch, three in metric. */
function coordinate(units: UnitSystem, mmValue: number): string {
  const value = lengthIn(units, mmValue);
  return value.toFixed(units === "inch" ? 4 : 2);
}

function formatFeedValue(units: UnitSystem, mmPerMin: number): string {
  const value = feedIn(units, mmPerMin);
  const text = units === "inch" ? value.toFixed(1) : String(Math.round(value));
  return `${text} ${feedUnitLabel(units)}`;
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







