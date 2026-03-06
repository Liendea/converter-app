import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, useColorScheme } from "react-native";

type SwitchButtonProps = {
  onPress: () => void;
};
export default function SwitchButton({ onPress }: SwitchButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <Pressable onPress={onPress} style={styles.swapBtn}>
      <MaterialCommunityIcons
        name="swap-horizontal"
        size={28}
        color={isDarkMode ? "white" : "black"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  swapBtn: {
    padding: 5,
  },
});
