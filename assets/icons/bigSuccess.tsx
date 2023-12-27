import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BigSuccessIcon = (props: SvgProps) => (
  <Svg width={78} height={78} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M52.658 8.347a33.558 33.558 0 1 0 19.9 30.672v-3.336a2.72 2.72 0 0 1 5.442 0v3.338A39.005 39.005 0 0 1 50.058 76.4a39 39 0 1 1 4.815-73.024 2.721 2.721 0 0 1-2.215 4.971Z"
      fill="#18AF7C"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M77.211 7.305a2.8 2.8 0 0 1 .002 3.894L41.351 47.943a2.659 2.659 0 0 1-1.902.807c-.714 0-1.398-.29-1.903-.806L26.788 36.93a2.8 2.8 0 0 1 0-3.893 2.646 2.646 0 0 1 3.803 0l8.856 9.065 33.96-34.796a2.646 2.646 0 0 1 3.804-.002Z"
      fill="#18AF7C"
    />
  </Svg>
);

export default BigSuccessIcon;
