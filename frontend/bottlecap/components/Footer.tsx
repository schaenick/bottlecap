import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { theme } from "../theme/theme";

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
        <MaskedView maskElement={<Text style={styles.link}>klingfer.de</Text>}>
          <LinearGradient
            colors={["#E0B7F4", "#F2B5E1", "#BFDEF3", "#B9E9E9", "#FFC9B4"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.link, { opacity: 0 }]}>klingfer.de</Text>
          </LinearGradient>
        </MaskedView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  line: {
    fontSize: theme.fontSize.small,
    color: theme.colors.textMuted,
    textAlign: "center",
  },
  link: {
    fontSize: theme.fontSize.large,
    fontWeight: "700",
    textAlign: "center",
  },
});
