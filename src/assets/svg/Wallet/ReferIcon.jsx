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
const ReferIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_3816)">
      <Rect width={24} height={24} rx={4} fill="url(#paint0_linear_1_3816)" />
      <Path
        d="M18.9041 9.99215L13.075 5.82037C12.9465 5.72868 12.7815 5.71687 12.6424 5.78901C12.5033 5.86031 12.4163 6.00332 12.4163 6.15974V8.2566C8.24705 8.4742 4.92188 11.9415 4.92188 16.172V17.8407C4.92188 18.0488 5.07473 18.2249 5.28052 18.2538C5.47847 18.2827 5.68012 18.1611 5.73834 17.9556L5.80261 17.7303C6.65648 14.7367 9.34087 12.6068 12.4164 12.4292V14.5033C12.4164 14.6597 12.5034 14.8027 12.6425 14.874C12.7815 14.9461 12.9466 14.9335 13.0751 14.8426L18.9041 10.6709C19.0131 10.5926 19.0782 10.4663 19.0782 10.3315C19.0782 10.1966 19.0131 10.0704 18.9041 9.99215Z"
        fill="url(#paint1_linear_1_3816)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_3816"
        x1={12}
        y1={24}
        x2={12}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#ADDCFF" />
        <Stop offset={0.5028} stopColor="#EAF6FF" />
        <Stop offset={1} stopColor="#EAF6FF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_3816"
        x1={12}
        y1={18.258}
        x2={12}
        y2={5.74223}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00C0FF" />
        <Stop offset={1} stopColor="#5558FF" />
      </LinearGradient>
      <ClipPath id="clip0_1_3816">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ReferIcon;
