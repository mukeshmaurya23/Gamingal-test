import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DownSvg = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3977 6.72725C12.6174 6.94692 12.6174 7.30308 12.3977 7.52275L9.39775 10.5227C9.17808 10.7424 8.82192 10.7424 8.60225 10.5227L5.60225 7.52275C5.38258 7.30308 5.38258 6.94692 5.60225 6.72725C5.82192 6.50758 6.17808 6.50758 6.39775 6.72725L9 9.3295L11.6023 6.72725C11.8219 6.50758 12.1781 6.50758 12.3977 6.72725Z"
      fill="#1737AF"
    />
  </Svg>
);
export default DownSvg;
