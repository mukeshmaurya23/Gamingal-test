// import React from 'react';
// import {
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import {moderateScale} from 'react-native-size-matters';

// const Login = () => {
//   const dimension = Dimensions.get('window');
//   //get the height and width of the screen
//   console.log(dimension.height, dimension.width);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/images/loginScreen.png')}
//         style={styles.image}
//       />
//       <View style={styles.overlay} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     resizeMode: 'contain',
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#AF1A1340',
//   },
// });

// export default Login;

import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Phone from "../assets/svg/Phone";
import RegistrationBanner from "../components/RegistrationBanner";
import RegistrartionBody from "../components/RegistrartionBody";

const Login = ({ navigation }: { navigation: any }) => {
  const dimension = Dimensions.get("window");
  // get the height and width of the screen
  const [phone, setPhone] = useState("");

  const handlePhone = (text: string) => {
    setPhone(text);
  };
  console.log(phone, "phone");
  //api call
  const loginHandler = async () => {
    //api call
    console.log("loginHandler");
    navigation.navigate("Verify");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent={true}
      />
      <RegistrationBanner />
      <RegistrartionBody
        headingText="Log in"
        descriptionText="Ready to place your bets? Log in for a personalized experience"
        label="Mobile Number"
        placeholder="Enter your phone number"
        keyboardType="numeric"
        value={phone}
        onChangeText={handlePhone}
        submitHandler={loginHandler}
        navigation={navigation}
        keyData="phone"
        btnText="Login"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Login;
