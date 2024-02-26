// MatchDetailsScreen.js

import React from "react";
import { View, Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TopBar from "../../components/TopBar";
import HamBurger from "../../assets/svg/HamBurger";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import TopTabForDetailsScreen from "../../navigation/TopTabForDetailsScreen";
import { moderateScale } from "react-native-size-matters";

const MatchDetailsScreen = ({ route, navigation }: any) => {
  const { team1, team2, time, team1FullName, team2FullName, maxPrice } =
    route.params;

  return (
    <React.Fragment>
      <TopBar
        label={`Starts in ${Math.floor(Math.random() * 10) + 1} h ${
          Math.floor(Math.random() * 60) + 1
        } m`}
        headText={`${team1} vs ${team2}`}
        navigation={navigation}
        icon={LeftArrow2}
      />
      <TopTabForDetailsScreen />

      <View
        style={{
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScale(20),
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateTeam")}
          activeOpacity={0.8}
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#AF1A13",
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#AF1A13",
              fontWeight: "bold",
              fontSize: moderateScale(14),
            }}
          >
            Create Your Team
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default MatchDetailsScreen;
