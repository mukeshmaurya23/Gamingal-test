import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import ProfileFieldCommonContainer from "../../components/ProfileFieldCommonContainer";

const NormalData = [
  {
    id: 1,
    title: "In Starting 11",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 2,
    title: "Run",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 3,
    title: "Wicket (Exculuding Run Out)",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 4,
    title: "Catch",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 5,
    title: "Stumping",
    textToShowInsteadOfArrow: "4",
  },
];
const BonusData = [
  {
    id: 1,
    title: "In Starting 11",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 2,
    title: "Run",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 3,
    title: "Wicket (Exculuding Run Out)",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 4,
    title: "Catch",
    textToShowInsteadOfArrow: "4",
  },
  {
    id: 5,
    title: "Stumping",
    textToShowInsteadOfArrow: "4",
  },
];

const T10 = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: moderateScale(20),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#1D12120D",
            color: "black",
            fontWeight: "bold",
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(8),
          }}
        >
          Normal
        </Text>
      </TouchableOpacity>
      {/* <ProfileFieldCommonContainer
        title="In Starting 11"
        description=""
        showArrow={false}
        textToShowInsteadOfArrow="4"
        showBottomBorder={true}
        rootStyle={{
          marginTop: moderateScale(10),
          alignItems: "center",
        }}
      /> */}
      <FlatList
        data={NormalData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProfileFieldCommonContainer
            title={item.title}
            description=""
            showArrow={false}
            textToShowInsteadOfArrow={item.textToShowInsteadOfArrow}
            showBottomBorder={true}
            rootStyle={{
              marginTop: moderateScale(10),
              alignItems: "center",
            }}
          />
        )}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: moderateScale(20),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#1D12120D",
            color: "black",
            fontWeight: "bold",
            paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(8),
          }}
        >
          Bonus
        </Text>
      </TouchableOpacity>
      <FlatList
        data={BonusData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProfileFieldCommonContainer
            title={item.title}
            description=""
            showArrow={false}
            textToShowInsteadOfArrow={item.textToShowInsteadOfArrow}
            showBottomBorder={true}
            rootStyle={{
              marginTop: moderateScale(10),
              alignItems: "center",
            }}
          />
        )}
      />
    </View>
  );
};

export default T10;

const styles = StyleSheet.create({});
