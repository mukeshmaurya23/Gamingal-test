import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import React from "react";
import StackNavigator from "./StackNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { StatusBar } from "react-native";

function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={"#AF1A13"} />
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
