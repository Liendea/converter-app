import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function ArrowIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        fill="#07070B"
        d="M10 20A10 10 0 1 0 0 10a10.01 10.01 0 0 0 10 10Zm0-18.462A8.462 8.462 0 1 1 1.538 10 8.471 8.471 0 0 1 10 1.538ZM5.385 10a.77.77 0 0 1 .769-.77h5.835l-1.764-1.763a.768.768 0 0 1 .25-1.255.77.77 0 0 1 .838.167l3.077 3.077a.771.771 0 0 1 0 1.088l-3.077 3.077a.77.77 0 0 1-1.088-1.088l1.764-1.764H6.154a.769.769 0 0 1-.77-.769Z"
      />
    </Svg>
  );
}
