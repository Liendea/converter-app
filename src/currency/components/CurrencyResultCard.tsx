import { ActivityIndicator, StyleSheet, View } from "react-native";
import Header from "../../_components/Header";
import MainResult from "../../_components/MainResults";

type CurrencyResultCardProps = {
  toUnit: string;
  result: string | null;
  loading: boolean;
};

export default function CurrencyResultCard({
  toUnit,
  result,
  loading,
}: CurrencyResultCardProps) {
  return (
    <View style={[styles.resultContainer]}>
      {/* Header */}
      <Header />
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <MainResult toUnit={toUnit} mainResult={result} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    borderRadius: 15,
    padding: 20,
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#BC9B47",
  },
  resultRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
  },
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
    opacity: 0.7,
  },
  unitText: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff",
  },
});
