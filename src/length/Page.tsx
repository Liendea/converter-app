import NewConvertCard from "@/src/_components/NewConvertCard";
import { UNIT_RATIOS } from "@/src/_utils/unitRatios";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import ThemeToggle from "../_components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { length_colors } from "./colors/colors";

export default function LengthScreen() {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";
  const activeColors = length_colors[theme];

  const units = Object.keys(UNIT_RATIOS.length).map((key) => ({
    label: key,
    value: key,
  }));

  return (
    <ImageBackground
      source={
        isDarkMode
          ? require("../../assets/images/bakgrund3_dark.png")
          : require("../../assets/images/bakgrund3.png")
      }
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ThemeToggle />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="length" colors={activeColors} />
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
