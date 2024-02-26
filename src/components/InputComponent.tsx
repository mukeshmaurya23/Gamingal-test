import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import GreenTickSvg from "../assets/svg/ProfileScreenSvg/GreenTickSvg";

const InputComponent = (props: any) => {
  const {
    value,
    leftIcon,

    onChangeText,
    placeHolder,
    keyBoardType,

    onBlur,
    label,
    rootStyle,
    labelStyle,
    rightSideContent,
    onPress,
    isVerified,
    verificationComponent,
  } = props;

  return (
    <View
      style={{
        ...rootStyle,
      }}
    >
      <Text
        style={[
          {
            fontSize: moderateScale(14),

            fontWeight: 400,
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isVerified ? "#53921180" : "#ccc",
          },
        ]}
      >
        {leftIcon && React.createElement(leftIcon)}
        <TextInput
          style={{
            paddingHorizontal: moderateScale(10),
          }}
          placeholder={placeHolder}
          keyboardType={keyBoardType}
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
        />

        <View
          style={{
            position: "absolute",
            right: moderateScale(10),
          }}
        >
          {verificationComponent ? (
            isVerified ? (
              <GreenTickSvg />
            ) : (
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={{
                  backgroundColor: "#AF1A13",
                  paddingHorizontal: moderateScale(16),
                  paddingVertical: moderateScale(8),
                  borderRadius: moderateScale(5),
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Verify
                </Text>
              </TouchableOpacity>
            )
          ) : (
            <Pressable>
              {rightSideContent && React.createElement(rightSideContent)}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: moderateScale(5),
    backgroundColor: "#12171D0D",
    marginBottom: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
});
