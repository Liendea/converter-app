import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";

type TabbarIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
  backgroundColor: ImageSourcePropType;
};
export default function TabbarIcon({
  backgroundColor,
  icon,
  title,
  focused,
}: TabbarIconProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  if (focused)
    return (
      <ImageBackground style={styles.background} source={backgroundColor}>
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
    width: 106,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: 2,
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
