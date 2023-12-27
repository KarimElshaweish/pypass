import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const HonorIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      stroke="#A9A9A9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"
      stroke="#A9A9A9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HonorIcon;
