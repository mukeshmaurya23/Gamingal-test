import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const DrawerLocationSvg = (props) => (
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
      d="M16.75 18C16.75 16.2051 18.2051 14.75 20 14.75C21.7949 14.75 23.25 16.2051 23.25 18C23.25 19.7949 21.7949 21.25 20 21.25C18.2051 21.25 16.75 19.7949 16.75 18Z"
      fill="#1737AF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7735 16.8774C12.1172 12.7084 15.601 9.5 19.7841 9.5H20.216C24.3991 9.5 27.8829 12.7084 28.2265 16.8774C28.4115 19.122 27.7182 21.3508 26.2925 23.0943L21.4995 28.9561C20.7245 29.9039 19.2756 29.9039 18.5006 28.9561L13.7075 23.0943C12.2819 21.3508 11.5885 19.122 11.7735 16.8774ZM20 13.25C17.3766 13.25 15.25 15.3766 15.25 18C15.25 20.6234 17.3766 22.75 20 22.75C22.6234 22.75 24.75 20.6234 24.75 18C24.75 15.3766 22.6234 13.25 20 13.25Z"
      fill="#1737AF"
    />
  </Svg>
);
export default DrawerLocationSvg;
