import React, { useState } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import ThemeToggle from "../_components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import CurrencyConvertCard from "../currency/components/CurrencyConvertCard";
import { currency_colors } from "./colors/colors";
import { useCurrencyConversion } from "./utils/hooks/useCurrencyConversions";

export default function CurrencyScreen() {
  const [amount, setAmount] = useState("1");
  const [fromUnit, setFromUnit] = useState("SEK");
  const [toUnit, setToUnit] = useState("USD");

  const { result, loading } = useCurrencyConversion(amount, fromUnit, toUnit);

  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";
  const activeColors = currency_colors[theme];
  return (
    <ImageBackground
      source={
        isDarkMode
          ? require("@/assets/images/bakgrund4_dark.png")
          : require("@/assets/images/bakgrund4.png")
      }
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ThemeToggle />

      <CurrencyConvertCard
        fromUnit={fromUnit}
        toUnit={toUnit}
        onFromChange={setFromUnit}
        onToChange={setToUnit}
        onChangeText={setAmount}
        amount={amount}
        result={result}
        loading={loading}
        colors={activeColors}
      />
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
});
