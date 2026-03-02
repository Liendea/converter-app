import { fetchExchangeRates } from "@/utils/CurrencyApi";
import { data } from "@/utils/CurrencyData";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
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
        setResult(null);
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
              style={[styles.dropdown, styles.dropdownFromUnit]}
              autoScroll={false}
              iconColor="#fff"
              selectedTextStyle={{ color: "#fff" }}
              data={data}
              labelField="display"
              valueField="value"
              value={fromUnit}
              onChange={(item) => setFromUnit(item.value)}
            />
            <Pressable
              onPress={() => {
                setFromUnit(toUnit);
                setToUnit(fromUnit);
              }}
            >
              <MaterialCommunityIcons
                name="swap-horizontal"
                size={24}
                color="black"
              />
            </Pressable>
            <Dropdown
              style={styles.dropdown}
              autoScroll={false}
              data={data}
              labelField="display"
              valueField="value"
              value={toUnit}
              onChange={(item) => setToUnit(item.value)}
            />
          </View>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount..."
            placeholderTextColor="#0000008a"
          />
          {/* RESULTAT KORT */}
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
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Info</Text>
            <Text style={styles.infoBody}>
              Valutan uppdateras en gång om dagen (runt kl. 16:00 CET).
            </Text>
          </View>
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
    fontSize: 16,
    marginBottom: 20,
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
    marginTop: 10,
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
