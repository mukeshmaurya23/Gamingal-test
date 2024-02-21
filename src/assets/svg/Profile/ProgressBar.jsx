import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const ProgressBar = (props) => (
  <Svg
    width={296}
    height={8}
    viewBox="0 0 296 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect opacity={0.05} width={296} height={8} rx={2} fill="#1737AF" />
  </Svg>
);
export default ProgressBar;
