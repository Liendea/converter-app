import { Ionicons } from "@expo/vector-icons"; // Standard i Expo
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, mode, setMode } = useTheme();

  const toggleTheme = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTheme} style={styles.button}>
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(150, 150, 150, 0.2)",
    padding: 8,
    borderRadius: 20,
    gap: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});
