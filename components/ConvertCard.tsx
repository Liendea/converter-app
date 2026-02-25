import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import ArrowIcon from "@/components/ArrowIcon";
import ResultatCard from "@/components/ResultatCard";
import UnitButton from "@/components/UnitButton";
import { ConversionResults } from "@/utils/conversions";

type ConvertCardProps = {
  unitOne: { label: string; value: string }; // Exempel: {label: "Cups", value: "cups"}
  unitTwo: { label: string; value: string }; // Exempel: {label: "Deciliter", value: "dl"}
  onConvert: (value: number, activeUnit: string) => ConversionResults; // Funktion som tar in värde och enhet, returnerar konverterade resultat
  unitOneList: string[]; // Lista med enheter att visa när unitOne är aktiv
  unitTwoList: string[]; // Lista med enheter att visa när unitTwo är aktiv
  cardColor?: string; // bakgrundfärg för kortet
  resultColor?: string; // färg för resultatkortet
  colors: {
    backgroundColor: string;
    resultColor: string;
    buttonColor: string;
    buttonBorderColor: string;
    buttonActiveColor: string;
    buttonActiveBorderColor: string;
  };
};

export default function ConvertCard({
  unitOne,
  unitTwo,
  onConvert,
  unitOneList,
  unitTwoList,
  colors,
}: ConvertCardProps) {
  const [activeUnit, setActiveUnit] = useState(unitOne.value); // Startar med unitOne som aktiv);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<ConversionResults>({});

  useEffect(() => {
    const sanitizedInput = inputValue.replace(",", ".");
    const num = parseFloat(sanitizedInput);

    if (isNaN(num) || inputValue === "") {
      setResults({});
      return;
    }
    // Här ändrar vi så att vi hanterar både vanliga funktioner och API-anrop
    const calculate = async () => {
      const res = await onConvert(num, activeUnit);
      setResults(res);
    };

    calculate();
  }, [inputValue, activeUnit]);

  const handleUnitChange = (unit: string) => {
    setActiveUnit(unit);
    setInputValue("");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <Text style={styles.label}>Convert:</Text>

      {/* Container for unit buttons */}
      <View style={styles.btnContainer}>
        <UnitButton
          isActive={activeUnit === unitOne.value}
          title={unitOne.label}
          onPress={() => handleUnitChange(unitOne.value)}
          borderColor={colors.buttonBorderColor}
          backgroundColor={colors.buttonColor}
          activeBorderColor={colors.buttonActiveBorderColor}
          activeBackgroundColor={colors.buttonActiveColor}
        />
        {/* Container for arrow */}
        <View
          style={{
            marginHorizontal: 10,
            transform: [
              { rotate: activeUnit === unitOne.value ? "0deg" : "180deg" },
            ],
          }}
        >
          <ArrowIcon />
        </View>

        <UnitButton
          isActive={activeUnit === unitTwo.value}
          title={unitTwo.label}
          onPress={() => handleUnitChange(unitTwo.value)}
          borderColor={colors.buttonBorderColor}
          backgroundColor={colors.buttonColor}
          activeBorderColor={colors.buttonActiveBorderColor}
          activeBackgroundColor={colors.buttonActiveColor}
        />
      </View>

      <TextInput
        style={[styles.input, { borderColor: colors.buttonBorderColor }]}
        placeholder={`Enter units of ${activeUnit}...`}
        keyboardType="decimal-pad"
        value={inputValue}
        onChangeText={setInputValue} // Uppdaterar state direkt
        placeholderTextColor="#000000"
      />

      <ResultatCard
        results={results}
        units={activeUnit === unitOne.value ? unitOneList : unitTwoList}
        backgroundColor={colors.resultColor}
        accentColor="#fff"
        textColor="#fff"
      ></ResultatCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // Se till att den tar upp bredden
    maxWidth: 400, // Valfritt: hindrar appen från att bli för bred på stora skärmar
    padding: 20,
    borderRadius: 20,
  },
  label: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "400",
  },
  btnContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
