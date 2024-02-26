import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import { moderateScale } from "react-native-size-matters";
import TopTabForWallet from "../../navigation/TopTabForWallet";

const ProfileWallet = ({ navigation }: any) => {
  return (
    <>
      <TopBar
        navigation={navigation}
        headText="Wallet Balance"
        label="Explore"
        icon={LeftArrow2}
        hideBellAndWallet={true}
        goToMainScreen={true}
        // rootStyle={{
        //   paddingBottom: moderateScale(90),
        // }}
      />
      <View
        style={{
          paddingVertical: moderateScale(16),
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            paddingHorizontal: moderateScale(16),
          }}
        >
          <View
            style={{
              marginTop: moderateScale(20),
              paddingHorizontal: moderateScale(16),
              paddingVertical: moderateScale(16),

              borderRadius: moderateScale(8),
              borderWidth: 1,
              borderColor: "#504DFF40",
              backgroundColor: "#fff",
              //paddingBottom: moderateScale(38),
            }}
          >
            <Text
              style={{
                // marginBottom: moderateScale(3),
                fontSize: moderateScale(12),
                color: "#111",
              }}
            >
              Balance
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(26),
                  fontWeight: "bold",
                  color: "#111",
                }}
              >
                ₹1000
              </Text>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#AF1A13",

                  paddingHorizontal: moderateScale(16),
                  paddingVertical: moderateScale(12),
                  borderRadius: moderateScale(5),
                }}
              >
                <Text
                  style={{
                    color: "#AF1A13",
                    fontWeight: "bold",
                    fontSize: moderateScale(13),
                    textAlign: "center",
                  }}
                >
                  Add Money
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              marginTop: moderateScale(20),
              color: "#111",
              fontWeight: "bold",
              marginBottom: moderateScale(20),
              fontSize: moderateScale(14),
            }}
          >
            Transaction History
          </Text>
        </View>

        <TopTabForWallet />
      </View>
    </>
  );
};

export default ProfileWallet;

const styles = StyleSheet.create({});
