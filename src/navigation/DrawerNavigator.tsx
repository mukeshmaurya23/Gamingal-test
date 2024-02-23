import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../screens/Bottom/DrawerScreen";
import Profile from "../screens/Bottom/Profile";
import StackNavigator from "./StackNavigator";
import TermsAndCondition from "../screens/DrawerScreenComponent/TermsAndCondition";
import BottomNavigator from "./BottomNavigator";
import LiveDetails from "../screens/TopTab/LiveDetails";
import MatchDetailsScreen from "../screens/Bottom/MatchDetailsScreen";
import Notification from "../screens/Notification";
import Rules from "../assets/svg/Rules";
import RefundPolicy from "../screens/DrawerScreenComponent/RefundPolicy";
import PrivacyPolicy from "../screens/DrawerScreenComponent/PrivacyPolicy";
import Legality from "../assets/svg/Legality";
import WalletScreen from "../screens/WalletScreen";
import MyContextDetails from "../screens/Bottom/MyContextDetails";
import PolicyScreen from "../screens/DrawerScreenComponent/PolicyScreen";
import RulesScreen from "../screens/DrawerScreenComponent/Rules";
import LegalityScreen from "../screens/DrawerScreenComponent/Legality";

const Drawer = createDrawerNavigator();

function DrawerNavigator({ route, navigation }: any) {
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

      <Drawer.Screen name="MyContextDetails" component={MyContextDetails} />
      <Drawer.Screen name="LiveDetails" component={LiveDetails} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Wallet" component={WalletScreen} />

      <Drawer.Screen name="Policies" component={PolicyScreen} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="RefundPolicy" component={RefundPolicy} />

      <Drawer.Screen name="Rules" component={RulesScreen} />
      <Drawer.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Drawer.Screen name="Legality" component={LegalityScreen} />

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
