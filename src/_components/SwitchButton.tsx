import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

type SwitchButtonProps = {
  onPress: () => void;
};
export default function SwitchButton({ onPress }: SwitchButtonProps) {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";

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
