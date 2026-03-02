import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type NewResultatCardProps = {
  amount: string; // Det användaren skrivit in (t.ex. "2")
  fromUnit: string; // Enheten användaren valt (t.ex. "cups")
  category: keyof typeof UNIT_RATIOS; // "baking", "weight" eller "length"
  units: string[]; // Alla enheter som ska listas (t.ex. ["dl", "ml", "oz"])
  backgroundColor?: string;
  textColor?: string;
};

export default function NewResultatCard({
  amount,
  fromUnit,
  category,
  units,
  backgroundColor,
  textColor,
}: NewResultatCardProps) {
  return (
    <View style={[styles.resultContainer, { backgroundColor }]}>
      {/* Header */}
      <View style={styles.resultRow}>
        <Text style={styles.headerText}>Unit</Text>
        <Text style={styles.headerText}>Value</Text>
      </View>

      {/* Rader baserat på inskickade units */}
      {units.map((toUnit) => {
        // Räkna ut värdet för just denna rad
        const convertedValue = convertUnits(amount, category, fromUnit, toUnit);

        return (
          <View key={toUnit} style={styles.resultRow}>
            <Text style={styles.unitText}>{toUnit}</Text>
            <Text style={styles.valText}>{convertedValue || "0"}</Text>
          </View>
        );
      })}
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
