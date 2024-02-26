import * as React from "react";
import Svg, { Rect, Circle, G, Path, Defs, ClipPath } from "react-native-svg";
const YouTubeSvg = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1}
      y={1}
      width={38}
      height={38}
      rx={19}
      stroke="#FAF9F5"
      strokeWidth={2}
    />
    <Circle cx={20} cy={20} r={18} fill="#FF0000" />
    <G clipPath="url(#clip0_266_6555)">
      <Path
        d="M32.4479 13.8075C32.3045 13.2649 32.0248 12.7701 31.6366 12.3726C31.2484 11.9751 30.7653 11.6887 30.2354 11.5418C28.2953 11 20.4873 11 20.4873 11C20.4873 11 12.6789 11.0164 10.7389 11.5582C10.209 11.7051 9.72584 11.9915 9.33766 12.3891C8.94948 12.7866 8.66977 13.2813 8.52639 13.824C7.93957 17.3538 7.71193 22.7324 8.5425 26.121C8.6859 26.6636 8.96561 27.1584 9.35379 27.5559C9.74198 27.9534 10.2251 28.2398 10.755 28.3867C12.695 28.9285 20.5032 28.9285 20.5032 28.9285C20.5032 28.9285 28.3113 28.9285 30.2513 28.3867C30.7812 28.2399 31.2644 27.9534 31.6526 27.5559C32.0408 27.1584 32.3205 26.6637 32.4639 26.121C33.0828 22.5862 33.2736 17.2109 32.4479 13.8075Z"
        fill="white"
      />
      <Path
        d="M18.0021 23.8059L24.4794 19.9641L18.0021 16.1223V23.8059Z"
        fill="#FF0000"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_266_6555">
        <Rect width={25} height={18} fill="white" transform="translate(8 11)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default YouTubeSvg;
