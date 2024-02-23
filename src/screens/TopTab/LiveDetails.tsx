import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import LiveTopBar from "../../components/LiveTopBar";
import LiveMaterialTopTabBar from "../../navigation/LiveMaterialTopTabBar";

const LiveDetails = ({ navigation, route }: any) => {
  const { team1, team2 } = route.params;
  console.log(navigation, "nav from detaiisl live");
  return (
    <View style={{ flex: 1 }}>
      <View>
        <LiveTopBar navigation={navigation} team1={team1} team2={team2} />
      </View>
      <LiveMaterialTopTabBar />
    </View>
  );
};

export default LiveDetails;

const styles = StyleSheet.create({});
