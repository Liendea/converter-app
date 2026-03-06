import { StyleSheet, Text, View } from "react-native";

export default function InfoBox() {
  return (
    <View style={styles.infoSection}>
      <Text style={styles.infoTitle}>Info</Text>
      <Text style={styles.infoBody}>
        Valutan uppdateras en gång om dagen (runt kl. 16:00 CET).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //Info-sektionen
  infoSection: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  infoTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  infoBody: { fontSize: 14, color: "#666" },
});
