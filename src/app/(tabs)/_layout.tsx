//ICONS
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";
import TabbarIcon from "../../_components/TabbarIcon";
import { useTheme } from "../../context/ThemeContext";

export default function TabLayout() {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";

  // Hämta skärmens faktiska storlek
  const { width } = Dimensions.get("window");

  const tabBarWidthMobile = width * 0.9;
  const tabBarWidthIpad = width * 0.6;
  const activeBackgroundMobile = tabBarWidthMobile * 0.3;
  const activeBackgroundIpad = tabBarWidthIpad * 0.28;

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

          marginHorizontal: width > 600 ? "20%" : "5%",
          width: width > 600 ? "60%" : "90%",

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
              activeBackgroundIpad={activeBackgroundIpad}
              activeBackgroundMobile={activeBackgroundMobile}
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
              activeBackgroundIpad={activeBackgroundIpad}
              activeBackgroundMobile={activeBackgroundMobile}
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
              activeBackgroundIpad={activeBackgroundIpad}
              activeBackgroundMobile={activeBackgroundMobile}
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
              activeBackgroundIpad={activeBackgroundIpad}
              activeBackgroundMobile={activeBackgroundMobile}
            />
          ),
        }}
      />
    </Tabs>
  );
}
