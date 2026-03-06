//ICONS
import TabbarIcon from "@/src/_components/TabbarIcon";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";

// 1. Hämta skärmbredden
const { width } = Dimensions.get("window");
const TAB_BAR_WIDTH = width * 0.8; // Baren ska vara 80% av skärmen

export default function TabLayout() {
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
          paddingHorizontal: 15,
          paddingTop: 5,

          // style
          backgroundColor: "#ffffff",
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
              icon={require("@/assets/images/icons/Baking.png")}
              backgroundColor={require("@/assets/images/icons/Pink.png")}
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
              icon={require("@/assets/images/icons/Weight.png")}
              backgroundColor={require("@/assets/images/icons/green.png")}
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
              icon={require("@/assets/images/icons/Length.png")}
              backgroundColor={require("@/assets/images/icons/blue.png")}
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
              icon={require("@/assets/images/icons/Currency.png")}
              backgroundColor={require("@/assets/images/icons/yellow.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}
