import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import NewConvertCard from "@/components/NewConvertCard";
import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";

// FÄRGSCHEMA FÖR BAKINGTABBEN
const baking_colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "rgba(147, 107, 137, 0.8)",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#936B89",
  buttonActiveColor: "#936B89",
  buttonActiveBorderColor: "#936B89",
};

export default function BakingScreen() {
  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState("cups");
  const [toUnit, setToUnit] = useState("dl");

  // DERIVED STATE: Räknas ut vid varje knapptryck/ändring
  const convertedValue = convertUnits(amount, "baking", fromUnit, toUnit);

  const units = Object.keys(UNIT_RATIOS.baking).map((key) => ({
    label: key,
    value: key,
  }));

  return (
    <ImageBackground
      source={require("../../assets/images/bakgrund.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="length" colors={baking_colors} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Bakgrund
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
