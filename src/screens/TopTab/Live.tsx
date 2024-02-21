import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import VS from "../../assets/svg/HomeScreen/VS";
import Chennai from "../../assets/svg/HomeScreen/Chennai";
import RCB from "../../assets/svg/HomeScreen/RCB";
import { useNavigation } from "@react-navigation/native";
import LiveLogo from "../../assets/svg/LiveLogo";
export const matchesData = [
  {
    id: 1,
    team1: "RCB",
    team2: "Chennai",
    time: "9.00 PM",
    team1FullName: "Royalle Challengers Bangalore",
    team2FullName: "Chennai Super Kings",
    maxPrice: "₹ 10,000",
  },
  {
    id: 2,
    team1: "MI",
    team2: "Chennai",
    time: "7.00 PM",
    team1FullName: "Mumbai Indians",
    team2FullName: "Chennai Super Kings",
    maxPrice: "₹ 8,000",
  },
];
const Live = ({ navigation }: any) => {
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
                Oman T20 Cup
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
                  <LiveLogo />
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

export default Live;
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
