import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const DrawerEmailSvg = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={39} height={39} rx={19.5} stroke="#1737AF" />
    <Path
      d="M15.2892 12.9075C18.4239 12.635 21.5763 12.635 24.7109 12.9075L26.2211 13.0388C27.2265 13.1262 28.0876 13.7258 28.5337 14.5836C28.5908 14.6934 28.548 14.8262 28.4428 14.8913L22.1769 18.7702C20.833 19.6022 19.1385 19.6196 17.7778 18.8156L11.47 15.0882C11.368 15.028 11.3213 14.904 11.3672 14.7949C11.7753 13.8254 12.693 13.1332 13.779 13.0388L15.2892 12.9075Z"
      fill="#1737AF"
    />
    <Path
      d="M11.3621 16.7668C11.2061 16.6746 11.0071 16.7738 10.9889 16.954C10.7352 19.4697 10.7966 22.0091 11.1731 24.5132C11.3717 25.8333 12.4491 26.8454 13.779 26.961L15.2892 27.0923C18.4239 27.3647 21.5763 27.3647 24.7109 27.0923L26.2211 26.961C27.5511 26.8454 28.6285 25.8333 28.827 24.5132C29.2145 21.9361 29.2683 19.3216 28.9882 16.7342C28.9686 16.5526 28.7662 16.4553 28.611 16.5514L22.9664 20.0456C21.1482 21.1712 18.8557 21.1948 17.0147 20.1069L11.3621 16.7668Z"
      fill="#1737AF"
    />
  </Svg>
);
export default DrawerEmailSvg;