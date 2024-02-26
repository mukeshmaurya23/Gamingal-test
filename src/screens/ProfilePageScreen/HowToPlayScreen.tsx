import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import { moderateScale } from "react-native-size-matters";

const HowToPlayScreen = ({ navigation }: any) => {
  const DATA = [
    {
      title: "How to play",
      data: [
        {
          key: "1",

          text: "Select a Match : Choose the match for which you want to create a fantasy team.",
        },
        {
          key: "2",
          text: "Join contests of your choice",
        },
        {
          key: "3",
          text: "Create your team : Choose players within the given budget for creating your team and choose the captain and vice captains",
        },
        {
          key: "4",
          text: "Save and submit your team.",
        },
        {
          key: "5",
          text: " Follow the real-life match closely to track the performance of your selected players and track your points.",
        },
      ],
    },
  ];
  return (
    <>
      <TopBar
        label="Explore"
        headText="Policies"
        navigation={navigation}
        goToMainScreen={true}
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
        <SectionList
          sections={DATA}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.key}
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

export default HowToPlayScreen;

const styles = StyleSheet.create({});
