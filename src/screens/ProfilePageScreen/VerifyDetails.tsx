import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import InputComponent from "../../components/InputComponent";
import { moderateScale } from "react-native-size-matters";
import GreenTickSvg from "../../assets/svg/ProfileScreenSvg/GreenTickSvg";
import PhoneSvg from "../../assets/svg/ProfileScreenSvg/PhoneSvg";
import EmailSvg from "../../assets/svg/ProfileScreenSvg/EmailSvg";
import UserVerificationSvg from "../../assets/svg/ProfileScreenSvg/UserVerificationSvg";

const VerifyDetails = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <TopBar
        label="Verify"
        headText="Details"
        navigation={navigation}
        goToMainScreen={true}
        icon={LeftArrow2}
        hideBellAndWallet={true}
      />

      <ScrollView
        style={{
          // backgroundColor: "white",
          // height: "100%",
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScale(16),
        }}
      >
        <InputComponent
          label="Mobile Number"
          placeHolder="+91 8976310983"
          keyBoardType="phone-pad"
          value=""
          rootStyle={{
            paddingTop: moderateScale(10),
          }}
          labelStyle={{
            color: "#12171D",
            marginBottom: moderateScale(10),
          }}
          onChangeText={() => {}}
          leftIcon={PhoneSvg}
          onPress={() => {}}
          isVerified={false}
          verificationComponent={true}
        />
        <InputComponent
          label="Email"
          placeHolder="demo7862018@gmail.com"
          keyBoardType="default"
          value=""
          rootStyle={{
            paddingTop: moderateScale(10),
          }}
          labelStyle={{
            color: "#12171D",
            marginBottom: moderateScale(10),
          }}
          onChangeText={() => {}}
          leftIcon={EmailSvg}
          onPress={() => {}}
          isVerified={true}
          verificationComponent={true}
        />

        <InputComponent
          label="Adhar Card"
          placeHolder="Adhar Card"
          keyBoardType="numeric"
          value=""
          rootStyle={{
            paddingTop: moderateScale(10),
          }}
          labelStyle={{
            color: "#12171D",
            marginBottom: moderateScale(10),
          }}
          onChangeText={() => {}}
          leftIcon={UserVerificationSvg}
          onPress={() => {}}
          isVerified={false}
          verificationComponent={true}
        />
        <InputComponent
          label="Pan Card"
          placeHolder="Pan Card"
          keyBoardType="default"
          verificationComponent={true}
          value=""
          rootStyle={{
            paddingTop: moderateScale(10),
          }}
          labelStyle={{
            color: "#12171D",
            marginBottom: moderateScale(10),
          }}
          onChangeText={() => {}}
          leftIcon={UserVerificationSvg}
          onPress={() => {}}
          isVerified={false}
        />
        <InputComponent
          verificationComponent={true}
          label="Bank Details"
          placeHolder="Bank Details"
          keyBoardType="default"
          value=""
          rootStyle={{
            paddingTop: moderateScale(10),
          }}
          labelStyle={{
            color: "#12171D",
            marginBottom: moderateScale(10),
          }}
          onChangeText={() => {}}
          leftIcon={UserVerificationSvg}
          onPress={() => {}}
          isVerified={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyDetails;

const styles = StyleSheet.create({});
