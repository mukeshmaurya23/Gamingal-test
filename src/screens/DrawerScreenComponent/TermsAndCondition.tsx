import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import { moderateScale } from "react-native-size-matters";
const DATA = [
  {
    title:
      "These terms and conditions of use (“Terms of Use”) along with other policies available on our platform forms a legally binding agreement between You and FUNDARE TECH Private Limited (“GAMINGGLE”, “Our”, “We”, “Us” ,).",
    data: [],
  },
  {
    title:
      "PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE PLAYING ANY MOBILE GAMES OR/AND USING THE GAMINGGLE PLATFORM.",
    data: [],
  },
  {
    title:
      "Online fun games are a popular form of entertainment for many individuals. However, like any other online game, it is essential to familiarize yourself with the terms and conditions before starting to play. The terms and conditions serve as a legal agreement between the player and this online platform and govern the use of the platform and the rules of the game. Here are some common terms and conditions of our online ludo & fantasy game:",
    data: [
      {
        title: "Eligibility.",
        text: "The player must be of legal age and must not reside in any location where this online fun games is prohibited by law. The player is also required to create only one account on the platform. It is mandatory for a user to create a virtual account (from now on, collectively referred to as an Account and truthfully and accurately complete all mandatory information.",
      },
      {
        title: "User Account.",
        text: "The player must provide accurate and complete information while creating their account. We reserves the right to verify the player's identity and suspend or terminate the account if the information provided is found to be incorrect.",
      },
      {
        title: "Fair Play.",
        text: "The player must not use any unfair means to win the game. Cheating, collusion, or any other fraudulent activity will result in the immediate termination of the player's account and forfeiture of their winnings.",
      },
      {
        title: "Deposit and Withdrawal.",
        text: "The player must provide accurate and complete information while creating their account. We reserves the right to verify the player's identity and suspend or terminate the account if the information provided is found to be incorrect.",
      },
      {
        title: "Disclaimer.",
        text: " The platform is not responsible for any loss or damage incurred while using the platform. The player must use the platform at their own risk.",
      },
    ],
  },
];
const TermsAndCondition = ({ navigation }: any) => {
  return (
    <>
      <TopBar
        label="Explore"
        headText="Terms & Condition"
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
          Terms and Conditions
        </Text>
        <SectionList
          sections={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: moderateScale(10),
                paddingHorizontal: moderateScale(10),
                marginLeft: moderateScale(15),
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: "Poppins-Regular",
                  color: "black",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {"\u25CF" + " "}
                  {item.title}
                </Text>
                {item.text}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View
              style={{
                paddingVertical: moderateScale(10),
                paddingHorizontal: moderateScale(10),
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(12),
                  fontFamily: "Poppins-Regular",
                  color: "black",
                }}
              >
                {section.title}
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({});
