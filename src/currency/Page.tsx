import CurrencyConvertCard from "@/src/currency/components/CurrencyConvertCard";
import { fetchExchangeRates } from "@/src/currency/utils/api/CurrencyApi";
import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";

export default function CurrencyScreen() {
  const [amount, setAmount] = useState("1");
  const [fromUnit, setFromUnit] = useState("SEK");
  const [toUnit, setToUnit] = useState("USD");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getConversion = async () => {
      // 1. Byt ut komma tillpunkt i input strängen
      let sanitized = amount.replace(",", ".");

      // 2. Nollställ om anv tömmer fältet.
      if (!sanitized || sanitized.trim() === "") {
        setResult(null);
        setLoading(false);
        return;
      }
      //3.  Om användare skriver ".5" -> gör om till "0.5"
      if (sanitized.startsWith(".")) {
        sanitized = "0" + sanitized;
      }

      // 4. Vänta med att anropa API om man bara skrivit "0." eller "."
      // För att förhindra att API:et kraschar
      if (sanitized.endsWith(".")) {
        setResult(null);
        return;
      }

      const num = parseFloat(sanitized);

      // 5. Om det inte är ett giltigt nummer, nollställ.
      if (isNaN(num) || num <= 0) {
        setResult(null);
        setLoading(false);
        return;
      }

      // 6. Samma valuta? (undvik api anrop)
      if (fromUnit === toUnit) {
        setResult(num.toFixed(2));
        setLoading(false);
        return;
      }

      //7. Anrop a API
      setLoading(true);
      try {
        const res = await fetchExchangeRates(num, fromUnit);

        if (res && res[toUnit.toUpperCase()]) {
          const val = res[toUnit.toUpperCase()];
          setResult(typeof val === "number" ? val.toFixed(2) : val.toString());
        }
      } catch (error) {
        console.error("Felet:", error);
        setResult("Error");
      } finally {
        setLoading(false);
      }
    };

    getConversion();
  }, [amount, fromUnit, toUnit]);

  return (
    <ImageBackground
      source={require("../../assets/images/bakgrund4.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <CurrencyConvertCard
        fromUnit={fromUnit}
        toUnit={toUnit}
        onFromChange={setFromUnit}
        onToChange={setToUnit}
        onChangeText={setAmount}
        amount={amount}
        result={result}
        loading={loading}
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
