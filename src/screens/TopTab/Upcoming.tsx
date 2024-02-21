import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { matchesData } from "../../../constant";
import { moderateScale } from "react-native-size-matters";
import Chennai from "../../assets/svg/HomeScreen/Chennai";
import VS from "../../assets/svg/HomeScreen/VS";
import RCB from "../../assets/svg/HomeScreen/RCB";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
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
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      // marginTop: moderateScale(-25),
                    }}
                  >
                    9.00 PM
                  </Text>
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
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#12171D",
                  fontSize: moderateScale(11),
                  marginTop: moderateScale(10),
                }}
              >
                Max Price Pool upto
              </Text>
              <View
                style={{
                  borderTopColor: "#fff200",
                  width: "100%",
                  marginTop: moderateScale(5),
                  borderTopWidth: 0.2,
                }}
              />
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: "700",
                  color: "#ff9f1a",
                  marginTop: moderateScale(5),
                }}
              >
                {item?.maxPrice}
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
