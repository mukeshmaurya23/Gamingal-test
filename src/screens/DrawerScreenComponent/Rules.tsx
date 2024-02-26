import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import RulesTabNavigator from "../../navigation/RulesTabnavigator";

const Data = [
  {
    id: 1,
    title: "Test",
  },
  {
    id: 2,
    title: "ODI",
  },
  {
    id: 3,
    title: "T20",
  },
  {
    id: 4,
    title: "T10",
  },
];
const RulesScreen = ({ navigation }: any) => {
  return (
    <>
      <TopBar
        label="Explore"
        headText="Rules"
        navigation={navigation}
        icon={LeftArrow2}
        hideBellAndWallet={true}
      />
      <RulesTabNavigator />
    </>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({});
