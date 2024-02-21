import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import Wallet from "../assets/svg/Wallet";
import BellIcon from "../assets/svg/BellIcon";
import HamBurger from "../assets/svg/HamBurger";
import { moderateScale } from "react-native-size-matters";
import fontStyles from "../styles/font-styles";

interface TopBarProps {
  label: string;
  headText: string;
  navigation: any;
  rootStyle?: ViewStyle;
}
const TopBar = (props: any) => {
  const { label, navigation, headText, icon, rootStyle, hideBellAndWallet } =
    props;
  console.log(icon.name, "icon");
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: moderateScale(20),
          paddingVertical: moderateScale(20),
          backgroundColor: "#AF1A13",
        },
        rootStyle,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          gap: moderateScale(20),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={
            icon?.name === "HamBurger"
              ? () => navigation.openDrawer()
              : () => navigation.goBack()
          }
        >
          {/* <HamBurger /> */}
          {React.createElement(icon)}
        </TouchableOpacity>
        <View style={{}}>
          <Text
            style={[
              fontStyles.poppinsRegular14,
              {
                color: "#E6EDF5",
              },
            ]}
          >
            {label}
          </Text>
          <Text
            style={{
              color: "#F9F2F2",
              paddingVertical: moderateScale(5),
              fontWeight: "bold",
              fontSize: moderateScale(18),
              letterSpacing: moderateScale(0.5),
            }}
          >
            {headText}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: moderateScale(20),
        }}
      >
        {hideBellAndWallet ? null : (
          <>
            <Pressable onPress={() => navigation.navigate("Wallet")}>
              <Wallet />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Notification")}>
              <BellIcon />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
