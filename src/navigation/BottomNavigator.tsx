import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Bottom/HomeScreen";
import MyContext from "../screens/Bottom/MyContext";

import Profile from "../screens/Bottom/Profile";
import { moderateScale } from "react-native-size-matters";
import Home from "../assets/svg/Home";
import Context from "../assets/svg/Context";
import Promo2 from "../assets/svg/Promo";
import Promo from "../screens/Bottom/Promo";
import Profile2 from "../assets/svg/Profile";
import { StatusBar, View } from "react-native";
import TopTabNavigator from "./TopTabNavigator";
import TopBar from "../components/TopBar";
import HamBurger from "../assets/svg/HamBurger";
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <>
                    {focused && (
                      <View
                        style={{
                          borderTopWidth: 2,
                          borderTopColor: "#AF1A13",

                          width: moderateScale(40),
                          position: "absolute",
                          top: 0,

                          //marginBottom: moderateScale(10),
                          // paddingBottom: moderateScale(10),
                        }}
                      />
                    )}

                    <Home active={focused} style={{}} />
                  </>
                );
              } else if (route.name === "MyContext") {
                return (
                  <>
                    {focused && (
                      <View
                        style={{
                          borderTopWidth: 2,
                          borderTopColor: "#AF1A13",
                          width: moderateScale(40),
                          position: "absolute",
                          top: 0,
                          // paddingBottom: moderateScale(10),
                        }}
                      />
                    )}
                    <Context active={focused} />
                  </>
                );
              } else if (route.name === "Promo") {
                return (
                  <>
                    {focused && (
                      <View
                        style={{
                          borderTopWidth: 2,
                          borderTopColor: "#AF1A13",
                          position: "absolute",
                          top: 0,
                          // paddingBottom: moderateScale(10),
                          width: moderateScale(40),
                        }}
                      />
                    )}
                    <Promo2 active={focused} />
                  </>
                );
              } else if (route.name === "Profile") {
                return (
                  <>
                    {focused && (
                      <View
                        style={{
                          borderTopWidth: 2,
                          //paddingBottom: moderateScale(10),
                          borderTopColor: "#AF1A13",
                          position: "absolute",
                          top: 0,
                          width: moderateScale(40),
                        }}
                      />
                    )}
                    <Profile2 active={focused} />
                  </>
                );
              }
            },

            tabBarActiveTintColor: "#AF1A13",
            keyboardHidesTabBar: true,
            tabBarLabelStyle: {
              fontSize: moderateScale(12),
            },
            tabBarStyle: {
              elevation: 0,

              //paddingVertical: moderateScale(16),
              //height: moderateScale(60),
              shadowColor: "transparent",
              borderTopWidth: 0,
            },
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="MyContext"
          component={TopTabNavigator}
          options={{
            header: ({ navigation }) => (
              <TopBar
                navigation={navigation}
                label="Explore"
                headText="My Context"
                icon={HamBurger}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Promo"
          component={Promo}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
export default BottomNavigator;
