import NewConvertCard from "@/components/NewConvertCard";
import { convertUnits } from "@/utils/Convertunits";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";

// FÄRGSCHEMA FÖR LENGTHTABBEN
const length_colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "#716FFF",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#5351B7",
  buttonActiveColor: "#5351B7",
  buttonActiveBorderColor: "#5351B7",
};

export default function Length() {
  const units = Object.keys(UNIT_RATIOS.length).map((key) => ({
    label: key,
    value: key,
  }));

  return (
    <ImageBackground
      source={require("../../assets/images/bakgrund3.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="length" colors={length_colors} />
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
