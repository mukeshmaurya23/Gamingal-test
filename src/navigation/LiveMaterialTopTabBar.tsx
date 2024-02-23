import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "../screens/TopTab/Upcoming";
import Live from "../screens/TopTab/Live";
import Completed from "../screens/TopTab/Completed";
import { moderateScale } from "react-native-size-matters";
import AllLiveContest from "../screens/LiveTabScreens/AllLiveContest";
import MyLiveTeams from "../screens/LiveTabScreens/MyLiveTeams";
import LiveStats from "../screens/LiveTabScreens/LiveStats";
import LiveScoreCard from "../screens/LiveTabScreens/LiveScoreCard";

const Tab = createMaterialTopTabNavigator();

function LiveMaterialTopTabBar() {
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

        tabBarItemStyle: {
          margin: 0,
          padding: 0,
        },
      }}
      backBehavior="none"
    >
      <Tab.Screen name="My Contest" component={AllLiveContest} />
      <Tab.Screen name="My Teams" component={MyLiveTeams} />
      <Tab.Screen name="Stats" component={LiveStats} />
      <Tab.Screen name="Scorecard" component={LiveScoreCard} />
    </Tab.Navigator>
  );
}

export default LiveMaterialTopTabBar;
