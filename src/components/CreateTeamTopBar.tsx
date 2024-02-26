import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import fontStyles from "../styles/font-styles";
import LeftArrow2 from "../assets/svg/LeftArrow2";
import RCB from "../assets/svg/HomeScreen/RCB";
import Chennai from "../assets/svg/HomeScreen/Chennai";
import { useRoute } from "@react-navigation/native";
import ParallelogramView from "./ParalleloGram";

const CreateTeamTopBar = ({
  navigation,
  timeStamp,
  team1,
  team2,
  selectedPlayersCount,
  handleClearAll,
  row,
}: any) => {
  const route = useRoute();
  // console.log(row, "row from create team top bar");
  const [teamPlayerCount, setTeamPlayerCount] = useState({
    team1: 0,
    team2: 0,
  });

  useEffect(() => {
    if (row) {
      const team1Count = row.filter(
        (player: any) => player.teamName === team1,
      ).length;
      const team2Count = row.filter(
        (player: any) => player.teamName === team2,
      ).length;
      setTeamPlayerCount({
        team1: team1Count,
        team2: team2Count,
      });
    }
  }, [row]);

  return (
    <>
      <View style={{}}>
        <ImageBackground source={require("../assets/images/createTeam.png")}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "#AF1A14",
              opacity: 0.8,
            }}
          />
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: moderateScale(20),
                paddingTop: moderateScale(40),
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                gap: moderateScale(20),
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.goBack()}
              >
                {/* <HamBurger /> */}
                <LeftArrow2 />
              </TouchableOpacity>
              <View style={{}}>
                <Text
                  style={[
                    fontStyles.poppinsRegular14,
                    {
                      color: "#E6EDF5",
                    },
                  ]}
                >
                  {timeStamp}
                </Text>
                <Text
                  style={{
                    color: "#F9F2F2",
                    paddingVertical: moderateScale(5),
                    fontWeight: "bold",
                    fontSize: moderateScale(18),
                    letterSpacing: moderateScale(0.5),
                  }}
                >
                  Create a Team
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: moderateScale(16),
              paddingTop: moderateScale(20),
              paddingVertical: moderateScale(16),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: moderateScale(10),
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: moderateScale(50),
                }}
              >
                <RCB />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  columnGap: moderateScale(20),
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {team1}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {teamPlayerCount.team1}
                </Text>
              </View>
            </View>
            <View style={{}}>
              <View
                style={{
                  flexDirection: "column",
                  columnGap: moderateScale(20),
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Salary Left
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  100
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: moderateScale(10),
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  columnGap: moderateScale(20),
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    alignSelf: "flex-end",
                    fontWeight: "bold",
                  }}
                >
                  {team2}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {teamPlayerCount.team2}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: moderateScale(50),
                }}
              >
                <Chennai />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",

              justifyContent: "space-between",
              paddingHorizontal: moderateScale(10),
            }}
          >
            {Array(11)
              .fill(0)
              .map((_, index) => (
                <View
                  style={{
                    marginHorizontal: moderateScale(10),
                  }}
                >
                  <ParallelogramView
                    borderColor={
                      selectedPlayersCount > index
                        ? "#fff"
                        : "rgba(249, 242, 242, 0.5)"
                    }
                  />
                </View>
              ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: moderateScale(10),
              paddingBottom: moderateScale(10),
              paddingTop: moderateScale(16),
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: moderateScale(12),
                alignSelf: "center",
              }}
            >
              {selectedPlayersCount}/11 Players Selected
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={handleClearAll}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: moderateScale(12),
                  alignSelf: "center",
                }}
              >
                Clear all
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default CreateTeamTopBar;

const styles = StyleSheet.create({
  parallelogram: {
    marginLeft: 10,
    width: 200,
    height: 100,
    transform: [{ skewX: "-25deg" }],

    backgroundColor: "red",
  },
});
