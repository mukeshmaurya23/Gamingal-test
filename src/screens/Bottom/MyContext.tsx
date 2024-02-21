import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import HamBurger from "../../assets/svg/HamBurger";

const MyContext = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {/* <TopBar
        label="Explore"
        headText="My Context"
        navigation={navigation}
        icon={HamBurger}
      /> */}
      <Text>MyContext</Text>
    </View>
  );
};

export default MyContext;

const styles = StyleSheet.create({});
