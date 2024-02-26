import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

type parallelogramPRops = {
  borderColor: ColorValue;
};
const ParallelogramView = ({ borderColor }: parallelogramPRops) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View
        style={[styles.parallelogram, { transform: [{ rotate: "360deg" }] }]}
      >
        <View
          style={[
            { borderBottomColor: borderColor },
            styles.triangle,
            styles.parallelogramLeft,
          ]}
        />
        {/* <View style={styles.parallelogramInner} /> */}
        <View
          style={[
            styles.triangle,
            { borderBottomColor: borderColor },
            styles.parallelogramRight,
            { transform: [{ rotate: "180deg" }] },
          ]}
        />
      </View>
    </View>
  );
};

export default ParallelogramView;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  parallelogram: {
    width: 10,
  },
  parallelogramInner: {
    width: 10,
  },
  parallelogramRight: {
    right: -10,
    position: "absolute",
  },
  parallelogramLeft: {
    left: -10,
    position: "absolute",
  },
});
