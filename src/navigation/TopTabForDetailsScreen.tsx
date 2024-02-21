import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "../screens/TopTab/Upcoming";
import Live from "../screens/TopTab/Live";
import Completed from "../screens/TopTab/Completed";
import { moderateScale } from "react-native-size-matters";
import AllContest from "../screens/MatchDetails/AllContest";
import MyContest from "../screens/MatchDetails/MyContest";
import MyTeam from "../screens/MatchDetails/MyTeam";
import MatchDetailsScreen from "../screens/Bottom/MatchDetailsScreen";

const Tab = createMaterialTopTabNavigator();

function TopTabForDetailsScreen() {
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
      {/* <Tab.Screen name="MatchDetailsScreen" component={MatchDetailsScreen} /> */}
      <Tab.Screen name="AllContest" component={AllContest} />
      <Tab.Screen name="MyContest" component={MyContest} />
      <Tab.Screen name="MyTeam" component={MyTeam} />
    </Tab.Navigator>
  );
}
export default TopTabForDetailsScreen;
