import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../theme/theme";

export default function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[styles.header, { paddingTop: insets.top + theme.spacing.xl }]}
    >
      <View style={styles.logoRow}>
        <View style={styles.dot} />
        <Text style={styles.title}>
          bottle<Text style={styles.titleAccent}>cap</Text>
        </Text>
      </View>
      <Text style={styles.subtitle}>paint tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.accentLilac,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    opacity: 0.9,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 1,
  },
  titleAccent: {
    fontWeight: "300",
  },
  subtitle: {
    fontSize: theme.fontSize.small,
    color: "#ffffff",
    opacity: 0.8,
    letterSpacing: 3,
    marginTop: 2,
    marginLeft: 24,
  },
});
