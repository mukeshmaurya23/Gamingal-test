import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import PolicesIcon from "../../assets/svg/Policies";
import TopBar from "../../components/TopBar";
import ProfileFieldCommonContainer from "../../components/ProfileFieldCommonContainer";
import BluePoliciesIcon from "../../assets/svg/BluePoliciesIcon";

const PolicyScreen = ({ navigation }: any) => {
  return (
    <>
      <TopBar
        label="Explore"
        headText="Policies"
        navigation={navigation}
        icon={LeftArrow2}
        hideBellAndWallet={true}
      />
      <View
        style={{
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScale(16),
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: moderateScale(14),
            fontFamily: "Poppins-Regular",
            color: "black",
            //  fontWeight: "bold",
          }}
        >
          Policies
        </Text>
        <ProfileFieldCommonContainer
          title="Privacy policy"
          description="Invite your friends and win exiciting rewards"
          icon={BluePoliciesIcon}
          showArrow={true}
          showBottomBorder={true}
          onPress={() => navigation.navigate("PrivacyPolicy")}
          rootStyle={{
            marginTop: moderateScale(20),
            marginBottom: moderateScale(10),
            alignItems: "center",
          }}
        />
        <ProfileFieldCommonContainer
          title="Refund policy"
          description="Invite your friends and win exiciting rewards"
          icon={BluePoliciesIcon}
          showArrow={true}
          showBottomBorder={false}
          onPress={() => navigation.navigate("RefundPolicy")}
          rootStyle={{
            marginTop: moderateScale(20),
            alignItems: "center",
          }}
        />
      </View>
    </>
  );
};

export default PolicyScreen;

const styles = StyleSheet.create({});
