import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import GreenWalletArrowSvg from "../../../assets/svg/ProfileScreenSvg/GreenWalletArrowSvg";
import EntryFeesSvg from "../../../assets/svg/ProfileScreenSvg/EntryFeesSvg";

const All = () => {
  const Data = [
    {
      title: "Won free contest prize",
      amount: "₹200",
      date: "Dec 13 | 1:00 pm",
      status: "won",
    },
    {
      title: "Entry Fees Contest",
      amount: "₹200",
      date: "Dec 13 | 1:00 pm",
      status: "entry",
    },
    {
      title: "Won free contest prize",
      amount: "₹200",
      date: "Dec 13 | 1:00 pm",
      status: "won",
    },
    {
      title: "Entry Fees Contest",
      amount: "₹200",
      date: "Dec 13 | 1:00 pm",
      status: "entry",
    },
  ];
  const renderItems = (item: any) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "#E6E6E6",
          padding: moderateScale(14),
          borderRadius: moderateScale(8),
          marginTop: moderateScale(10),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              columnGap: moderateScale(10),
              alignItems: "center",
            }}
          >
            {item?.status === "won" ? (
              <GreenWalletArrowSvg />
            ) : (
              <EntryFeesSvg />
            )}
            <Text
              style={{
                fontSize: moderateScale(13),
                color: "#111",
                fontWeight: "bold",
              }}
            >
              {item?.title}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: moderateScale(14),
                color: item.status === "won" ? "#00B966" : "#FF3D71",
                fontWeight: "bold",
              }}
            >
              ₹200
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 0.4,
            borderTopColor: "#ccc",
            marginTop: moderateScale(20),
          }}
        />
        <Text
          style={{
            textAlign: "right",
            fontSize: moderateScale(11),

            marginTop: moderateScale(10),
          }}
        >
          {item?.date}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: moderateScale(16),

        paddingVertical: moderateScale(16),
      }}
    >
      <FlatList
        data={Data}
        scrollEnabled={false}
        renderItem={({ item }) => renderItems(item)}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: moderateScale(10),
          marginBottom: moderateScale(20),
        }}
      />
    </ScrollView>
  );
};

export default All;

const styles = StyleSheet.create({});
