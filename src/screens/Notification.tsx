import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import Cup from "../assets/svg/Cup";
import { moderateScale } from "react-native-size-matters";
import Flag from "../assets/svg/Flag";
import HamBurger from "../assets/svg/HamBurger";
import LeftArrow2 from "../assets/svg/LeftArrow2";

const NotificationConatiner = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        margin: moderateScale(10),
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(10),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: moderateScale(10),
        }}
      >
        <Cup />
        <Text
          style={{
            color: "black",
            fontSize: moderateScale(14),
          }}
        >
          Congratulations! You are winner in the SA v IND match
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          width: "100%",
          borderTopColor: "#ccc",
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          marginTop: moderateScale(15),
          paddingVertical: moderateScale(5),
        }}
      />
      <View
        style={{
          alignSelf: "flex-end",
          flexDirection: "row",
          gap: moderateScale(5),
        }}
      >
        <Text
          style={{
            fontSize: moderateScale(12),
          }}
        >
          13 Jan
        </Text>
        <View
          style={{
            height: moderateScale(20),
            width: moderateScale(1),
            backgroundColor: "#ccc",
          }}
        ></View>
        <Text
          style={{
            fontSize: moderateScale(12),
          }}
        >
          9.00 am
        </Text>
      </View>
    </View>
  );
};

const Notification = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <TopBar
        navigation={navigation}
        headText="Notification"
        label="Explore"
        icon={LeftArrow2}
      />
      <NotificationConatiner />
      <NotificationConatiner />
      <NotificationConatiner />
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({});
