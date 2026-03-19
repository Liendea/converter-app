//ICONS
import { Tabs } from "expo-router";
import React from "react";
import TabbarIcon from "../../_components/TabbarIcon";
import { useTheme } from "../../context/ThemeContext";

export default function TabLayout() {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "transparent" },
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          // Positionering
          position: "absolute",
          bottom: 25,
          marginHorizontal: 20,
          paddingHorizontal: 18,
          paddingTop: 5,

          // style
          backgroundColor: isDarkMode ? "#000000de" : "#ffffff",
          borderRadius: 35,
          height: 70,
          borderTopWidth: 0,
          // skugga
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="Baking"
        options={{
          title: "Volume",
          tabBarIcon: ({ focused }) => (
            <TabbarIcon
              focused={focused}
              title={"Baking"}
              icon={
                isDarkMode
                  ? require("../../assets/images/icons/baking_white.png")
                  : require("../../assets/images/icons/Baking.png")
              }
              backgroundColor={require("../../assets/images/icons/Pink.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Weight"
        options={{
          title: "Weight",
          tabBarIcon: ({ focused }) => (
            <TabbarIcon
              focused={focused}
              title={"Weight"}
              icon={
                isDarkMode
                  ? require("../../assets/images/icons/Weight_white.png")
                  : require("../../assets/images/icons/Weight.png")
              }
              backgroundColor={require("../../assets/images/icons/green.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Length"
        options={{
          title: "Length",
          tabBarIcon: ({ focused }) => (
            <TabbarIcon
              focused={focused}
              title={"Length"}
              icon={
                isDarkMode
                  ? require("../../assets/images/icons/Length_white.png")
                  : require("../../assets/images/icons/Length.png")
              }
              backgroundColor={require("../../assets/images/icons/blue.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Currency"
        options={{
          title: "Currency",
          tabBarIcon: ({ focused }) => (
            <TabbarIcon
              focused={focused}
              title={"Currency"}
              icon={
                isDarkMode
                  ? require("../../assets/images/icons/Currency_white.png")
                  : require("../../assets/images/icons/Currency.png")
              }
              backgroundColor={require("../../assets/images/icons/yellow.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
