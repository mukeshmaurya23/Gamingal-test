import { StyleSheet, View } from "react-native";

const ProgressBar = ({ progressBarWidth, rootStyle }: any) => {
  return (
    <View
      style={{
        position: "relative",
        ...rootStyle,
        width: "100%",
      }}
    >
      <View style={[styles.filler, { width: progressBarWidth }]} />
      <View style={styles.bar} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#e0e0e0",
    height: 5,
    borderRadius: 5,
    width: "100%",
  },
  filler: {
    backgroundColor: "#1a73e8",
    height: 5,
    position: "absolute",

    zIndex: 1,
    borderRadius: 5,
  },
});
