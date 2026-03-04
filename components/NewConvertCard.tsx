import Dropdowns from "@/components/Dropdowns";
import NewResultatCard from "@/components/NewResultCard";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Spacer from "./Spacer";

type NewConvertCardProps = {
  category: keyof typeof UNIT_RATIOS; // "baking", "weight" eller "length"
  colors: {
    backgroundColor: string;
    resultColor: string;
    buttonColor: string;
    buttonBorderColor: string;
    buttonActiveColor: string;
    buttonActiveBorderColor: string;
  };
};
export default function NewConvertCard({
  category,
  colors,
}: NewConvertCardProps) {
  const unitData = UNIT_RATIOS[category];
  const unitKeys = Object.keys(unitData);

  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState(unitKeys[0] || "");
  const [toUnit, setToUnit] = useState(unitKeys[1] || "");

  // Skapa listan för dropdownen
  const dropdownUnits = unitKeys.map((key) => ({
    label: key,
    value: key,
  }));

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundColor }]}
    >
      <Text style={styles.label}>Convert:</Text>
      <Spacer height={20} />
      <Dropdowns
        units={dropdownUnits}
        colors={colors}
        fromUnit={fromUnit}
        toUnit={toUnit}
        onFromChange={setFromUnit}
        onToChange={setToUnit}
      />
      <Spacer height={20} />
      <TextInput
        style={[styles.input, { borderColor: colors.buttonBorderColor }]}
        placeholder={`Enter units of ${fromUnit}...`}
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor="#0000008a"
      />
      <Spacer height={20} />
      <NewResultatCard
        amount={amount}
        fromUnit={fromUnit}
        toUnit={toUnit}
        category={category}
        units={unitKeys}
        backgroundColor={colors.resultColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 20,
    height: "auto",
  },
  label: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  input: {
    width: "100%",
    textAlign: "center",
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
