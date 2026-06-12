export function shade(hex: string, factor: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const nr = Math.min(255, Math.round(r * factor));
  const ng = Math.min(255, Math.round(g * factor));
  const nb = Math.min(255, Math.round(b * factor));

  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(nr)}${toHex(ng)}${toHex(nb)}`;
}

export function getGradientStops(
  color: string,
  brand: string,
  name: string,
): string {
  const b = brand.toLowerCase();
  const n = name.toLowerCase();

  let dark = shade(color, 0.4);
  let light = shade(color, 3);

  if (n.includes("black")) {
    dark = "#000000";
    light = "#ffffff";
  }

  if (b.includes("metal") || n.includes("medium")) {
    return `
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="50%" stop-color="white" stop-opacity="0.9" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />`;
  } else if (b.includes("wash")) {
    return `
      <stop offset="0%" stop-color="${light}" stop-opacity="0" />
      <stop offset="100%" stop-color="${dark}" stop-opacity="0.5" />`;
  } else if (b.includes("speed") || b.includes("xpress")) {
    return `
      <stop offset="0%" stop-color="${light}" stop-opacity="0.4" />
      <stop offset="35%" stop-color="${light}" stop-opacity="0" />
      <stop offset="65%" stop-color="${dark}" stop-opacity="0" />
      <stop offset="100%" stop-color="${dark}" stop-opacity="0.6" />`;
  }

  return "";
}
