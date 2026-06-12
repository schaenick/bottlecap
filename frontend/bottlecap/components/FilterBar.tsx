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
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.chip, filter === "owned" && styles.chipActive]}
        onPress={() => onFilterChange("owned")}
      >
        <Text
          style={[styles.chipText, filter === "owned" && styles.chipTextActive]}
        >
          Im Besitz
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.chip, filter === "reorder" && styles.chipActive]}
        onPress={() => onFilterChange("reorder")}
      >
        <Text
          style={[
            styles.chipText,
            filter === "reorder" && styles.chipTextActive,
          ]}
        >
          Nachkaufen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.chip, brand === "Vallejo" && styles.chipActive]}
        onPress={() => onBrandChange("Vallejo")}
      >
        <Text
          style={[
            styles.chipText,
            brand === "Vallejo" && styles.chipTextActive,
          ]}
        >
          Vallejo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.chip, brand === "The Army Painter" && styles.chipActive]}
        onPress={() => onBrandChange("The Army Painter")}
      >
        <Text
          style={[
            styles.chipText,
            brand === "The Army Painter" && styles.chipTextActive,
          ]}
        >
          Army Painter
        </Text>
      </TouchableOpacity>

      {(filter !== "all" || brand !== "all") && (
        <TouchableOpacity
          onPress={() => {
            onFilterChange("all");
            onBrandChange("all");
          }}
          style={styles.clearChip}
        >
          <Text style={styles.clearText}>zurücksetzen</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  chip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.chip,
  },
  chipActive: {
    backgroundColor: theme.colors.accentLilac,
  },
  chipText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
  },
  chipTextActive: {
    color: "#ffffff",
    fontWeight: "600",
  },
  clearChip: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.sm,
    justifyContent: "center",
  },
  clearText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
    textDecorationLine: "underline",
  },
});
