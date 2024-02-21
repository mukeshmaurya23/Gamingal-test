import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import LeftArrow2 from "../assets/svg/LeftArrow2";
import Logo from "../assets/svg/Logo";

const RegistrationBanner = (props: any) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/loginScreen.png")}
          style={styles.image}
        />
        {props?.keyData && props?.keyData === "otp" && (
          <LeftArrow2
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              position: "absolute",
              top: moderateScale(40),
              zIndex: 1,
              left: moderateScale(15),
            }}
          />
        )}
        <View style={styles.overlay} />
      </View>
      <View style={styles.roundedLogoConatiner}>
        {/* <Image
          source={require('../assets/images/logo.png')}
          style={[
            styles.ImageLogo,
            {
              marginTop: moderateScale(-45),
            },
          ]}
        /> */}
        <Logo
          style={[
            styles.ImageLogo,
            {
              marginTop: moderateScale(-45),
            },
          ]}
        />
      </View>
    </>
  );
};

export default RegistrationBanner;
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
  },

  roundedLogoConatiner: {
    position: "relative",
    flex: 0.5,
  },
  ImageLogo: {
    alignSelf: "center",
  },
  image: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#AF1A1340",
  },
});
