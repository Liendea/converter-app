import {
  Dimensions,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
} from "react-native";

import { useTheme } from "../context/ThemeContext";

type TabbarIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
  backgroundColor: ImageSourcePropType;
  activeBackgroundMobile: number;
  activeBackgroundIpad: number;
};
export default function TabbarIcon({
  backgroundColor,
  icon,
  title,
  focused,
  activeBackgroundMobile,
  activeBackgroundIpad,
}: TabbarIconProps) {
  const { theme } = useTheme(); // Hämta 'light' eller 'dark'
  const isDarkMode = theme === "dark";

  // Hämta skärmens faktiska storlek
  const { width } = Dimensions.get("window");

  if (focused)
    return (
      <ImageBackground
        style={[
          styles.background,
          {
            width: width > 600 ? activeBackgroundIpad : activeBackgroundMobile,
          },
          { marginTop: width > 600 ? 4 : 2 },
        ]}
        source={backgroundColor}
      >
        <Image style={styles.icon} source={icon} />
        <Text style={[styles.title, { color: isDarkMode ? "white" : "black" }]}>
          {title}
        </Text>
      </ImageBackground>
    );
  else {
    return <Image style={styles.icon} source={icon} />;
  }
}

const styles = StyleSheet.create({
  background: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 100,
    overflow: "hidden",
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    marginLeft: 5,
  },
});
