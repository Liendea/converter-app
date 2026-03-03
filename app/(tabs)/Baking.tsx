import NewConvertCard from "@/components/NewConvertCard";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";

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
        <NewConvertCard category="baking" colors={baking_colors} />
      </ScrollView>
    </ImageBackground>
  );
}

// Hämta skärmens faktiska storlek
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    // Tvinga bilden att "blöda" över kanterna
    width: width + 8,
    height: height + 6,
    left: -4,
    right: -4,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
