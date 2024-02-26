import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { moderateScale } from "react-native-size-matters";

const MyContest = ({ navigation }: any) => {
  return (
    <View
      style={{
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
        backgroundColor: "#fff",

        flex: 1,
      }}
    >
      <Text>MyContest</Text>
      <Pressable
        onPress={() => navigation.navigate("MyContextDetails")}
        style={{
          backgroundColor: "red",
        }}
      >
        <Text>MyContext Details</Text>
      </Pressable>
    </View>
  );
};

export default MyContest;

const styles = StyleSheet.create({});
