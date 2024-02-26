import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import ProfileSmallIcon from "../assets/svg/Profile/ProfileSmallIcon";
import { moderateScale } from "react-native-size-matters";
import BlueArrowLeft from "../assets/svg/Profile/BlueArrowLeft";

const ProfileFieldCommonContainer = (props: any) => {
  const {
    title,
    description,
    icon,
    showArrow,
    rootStyle,
    bottomBorderStyle,
    showBottomBorder,
    textToShowInsteadOfArrow,
    titleRootStyle,
    onPress,
    toggleSwitch,
    toggleContent,
  } = props;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          ...rootStyle,
        }}
      >
        <Pressable onPress={onPress ? onPress : null}>
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(10),
            }}
          >
            {icon && React.createElement(icon)}
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {title && (
                <Text
                  style={{
                    color: "#1D1212",
                    fontSize: moderateScale(14),
                    fontWeight: textToShowInsteadOfArrow ? "normal" : "bold",
                  }}
                >
                  {title}
                </Text>
              )}
              {description && (
                <Text
                  style={{
                    fontSize: moderateScale(11),
                  }}
                >
                  {description}
                </Text>
              )}
            </View>
          </View>
        </Pressable>
        <View>
          {showArrow && <BlueArrowLeft />}
          {textToShowInsteadOfArrow && (
            <Text
              style={{
                color: "#1D1212",
                fontSize: moderateScale(14),
                fontWeight: "bold",
              }}
            >
              {textToShowInsteadOfArrow}
            </Text>
          )}
          {toggleSwitch && toggleContent}
        </View>
      </View>
      {showBottomBorder && (
        <View
          style={[
            {
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
              paddingVertical: moderateScale(5),
            },
          ]}
        />
      )}
    </>
  );
};

export default ProfileFieldCommonContainer;

const styles = StyleSheet.create({});
