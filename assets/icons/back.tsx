import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M21.265 11.633H2M11.633 21.265 2 11.632 11.633 2"
      stroke="#3E3E3E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
