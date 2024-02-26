import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "../screens/TopTab/Upcoming";
import Live from "../screens/TopTab/Live";
import Completed from "../screens/TopTab/Completed";
import { moderateScale } from "react-native-size-matters";
import AllContest from "../screens/MatchDetails/AllContest";
import MyContest from "../screens/MatchDetails/MyContest";
import MyTeam from "../screens/MatchDetails/MyTeam";
import MatchDetailsScreen from "../screens/Bottom/MatchDetailsScreen";
import Test from "../screens/RulesTab/Test";
import ODI from "../screens/RulesTab/ODI";
import T20 from "../screens/RulesTab/T20";
import T10 from "../screens/RulesTab/T10";

const Tab = createMaterialTopTabNavigator();

function RulesTabNavigator() {
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
          elevation: 2,
        },
        animationEnabled: false,
      }}
    >
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="ODI" component={ODI} />
      <Tab.Screen name="T20" component={T20} />
      <Tab.Screen name="T10" component={T10} />
    </Tab.Navigator>
  );
}
export default RulesTabNavigator;
