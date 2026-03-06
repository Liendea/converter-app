import Dropdowns from "@/src/_components/Dropdowns";
import { currency_colors } from "@/src/currency/colors/colors";
import { data } from "@/src/currency/utils/CurrencyData";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Spacer from "../../_components/Spacer";
import CurrencyResultCard from "./CurrencyResultCard";
import InfoBox from "./InfoBox";

type CurrencyConvertCard = {
  fromUnit: string;
  toUnit: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onChangeText: (value: string) => void;
  amount: string;
  result: string | null;
  loading: boolean;
};
export default function CurrencyConvertCard({
  fromUnit,
  toUnit,
  onFromChange,
  onToChange,
  onChangeText,
  amount,
  result,
  loading,
}: CurrencyConvertCard) {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Convert:</Text>
        {/* DROPDOWNS AND SWAPBUTTON */}
        <Spacer height={20} />
        <Dropdowns
          units={data}
          fromUnit={fromUnit}
          toUnit={toUnit}
          onFromChange={onFromChange}
          onToChange={onToChange}
          colors={currency_colors}
          labelField="display"
        />

        {/* TEXT INPUT */}
        <Spacer height={20} />
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          value={amount}
          onChangeText={onChangeText}
          placeholder="Enter amount..."
          placeholderTextColor="#0000008a"
        />

        {/* RESULTAT KORT */}
        <Spacer height={20} />
        <CurrencyResultCard toUnit={toUnit} result={result} loading={loading} />

        {/* Info ruta */}
        <Spacer height={20} />
        <InfoBox />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});
