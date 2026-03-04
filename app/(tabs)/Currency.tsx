import Dropdowns from "@/components/Dropdowns";
import InfoBox from "@/components/InfoBox";
import Spacer from "@/components/Spacer";
import { fetchExchangeRates } from "@/utils/CurrencyApi";
import { data } from "@/utils/CurrencyData";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// FÄRGSCHEMA FÖR CURRENCYTABBEN
const colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "#926C08",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#866308",
  buttonActiveColor: "#866308",
  buttonActiveBorderColor: "#866308",
};

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
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <Text style={styles.label}>Convert:</Text>
          <Spacer height={20} />
          {/* Container for unit buttons */}

          <Dropdowns
            units={data}
            fromUnit={fromUnit}
            toUnit={toUnit}
            onFromChange={setFromUnit}
            onToChange={setToUnit}
            colors={colors}
            labelField="display"
          />
          <Spacer height={20} />
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount..."
            placeholderTextColor="#0000008a"
          />
          <Spacer height={20} />
          {/* RESULTAT KORT */}
          <View style={[styles.resultContainer]}>
            {/* Header */}
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>Unit</Text>
              <Text style={styles.headerText}>Value</Text>
            </View>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <View style={styles.resultRow}>
                <Text style={styles.unitText}>{toUnit}</Text>
                <Text style={styles.unitText}>{result}</Text>
              </View>
            )}
          </View>

          <Spacer height={20} />
          {/* Info ruta */}
          <InfoBox />
        </View>
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

  // ScrollView och container
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
  container: {
    width: "100%", // Se till att den tar upp bredden
    borderRadius: 20,
    backgroundColor: "rgba(251, 236, 229, 0.80)",
    padding: 20,
  },
  // Label
  label: {
    textAlign: "center",
    fontSize: 18,

    fontWeight: "400",
  },
  dropDownContainer: {
    flexDirection: "row",

    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Input
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    fontSize: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: "#866308",
  },

  dropdown: {
    flex: 1,
    backgroundColor: "#EDE7E4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#866308",
  },
  dropdownFromUnit: {
    backgroundColor: "#866308",
    borderColor: "#866308",
  },

  resultContainer: {
    borderRadius: 15,
    padding: 20,
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#BC9B47",
  },
  resultRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#fff",
    opacity: 0.7,
  },
  unitText: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff",
  },
});
