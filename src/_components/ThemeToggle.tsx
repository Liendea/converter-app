import { Ionicons } from "@expo/vector-icons"; // Standard i Expo
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggleTheme}
        style={[
          styles.button,
          {
            backgroundColor:
              theme === "dark"
                ? "rgba(0, 0, 0, 0.7)"
                : "rgba(251, 236, 229, 0.80)",
          },
        ]}
      >
        <Ionicons
          name={theme === "light" ? "moon" : "sunny"}
          size={24}
          color={theme === "light" ? "#333" : "#fff"}
        />
        <Text
          style={[styles.text, { color: theme === "light" ? "#333" : "#fff" }]}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    right: 30,
    zIndex: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(251, 236, 229, 0.80)",
    padding: 8,
    borderRadius: 20,
    gap: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});
