import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const TwitterSvg = (props) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="black" />
    <Path
      d="M23.9875 8H27.2969L20.0688 16.2594L28.5719 27.5H21.9156L16.6984 20.6844L10.7359 27.5H7.42188L15.1516 18.6641L7 8H13.825L18.5359 14.2297L23.9875 8ZM22.825 25.5219H24.6578L12.8266 9.875H10.8578L22.825 25.5219Z"
      fill="white"
    />
  </Svg>
);
export default TwitterSvg;
