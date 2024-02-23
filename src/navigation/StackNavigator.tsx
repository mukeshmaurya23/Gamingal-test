import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import VerifyOtp from "../screens/VerifyOtp";

import DrawerNavigator from "./DrawerNavigator";
import { useEffect } from "react";
import { userData } from "../components/utils/AsyncStorageUtil";
const Stack = createStackNavigator();

function StackNavigator() {
  useEffect(() => {
    console.log("useEffect");
    userData.storeInLocalData("token", false);
    userData.storeInLocalData("session", "Guest");
  }, []);

  let token = false;
  let session = "Guest";

  //case 2 --> token true and session user
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
        initialRouteName="DrawerNav"
      >
        {session === "Guest" && !token ? (
          <>
            <Stack.Screen name="DrawerNav" component={DrawerNavigator} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Verify" component={VerifyOtp} />
          </>
        ) : (
          <Stack.Screen name="DrawerNav" component={DrawerNavigator} />
        )}
      </Stack.Navigator>
    </>
  );
}
export default StackNavigator;
