import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "../screens/TopTab/Upcoming";
import Live from "../screens/TopTab/Live";
import Completed from "../screens/TopTab/Completed";
import { moderateScale } from "react-native-size-matters";

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: moderateScale(14),
          textTransform: "none",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#AF1A13",
          // height: moderateScale(3),
        },
        tabBarActiveTintColor: "#AF1A13",
        tabBarInactiveTintColor: "#000",
        tabBarPressColor: "transparent",
        tabBarStyle: {
          shadowColor: "transparent",
          elevation: 0,
        },
      }}
      backBehavior="none"
    >
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
