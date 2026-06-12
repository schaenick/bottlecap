import { Color } from "../types/color";
import ColorCard from "./ColorCard";
import Footer from "./Footer";
import { FlatList, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 3 - 12;

interface ColorGridProps {
  colors: Color[];
  ownedCount: number;
  onToggleOwned: (id: number) => void;
  onToggleReorder: (id: number) => void;
}

export default function ColorGrid({
  colors,
  ownedCount,
  onToggleOwned,
  onToggleReorder,
}: ColorGridProps) {
  return (
    <FlatList
      numColumns={3}
      ListFooterComponent={<Footer ownedCount={ownedCount} />}
      data={colors}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ColorCard
          color={item}
          cardWidth={cardWidth}
          onToggleOwned={() => onToggleOwned(item.id)}
          onToggleReorder={() => onToggleReorder(item.id)}
        />
      )}
    />
  );
}
