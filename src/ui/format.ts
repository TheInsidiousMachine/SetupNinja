export function mm(n: number, digits = 1): string {
  return `${n.toFixed(digits)} mm`;
}

export function rpm(n: number): string {
  return `${Math.round(n)} rpm`;
}

export function feed(n: number): string {
  return `${Math.round(n)} mm/min`;
}

export function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

export function deg(rad: number): string {
  return `${Math.round((rad * 180) / Math.PI)}°`;
}
