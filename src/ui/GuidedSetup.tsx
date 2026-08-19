import { useEffect, useRef, useState } from "react";
import { lengthIn, lengthToMm, lengthUnitLabel } from "../kernel/units";
import type { ParametricFeature, ParametricSpec, UnitSystem } from "../kernel/types";

export type FeatureKind = ParametricFeature["kind"];

type Props = {
  onGenerate: (spec: ParametricSpec) => void;
  onDirty?: () => void;
  disabled?: boolean;
  /** Unit system the operator types in. Values convert to mm for the kernel. */
  units?: UnitSystem;
};

const FEATURE_LABELS: Record<FeatureKind, string> = {
  face: "Face only",
  pocket: "Pocket",
  boss: "Boss / step",
};

export function GuidedSetup({ onGenerate, onDirty, disabled, units = "inch" }: Props) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [partName, setPartName] = useState("Guided part");
  // Dimensions are held in the operator's own units and converted to mm only
  // when the spec is built, so typing never accumulates conversion drift.
  const [width, setWidth] = useState(() => defaults(units).width);
  const [depth, setDepth] = useState(() => defaults(units).depth);
  const [height, setHeight] = useState(() => defaults(units).height);
  const [featureKind, setFeatureKind] = useState<FeatureKind>("face");
  const [fx, setFx] = useState(() => defaults(units).fx);
  const [fy, setFy] = useState(() => defaults(units).fy);
  const [fw, setFw] = useState(() => defaults(units).fw);
  const [fd, setFd] = useState(() => defaults(units).fd);
  const [fdepth, setFdepth] = useState(() => defaults(units).fdepth);
  const [fheight, setFheight] = useState(() => defaults(units).fheight);
  const photoRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const previousUnits = useRef(units);

  // Switching the machine's unit system rewrites what is on screen rather than
  // silently reinterpreting 60 inches as 60 millimetres.
  useEffect(() => {
    const from = previousUnits.current;
    if (from === units) return;
    previousUnits.current = units;
    const convert = (value: number) => round(lengthIn(units, lengthToMm(from, value)), units);
    setWidth(convert);
    setDepth(convert);
    setHeight(convert);
    setFx(convert);
    setFy(convert);
    setFw(convert);
    setFd(convert);
    setFdepth(convert);
    setFheight(convert);
  }, [units]);

  const unit = lengthUnitLabel(units);
  const step = units === "inch" ? 0.0625 : 0.5;
  const minSize = units === "inch" ? 0.02 : 0.5;

  function update<T>(setter: (value: T) => void, value: T) {
    setter(value);
    onDirty?.();
  }

  function onPhotoChange(file: File | undefined) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  }

  function clearPhoto() {
    setPhoto((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    if (photoRef.current) photoRef.current.value = "";
  }

  function buildFeature(): ParametricFeature {
    const toMm = (value: number) => lengthToMm(units, value);
    if (featureKind === "face") return { kind: "face" };
    if (featureKind === "pocket") {
      return {
        kind: "pocket",
        x: toMm(fx),
        y: toMm(fy),
        widthMm: toMm(fw),
        depthMm: toMm(fd),
        depthBelowTopMm: toMm(fdepth),
      };
    }
    return {
      kind: "boss",
      x: toMm(fx),
      y: toMm(fy),
      widthMm: toMm(fw),
      depthMm: toMm(fd),
      heightAboveTopMm: toMm(fheight),
    };
  }

  function generate() {
    const error = validateSetup();
    if (error) {
      setValidationError(error);
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }

    setValidationError(null);
    const spec: ParametricSpec = {
      partName: partName.trim() || "Guided part",
      stock: {
        widthMm: lengthToMm(units, width),
        depthMm: lengthToMm(units, depth),
        heightMm: lengthToMm(units, height),
      },
      feature: buildFeature(),
    };
    onGenerate(spec);
  }

  function validateSetup(): string | null {
    if (![width, depth, height].every((value) => Number.isFinite(value) && value > 0)) {
      return "Stock width, depth, and height must each be a positive number.";
    }

    if (featureKind === "face") return null;

    if (![fx, fy].every((value) => Number.isFinite(value) && value >= 0)) {
      return "Feature X and Y positions must each be zero or a positive number.";
    }
    if (![fw, fd].every((value) => Number.isFinite(value) && value > 0)) {
      return "Feature width and depth must each be a positive number.";
    }
    if (fx + fw > width || fy + fd > depth) {
      return "The feature must fit completely within the stock width and depth.";
    }
    if (featureKind === "pocket" && (!Number.isFinite(fdepth) || fdepth <= 0 || fdepth >= height)) {
      return "Pocket depth must be positive and less than the stock height.";
    }
    if (featureKind === "boss" && (!Number.isFinite(fheight) || fheight <= 0)) {
      return "Boss height must be a positive number.";
    }

    return null;
  }

  return (
    <section className="guided-setup" aria-label="Guided setup">
      <div className="guided-block">
        <p className="guided-label">1. Reference photo</p>
        <div className="guided-photo">
          {photo ? (
            <div className="photo-preview">
              <img src={photo} alt="Print reference" width={640} height={480} />
              <button type="button" className="btn small" onClick={clearPhoto}>
                Remove photo
              </button>
            </div>
          ) : (
            <button type="button" className="btn" onClick={() => photoRef.current?.click()}>
              Take / attach photo
            </button>
          )}
          <p className="field-help">
            Preview only in this build. Print reading is next; the dimensions below drive the current toolpath.
          </p>
          <input
            ref={photoRef}
            className="sr"
            type="file"
            name="referencePhoto"
            aria-label="Reference photo"
            accept="image/*"
            capture="environment"
            autoComplete="off"
            onChange={(e) => onPhotoChange(e.target.files?.[0])}
          />
        </div>
      </div>

      <div className="guided-block">
        <p className="guided-label">2. Feature</p>
        <div className="seg">
          {(Object.keys(FEATURE_LABELS) as FeatureKind[]).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={k === featureKind}
              className={k === featureKind ? "on" : ""}
              onClick={() => update(setFeatureKind, k)}
            >
              {FEATURE_LABELS[k]}
            </button>
          ))}
        </div>
      </div>

      <div className="guided-block">
        <p className="guided-label">3. Stock geometry ({unit})</p>
        <div className="guided-grid">
          <NumberField name="stockWidthMm" label="Width" value={width} onChange={(v) => update(setWidth, v)} min={minSize} step={step} />
          <NumberField name="stockDepthMm" label="Depth" value={depth} onChange={(v) => update(setDepth, v)} min={minSize} step={step} />
          <NumberField name="stockHeightMm" label="Base height" value={height} onChange={(v) => update(setHeight, v)} min={minSize} step={step} />
        </div>
      </div>

      {featureKind !== "face" ? (
        <div className="guided-block">
          <p className="guided-label">
            4. {featureKind === "pocket" ? "Pocket" : "Boss"} position &amp; size ({unit})
          </p>
          <div className="guided-grid">
            <NumberField name="featureX" label="X" value={fx} onChange={(v) => update(setFx, v)} min={0} step={step} />
            <NumberField name="featureY" label="Y" value={fy} onChange={(v) => update(setFy, v)} min={0} step={step} />
            <NumberField name="featureWidthMm" label="Width" value={fw} onChange={(v) => update(setFw, v)} min={minSize} step={step} />
            <NumberField name="featureDepthMm" label="Depth" value={fd} onChange={(v) => update(setFd, v)} min={minSize} step={step} />
            {featureKind === "pocket" ? (
              <NumberField
                name="pocketDepthBelowTopMm"
                label="Depth below top"
                value={fdepth}
                onChange={(v) => update(setFdepth, v)}
                min={minSize}
                step={step}
              />
            ) : (
              <NumberField
                name="bossHeightAboveTopMm"
                label="Height above top"
                value={fheight}
                onChange={(v) => update(setFheight, v)}
                min={minSize}
                step={step}
              />
            )}
          </div>
        </div>
      ) : null}

      <div className="guided-block">
        <label className="guided-field">
          Part name
        <input
          type="text"
          name="partName"
          className="guided-name"
          autoComplete="off"
          value={partName}
          onChange={(e) => update(setPartName, e.target.value)}
        />
        </label>
      </div>

      {validationError ? (
        <p className="form-error" ref={errorRef} role="alert" tabIndex={-1}>
          {validationError}
        </p>
      ) : null}

      <button type="button" className="btn primary" onClick={generate} disabled={disabled}>
        Generate proof program
      </button>
    </section>
  );
}

/** Starting dimensions, in whichever units the operator works in. */
function defaults(units: UnitSystem) {
  if (units === "inch") {
    return { width: 2.5, depth: 1.5, height: 0.5, fx: 0.625, fy: 0.375, fw: 1.25, fd: 0.75, fdepth: 0.15, fheight: 0.25 };
  }
  return { width: 60, depth: 40, height: 12, fx: 15, fy: 10, fw: 30, fd: 20, fdepth: 4, fheight: 6 };
}

function round(value: number, units: UnitSystem): number {
  const places = units === "inch" ? 4 : 2;
  return Math.round(value * 10 ** places) / 10 ** places;
}

function NumberField({
  name,
  label,
  value,
  onChange,
  min,
  step = 0.5,
}: {
  name: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  step?: number;
}) {
  return (
    <label className="guided-field">
      {label}
      <input
        type="number"
        name={name}
        inputMode="decimal"
        autoComplete="off"
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
