import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type OtherResultsProps = {
  amount: string; // Det användaren skrivit in (t.ex. "2")
  fromUnit: string; // Enheten användaren valt (t.ex. "cups")
  toUnit: string; // Enheten som ska konverteras till (t.ex. "dl")
  category: keyof typeof UNIT_RATIOS; // "baking", "weight" eller "length"
  cleanedUnits: string[];
};

export default function OtherResults({
  amount,
  fromUnit,
  category,
  cleanedUnits,
}: OtherResultsProps) {
  return (
    <ScrollView>
      {/* Övriga units resultat */}
      {cleanedUnits.map((toUnit) => {
        // Räkna ut värdet
        const convertedValue = convertUnits(amount, category, fromUnit, toUnit);
        return (
          <View key={toUnit} style={[styles.resultRow, styles.expandedResults]}>
            <Text style={styles.unitText}>{toUnit}</Text>
            <Text style={styles.valText}>{convertedValue || "0"}</Text>
          </View>
        );
      })}
    </ScrollView>
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
  expandedResults: {
    opacity: 0.5,
    borderTopWidth: 0,
    borderTopColor: "#eee",
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
