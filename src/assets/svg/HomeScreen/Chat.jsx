import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const Chat = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.385 6.45739H7.3425C6.78176 6.45802 6.24416 6.68105 5.84766 7.07755C5.45115 7.47405 5.22812 8.01165 5.2275 8.57239V15.8061C5.22797 16.3673 5.45084 16.9053 5.84727 17.3025C6.2437 17.6996 6.78137 17.9234 7.3425 17.9249H13.4437C13.7687 17.9245 14.0901 17.9916 14.3877 18.122C14.6853 18.2524 14.9526 18.4432 15.1725 18.6824L17.8612 21.6036C17.9534 21.7038 18.0652 21.7838 18.1898 21.8387C18.3143 21.8935 18.4489 21.922 18.585 21.9224C18.7081 21.9222 18.8302 21.8993 18.945 21.8549C19.1312 21.7832 19.2911 21.6565 19.4037 21.4918C19.5162 21.327 19.5759 21.1319 19.575 20.9324V18.6674C19.5757 18.47 19.6546 18.281 19.7945 18.1418C19.9344 18.0026 20.1239 17.9246 20.3212 17.9249H20.385C20.9461 17.9234 21.4838 17.6996 21.8802 17.3025C22.2767 16.9053 22.4995 16.3673 22.5 15.8061V8.57239C22.4994 8.01165 22.2763 7.47406 21.8798 7.07755C21.4833 6.68105 20.9457 6.45802 20.385 6.45739ZM8.61 9.67864H15.4425C15.542 9.67864 15.6373 9.71815 15.7077 9.78848C15.778 9.8588 15.8175 9.95419 15.8175 10.0536C15.8175 10.1531 15.778 10.2485 15.7077 10.3188C15.6373 10.3891 15.542 10.4286 15.4425 10.4286H8.61C8.51054 10.4286 8.41516 10.3891 8.34484 10.3188C8.27451 10.2485 8.235 10.1531 8.235 10.0536C8.235 9.95419 8.27451 9.8588 8.34484 9.78848C8.41516 9.71815 8.51054 9.67864 8.61 9.67864ZM19.1213 14.7036H8.61C8.51054 14.7036 8.41516 14.6641 8.34484 14.5938C8.27451 14.5235 8.235 14.4281 8.235 14.3286C8.235 14.2292 8.27451 14.1338 8.34484 14.0635C8.41516 13.9932 8.51054 13.9536 8.61 13.9536H19.1213C19.2207 13.9536 19.3161 13.9932 19.3864 14.0635C19.4567 14.1338 19.4963 14.2292 19.4963 14.3286C19.4963 14.4281 19.4567 14.5235 19.3864 14.5938C19.3161 14.6641 19.2207 14.7036 19.1213 14.7036ZM4.4775 8.57239V13.5449H3.615C3.05387 13.5434 2.5162 13.3196 2.11978 12.9225C1.72335 12.5253 1.50048 11.9873 1.5 11.4261V4.19239C1.50063 3.63165 1.72366 3.09406 2.12016 2.69755C2.51666 2.30105 3.05426 2.07802 3.615 2.07739H16.6575C17.2182 2.07801 17.7558 2.30104 18.1523 2.69755C18.5488 3.09405 18.7719 3.63165 18.7725 4.19239V5.70739H7.3425C6.58302 5.7086 5.855 6.01083 5.31797 6.54786C4.78094 7.08489 4.4787 7.81292 4.4775 8.57239Z"
      fill="url(#paint0_linear_1_383)"
    />
    <Path
      d="M20.385 6.45739H7.3425C6.78176 6.45802 6.24416 6.68105 5.84766 7.07755C5.45115 7.47405 5.22812 8.01165 5.2275 8.57239V15.8061C5.22797 16.3673 5.45084 16.9053 5.84727 17.3025C6.2437 17.6996 6.78137 17.9234 7.3425 17.9249H13.4437C13.7687 17.9245 14.0901 17.9916 14.3877 18.122C14.6853 18.2524 14.9526 18.4432 15.1725 18.6824L17.8612 21.6036C17.9534 21.7038 18.0652 21.7838 18.1898 21.8387C18.3143 21.8935 18.4489 21.922 18.585 21.9224C18.7081 21.9222 18.8302 21.8993 18.945 21.8549C19.1312 21.7832 19.2911 21.6565 19.4037 21.4918C19.5162 21.327 19.5759 21.1319 19.575 20.9324V18.6674C19.5757 18.47 19.6546 18.281 19.7945 18.1418C19.9344 18.0026 20.1239 17.9246 20.3212 17.9249H20.385C20.9461 17.9234 21.4838 17.6996 21.8802 17.3025C22.2767 16.9053 22.4995 16.3673 22.5 15.8061V8.57239C22.4994 8.01165 22.2763 7.47406 21.8798 7.07755C21.4833 6.68105 20.9457 6.45802 20.385 6.45739ZM8.61 9.67864H15.4425C15.542 9.67864 15.6373 9.71815 15.7077 9.78848C15.778 9.8588 15.8175 9.95419 15.8175 10.0536C15.8175 10.1531 15.778 10.2485 15.7077 10.3188C15.6373 10.3891 15.542 10.4286 15.4425 10.4286H8.61C8.51054 10.4286 8.41516 10.3891 8.34484 10.3188C8.27451 10.2485 8.235 10.1531 8.235 10.0536C8.235 9.95419 8.27451 9.8588 8.34484 9.78848C8.41516 9.71815 8.51054 9.67864 8.61 9.67864ZM19.1213 14.7036H8.61C8.51054 14.7036 8.41516 14.6641 8.34484 14.5938C8.27451 14.5235 8.235 14.4281 8.235 14.3286C8.235 14.2292 8.27451 14.1338 8.34484 14.0635C8.41516 13.9932 8.51054 13.9536 8.61 13.9536H19.1213C19.2207 13.9536 19.3161 13.9932 19.3864 14.0635C19.4567 14.1338 19.4963 14.2292 19.4963 14.3286C19.4963 14.4281 19.4567 14.5235 19.3864 14.5938C19.3161 14.6641 19.2207 14.7036 19.1213 14.7036ZM4.4775 8.57239V13.5449H3.615C3.05387 13.5434 2.5162 13.3196 2.11978 12.9225C1.72335 12.5253 1.50048 11.9873 1.5 11.4261V4.19239C1.50063 3.63165 1.72366 3.09406 2.12016 2.69755C2.51666 2.30105 3.05426 2.07802 3.615 2.07739H16.6575C17.2182 2.07801 17.7558 2.30104 18.1523 2.69755C18.5488 3.09405 18.7719 3.63165 18.7725 4.19239V5.70739H7.3425C6.58302 5.7086 5.855 6.01083 5.31797 6.54786C4.78094 7.08489 4.4787 7.81292 4.4775 8.57239Z"
      fill="url(#paint1_linear_1_383)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_383"
        x1={1.5}
        y1={11.9999}
        x2={22.5}
        y2={11.9999}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF81FF" />
        <Stop offset={1} stopColor="#A93AFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_383"
        x1={1.5}
        y1={11.9999}
        x2={22.4784}
        y2={11.9999}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF7D7D" />
        <Stop offset={1} stopColor="#F36B41" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Chat;
