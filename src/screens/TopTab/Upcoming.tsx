import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { matchesData } from "../../../constant";
import { moderateScale } from "react-native-size-matters";
import Chennai from "../../assets/svg/HomeScreen/Chennai";
import VS from "../../assets/svg/HomeScreen/VS";
import RCB from "../../assets/svg/HomeScreen/RCB";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ProgressBar from "../../components/ProgressBar";
import fontStyles from "../../styles/font-styles";
const Upcoming = () => {
  const nav = useNavigation<any>();
  const renderItemForMatches = ({ item }: { item: any }) => {
    const navigateToDetails = () => {
      nav.navigate("MatchDetails", {
        team1: item?.team1,
        team2: item?.team2,
        time: item?.time,
        team1FullName: item?.team1FullName,
        team2FullName: item?.team2FullName,
        maxPrice: item?.maxPrice,
      });
    };
    return (
      <>
        <Pressable onPress={navigateToDetails}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: moderateScale(10),
              borderRadius: moderateScale(5),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: "black",
                }}
              >
                IPL 2024
              </Text>
              <Text
                style={{
                  backgroundColor: "#AF135A0D",
                  padding: moderateScale(5),
                  color: "#AF135A",
                  fontSize: moderateScale(10),
                  borderRadius: moderateScale(5),
                }}
              >
                Start in 2 hours
              </Text>
            </View>
            <View
              style={{
                borderTopColor: "#ccc",
                borderTopWidth: 1,
                paddingVertical: moderateScale(5),
                marginTop: moderateScale(10),
              }}
            />
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.item}>
                  <RCB />
                  <Text style={styles.itemText}>{item?.team1}</Text>
                </View>
                <View style={styles.item}>
                  <VS />
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item?.team2}</Text>
                  <Chennai />
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.item}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                    }}
                  >
                    {item?.team1FullName}
                  </Text>
                </View>
                <View style={styles.item}>
                  <View
                    style={{
                      backgroundColor: "rgba(161, 138, 18, 0.2)",
                      paddingHorizontal: moderateScale(5),
                      paddingVertical: moderateScale(2),
                      borderRadius: moderateScale(2),
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: moderateScale(10),
                        color: "#A18A12",

                        // marginTop: moderateScale(-25),
                      }}
                    >
                      18h 48m 45s
                    </Text>
                  </View>
                </View>
                <View style={styles.item}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                    }}
                  >
                    {item?.team2FullName}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: moderateScale(5),
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#12171D",
                      textAlign: "left",
                      fontSize: moderateScale(11),
                      marginTop: moderateScale(10),
                    }}
                  >
                    Contest
                  </Text>

                  <Text
                    style={{
                      fontSize: moderateScale(16),
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "#111",

                      textTransform: "uppercase",

                      marginTop: moderateScale(5),
                    }}
                  >
                    Crick Mega
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#12171D",
                      textAlign: "right",
                      fontSize: moderateScale(11),
                      marginTop: moderateScale(10),
                    }}
                  >
                    Prize Pool
                  </Text>

                  <Text
                    style={{
                      fontSize: moderateScale(16),
                      textAlign: "left",
                      fontWeight: "700",
                      color: "#ff9f1a",
                      marginTop: moderateScale(5),
                    }}
                  >
                    {item?.maxPrice}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: "#ccc",
                  width: "100%",
                  marginTop: moderateScale(5),
                  borderTopWidth: 0.2,
                }}
              />
              <ProgressBar
                progressBarWidth={item.progressWidth}
                rootStyle={{
                  marginTop: moderateScale(10),
                  marginBottom: moderateScale(10),
                }}
              />

              <Text
                style={{
                  color: "#1737AF",

                  fontSize: moderateScale(11),
                }}
              >
                100 / {item.totalSpot} spots left
              </Text>
              <View
                style={{
                  borderTopColor: "#ccc",
                  width: "100%",
                  marginTop: moderateScale(5),
                  borderTopWidth: 0.2,
                }}
              />
              <Text
                style={{
                  textAlign: "right",
                  fontSize: moderateScale(10),
                  color: "#12171D",
                  marginTop: moderateScale(5),
                }}
              >
                2 Teams
              </Text>
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(20),
      }}
    >
      <FlatList
        data={matchesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItemForMatches}
        contentContainerStyle={{
          rowGap: moderateScale(15),
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Upcoming;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  row: {
    backgroundColor: "white",

    flexDirection: "row",
    paddingVertical: moderateScale(2),
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(5),
    justifyContent: "center",
  },
  itemText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "#12171D",
    marginLeft: moderateScale(5),
  },
  fullText: {
    color: "#1D1212",
  },
});
