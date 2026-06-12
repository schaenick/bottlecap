import { SvgXml } from "react-native-svg";
import { View, StyleSheet } from "react-native";
import { getGradientStops } from "../utils/colorEffects";

interface ColorSwatchProps {
  color: string;
  brand: string;
  name: string;
  width?: number;
  height?: number;
}

export default function ColorSwatch({
  color,
  brand,
  name,
  width = 300,
  height = 120,
}: ColorSwatchProps) {
  const stops = getGradientStops(color, brand, name);

  const overlay = stops
    ? `<defs>
         <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient>
       </defs>
       <rect x="0" y="0" width="100" height="100" fill="url(#grad)" />`
    : "";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect x="0" y="0" width="100" height="100" fill="${color}" />
    ${overlay}
  </svg>`;

  return (
    <View style={[styles.wrapper, { width, height }]}>
      <SvgXml xml={svg} width={width} height={height} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: "hidden",
  },
});
