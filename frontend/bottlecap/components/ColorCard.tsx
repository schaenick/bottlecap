import { Color } from "../types/color";
import BottleIcon from "./BottleIcon";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ColorCardProps {
  color: Color;
  onToggleOwned: () => void;
  onToggleReorder: () => void;
}

export default function ColorCard({
  color,
  onToggleOwned,
  onToggleReorder,
}: ColorCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.brandtext} numberOfLines={2}>
        {color.brand}
      </Text>
      <Text style={styles.arttext} numberOfLines={1}>
        {color.article_number}
      </Text>
      <BottleIcon color={color.hex ?? "#cccccc"} />
      <Text style={styles.nametext} numberOfLines={2}>
        {color.name}
      </Text>
      {color.owned ? (
        <TouchableOpacity style={styles.chip} onPress={onToggleReorder}>
          <Text style={styles.chipText}>
            {color.reorder ? "Reordered?" : "Reorder"}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.chip} onPress={onToggleOwned}>
          <Text style={styles.chipText}>Owned</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 4,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 200,
  },
  container: {
    margin: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  brandtext: {
    fontSize: 8,
    fontWeight: "800",
    color: "#333",
    textAlign: "center",
    minHeight: 22,
  },
  arttext: {
    fontSize: 10,
    fontWeight: "300",
    color: "#333",
    textAlign: "center",
    minHeight: 14,
  },
  nametext: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    minHeight: 40,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
  },
  chipText: {
    fontSize: 10,
    color: "#555",
  },
});
