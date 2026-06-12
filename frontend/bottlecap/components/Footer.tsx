import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Linking } from "react-native";

interface FooterProps {
  ownedCount: number;
}

export default function Footer({ ownedCount }: FooterProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.footer,
        { paddingBottom: insets.bottom + theme.spacing.lg },
      ]}
    >
      <Text style={styles.line}>
        Rick und Nicki haben schon {ownedCount} Farben gesammelt!
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://klingfer.de")}>
        <Text style={styles.link}>klingfer.de</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  line: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
    textAlign: "center",
  },
  link: {
    fontSize: theme.fontSize.small,
    color: theme.colors.accentLilac,
    textAlign: "center",
  },
});
