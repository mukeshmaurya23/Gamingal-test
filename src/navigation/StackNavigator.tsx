import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import VerifyOtp from "../screens/VerifyOtp";
import BottomNavigator from "./BottomNavigator";
import DrawerNavigator from "./DrawerNavigator";
import MatchDetailsScreen from "../screens/Bottom/MatchDetailsScreen";
import Notification from "../screens/Notification";
import { StatusBar } from "react-native";
import { useFocusEffect, useNavigationState } from "@react-navigation/native";
import TopTabForDetailsScreen from "./TopTabForDetailsScreen";
import WalletScreen from "../screens/WalletScreen";
import { useEffect, useLayoutEffect } from "react";
import TermsAndCondition from "../screens/DrawerScreenComponent/TermsAndCondition";
import Legality from "../screens/DrawerScreenComponent/Legality";
import Policies from "../screens/DrawerScreenComponent/Policies";
import PrivacyPolicy from "../screens/DrawerScreenComponent/PrivacyPolicy";
import RefundPolicy from "../screens/DrawerScreenComponent/RefundPolicy";
import Rules from "../screens/DrawerScreenComponent/Rules";
import LiveDetails from "../screens/TopTab/LiveDetails";
import MyContextDetails from "../screens/Bottom/MyContextDetails";
import TopTabNavigator from "./TopTabNavigator";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={VerifyOtp} />
        <Stack.Screen name="DrawerNav" component={DrawerNavigator} />

        <Stack.Screen name="MyContextDetails" component={MyContextDetails} />
        <Stack.Screen name="Notification" component={Notification} />

        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
        <Stack.Screen name="Legality" component={Legality} />
        <Stack.Group>
          <Stack.Screen name="Policies" component={Policies} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="RefundPolicy" component={RefundPolicy} />
        </Stack.Group>
        <Stack.Screen name="Rules" component={Rules} />
      </Stack.Navigator>
    </>
  );
}
export default StackNavigator;
