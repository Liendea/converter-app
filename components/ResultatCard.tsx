import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ResultatCardProps = {
  results: { [key: string]: string };
  units: string[];
  backgroundColor?: string; // Valfri, annars används standard
  accentColor?: string; // För rubriker/linjer
  textColor?: string;
};

export default function ResultatCard({
  results,
  units,
  backgroundColor = "rgba(147, 107, 137, 0.8)",
  accentColor = "#936b89c4",
  textColor = "#fff",
}: ResultatCardProps) {
  return (
    <View style={[styles.resultContainer, { backgroundColor }]}>
      {/* Header */}
      <View style={styles.resultRow}>
        <Text style={styles.headerText}>Unit</Text>
        <Text style={styles.headerText}>Value</Text>
      </View>

      {/* Rader baserat på inskickade units */}
      {units.map((unit) => (
        <View key={unit} style={styles.resultRow}>
          <Text style={styles.unitText}>{unit}</Text>
          <Text style={styles.valText}>
            {results[unit] ? results[unit] : "-"}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 30,
    borderRadius: 15,
    padding: 20,
    width: "100%",

    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#fff",
    opacity: 0.7, // Gör rubriken lite mer diskret än värdena
  },
  unitText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#fff",
  },
  valText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
