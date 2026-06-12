import { SvgXml } from "react-native-svg";
import { theme } from "../theme/theme";
import { View, Image, StyleSheet } from "react-native";

interface BottleIconProps {
  color: string;
  brand: string;
  name: string;
}

function shade(hex: string, factor: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const nr = Math.min(255, Math.round(r * factor));
  const ng = Math.min(255, Math.round(g * factor));
  const nb = Math.min(255, Math.round(b * factor));

  // zurück zu Hex
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(nr)}${toHex(ng)}${toHex(nb)}`;
}

const svg_path =
  "M4870 14950 c-94 -9 -159 -35 -165 -64 -2 -11 -16 -142 -30 -291 -42 -434 -93 -706 -167 -883 -108 -261 -293 -448 -618 -627 -100 -55 -126 -77 -139 -119 -5 -17 -15 -200 -21 -406 -6 -206 -18 -552 -26 -769 -8 -217 -14 -445 -14 -506 0 -61 -4 -115 -10 -121 -7 -7 -14 -195 -10 -306 0 -16 11 -18 94 -18 52 0 97 -4 100 -9 6 -9 -55 -26 -137 -37 -26 -3 -51 -12 -55 -19 -4 -8 -5 -71 -2 -142 l5 -128 108 0 107 1 0 -32 0 -32 -117 -6 c-65 -4 -143 -12 -173 -19 l-55 -12 -3 -90 c-3 -109 2 -115 98 -115 37 0 101 -3 143 -6 l77 -7 0 -46 c0 -77 -35 -107 -184 -157 -246 -84 -450 -298 -485 -511 -9 -50 -11 -1204 -9 -4393 3 -4159 4 -4327 21 -4372 25 -65 87 -131 144 -156 164 -70 691 -110 1564 -119 873 -9 1644 27 1884 88 98 25 172 70 211 129 58 87 54 -229 54 4465 0 4783 6 4379 -66 4515 -86 165 -244 288 -481 375 -109 40 -123 54 -123 126 0 32 1 59 3 60 1 0 69 4 150 7 114 6 150 11 157 22 5 8 10 48 10 88 0 111 -1 112 -255 128 -56 4 -103 12 -107 18 -4 6 -8 22 -8 35 l0 23 99 -7 c149 -11 141 -18 141 134 0 96 -3 131 -14 140 -7 6 -55 17 -106 24 -134 17 -131 36 7 39 l108 3 0 152 c0 108 -4 156 -12 165 -9 8 -13 48 -13 123 0 60 -5 211 -10 335 -5 124 -16 470 -25 770 -9 300 -20 561 -25 581 -12 44 -42 68 -175 138 -277 146 -447 305 -553 517 -40 79 -94 236 -120 349 -30 128 -78 477 -97 700 -8 105 -18 200 -20 211 -11 49 -159 75 -420 73 -88 -1 -194 -5 -235 -9z";

const bottleSvg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1024pt" height="1536pt" viewBox="0 0 1024 1536">
<g transform="translate(0,1536) scale(0.1,-0.1)" fill="#000000" stroke="#919191" stroke-width="100">
<path d="${svg_path}"/>
</g>
</svg>`;

export default function BottleIcon({ color, brand, name }: BottleIconProps) {
  const b = brand.toLowerCase();
  const n = name.toLowerCase();

  let dark = shade(color, 0.4);
  let light = shade(color, 3);

  if (name.toLowerCase().includes("black")) {
    dark = "#000000";
    light = "#ffffff";
  }

  let stops = "";
  if (b.includes("metal") || n.includes("medium")) {
    stops = `
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="50%" stop-color="white" stop-opacity="0.9" />
      <stop offset="100%" stop-color="white" stop-opacity="0" />`;
  } else if (b.includes("wash")) {
    stops = `
      <stop offset="0%" stop-color="${light}" stop-opacity="0" />
      <stop offset="100%" stop-color="${dark}" stop-opacity="0.5" />`;
  } else if (b.includes("speed") || b.includes("xpress")) {
    stops = `
      <stop offset="0%" stop-color="${light}" stop-opacity="0.4" />
      <stop offset="35%" stop-color="${light}" stop-opacity="0" />
      <stop offset="65%" stop-color="${dark}" stop-opacity="0" />
      <stop offset="100%" stop-color="${dark}" stop-opacity="0.6" />`;
  }

  const overlay = stops
    ? `<defs>
         <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient>
       </defs>
       <g transform="translate(0,1536) scale(0.1,-0.1)" fill="url(#grad)" stroke="none">
         <path d="${svg_path}"/>
       </g>`
    : "";

  const isInk = b.includes("ink");
  const inkDrop = isInk
    ? `<path d="M512 720 
         C 512 720, 450 820, 450 880 
         C 450 935, 478 975, 512 975 
         C 546 975, 574 935, 574 880 
         C 574 820, 512 720, 512 720 Z"         
         fill="${theme.colors.card}"
         stroke="#919191" 
         stroke-width="8" />`
    : "";

  const svg = bottleSvg
    .replace('fill="#000000"', `fill="${color}"`)
    .replace("</svg>", `${overlay}${inkDrop}</svg>`);

  return <SvgXml xml={svg} width={60} height={100} />;
}
