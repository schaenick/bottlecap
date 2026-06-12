import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bottlecap</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.headerBg,
    paddingTop: theme.spacing.top,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: "200",
    color: theme.colors.card,
    letterSpacing: 2,
  },
});
