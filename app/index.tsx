import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>This is the pretty unit converter</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/(tabs)/Baking")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 32, fontWeight: "bold", color: "#8e44ad" },
  subtitle: { fontSize: 18, marginVertical: 20, color: "#666" },
  button: {
    backgroundColor: "#8e44ad",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
