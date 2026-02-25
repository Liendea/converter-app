import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  isActive?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  activeBorderColor?: string;
};

export default function UnitButton({
  title,
  onPress,
  isActive,
  borderColor,
  backgroundColor,
  activeBackgroundColor,
  activeBorderColor,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        isActive
          ? {
              backgroundColor: activeBackgroundColor,
              borderColor: activeBorderColor,
            }
          : { backgroundColor, borderColor },
      ]}
    >
      <Text style={[styles.buttonText, isActive && styles.activeText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 2,
  },
  active: {
    borderWidth: 0,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  activeText: { color: "#fff" },
});
