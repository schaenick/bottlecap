import { Color } from "../types/color";
import BottleIcon from "./BottleIcon";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { theme } from "../theme/theme";
import { memo } from "react";

interface ColorCardProps {
  color: Color;
  cardWidth: number;
  onToggleOwned: () => void;
  onToggleReorder: () => void;
}

function ColorCard({
  color,
  cardWidth,
  onToggleOwned,
  onToggleReorder,
}: ColorCardProps) {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
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
export default memo(ColorCard);

const styles = StyleSheet.create({
  card: {
    margin: theme.spacing.xs,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 200,
  },

  brandtext: {
    fontSize: theme.fontSize.tiny,
    fontWeight: "800",
    color: theme.colors.text,
    textAlign: "center",
    minHeight: 22,
  },
  arttext: {
    fontSize: theme.fontSize.small,
    fontWeight: "300",
    color: theme.colors.text,
    textAlign: "center",
    minHeight: 14,
  },
  nametext: {
    fontSize: theme.fontSize.large,
    color: theme.colors.text,
    textAlign: "center",
    minHeight: 40,
  },

  chip: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.chip,
  },
  chipText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
  },
});
