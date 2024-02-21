import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../screens/Bottom/DrawerScreen";
import Profile from "../screens/Bottom/Profile";
import StackNavigator from "./StackNavigator";
import TermsAndCondition from "../screens/DrawerScreenComponent/TermsAndCondition";
import BottomNavigator from "./BottomNavigator";
import LiveDetails from "../screens/TopTab/LiveDetails";
import MatchDetailsScreen from "../screens/Bottom/MatchDetailsScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <DrawerScreen props={props} navigation={props.navigation} />;
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
        headerTintColor: "black",
        drawerLabelStyle: {
          color: "black",
          fontSize: 14,
        },
      }}
    >
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomNavigator}
        // options={{
        //   drawerItemStyle: { display: "none" },
        // }}
      />
      <Drawer.Screen name="MatchDetails" component={MatchDetailsScreen} />

      {/* <Drawer.Screen
        name="AppBottomNavigator"
        component={AppBottomNavigator}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
