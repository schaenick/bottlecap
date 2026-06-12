import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { theme } from "../theme/theme";

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
    paddingHorizontal: theme.spacing.sm,
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  chip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.chip,
  },
  chipActive: {
    backgroundColor: theme.colors.chipActive,
  },
  chipText: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
  },
});
