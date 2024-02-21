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
const ProfileSmallIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_3978)">
      <Rect width={24} height={24} rx={4} fill="url(#paint0_linear_1_3978)" />
      <Path
        d="M15.3728 8.20561C15.3728 6.34589 13.8597 4.80469 12 4.80469C10.1403 4.80469 8.62723 6.34584 8.62723 8.20561C8.62723 10.0654 10.1403 11.5784 12 11.5784C13.8597 11.5784 15.3728 10.0653 15.3728 8.20561Z"
        fill="url(#paint1_linear_1_3978)"
      />
      <Path
        d="M5.67603 18.7738C5.67603 19.0068 5.8646 19.1954 6.09762 19.1954H17.9024C18.1354 19.1954 18.324 19.0068 18.324 18.7738C18.324 15.2865 15.4873 12.4216 12 12.4216C8.51276 12.4216 5.67603 15.2865 5.67603 18.7738Z"
        fill="url(#paint2_linear_1_3978)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_3978"
        x1={12}
        y1={24}
        x2={12}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFEDAD" />
        <Stop offset={1} stopColor="#FFFFE5" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_3978"
        x1={12}
        y1={19.1925}
        x2={12}
        y2={4.60439}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEBA00" />
        <Stop offset={1} stopColor="#FD5900" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1_3978"
        x1={12}
        y1={19.1954}
        x2={12}
        y2={4.60719}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FEBA00" />
        <Stop offset={1} stopColor="#FD5900" />
      </LinearGradient>
      <ClipPath id="clip0_1_3978">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProfileSmallIcon;
