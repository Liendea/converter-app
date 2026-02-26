import ConvertCard from "@/components/ConvertCard";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import {
  ConversionResults,
  convertFromCups,
  convertFromDl,
} from "../../utils/conversions";

// FÄRGSCHEMA FÖR BAKINGTABBEN
const colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "rgba(147, 107, 137, 0.8)",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#936B89",
  buttonActiveColor: "#936B89",
  buttonActiveBorderColor: "#936B89",
};

const CUPS_UNITS = ["dl", "liter", "cl", "ml", "tablespoon", "teaspoon"];
const DL_UNITS = ["cup", "gallon", "quarts", "pint", "oz"];

export default function BakingScreen() {
  const [activeUnit, setActiveUnit] = useState<"cups" | "dl">("cups");
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<ConversionResults>({});

  // Körs varje gång inputValue eller activeUnit ändras
  useEffect(() => {
    // Ersätt komma med punkt så att parseFloat förstår måttet
    const sanitizedInput = inputValue.replace(",", ".");
    const num = parseFloat(sanitizedInput);

    if (sanitizedInput.endsWith(".") || isNaN(num)) {
      // Vi behåller nuvarande resultat eller låter dem vara om input är helt tom
      if (inputValue === "") setResults({});
      return;
    }

    if (activeUnit === "dl") {
      setResults(convertFromDl(num));
    } else {
      setResults(convertFromCups(num));
    }
  }, [inputValue, activeUnit]);

  const handleUnitChange = (unit: "cups" | "dl") => {
    setActiveUnit(unit); // Byt enhet
    setInputValue(""); // Tömmer fältet
  };

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
        <ConvertCard
          unitOne={{ label: "Cups", value: "cups" }}
          unitTwo={{ label: "Deciliter", value: "dl" }}
          unitOneList={["teaspoon", "tablespoon", "ml", "dl", "cl", "liter"]}
          unitTwoList={["oz", "cup", "pint", "quarts", "gallon"]}
          onConvert={(num, unit) =>
            unit === "cups" ? convertFromCups(num) : convertFromDl(num)
          }
          colors={colors}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
