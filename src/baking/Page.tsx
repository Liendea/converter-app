import NewConvertCard from "@/src/_components/NewConvertCard";
import { UNIT_RATIOS } from "@/src/_utils/unitRatios";
import { baking_colors } from "@/src/baking/colors/colors";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";

export default function BakingScreen() {
  const colorScheme = useColorScheme();
  // Om colorScheme är 'dark', använd dark-objektet, annars light
  const theme = baking_colors[colorScheme === "dark" ? "dark" : "light"];
  const isDarkMode = colorScheme === "dark";

  const units = Object.keys(UNIT_RATIOS.baking).map((key) => ({
    label: key,
    value: key,
  }));

  return (
    <ImageBackground
      source={
        isDarkMode
          ? require("../../assets/images/bakgrund_dark.png")
          : require("../../assets/images/bakgrund.png")
      }
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <NewConvertCard category="baking" colors={theme} />
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
