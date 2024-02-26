import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import PhoneSvg from "../../assets/svg/ProfileScreenSvg/PhoneSvg";
import InputComponent from "../../components/InputComponent";
import DrawerEmailSvg from "../../assets/svg/DrawerSvg/DrawerEmailSvg";
import DrawerPhoneSvg from "../../assets/svg/DrawerSvg/DrawerPhoneSvg";
import DrawerLocationSvg from "../../assets/svg/DrawerSvg/DrawerLocationSvg";
import TwitterSvg from "../../assets/svg/DrawerSvg/Twitter";
import FaceBookSvg from "../../assets/svg/DrawerSvg/FaceBookSvg";
import YouTubeSvg from "../../assets/svg/DrawerSvg/YouTubeSvg";

const ContactUs = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar
        label="Explore"
        headText="Contact Us"
        navigation={navigation}
        icon={LeftArrow2}
        hideBellAndWallet={true}
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScale(16),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "black",

            fontSize: moderateScale(16),
          }}
        >
          Get in touch
        </Text>
        <InputComponent
          label="Mobile Number"
          placeHolder="Enter your mobile number"
          keyBoardType="numeric"
          value=""
          rootStyle={{
            paddingTop: moderateScale(30),
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
          label="Message"
          placeHolder="Enter your message"
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
          leftIcon={PhoneSvg}
          onPress={() => {}}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "#AF1A13",
            justifyContent: "center",
            alignItems: "center",
            marginTop: moderateScale(20),
            paddingVertical: moderateScale(12),
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: moderateScale(16),
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: "#ccc",
              marginTop: moderateScale(20),
              width: "45%",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontSize: moderateScale(12),
              marginTop: moderateScale(20),
            }}
          >
            or
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: "#ccc",
              marginTop: 20,
              width: "45%",
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: moderateScale(20),
            rowGap: moderateScale(20),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: moderateScale(10),
            }}
          >
            <DrawerEmailSvg />
            <Text
              style={{
                color: "#12171D",
              }}
            >
              support10@khelo100.com
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: moderateScale(10),
            }}
          >
            <DrawerPhoneSvg />
            <Text
              style={{
                color: "#12171D",
              }}
            >
              9876598765, 9876598765
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: moderateScale(10),
            }}
          >
            <DrawerLocationSvg />
            <Text
              style={{
                color: "#12171D",
              }}
            >
              31/2, Mypcot InfoTech New Palasia, Near Zanzeerwala Indore
              Pincode: 425001
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 1,
              backgroundColor: "#ccc",
              marginTop: moderateScale(20),
              width: "40%",
            }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontSize: moderateScale(12),
              marginTop: moderateScale(20),
            }}
          >
            Follow us on
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: "#ccc",
              marginTop: 20,
              width: "45%",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: moderateScale(20),
            paddingHorizontal: moderateScale(40),
            marginBottom: moderateScale(10),
          }}
        >
          <TwitterSvg />
          <FaceBookSvg />
          <YouTubeSvg />
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
