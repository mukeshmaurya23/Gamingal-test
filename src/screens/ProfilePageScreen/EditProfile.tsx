import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import TopBar from "../../components/TopBar";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import UploadSvg from "../../assets/svg/ProfileScreenSvg/UploadSvg";
import EmailSvg from "../../assets/svg/ProfileScreenSvg/EmailSvg";
import InputComponent from "../../components/InputComponent";
import PhoneSvg from "../../assets/svg/ProfileScreenSvg/PhoneSvg";
import UserSvg from "../../assets/svg/ProfileScreenSvg/UserSvg";
import DownSvg from "../../assets/svg/ProfileScreenSvg/DownSvg";

const EditProfile = ({ navigation }: any) => {
  return (
    <>
      <TopBar
        label="Explore"
        headText="Edit Profile"
        navigation={navigation}
        icon={LeftArrow2}
        goToMainScreen={true}
        hideBellAndWallet={true}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            backgroundColor: "white",
            paddingHorizontal: moderateScale(16),
            paddingVertical: moderateScale(16),
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfileIcon />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: "row",
                columnGap: moderateScale(10),
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#1737AF",
                borderRadius: moderateScale(50),
                paddingHorizontal: moderateScale(8),
                marginTop: moderateScale(10),
                paddingVertical: moderateScale(5),
              }}
            >
              <UploadSvg />
              <Text
                style={{
                  color: "#1737AF",
                }}
              >
                Upload Image
              </Text>
            </TouchableOpacity>
            {/* <Image source={require("../../assets/images/ProfileImage.png")} /> */}
          </View>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: "#ccc",

              marginTop: moderateScale(20),
            }}
          />
          <View
            style={{
              paddingTop: moderateScale(20),
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(13),
                marginBottom: moderateScale(10),
              }}
            >
              Primary Info
            </Text>
            <InputComponent
              label="Name"
              placeHolder="Enter Your Name"
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
              leftIcon={UserSvg}
              onPress={() => {}}
            />
            <InputComponent
              label="Mobile Number"
              placeHolder="Enter Your Mobile Number"
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
            />

            <InputComponent
              label="Email"
              placeHolder="Enter Your Email Address"
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
              leftIcon={EmailSvg}
              onPress={() => {}}
            />
          </View>
          <Text
            style={{
              fontSize: moderateScale(13),
              marginBottom: moderateScale(10),
              marginTop: moderateScale(20),
            }}
          >
            Secondary info
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
              columnGap: moderateScale(10),
            }}
          >
            <InputComponent
              label="DOB"
              placeHolder="Select"
              rightSideContent={DownSvg}
              keyBoardType="default"
              value=""
              rootStyle={{
                paddingTop: moderateScale(10),
                width: "48%",
              }}
              labelStyle={{
                color: "#12171D",
                marginBottom: moderateScale(10),
              }}
              onChangeText={() => {}}
              leftIcon={EmailSvg}
              onPress={() => {}}
            />

            <InputComponent
              label="Gender"
              placeHolder="Select"
              keyBoardType="default"
              rightSideContent={DownSvg}
              value=""
              rootStyle={{
                paddingTop: moderateScale(10),
                width: "48%",
              }}
              labelStyle={{
                color: "#12171D",
                marginBottom: moderateScale(10),
              }}
              onChangeText={() => {}}
              leftIcon={EmailSvg}
              onPress={() => {}}
            />
          </View>
          <InputComponent
            label="Address"
            placeHolder="Enter Your Address"
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
          />
          <InputComponent
            label="Pincode"
            placeHolder="Enter Your Pincode"
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
            leftIcon={EmailSvg}
            onPress={() => {}}
          />
          <InputComponent
            label="Country"
            rightSideContent={DownSvg}
            placeHolder="Select Your Country"
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
            leftIcon={EmailSvg}
            onPress={() => {}}
          />
          <InputComponent
            label="State"
            rightSideContent={DownSvg}
            placeHolder="Select Your State"
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
          />
          <InputComponent
            label="City"
            rightSideContent={DownSvg}
            placeHolder="Select Your City"
            keyBoardType="default"
            value=""
            rootStyle={{
              paddingTop: moderateScale(10),
              marginBottom: moderateScale(20),
            }}
            labelStyle={{
              color: "#12171D",
              marginBottom: moderateScale(10),
            }}
            onChangeText={() => {}}
            leftIcon={EmailSvg}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: moderateScale(10),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "#AF1A13",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: moderateScale(16),
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Update Changes
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
