import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import ProfileFieldCommonContainer from "../../components/ProfileFieldCommonContainer";
import { moderateScale } from "react-native-size-matters";
import LanguageSvg from "../../assets/svg/ProfileScreenSvg/LanguageSvg";
import BellIconSvg from "../../assets/svg/ProfileScreenSvg/BellIconSvg";

const Settings = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleContent = (
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#1737AF" : "#f4f3f4"}
      style={{
        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
      }}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
  return (
    <>
      <TopBar
        label="Explore"
        headText="Settings"
        navigation={navigation}
        goToMainScreen={true}
        icon={LeftArrow2}
        hideBellAndWallet={true}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScale(16),
        }}
      >
        <ProfileFieldCommonContainer
          title={"English"}
          description={"Switch language"}
          icon={LanguageSvg}
          showArrow={true}
          onPress={() => {}}
          showBottomBorder={true}
          rootStyle={{
            marginTop: moderateScale(10),
          }}
        />
        <ProfileFieldCommonContainer
          title={"Notification"}
          description={"Turn on toggle to receive notification"}
          icon={BellIconSvg}
          showArrow={false}
          onPress={() => {}}
          toggleContent={toggleContent}
          toggleSwitch={true}
          showBottomBorder={true}
          rootStyle={{
            marginTop: moderateScale(20),
          }}
        />
      </View>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({});
