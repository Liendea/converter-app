//ICONS
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
            <MaterialCommunityIcons
              name="cupcake"
              size={33}
              color={focused ? "#936B89" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Weight"
        options={{
          title: "Weight",
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="weight-scale"
              size={30}
              color={focused ? "#3A6770" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Length"
        options={{
          title: "Length",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="ruler"
              size={30}
              color={focused ? "#5351B7" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Currency"
        options={{
          title: "Currency",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="currency-exchange"
              size={30}
              color={focused ? "#866308" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
