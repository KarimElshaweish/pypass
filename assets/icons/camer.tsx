import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const CamerIcon = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke="#FAFAFA"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21.083 17.417a1.833 1.833 0 0 1-1.833 1.833H2.75a1.833 1.833 0 0 1-1.833-1.833V7.333A1.833 1.833 0 0 1 2.75 5.5h3.667L8.25 2.75h5.5l1.833 2.75h3.667a1.833 1.833 0 0 1 1.833 1.833v10.084Z" />
      <Path d="M11 15.583a3.667 3.667 0 1 0 0-7.333 3.667 3.667 0 0 0 0 7.333Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CamerIcon;
