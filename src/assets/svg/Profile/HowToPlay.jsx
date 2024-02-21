import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const HowToPlay = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_4062)">
      <Rect width={24} height={24} rx={4} fill="url(#paint0_linear_1_4062)" />
      <Rect width={24} height={24} rx={4} fill="url(#paint1_linear_1_4062)" />
      <Path
        d="M13.638 4.92188C10.6383 4.92188 8.19779 7.36242 8.19779 10.362C8.19779 11.7115 8.69462 12.9452 9.51123 13.897L8.94236 14.4659L8.64648 14.17C8.48303 14.0066 8.21818 14.0066 8.05473 14.17L5.04446 17.1803C4.88101 17.3438 4.88101 17.6086 5.04446 17.772L6.22797 18.9555C6.39142 19.119 6.65626 19.119 6.81971 18.9555L9.82998 15.9453C9.99343 15.7818 9.99343 15.517 9.82998 15.3535L9.53411 15.0577L10.103 14.4888C11.0548 15.3054 12.2885 15.8022 13.638 15.8022C16.6376 15.8022 19.0781 13.3617 19.0781 10.362C19.0781 7.36242 16.6376 4.92188 13.638 4.92188ZM13.638 13.2914C13.4069 13.2914 13.2195 13.104 13.2195 12.873C13.2195 12.6418 13.4069 12.4545 13.638 12.4545C13.8691 12.4545 14.0564 12.6418 14.0564 12.873C14.0564 13.104 13.8691 13.2914 13.638 13.2914ZM14.4124 10.5901C14.1929 10.7053 14.0564 10.9305 14.0564 11.1781C14.0564 11.4095 13.8692 11.6072 13.638 11.6072C13.4066 11.6072 13.2195 11.4303 13.2195 11.199C13.2195 10.6186 13.5277 10.1091 14.0237 9.84872C14.3025 9.70322 14.4749 9.41878 14.4749 9.10659C14.4749 8.6452 14.0994 8.26964 13.638 8.26964C13.1766 8.26964 12.801 8.6452 12.801 9.10659C12.801 9.33792 12.6138 9.52505 12.3826 9.52505C12.1513 9.52505 11.9641 9.33787 11.9641 9.10659C11.9641 8.18339 12.7148 7.43269 13.638 7.43269C14.5612 7.43269 15.3119 8.18339 15.3119 9.10659C15.3119 9.73148 14.9669 10.2999 14.4124 10.5901Z"
        fill="url(#paint2_linear_1_4062)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_4062"
        x1={12}
        y1={24}
        x2={12}
        y2={-3.99998}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#ADDCFF" />
        <Stop offset={0.5028} stopColor="#EAF6FF" />
        <Stop offset={1} stopColor="#EAF6FF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_4062"
        x1={12}
        y1={24}
        x2={12}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE59A" />
        <Stop offset={1} stopColor="#FFFFD5" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1_4062"
        x1={12}
        y1={19.0781}
        x2={12}
        y2={4.92187}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDE00" />
        <Stop offset={1} stopColor="#FD5900" />
      </LinearGradient>
      <ClipPath id="clip0_1_4062">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HowToPlay;
