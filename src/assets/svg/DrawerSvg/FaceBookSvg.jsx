import * as React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
const FaceBookSvg = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_266_6560)">
      <Path
        d="M38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0588 2 20C2 28.9842 8.58237 36.431 17.1875 37.7813V25.2031H12.6172V20H17.1875V16.0344C17.1875 11.5231 19.8748 9.03125 23.9863 9.03125C25.9557 9.03125 28.0156 9.38281 28.0156 9.38281V13.8125H25.7459C23.5097 13.8125 22.8125 15.2 22.8125 16.6236V20H27.8047L27.0066 25.2031H22.8125V37.7813C31.4176 36.431 38 28.9844 38 20Z"
        fill="#1877F2"
      />
      <Path
        d="M27.0066 25.2031L27.8047 20H22.8125V16.6236C22.8125 15.1999 23.5099 13.8125 25.7459 13.8125H28.0156V9.38281C28.0156 9.38281 25.9558 9.03125 23.9863 9.03125C19.8748 9.03125 17.1875 11.5231 17.1875 16.0344V20H12.6172V25.2031H17.1875V37.7813C18.1179 37.9271 19.0582 38.0002 20 38C20.9418 38.0003 21.8821 37.9272 22.8125 37.7813V25.2031H27.0066Z"
        fill="white"
      />
    </G>
    <Rect
      x={1}
      y={1}
      width={38}
      height={38}
      rx={19}
      stroke="#FAF9F5"
      strokeWidth={2}
    />
    <Defs>
      <ClipPath id="clip0_266_6560">
        <Rect x={2} y={2} width={36} height={36} rx={18} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FaceBookSvg;
