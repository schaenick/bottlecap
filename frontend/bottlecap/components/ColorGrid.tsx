import { Color } from "../types/color";
import ColorCard from "./ColorCard";

import { FlatList, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
export const cardWidth = screenWidth / 3 - 12;

interface ColorGridProps {
  colors: Color[];
  onToggleOwned: (id: number) => void;
  onToggleReorder: (id: number) => void;
}

export default function ColorGrid({
  colors,
  onToggleOwned,
  onToggleReorder,
}: ColorGridProps) {
  return (
    <FlatList
      numColumns={3}
      data={colors}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ColorCard
          color={item}
          onToggleOwned={() => onToggleOwned(item.id)}
          onToggleReorder={() => onToggleReorder(item.id)}
        />
      )}
    />
  );
}
