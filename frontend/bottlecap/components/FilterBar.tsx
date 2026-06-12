import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface FilterBarProps {
  onFilterChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  filter: string;
  brand: string;
}

export default function FilterBar({
  onBrandChange,
  onFilterChange,
  filter,
  brand,
}: FilterBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.chip, filter === "all" && styles.chipActive]}
        onPress={() => onFilterChange("all")}
      >
        <Text style={styles.chipText}>Alle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.chip, filter === "owned" && styles.chipActive]}
        onPress={() => onFilterChange("owned")}
      >
        <Text style={styles.chipText}>Owned</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.chip, filter === "reorder" && styles.chipActive]}
        onPress={() => onFilterChange("reorder")}
      >
        <Text style={styles.chipText}>Reorder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.chip, brand === "Vallejo" && styles.chipActive]}
        onPress={() => onBrandChange("Vallejo")}
      >
        <Text style={styles.chipText}>Vallejo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.chip, brand === "The Army Painter" && styles.chipActive]}
        onPress={() => onBrandChange("The Army Painter")}
      >
        <Text style={styles.chipText}>The Army Painter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onBrandChange("all");
          onFilterChange("all");
        }}
      >
        <Text>Filter löschen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    gap: 6,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
  },
  chipActive: {
    backgroundColor: "#E0B7F4",
  },
  chipText: {
    fontSize: 13,
    color: "#555",
  },
});
