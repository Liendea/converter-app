//ICONS
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

//FÄRGSCHEMA FÖR TABBARNA
import Colors from "@/constants/Colors";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].inactive,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="Baking"
        options={{
          title: "Let's bake!",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cupcake"
              size={33}
              color={focused ? "#936B89" : Colors.dark.inactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Weight"
        options={{
          title: "Weight it!",
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="weight-scale"
              size={30}
              color={focused ? "#3A6770" : Colors.dark.inactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Length"
        options={{
          title: "How high?",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="ruler"
              size={30}
              color={focused ? "#5351B7" : Colors.dark.inactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Currency"
        options={{
          title: "How much?",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="currency-exchange"
              size={30}
              color={focused ? "#866308" : Colors.dark.inactive}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="TEST"
        options={{
          title: "TEST",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add"
              size={24}
              color={focused ? "#07d877" : Colors.dark.inactive}
            />
          ),
        }}
      />
    </Tabs>
  );
}
