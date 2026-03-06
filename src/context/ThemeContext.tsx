import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: "light" | "dark";
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");

  // Räkna ut det faktiska temat (om system, kolla vad mobilen säger)
  const theme = mode === "system" ? (systemColorScheme ?? "light") : mode;

  // Ladda användarens sparade val vid start
  useEffect(() => {
    const loadTheme = async () => {
      const savedMode = await AsyncStorage.getItem("user-theme-mode");
      if (savedMode) setMode(savedMode as ThemeMode);
    };
    loadTheme();
  }, []);

  // Spara valet när det ändras
  const updateMode = async (newMode: ThemeMode) => {
    setMode(newMode);
    await AsyncStorage.setItem("user-theme-mode", newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode: updateMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
