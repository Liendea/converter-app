import { View } from "react-native";

type SpacerProps = {
  height: number;
  width?: number;
};

export default function Spacer({ height = 20, width = 100 }: SpacerProps) {
  return <View style={{ height: height, width: width }}></View>;
}
