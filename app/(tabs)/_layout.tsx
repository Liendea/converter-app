//ICONS
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "transparent" },
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarIconStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 8,
          borderTopWidth: 0,
          elevation: 0,
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
