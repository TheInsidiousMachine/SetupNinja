import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { JobPlan, SenseSample } from "../kernel/types";
import { hmIndex } from "../kernel/heightmap";

type Props = {
  plan: JobPlan | null;
  samples: SenseSample[];
  playhead: number;
};

export function MachineView({ plan, samples, playhead }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({
    renderer: null as THREE.WebGLRenderer | null,
    scene: null as THREE.Scene | null,
    camera: null as THREE.PerspectiveCamera | null,
    tool: null as THREE.Object3D | null,
    frame: 0,
    rot: 0.55,
    elev: 0.42,
    dist: 118,
    dragging: false,
    lastX: 0,
    lastY: 0,
    pinch: 0,
    cx: 48,
    cy: 32,
    cz: 10,
  });

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
    renderer.setClearColor(0x14110e, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.5, 2000);
    camera.up.set(0, 1, 0);

    const hemi = new THREE.HemisphereLight(0xf2e6d4, 0x2a2018, 1.1);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffe6c8, 1.35);
    key.position.set(40, 90, 30);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x88a0b8, 0.35);
    fill.position.set(-50, 20, -40);
    scene.add(fill);

    const grid = new THREE.GridHelper(220, 22, 0x3a332c, 0x241f1a);
    grid.position.y = -0.02;
    scene.add(grid);

    state.current.renderer = renderer;
    state.current.scene = scene;
    state.current.camera = camera;

    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let raf = 0;
    const tick = () => {
      const s = state.current;
      placeCamera(s, camera);
      renderer.render(scene, camera);
      s.frame = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    state.current.frame = raf;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch" && e.isPrimary === false) return;
      sPointer(e, true);
    };
    const onMove = (e: PointerEvent) => {
      const s = state.current;
      if (!s.dragging) return;
      const dx = e.clientX - s.lastX;
      const dy = e.clientY - s.lastY;
      s.rot += dx * 0.008;
      s.elev = clamp(s.elev + dy * 0.006, 0.12, 1.2);
      s.lastX = e.clientX;
      s.lastY = e.clientY;
    };
    const onUp = () => {
      state.current.dragging = false;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      state.current.dist = clamp(state.current.dist + e.deltaY * 0.12, 60, 420);
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const d = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY,
        );
        if (state.current.pinch) {
          const delta = state.current.pinch - d;
          state.current.dist = clamp(state.current.dist + delta * 0.25, 60, 420);
        }
        state.current.pinch = d;
        state.current.dragging = false;
      } else {
        state.current.pinch = 0;
      }
    };

    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      cancelAnimationFrame(state.current.frame);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("touchmove", onTouch);
      disposeScene(scene);
      renderer.dispose();
    };

    function sPointer(e: PointerEvent, down: boolean) {
      const s = state.current;
      s.dragging = down;
      s.lastX = e.clientX;
      s.lastY = e.clientY;
    }
  }, []);

  useEffect(() => {
    const scene = state.current.scene;
    if (!scene || !plan) return;
    clearPart(scene);
    const group = new THREE.Group();
    group.name = "job";
    const { cx, cy, cz } = addPart(group, plan, samples);
    state.current.cx = cx;
    state.current.cy = cy;
    state.current.cz = cz;
    const tool = makeTool(plan.paths[0]?.tool.diameterMm ?? 6.35);
    tool.name = "cutter";
    group.add(tool);
    state.current.tool = tool;
    scene.add(group);
    return () => {
      scene.remove(group);
      disposeObject(group);
      state.current.tool = null;
    };
  }, [plan, samples]);

  useEffect(() => {
    const tool = state.current.tool;
    if (!tool || samples.length === 0) return;
    const i = clampInt(playhead, 0, samples.length - 1);
    const s = samples[i];
    tool.position.set(s.x, s.z + 8, s.y);
  }, [playhead, samples]);

  return (
    <div className="viewport" ref={wrapRef}>
      <canvas ref={canvasRef} className="viewport-canvas" />
    </div>
  );
}

function placeCamera(
  s: {
    rot: number;
    elev: number;
    dist: number;
    cx: number;
    cy: number;
    cz: number;
  },
  camera: THREE.PerspectiveCamera,
) {
  const x = s.cx + s.dist * Math.cos(s.elev) * Math.cos(s.rot);
  const z = s.cy + s.dist * Math.cos(s.elev) * Math.sin(s.rot);
  const y = s.cz + s.dist * Math.sin(s.elev);
  camera.position.set(x, y, z);
  camera.lookAt(s.cx, s.cz, s.cy);
}

