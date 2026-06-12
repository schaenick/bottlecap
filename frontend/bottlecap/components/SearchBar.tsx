import { StyleSheet, TextInput, View } from "react-native";

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
    margin: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
});
