import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

const CustomSlider = () => {
  const flatlistRef = useRef<any>(null);

  const screenWidth = Dimensions.get("window").width;
  //console.log(screenWidth, "screenWidth");
  const screenHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState(0);

  const getItemLayout = (data: any, index: any) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: "01",
      image: require("../assets/images/homeBanner.jpeg"),
    },
    {
      id: "02",
      image: require("../assets/images/ludo.jpg"),
    },
    {
      id: "03",
      image: require("../assets/images/homeBanner.jpeg"),
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (activeIndex < carouselData.length - 1) {
  //       flatlistRef.current.scrollToIndex({
  //         index: activeIndex + 1,
  //         animated: true,
  //       });
  //       setActiveIndex(activeIndex + 1);
  //     } else {
  //       flatlistRef.current.scrollToIndex({
  //         index: 0,
  //         animated: true,
  //       });
  //       setActiveIndex(0);
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={{
          width: screenWidth,
          height: moderateScale(150),
          paddingHorizontal: moderateScale(5),
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: moderateScale(10),
          }}
        />
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => (
      <View
        key={index}
        style={{
          backgroundColor: activeIndex === index ? "#1737AF" : "#ccc",
          height: moderateScale(10),
          width: moderateScale(10),
          borderRadius: 5,
          marginHorizontal: 6,
        }}
      />
    ));
  };

  return (
    <View
      style={{
        marginTop: moderateScale(20),
      }}
    >
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: moderateScale(10),
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default React.memo(CustomSlider);

const styles = StyleSheet.create({});