function addPart(group: THREE.Group, plan: JobPlan, samples: SenseSample[]) {
  const hm = plan.heightmap;
  const geo = new THREE.BufferGeometry();
  const positions: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];
  const clay = new THREE.Color(0xc45c26);
  const dark = new THREE.Color(0x5a2a14);

  for (let iy = 0; iy < hm.ny; iy++) {
    for (let ix = 0; ix < hm.nx; ix++) {
      const x = hm.originX + ix * hm.cell;
      const y = hm.originY + iy * hm.cell;
      const zRaw = hm.z[hmIndex(hm, ix, iy)];
      const z = Number.isFinite(zRaw) ? zRaw : 0;
      const t = clamp01(z / Math.max(1, plan.stock.h));
      const c = clay.clone().lerp(dark, 1 - t);
      positions.push(x, z, y);
      colors.push(c.r, c.g, c.b);
    }
  }
  for (let iy = 0; iy < hm.ny - 1; iy++) {
    for (let ix = 0; ix < hm.nx - 1; ix++) {
      const z00 = hm.z[hmIndex(hm, ix, iy)];
      const z10 = hm.z[hmIndex(hm, ix + 1, iy)];
      const z01 = hm.z[hmIndex(hm, ix, iy + 1)];
      const z11 = hm.z[hmIndex(hm, ix + 1, iy + 1)];
      if (
        !Number.isFinite(z00) ||
        !Number.isFinite(z10) ||
        !Number.isFinite(z01) ||
        !Number.isFinite(z11)
      ) {
        continue;
      }
      const a = iy * hm.nx + ix;
      const b = a + 1;
      const c = a + hm.nx;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.48,
      metalness: 0.18,
      flatShading: true,
    }),
  );
  group.add(mesh);

  const stockGeo = new THREE.BoxGeometry(plan.stock.w, plan.stock.h, plan.stock.d);
  const stock = new THREE.Mesh(
    stockGeo,
    new THREE.MeshStandardMaterial({
      color: 0xd9cbb0,
      transparent: true,
      opacity: 0.07,
      roughness: 0.9,
      depthWrite: false,
    }),
  );
  stock.position.set(
    plan.stock.x + plan.stock.w / 2,
    plan.stock.h / 2,
    plan.stock.y + plan.stock.d / 2,
  );
  group.add(stock);

  if (samples.length > 1) {
    const pts: number[] = [];
    const cols: number[] = [];
    const n = Math.min(samples.length, 2800);
    const stride = Math.max(1, Math.floor(samples.length / n));
    for (let i = 0; i < samples.length; i += stride) {
      const s = samples[i];
      if (s.kind === "rapid") continue;
      pts.push(s.x, s.z + 0.15, s.y);
      const color = pathColor(s.feedOverride, s.chatterRisk);
      cols.push(color.r, color.g, color.b);
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
    const line = new THREE.Line(
      lineGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55 }),
    );
    group.add(line);
  }

  return {
    cx: plan.stock.x + plan.stock.w / 2,
    cy: plan.stock.y + plan.stock.d / 2,
    cz: plan.stock.h * 0.45,
  };
}

function makeTool(diameterMm: number): THREE.Object3D {
  const g = new THREE.Group();
  const r = diameterMm / 2;
  const flutes = new THREE.CylinderGeometry(r, r * 0.85, 16, 10);
  const shank = new THREE.CylinderGeometry(r * 0.7, r * 0.7, 22, 10);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xe8e4dc,
    metalness: 0.72,
    roughness: 0.22,
  });
  const a = new THREE.Mesh(flutes, mat);
  const b = new THREE.Mesh(shank, mat);
  a.position.y = 8;
  b.position.y = 19;
  g.add(a, b);
  return g;
}

function pathColor(override: number, chatter: number): THREE.Color {
  if (chatter > 0.62) return new THREE.Color(0xe07060);
  if (override < 0.7) return new THREE.Color(0xe0a45a);
  return new THREE.Color(0x7dcaa0);
}

function clearPart(scene: THREE.Scene) {
  const old = scene.getObjectByName("job");
  if (old) {
    scene.remove(old);
    disposeObject(old);
  }
}

function disposeScene(scene: THREE.Scene) {
  scene.traverse((obj) => disposeObject(obj));
}

function disposeObject(obj: THREE.Object3D) {
  obj.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const mat = mesh.material;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else if (mat) mat.dispose();
  });
}

function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v));
}

function clamp01(v: number): number {
  return clamp(v, 0, 1);
}

function clampInt(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, Math.round(v)));
}
