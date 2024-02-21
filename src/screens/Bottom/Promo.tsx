import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import HamBurger from "../../assets/svg/HamBurger";
import CustomSlider from "../../components/CustomSlider";
import { moderateScale } from "react-native-size-matters";
import DownArrow from "../../assets/svg/HomeScreen/DownArrow";
import { ScrollView } from "react-native-gesture-handler";
const Data = [
  {
    id: 1,
    image: require("../../assets/images/homeBanner.jpeg"),
  },
  {
    id: 2,
    image: require("../../assets/images/ludo.jpg"),
  },
  {
    id: 3,
    image: require("../../assets/images/homeBanner.jpeg"),
  },
];
const Promo = ({ navigation }: { navigation: any }) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <TopBar
        label="Explore"
        headText="Our Promo"
        navigation={navigation}
        icon={HamBurger}
      />

      <FlatList
        horizontal
        data={Data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 10,
                }}
              />
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: moderateScale(10),
          paddingHorizontal: moderateScale(30),
          justifyContent: "space-evenly",
        }}
      >
        <DownArrow />

        <DownArrow />
        <Text
          style={{
            fontSize: moderateScale(16),
            fontWeight: "bold",
            color: "#f39c12",
            marginLeft: moderateScale(5),
          }}
        >
          Exclusive Promo Alert
        </Text>
        <DownArrow />

        <DownArrow />
      </View>
      <View
        style={{
          width: screenWidth,
          paddingHorizontal: moderateScale(10),
          height: moderateScale(100),
        }}
      >
        <Image
          source={require("../../assets/images/ludo.jpg") as any}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: moderateScale(10),
          }}
        />
      </View>
      <View
        style={{
          width: screenWidth,
          paddingHorizontal: moderateScale(10),
          height: moderateScale(100),
          paddingTop: moderateScale(10),
        }}
      >
        <Image
          source={require("../../assets/images/homeBanner.jpeg") as any}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: moderateScale(10),
          }}
        />
      </View>
      <Text
        style={{
          color: "#AF137E",

          textAlign: "center",
          paddingVertical: moderateScale(20),
        }}
      >
        Stay Tuned for the Big Events!
      </Text>
    </ScrollView>
  );
};

export default Promo;

const styles = StyleSheet.create({});
