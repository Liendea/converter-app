import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type UnitItem = {
  label: string;
  value: string;
};

type DropDownProps = {
  units: UnitItem[]; // Lista med enheter att visa i dropdowns, t.ex. [{label: "Cups", value: "cups"}, {label: "Deciliter", value: "dl"}]
  fromUnit: string; // Den aktuella "from" enheten, t.ex. "cups"
  toUnit: string; // Den aktuella "to" enheten, t.ex. "dl"
  onFromChange: (value: string) => void; // Funktion som anropas när "from" enheten ändras
  onToChange: (value: string) => void; // Funktion som anropas när "to" enheten ändras
  colors: {
    // Olika färger för dropdowns och knappar beroende på anropande tab
    backgroundColor: string;
    buttonColor: string;
    buttonBorderColor: string;
    buttonActiveColor: string;
    buttonActiveBorderColor: string;
  };
};

export default function Dropdowns({
  units,
  fromUnit,
  toUnit,
  onFromChange,
  onToChange,
  colors,
}: DropDownProps) {
  // Funktion för att byta plats på "from" och "to" enheterna
  const handleSwap = () => {
    onFromChange(toUnit);
    onToChange(fromUnit);
  };

  return (
    <View style={styles.btnContainer}>
      {/* Dropdown för "from" enhet */}
      <Dropdown
        style={[
          styles.dropdown,
          {
            backgroundColor: colors.buttonActiveColor,
            borderColor: colors.buttonActiveBorderColor,
          },
        ]}
        autoScroll={false}
        iconColor="white"
        placeholder="unit"
        placeholderStyle={{ color: "white" }}
        selectedTextStyle={{
          color: "white",

          textAlign: "center",
        }}
        containerStyle={styles.listContainer}
        data={units}
        labelField="label"
        valueField="value"
        value={fromUnit}
        onChange={(item) => onFromChange(item.value)}
      />

      {/* Switch knapp*/}
      <Pressable onPress={handleSwap} style={styles.swapBtn}>
        <MaterialCommunityIcons
          name="swap-horizontal"
          size={28}
          color={"black"}
        />
      </Pressable>

      {/* Dropdown för "to" enhet */}
      <Dropdown
        style={[
          styles.dropdown,
          {
            backgroundColor: colors.backgroundColor,
            borderColor: colors.buttonBorderColor,
          },
        ]}
        autoScroll={false}
        iconColor="black"
        placeholder="unit"
        placeholderStyle={{ color: "black" }}
        selectedTextStyle={{
          color: colors.buttonActiveColor,
          textAlign: "center",
        }}
        containerStyle={styles.listContainer}
        data={units}
        labelField="label"
        valueField="value"
        value={toUnit}
        onChange={(item) => onToChange(item.value)}
      />
    </View>
  );
}

// STYLING
const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 15,
  },
  dropdown: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 2,
  },
  listContainer: {
    borderRadius: 15,
    overflow: "hidden",
  },
  swapBtn: {
    padding: 5,
  },
});
