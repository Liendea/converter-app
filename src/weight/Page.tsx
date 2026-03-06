import NewConvertCard from "@/src/_components/NewConvertCard";
import { UNIT_RATIOS } from "@/src/_utils/unitRatios";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { weight_colors } from "./colors/colors";

export default function WeightScreen() {
  const colorScheme = useColorScheme();
  // Om colorScheme är 'dark', använd dark-objektet, annars light
  const theme = weight_colors[colorScheme === "dark" ? "dark" : "light"];

  const units = Object.keys(UNIT_RATIOS.weight).map((key) => ({
    label: key,
    value: key,
  }));

  const isDarkMode = colorScheme === "dark";
  return (
    <ImageBackground
      source={
        isDarkMode
          ? require("../../assets/images/bakgrund2_dark.png")
          : require("../../assets/images/bakgrund2.png")
      }
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="weight" colors={theme} />
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
