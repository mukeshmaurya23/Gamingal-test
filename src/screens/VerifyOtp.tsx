import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import RegistrationBanner from "../components/RegistrationBanner";
import RegistrartionBody from "../components/RegistrartionBody";
import { SafeAreaProvider } from "react-native-safe-area-context";
type OTP = { [key: number]: string };
const VerifyOtp = ({ navigation }: { navigation: any }) => {
  const [loading, setLoading] = useState(false);
  const numDigits = 6;
  const inputRefs = Array.from({ length: numDigits }, () =>
    useRef<TextInput>(null),
  );
  const [otp, setOtp] = useState<OTP>(
    Object.fromEntries(
      Array.from({ length: numDigits }, (_, i) => [i + 1, ""]),
    ),
  );
  const handleInputChange = (index: number, text: string): void => {
    setOtp((prevOtp) => ({
      ...prevOtp,
      [index]: text,
    }));
    if (text && index < numDigits) {
      inputRefs[index]?.current?.focus();
    } else if (!text && index > 1) {
      inputRefs[index - 2]?.current?.focus();
    }
  };
  const handleKeyPress = (index: number, event: React.KeyboardEvent): void => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 1) {
      inputRefs[index - 2]?.current?.focus();
    }
  };

  const submitHandler = () => {
    //navigation.navigate('OtpInput');
    setLoading(true);
    setTimeout(async () => {
      await setLoading(false);
      await navigation.reset({
        index: 0,
        routes: [{ name: "DrawerNav", params: "" }],
      });
    }, 100);
    console.log("submitHandler");
    const otpString = Object.values(otp).join("");
    console.log("Sending OTP:", otpString);
  };
  if (loading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    );
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
      }}
    >
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> */}

      <RegistrationBanner keyData="otp" navigation={navigation} />
      <RegistrartionBody
        headingText="Verification"
        descriptionText="Please enter the 6-digit code sent to your mobile number for verification."
        label="OTP"
        keyData="otp"
        placeholder="Enter your phone number"
        keyboardType="numeric"
        onChangeText={(text: string) => console.log(text)}
        value=""
        submitHandler={submitHandler}
        navigation={navigation}
        btnText="Verify"
        numDigits={numDigits}
        inputRefs={inputRefs}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
      />
    </SafeAreaProvider>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({});
