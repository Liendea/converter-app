import ArrowIcon from "@/components/ArrowIcon";
import { fetchExchangeRates } from "@/utils/CurrencyApi";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

// FÄRGSCHEMA FÖR CURRENCYTABBEN
const colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "#926C08",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#866308",
  buttonActiveColor: "#866308",
  buttonActiveBorderColor: "#866308",
};

const data = [
  { label: "Australian Dollar", value: "AUD", flag: "🇦🇺" },
  { label: "Bulgarian Lev", value: "BGN", flag: "🇧🇬" },
  { label: "Brazilian Real", value: "BRL", flag: "🇧🇷" },
  { label: "Canadian Dollar", value: "CAD", flag: "🇨🇦" },
  { label: "Swiss Franc", value: "CHF", flag: "🇨🇭" },
  { label: "Chinese Yuan", value: "CNY", flag: "🇨🇳" },
  { label: "Czech Koruna", value: "CZK", flag: "🇨🇿" },
  { label: "Danish Krone", value: "DKK", flag: "🇩🇰" },
  { label: "Euro", value: "EUR", flag: "🇪🇺" },
  { label: "British Pound", value: "GBP", flag: "🇬🇧" },
  { label: "Hong Kong Dollar", value: "HKD", flag: "🇭🇰" },
  { label: "Hungarian Forint", value: "HUF", flag: "🇭🇺" },
  { label: "Indonesian Rupiah", value: "IDR", flag: "🇮🇩" },
  { label: "Israeli New Shekel", value: "ILS", flag: "🇮🇱" },
  { label: "Indian Rupee", value: "INR", flag: "🇮🇳" },
  { label: "Icelandic Króna", value: "ISK", flag: "🇮🇸" },
  { label: "Japanese Yen", value: "JPY", flag: "🇯🇵" },
  { label: "South Korean Won", value: "KRW", flag: "🇰🇷" },
  { label: "Mexican Peso", value: "MXN", flag: "🇲🇽" },
  { label: "Malaysian Ringgit", value: "MYR", flag: "🇲🇾" },
  { label: "Norwegian Krone", value: "NOK", flag: "🇳🇴" },
  { label: "New Zealand Dollar", value: "NZD", flag: "🇳🇿" },
  { label: "Philippine Peso", value: "PHP", flag: "🇵🇭" },
  { label: "Polish Złoty", value: "PLN", flag: "🇵🇱" },
  { label: "Romanian Leu", value: "RON", flag: "🇷🇴" },
  { label: "Swedish Krona", value: "SEK", flag: "🇸🇪" },
  { label: "Singapore Dollar", value: "SGD", flag: "🇸🇬" },
  { label: "Thai Baht", value: "THB", flag: "🇹🇭" },
  { label: "Turkish Lira", value: "TRY", flag: "🇹🇷" },
  { label: "US Dollar", value: "USD", flag: "🇺🇸" },
  { label: "South African Rand", value: "ZAR", flag: "🇿🇦" },
];

export default function CurrencyScreen() {
  const [amount, setAmount] = useState("1");
  const [fromUnit, setFromUnit] = useState("SEK");
  const [toUnit, setToUnit] = useState("USD");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getConversion = async () => {
      // 1. Tömmer användaren fältet? Nollställ allt direkt.
      if (!amount || amount.trim() === "") {
        setResult(null); // Eller "0" om du föredrar det
        setLoading(false);
        return;
      }

      const num = parseFloat(amount.replace(",", "."));

      // 2. Om det inte är ett giltigt nummer, nollställ.
      if (isNaN(num)) {
        setResult(null);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        // Eftersom value i data nu är ren (t.ex. "SEK"), kan vi använda fromUnit direkt
        const res = await fetchExchangeRates(num, fromUnit);

        if (res && res[toUnit.toUpperCase()]) {
          setResult(res[toUnit.toUpperCase()]);
        } else if (fromUnit === toUnit) {
          // Om man valt samma valuta på båda sidor
          setResult(num.toFixed(2));
        }
      } catch (error) {
        console.error("Conversion error:", error);
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

          {/* Container for unit buttons */}

          <View style={styles.btnContainer}>
            <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="value"
              valueField="value"
              value={fromUnit}
              onChange={(item) => setFromUnit(item.value)}
              renderLeftIcon={() => {
                // Hittar flaggan för den valda valutan
                const item = data.find((d) => d.value === fromUnit);
                return (
                  <Text style={{ fontSize: 20, marginRight: 8 }}>
                    {item ? item.flag : ""}
                  </Text>
                );
              }}
            />

            <ArrowIcon />

            <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="value"
              valueField="value"
              value={toUnit}
              onChange={(item) => setToUnit(item.value)}
              renderLeftIcon={() => {
                // Hittar flaggan för den valda valutan
                const item = data.find((d) => d.value === toUnit);
                return (
                  <Text style={{ fontSize: 20, marginRight: 8 }}>
                    {item ? item.flag : ""}
                  </Text>
                );
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount..."
            placeholderTextColor="#000000"
          />

          <View style={[styles.resultContainer]}>
            {/* Header */}
            <View style={styles.resultRow}>
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

          {/*  extra info-sektion 
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>About {toUnit}</Text>
            <Text style={styles.infoBody}>
              Rolig fakta eller statistik om valutan du har valt.
            </Text>
          </View>
          */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Bakgrund
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
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
    marginBottom: 10,
    fontWeight: "400",
  },
  btnContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Input
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    fontSize: 18,
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#866308",
  },

  dropdown: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#866308",
  },

  resultContainer: {
    marginTop: 30,
    borderRadius: 15,
    padding: 20,
    width: "100%",
    // Lite skugga för att få den att "poppa"
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
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#fff",
    opacity: 0.7, // Gör rubriken lite mer diskret än värdena
  },
  unitText: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#fff",
  },

  //Info-sektionen
  infoSection: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  infoTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  infoBody: { fontSize: 14, color: "#666" },
});
