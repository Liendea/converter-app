import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import NewConvertCard from "../_components/NewConvertCard";
import ThemeToggle from "../_components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { length_colors } from "./colors/colors";

export default function LengthScreen() {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";
  const activeColors = length_colors[theme];

  return (
    <ImageBackground
      source={
        isDarkMode
          ? require("../assets/images/bakgrund3_dark.png")
          : require("../assets/images/bakgrund3.png")
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
    width: width + 30,
    height: height + 20,
    left: -15,
    right: -4,
  },

  scrollView: {
    flex: 1,
    maxWidth: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
