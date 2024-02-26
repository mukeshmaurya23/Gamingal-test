import { createStackNavigator } from "@react-navigation/stack";
import VerifyDetails from "../screens/ProfilePageScreen/VerifyDetails";
import EditProfile from "../screens/ProfilePageScreen/EditProfile";
import Profile from "../screens/Bottom/Profile";
import Settings from "../screens/ProfilePageScreen/Settings";
import HowToPlay from "../assets/svg/Profile/HowToPlay";
import HowToPlayScreen from "../screens/ProfilePageScreen/HowToPlayScreen";
import ProfileWallet from "../screens/ProfilePageScreen/ProfileWallet";

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="VerifyDetails" component={VerifyDetails} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HowToPlay" component={HowToPlayScreen} />
      <Stack.Screen name="ProfileWallet" component={ProfileWallet} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
