import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { moderateScale } from "react-native-size-matters";

const TeamSelector = ({
  teamData = [],
  role,
  onPlayerSelect,
  selectedPlayersCount,
  selectedPlayers,
  count,
}) => {
  const handleTeamSelect = (player: any) => {
    onPlayerSelect(player, role);
  };

  return (
    <View
      style={{
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(8),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: moderateScale(10),
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: moderateScale(12),
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Players
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(20),
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(12),
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Points
          </Text>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Credits
          </Text>
          <View></View>
        </View>
      </View>
      <FlatList
        data={teamData}
        scrollEnabled={false}
        keyExtractor={(item) => item.name}
        //numColumns={4}
        renderItem={({ item }) => (
          // <View
          //   style={{
          //     flexDirection: "row",
          //     justifyContent: "space-between",
          //     // alignItems: "center",
          //     marginTop: moderateScale(10),
          //   }}
          // >
          //   <View>
          //     <Text style={{}}>{item.name}</Text>
          //   </View>
          //   <View
          //     style={{
          //       flexDirection: "row",
          //       justifyContent: "space-between",
          //       // columnGap: moderateScale(20),
          //     }}
          //   >
          //     <Text style={{}}>10</Text>
          //     <Text style={{}}>100</Text>
          //     <CheckBox
          //       style={{}}
          //       value={selectedPlayers?.players?.some(
          //         (player) => player.name === item.name,
          //       )}
          //       disabled={
          //         selectedPlayersCount === 11 &&
          //         !selectedPlayers?.players?.some(
          //           (player) => player.name === item.name,
          //         )
          //       }
          //       onValueChange={handleTeamSelect.bind(this, item)}
          //     />
          //   </View>
          // </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: moderateScale(10),
              //width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(12),
                textAlign: "left",
                color: "#000",
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                columnGap: moderateScale(20),
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: "#000",
                  textAlign: "center",
                }}
              >
                10
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(12),

                  color: "#000",
                }}
              >
                100
              </Text>
              <CheckBox
                style={{}}
                value={selectedPlayers?.players?.some(
                  (player) => player.name === item.name,
                )}
                disabled={
                  selectedPlayersCount === 11 &&
                  !selectedPlayers?.players?.some(
                    (player) => player.name === item.name,
                  )
                }
                onValueChange={handleTeamSelect.bind(this, item)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TeamSelector;
