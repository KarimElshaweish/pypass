import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const GreenRightArrow = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="m9 6 6.367 6.367L9 18.736"
      stroke="#00A76E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default GreenRightArrow;
