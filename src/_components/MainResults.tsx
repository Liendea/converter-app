import { StyleSheet, Text, View } from "react-native";

type MainResultProps = {
  toUnit: string;
  mainResult: string | null;
};
export default function MainResult({ toUnit, mainResult }: MainResultProps) {
  return (
    <View>
      <View style={styles.resultRow}>
        <Text style={styles.unitText}>{toUnit}</Text>
        <Text style={styles.valText}>{mainResult || "0"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  unitText: {
    fontSize: 16,
    color: "#fff",
    width: "50%",
  },
  valText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
