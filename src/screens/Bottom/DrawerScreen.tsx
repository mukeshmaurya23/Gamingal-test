import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { DrawerItemList } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import { moderateScale } from "react-native-size-matters";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import LeftArrow from "../../assets/svg/LeftArrow";
import Reedem from "../../assets/svg/Reedem";
import TermsCond from "../../assets/svg/TermCond";
import Policies from "../../assets/svg/Policies";
import FAQ from "../../assets/svg/FAQ";
import Rules from "../../assets/svg/Rules";
import Legality from "../../assets/svg/Legality";
import DeleteAcc from "../../assets/svg/DeleteAcc";
import Phone from "../../assets/svg/Phone";
import Logout from "../../assets/svg/Logout";
import ContactUs from "../../assets/svg/ContactUs";

const DrawerScreen = ({ props, navigation }: any) => {
  const mapData = [
    {
      title: "Redeem coupons",
      icon: <Reedem />,
      onPress: () => navigation.navigate("Redeem"),
    },
    {
      title: "Terms & Condition",
      icon: <TermsCond />,
      onPress: () => navigation.navigate("TermsAndCondition"),
    },
    {
      title: "Policies",
      icon: <Policies />,
      onPress: () => navigation.navigate("Policies"),
    },
    {
      title: "FAQ",
      icon: <FAQ />,
      onPress: () => navigation.navigate("FAQ"),
    },
    {
      title: "Rules",
      icon: <Rules />,
      onPress: () => navigation.navigate("Rules"),
    },
    {
      title: "Legality",
      icon: <Legality />,
      onPress: () => navigation.navigate("Legality"),
    },
    {
      title: "Contact Us",
      icon: <ContactUs />,
      onPress: () => navigation.navigate("ContactUs"),
    },
    {
      title: "Delete Account",
      icon: <DeleteAcc />,
    },
    {
      title: "Logout",
      icon: <Logout />,
    },
  ];
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/images/drawerBg.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            position: "relative",
            zIndex: 1,
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(40),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(15),
            }}
          >
            <ProfileIcon />
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: moderateScale(20),
                  fontWeight: "bold",
                }}
              >
                Rex
              </Text>
              <Text
                style={{
                  color: "#ccc",
                  fontSize: moderateScale(12),
                  paddingVertical: moderateScale(5),
                }}
              >
                +91 9876543210
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: moderateScale(20),
            }}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: moderateScale(10),
                }}
              >
                Balance
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  paddingVertical: moderateScale(5),
                  fontSize: moderateScale(20),
                }}
              >
                ₹ 5000
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontSize: moderateScale(12),
                  fontWeight: "bold",
                  borderWidth: 1,
                  borderColor: "#fff",
                  marginTop: moderateScale(5),
                  paddingHorizontal: moderateScale(15),
                  paddingVertical: moderateScale(10),
                  borderRadius: moderateScale(5),
                }}
              >
                Add Money
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={mapData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable onPress={item?.onPress}>
                <View
                  style={{
                    borderTopColor: "#ccc",
                    borderTopWidth: 1,
                    paddingVertical: moderateScale(5),
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: moderateScale(10),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: moderateScale(10),
                      alignItems: "center",
                    }}
                  >
                    {item?.icon}
                    <Text
                      style={{
                        color: "#fff",
                      }}
                    >
                      {item?.title}
                    </Text>
                  </View>
                  <Pressable onPress={item?.onPress}>
                    <LeftArrow />
                  </Pressable>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#AF1A13D9",
        }}
      />
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
