import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ExpandButton from "./ExpandButton";
import Spacer from "./Spacer";

type NewResultatCardProps = {
  amount: string; // Det användaren skrivit in (t.ex. "2")
  fromUnit: string; // Enheten användaren valt (t.ex. "cups")
  toUnit: string; // Enheten som ska konverteras till (t.ex. "dl")
  category: keyof typeof UNIT_RATIOS; // "baking", "weight" eller "length"
  units: string[]; // Alla enheter som ska listas (t.ex. ["dl", "ml", "oz"])
  backgroundColor?: string;
  textColor?: string;
};

export default function NewResultatCard({
  amount,
  fromUnit,
  toUnit,
  category,
  units,
  backgroundColor,
  textColor,
}: NewResultatCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 1. Räkna ut det primära värdet (det användaren valt i dropdown nr 2)
  const mainResult = convertUnits(amount, category, fromUnit, toUnit);

  // 2. Filtrera bort den valda enheten från listan med "övriga"
  const otherUnits = units.filter((u) => u !== toUnit);
  const cleanedUnits = otherUnits.filter((u) => u !== fromUnit);

  function handlePress() {
    setIsExpanded(!isExpanded);
  }
  return (
    <View style={[styles.resultContainer, { backgroundColor }]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Unit</Text>
        <Text style={styles.headerText}>Value</Text>
      </View>
      {/* MAIN RESULTAT */}
      <View>
        <View style={styles.resultRow}>
          <Text style={styles.unitText}>{toUnit}</Text>
          <Text style={styles.valText}>{mainResult || "0"}</Text>
        </View>
      </View>
      {isExpanded && (
        <ScrollView>
          {/* Övriga units resultat */}
          {cleanedUnits.map((toUnit) => {
            // Räkna ut värdet
            const convertedValue = convertUnits(
              amount,
              category,
              fromUnit,
              toUnit,
            );
            return (
              <View
                key={toUnit}
                style={[styles.resultRow, styles.expandedResults]}
              >
                <Text style={styles.unitText}>{toUnit}</Text>
                <Text style={styles.valText}>{convertedValue || "0"}</Text>
              </View>
            );
          })}
        </ScrollView>
      )}
      {/* Show more knapp */}
      <Spacer height={10} />
      <ExpandButton onPress={handlePress} isExpanded={isExpanded} />
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
    height: "auto",
    maxHeight: "65%",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  expandedResults: {
    opacity: 0.5,
    borderTopWidth: 0,
    borderTopColor: "#eee",
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
