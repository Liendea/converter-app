import ConvertCard from "@/components/ConvertCard";
import { convertFromFeet, convertFromMeter } from "@/utils/conversions";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";

// FÄRGSCHEMA FÖR LENGTHTABBEN
const colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "#716FFF",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#5351B7",
  buttonActiveColor: "#5351B7",
  buttonActiveBorderColor: "#5351B7",
};

export default function Length() {
  return (
    <ImageBackground
      source={require("../../assets/images/bakgrund3.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <ConvertCard
          unitOne={{ label: "Feet", value: "feet" }}
          unitTwo={{ label: "Meter", value: "meter" }}
          unitOneList={["meter", "cm", "inches", "yards", "miles"]}
          unitTwoList={["inches", "feet", "yards", "miles"]}
          onConvert={(num, unit) =>
            unit === "meter" ? convertFromMeter(num) : convertFromFeet(num)
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
