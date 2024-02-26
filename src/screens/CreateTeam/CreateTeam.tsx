import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import { play11Data } from "../../../constant";
import TeamSelector from "./TeamSelector";
import CreateTeamTopBar from "../../components/CreateTeamTopBar";
import { moderateScale } from "react-native-size-matters";

const CreateTeam = ({ navigation }: any) => {
  const transformedData = Object.keys(play11Data).reduce(
    (result: any, teamKey: any) => {
      const team = play11Data[teamKey];
      const teamName = team.name;

      result[teamKey] = {
        ...team,
        name: teamName,
        batsman: team.batsman.map((player: any) => ({
          ...player,
          teamName,
        })),
        allRounder: team.allRounder.map((player:any) => ({
          ...player,
          teamName,
        })),
        bowler: team.bowler.map((player:any) => ({
          ...player,
          teamName,
        })),
        wicketKeeper: team.wicketKeeper.map((player:any) => ({
          ...player,
          teamName,
        })),
      };

      return result;
    },
    {},
  );

  const allBatsmen = [
    ...transformedData.team1.batsman,
    ...transformedData.team2.batsman,
  ];
  const allAllRounders = [
    ...transformedData.team1.allRounder,
    ...transformedData.team2.allRounder,
  ];
  const allBowlers = [
    ...transformedData.team1.bowler,
    ...transformedData.team2.bowler,
  ];
  const allWicketKeepers = [
    ...transformedData.team1.wicketKeeper,
    ...transformedData.team2.wicketKeeper,
  ];

  const [selectedPlayers, setSelectedPlayers] = useState({
    players: [],
    selectedPlayerCount: 0,
  });
  const [selectedTab, setSelectedTab] = useState(0);

  const [count, setCount] = useState({
    WK: 0,
    BAT: 0,
    AR: 0,
    BOWL: 0,
  });

  const handlePlayerSelect = (player: any, role: any) => {
    setCount((prevState) => {
      const isPlayerAlreadySelected = selectedPlayers.players?.some(
        (selectedPlayer) => selectedPlayer.name === player.name,
      );
      if (isPlayerAlreadySelected) {
        return {
          ...prevState,
          [role]: prevState[role] - 1,
        };
      }
      return {
        ...prevState,
        [role]: prevState[role] + 1,
      };
    });
    setSelectedPlayers((prevState) => {
      const isPlayerAlreadySelected = prevState.players?.some(
        (selectedPlayer) => selectedPlayer.name === player.name,
      );

      if (isPlayerAlreadySelected) {
        return {
          players: prevState.players.filter(
            (selectedPlayer) => selectedPlayer.name !== player.name,
          ),
          selectedPlayerCount: prevState.selectedPlayerCount - 1,
        };
      }

      return {
        players: [...prevState.players, player],
        selectedPlayerCount: prevState.selectedPlayerCount + 1,
      };
    });
  };

  //console.log(selectedPlayers, "selectedPlayers from CreateTeam");

  const StepOne = () => {
    return (
      <TeamSelector
        teamData={allWicketKeepers}
        role="WK"
        onPlayerSelect={handlePlayerSelect}
        selectedPlayers={selectedPlayers}
        count={count}
        selectedPlayersCount={selectedPlayers.selectedPlayerCount}
      />
    );
  };
  const StepTwo = () => {
    return (
      <TeamSelector
        teamData={allBatsmen}
        role="BAT"
        count={count}
        selectedPlayers={selectedPlayers}
        onPlayerSelect={handlePlayerSelect}
        selectedPlayersCount={selectedPlayers.selectedPlayerCount}
      />
    );
  };
  const StepThree = () => {
    return (
      <TeamSelector
        teamData={allAllRounders}
        role="AR"
        count={count}
        selectedPlayers={selectedPlayers}
        onPlayerSelect={handlePlayerSelect}
        selectedPlayersCount={selectedPlayers.selectedPlayerCount}
      />
    );
  };
  const StepFour = () => {
    return (
      <TeamSelector
        teamData={allBowlers}
        role="BOWL"
        count={count}
        selectedPlayers={selectedPlayers}
        onPlayerSelect={handlePlayerSelect}
        selectedPlayersCount={selectedPlayers.selectedPlayerCount}
      />
    );
  };

  const handleClearAll = () => {
    setSelectedPlayers({
      players: [],
      selectedPlayerCount: 0,
    });
    setCount({
      WK: 0,
      BAT: 0,
      AR: 0,
      BOWL: 0,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <CreateTeamTopBar
          navigation={navigation}
          timeStamp={"Start in 3h"}
          team1="RCB"
          handleClearAll={handleClearAll}
          row={selectedPlayers.players}
          selectedPlayersCount={selectedPlayers.selectedPlayerCount}
          team2="CSK"
        />
      </View>
      <View
        style={{
           flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={styles.tabBarContainer}>
          <TouchableOpacity
            style={[
              styles.tabItem,
              {
                borderBottomColor: selectedTab === 0 ? "red" : "white",
              },
            ]}
            onPress={() => setSelectedTab(0)}
          >
            <Text
              style={{
                color: selectedTab === 0 ? "red" : "black",
              }}
            >
              WK {`(${count["WK"]})`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabItem, {}]}
            onPress={() => setSelectedTab(1)}
          >
            <Text
              style={{
                color: selectedTab === 1 ? "red" : "black",
              }}
            >
              BAT {`(${count["BAT"]})`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabItem,
              {
                borderBottomColor: selectedTab === 2 ? "red" : "white",
              },
            ]}
            onPress={() => setSelectedTab(2)}
          >
            <Text
              style={{
                color: selectedTab === 2 ? "red" : "black",
              }}
            >
              AR {`(${count["AR"]})`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabItem, {}]}
            onPress={() => setSelectedTab(3)}
          >
            <Text
              style={{
                color: selectedTab === 3 ? "red" : "black",
              }}
            >
              BOWL {`(${count["BOWL"]})`}
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 0 && <StepOne />}
        {selectedTab === 1 && <StepTwo />}
        {selectedTab === 2 && <StepThree />}
        {selectedTab === 3 && <StepFour />}
        {/* <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <Text>Selected Players</Text>
          <FlatList
            data={selectedPlayers.players}
            scrollEnabled={false}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#ccc",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "black",
                  }}
                >
                  {item.name}- {item.teamName}
                </Text>
              </View>
            )}
          />
        </View> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#fff",

          justifyContent: "space-around",
          position: "absolute",
          bottom: 0,
          alignItems: "center",
          paddingVertical: moderateScale(10),
        }}
      >
        <Pressable
          style={{
            //backgroundColor: "red",
            borderColor: "rgba(175, 26, 19, 1)",
            width: "40%",
            borderWidth: 1,
            // paddingHorizontal: moderateScale(50),
            paddingVertical: moderateScale(10),
          }}
        >
          <Text
            style={{
              color: "rgba(175, 26, 19, 1)",
              textAlign: "center",
            }}
          >
            Preview
          </Text>
        </Pressable>
        <Pressable
          disabled={selectedPlayers.selectedPlayerCount < 11}
          style={{
            backgroundColor:
              selectedPlayers.selectedPlayerCount < 11
                ? "rgba(175, 26, 19, 0.5)"
                : "rgba(175, 26, 19, 1)",
            width: "40%",

            //paddingHorizontal: moderateScale(50),
            paddingVertical: moderateScale(10),
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    paddingVertical: 10,

    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "space-between",
  },
  tabItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,

    marginRight: 10,

    borderRadius: 10,
  },
});

export default CreateTeam;
