import { useRef, useState } from "react";
import type { ParametricFeature, ParametricSpec } from "../kernel/types";

export type FeatureKind = ParametricFeature["kind"];

type Props = {
  onGenerate: (spec: ParametricSpec) => void;
  onDirty?: () => void;
  disabled?: boolean;
};

const FEATURE_LABELS: Record<FeatureKind, string> = {
  face: "Face only",
  pocket: "Pocket",
  boss: "Boss / step",
};

export function GuidedSetup({ onGenerate, onDirty, disabled }: Props) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [partName, setPartName] = useState("Guided part");
  const [widthMm, setWidthMm] = useState(60);
  const [depthMm, setDepthMm] = useState(40);
  const [heightMm, setHeightMm] = useState(12);
  const [featureKind, setFeatureKind] = useState<FeatureKind>("face");
  const [fx, setFx] = useState(15);
  const [fy, setFy] = useState(10);
  const [fw, setFw] = useState(30);
  const [fd, setFd] = useState(20);
  const [fdepth, setFdepth] = useState(4);
  const [fheight, setFheight] = useState(6);
  const photoRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

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
    if (featureKind === "face") return { kind: "face" };
    if (featureKind === "pocket") {
      return { kind: "pocket", x: fx, y: fy, widthMm: fw, depthMm: fd, depthBelowTopMm: fdepth };
    }
    return { kind: "boss", x: fx, y: fy, widthMm: fw, depthMm: fd, heightAboveTopMm: fheight };
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
      stock: { widthMm, depthMm, heightMm },
      feature: buildFeature(),
    };
    onGenerate(spec);
  }

  function validateSetup(): string | null {
    if (![widthMm, depthMm, heightMm].every((value) => Number.isFinite(value) && value > 0)) {
      return "Stock width, depth, and height must each be a positive number.";
    }

    if (featureKind === "face") return null;

    if (![fx, fy].every((value) => Number.isFinite(value) && value >= 0)) {
      return "Feature X and Y positions must each be zero or a positive number.";
    }
    if (![fw, fd].every((value) => Number.isFinite(value) && value > 0)) {
      return "Feature width and depth must each be a positive number.";
    }
    if (fx + fw > widthMm || fy + fd > depthMm) {
      return "The feature must fit completely within the stock width and depth.";
    }
    if (featureKind === "pocket" && (!Number.isFinite(fdepth) || fdepth <= 0 || fdepth >= heightMm)) {
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
        <p className="guided-label">1. Reference photo (optional; preview only, not saved or read)</p>
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
        <p className="guided-label">3. Target base geometry (mm)</p>
        <div className="guided-grid">
          <NumberField name="stockWidthMm" label="Width" value={widthMm} onChange={(v) => update(setWidthMm, v)} min={1} />
          <NumberField name="stockDepthMm" label="Depth" value={depthMm} onChange={(v) => update(setDepthMm, v)} min={1} />
          <NumberField name="stockHeightMm" label="Base height" value={heightMm} onChange={(v) => update(setHeightMm, v)} min={1} />
        </div>
      </div>

      {featureKind !== "face" ? (
        <div className="guided-block">
          <p className="guided-label">
            4. {featureKind === "pocket" ? "Pocket" : "Boss"} position &amp; size (mm)
          </p>
          <div className="guided-grid">
            <NumberField name="featureX" label="X" value={fx} onChange={(v) => update(setFx, v)} min={0} />
            <NumberField name="featureY" label="Y" value={fy} onChange={(v) => update(setFy, v)} min={0} />
            <NumberField name="featureWidthMm" label="Width" value={fw} onChange={(v) => update(setFw, v)} min={0.5} />
            <NumberField name="featureDepthMm" label="Depth" value={fd} onChange={(v) => update(setFd, v)} min={0.5} />
            {featureKind === "pocket" ? (
              <NumberField
                name="pocketDepthBelowTopMm"
                label="Depth below top"
                value={fdepth}
                onChange={(v) => update(setFdepth, v)}
                min={0.5}
              />
            ) : (
              <NumberField
                name="bossHeightAboveTopMm"
                label="Height above top"
                value={fheight}
                onChange={(v) => update(setFheight, v)}
                min={0.5}
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
        Generate from guided setup
      </button>
    </section>
  );
}

function NumberField({
  name,
  label,
  value,
  onChange,
  min,
}: {
  name: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
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
        step={0.5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
