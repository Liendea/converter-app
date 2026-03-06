import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type SwitchButtonProps = {
  onPress: () => void;
};
export default function SwitchButton({ onPress }: SwitchButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.swapBtn}>
      <MaterialCommunityIcons
        name="swap-horizontal"
        size={28}
        color={"black"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  swapBtn: {
    padding: 5,
  },
});
