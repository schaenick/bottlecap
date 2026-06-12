import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../theme/theme";

interface SearchBarProps {
  onChangeText: (value: string) => void;
  value: string;
}

export default function SearchBar({ onChangeText, value }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Suchen..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.chip,
    borderRadius: theme.radius.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: theme.fontSize.large,
    color: theme.colors.text,
  },
});
