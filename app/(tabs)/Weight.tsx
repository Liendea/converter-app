import ConvertCard from "@/components/ConvertCard";
import { convertFromKg, convertFromLbs } from "@/utils/conversions";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";

// FÄRGSCHEMA FÖR WEIGHTTABBEN
const colors = {
  backgroundColor: "rgba(251, 236, 229, 0.80)",
  resultColor: "#3A6770",
  buttonColor: "#EDE7E4",
  buttonBorderColor: "#28464B",
  buttonActiveColor: "#28464B",
  buttonActiveBorderColor: "#28464B",
};

export default function Weight() {
  return (
    <ImageBackground
      source={require("../../assets/images/bakgrund2.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <ConvertCard
          unitOne={{ label: "LBS", value: "lbs" }}
          unitTwo={{ label: "KG", value: "kg" }}
          unitOneList={["kg", "gram", "hg", "stone", "ounce"]}
          unitTwoList={["lbs", "stone", "ounce", "gram", "hg"]}
          onConvert={(num, unit) =>
            unit === "lbs" ? convertFromLbs(num) : convertFromKg(num)
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
