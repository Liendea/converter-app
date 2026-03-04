import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerText}>Unit</Text>
      <Text style={styles.headerText}>Value</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#fff",
    opacity: 0.7, // Gör rubriken lite mer diskret än värdena
  },
});
