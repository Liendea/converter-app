import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";

type ExpandButtonProps = {
  onPress: () => void;
  isExpanded: boolean;
};
export default function ExpandButton({
  onPress,
  isExpanded,
}: ExpandButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.expandButton}>
      <Text style={styles.unitText}>
        {isExpanded ? "Hide Units" : "More units"}
      </Text>
      <MaterialIcons
        name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
        size={24}
        color="white"
        paddingLeft="5"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expandButton: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.95, // Gör rubriken lite mer diskret än värdena
    backgroundColor: "#ffffff3a",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "105%",
    alignSelf: "center",
  },
  unitText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#fff",
  },
});
