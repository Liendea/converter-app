import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Dropdowns from "../../_components/Dropdowns";
import Spacer from "../../_components/Spacer";
import { useTheme } from "../../context/ThemeContext";
import { data } from "../../currency/utils/CurrencyData";
import CurrencyResultCard from "./CurrencyResultCard";
import InfoBox from "./InfoBox";

type ColorTheme = {
  backgroundColor: string;
  resultColor: string;
  buttonColor: string;
  buttonBorderColor: string;
  buttonActiveColor: string;
  buttonActiveBorderColor: string;
};

type CurrencyConvertCardProps = {
  fromUnit: string;
  toUnit: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onChangeText: (value: string) => void;
  amount: string;
  result: string | null;
  loading: boolean;
  colors: ColorTheme;
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
  colors,
}: CurrencyConvertCardProps) {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View
        style={[styles.container, { backgroundColor: colors.backgroundColor }]}
      >
        <Text style={[styles.label, { color: isDarkMode ? "white" : "black" }]}>
          Convert:
        </Text>
        {/* DROPDOWNS AND SWAPBUTTON */}
        <Spacer height={20} />
        <Dropdowns
          units={data}
          fromUnit={fromUnit}
          toUnit={toUnit}
          onFromChange={onFromChange}
          onToChange={onToChange}
          colors={colors}
          labelField="display"
        />

        {/* TEXT INPUT */}
        <Spacer height={20} />
        <TextInput
          style={[
            styles.input,
            { borderColor: isDarkMode ? "white" : colors.buttonActiveColor },
          ]}
          keyboardType="decimal-pad"
          value={amount}
          onChangeText={onChangeText}
          placeholder="Enter amount..."
          placeholderTextColor="#0000008a"
        />

        {/* RESULTAT KORT */}
        <Spacer height={20} />
        <CurrencyResultCard
          toUnit={toUnit}
          result={result}
          loading={loading}
          colors={colors}
        />

        {/* Info ruta */}
        <Spacer height={20} />
        <InfoBox />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
    maxWidth: 500,
    alignSelf: "center",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "rgba(251, 236, 229, 0.80)",
    padding: 20,
  },
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
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    fontSize: 16,
    width: "100%",
    borderWidth: 2,
  },
});
