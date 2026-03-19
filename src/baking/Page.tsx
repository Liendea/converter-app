import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import NewConvertCard from "../_components/NewConvertCard";
import ThemeToggle from "../_components/ThemeToggle";
import { baking_colors } from "../baking/colors/colors";
import { useTheme } from "../context/ThemeContext";

export default function BakingScreen() {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";
  const activeColors = baking_colors[theme];

  return (
    <ImageBackground
      source={
        isDarkMode
          ? require("@/assets/images/bakgrund_dark.png")
          : require("@/assets/images/bakgrund.png")
      }
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ThemeToggle />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="baking" colors={activeColors} />
      </ScrollView>
    </ImageBackground>
  );
}

// Hämta skärmens faktiska storlek
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
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
