import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const StartIcon = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.936 4.607A1.04 1.04 0 0 0 12 4c-.397 0-.76.236-.936.607L9.157 8.643l-4.264.65c-.393.06-.72.349-.842.743-.123.395-.02.828.264 1.117l3.086 3.139-.729 4.434c-.067.409.094.822.416 1.066.321.244.747.276 1.099.083L12 17.78l3.813 2.095c.352.193.778.16 1.1-.083.32-.244.482-.657.415-1.066l-.729-4.434 3.086-3.139c.284-.29.387-.722.264-1.117a1.057 1.057 0 0 0-.842-.742l-4.264-.651-1.907-4.036Z"
      fill="#FD9942"
    />
  </Svg>
);

export default StartIcon;
