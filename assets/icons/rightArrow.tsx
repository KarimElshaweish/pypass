import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const RightArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m9 6 6.368 6.367L9 18.736"
      stroke="#A9A9A9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default RightArrowIcon;
