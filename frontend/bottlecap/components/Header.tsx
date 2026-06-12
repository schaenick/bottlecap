import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bottlecap</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#333333",
    paddingTop: 52,
    paddingBottom: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "200",
    color: "#ffffff",
    letterSpacing: 2,
  },
});
