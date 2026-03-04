import { Redirect } from "expo-router";

// Direkt redirect till bakingstabben
export default function Index() {
  return <Redirect href="/(tabs)/Baking" />;
}
