import NewConvertCard from "@/components/NewConvertCard";
import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";

// FÄRGSCHEMA FÖR WEIGHTTABBEN
const weight_colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "#3A6770",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#28464B",
  buttonActiveColor: "#28464B",
  buttonActiveBorderColor: "#28464B",
};

export default function Length() {
  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState("cups");
  const [toUnit, setToUnit] = useState("dl");

  // DERIVED STATE: Räknas ut vid varje knapptryck/ändring
  const convertedValue = convertUnits(amount, "weight", fromUnit, toUnit);

  const units = Object.keys(UNIT_RATIOS.weight).map((key) => ({
    label: key,
    value: key,
  }));

  return (
    <ImageBackground
      source={require("../../assets/images/bakgrund2.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="weight" colors={weight_colors} />
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
