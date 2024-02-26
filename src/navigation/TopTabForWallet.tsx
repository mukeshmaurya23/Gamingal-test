import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Upcoming from "../screens/TopTab/Upcoming";
import Live from "../screens/TopTab/Live";
import Completed from "../screens/TopTab/Completed";
import { moderateScale } from "react-native-size-matters";
import AllContest from "../screens/MatchDetails/AllContest";
import MyContest from "../screens/MatchDetails/MyContest";
import MyTeam from "../screens/MatchDetails/MyTeam";
import MatchDetailsScreen from "../screens/Bottom/MatchDetailsScreen";
import All from "../screens/ProfilePageScreen/ProfileWalletScreen/All";
import Winnings from "../screens/ProfilePageScreen/ProfileWalletScreen/Winnings";
import Recharge from "../screens/ProfilePageScreen/ProfileWalletScreen/Recharge";
import WithDraw from "../screens/ProfilePageScreen/ProfileWalletScreen/WithDraw";

const Tab = createMaterialTopTabNavigator();

function TopTabForWallet() {
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
      {/* <Tab.Screen name="MatchDetailsScreen" component={MatchDetailsScreen} /> */}
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Winnings" component={Winnings} />
      <Tab.Screen name="Recharge" component={Recharge} />
      <Tab.Screen name="WithDraw" component={WithDraw} />
    </Tab.Navigator>
  );
}
export default TopTabForWallet;
