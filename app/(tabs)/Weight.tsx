import NewConvertCard from "@/components/NewConvertCard";
import { UNIT_RATIOS } from "@/utils/unitRatios";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";

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
