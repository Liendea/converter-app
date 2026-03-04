import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpandButton from "./ExpandButton";
import Header from "./Header";
import MainResult from "./MainResults";
import OtherResults from "./OtherResults";
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
      <Header />
      {/* MAIN RESULT */}
      <MainResult toUnit={toUnit} mainResult={mainResult} />
      {/* OTHER RESULT */}
      {isExpanded && (
        <OtherResults
          amount={amount}
          category={category}
          fromUnit={fromUnit}
          toUnit={toUnit}
          cleanedUnits={cleanedUnits}
        />
      )}
      {/* SHOW MORE BUTTON */}
      <Spacer height={10} />
      <ExpandButton onPress={handlePress} isExpanded={isExpanded} />
    </View>
  );
}

// STYLING
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
});
