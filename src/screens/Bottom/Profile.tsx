import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import TopBar from "../../components/TopBar";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import { moderateScale } from "react-native-size-matters";
import ContextWon from "../../assets/svg/Profile/ContextWon";
import Matches from "../../assets/svg/Profile/Matches";
import Flag from "../../assets/svg/Flag";
import Series from "../../assets/svg/Profile/Series";
import HamBurger from "../../assets/svg/HamBurger";
import ProfileSmallIcon from "../../assets/svg/Profile/ProfileSmallIcon";
import LeftArrow from "../../assets/svg/LeftArrow";
import BlueArrowLeft from "../../assets/svg/Profile/BlueArrowLeft";
import ProfileFieldCommonContainer from "../../components/ProfileFieldCommonContainer";
import Wallet from "../../assets/svg/Profile/Wallet";
import Runs from "../../assets/svg/Profile/Runs";
import Bonus from "../../assets/svg/Profile/Bonus";
import ContextHistory from "../../assets/svg/Profile/ContextHistory";
import MoreInfo from "../../assets/svg/Profile/MoreInfo";
import HowToPlay from "../../assets/svg/Profile/HowToPlay";
import Settings from "../../assets/svg/Profile/Settings";
import InviteFriends from "../../assets/svg/Profile/InviteFriends";
import Grade from "../../assets/svg/Profile/Grade";
import Email from "../../assets/svg/Profile/Email";
import ProgressBar from "../../assets/svg/Profile/ProgressBar";
import { useNavigation } from "@react-navigation/native";

const GridConatinerRow = (props: any) => {
  const { icon, textTitle, textValue } = props;
  return (
    <View style={styles.item}>
      {React.createElement(icon)}
      <View>
        <Text
          style={{
            fontSize: moderateScale(14),
            color: "#111",
          }}
        >
          {textTitle}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
            color: "#111",

            fontWeight: "bold",
          }}
        >
          {textValue}
        </Text>
      </View>
    </View>
  );
};
const Profile = ({ navigation }: { navigation: any }) => {
  console.log(navigation, "navigation from profile");
  const ProfileData = [
    {
      id: 1,
      title: "Personal",
      data: [
        {
          title: "My Details",
          description: "View your personal details",
          icon: ProfileSmallIcon,
          onPress: () => navigation.navigate("MyDetails"),
        },
        {
          title: "Runs",
          description: "Spin",
          icon: Runs,
          onPress: () => navigation.navigate("Runs"),
        },
        {
          title: "Wallet Balance",
          description: "$100",
          icon: Wallet,
          onPress: () =>
            navigation.navigate("ProfileStack", { screen: "ProfileWallet" }),
        },
        {
          title: "Contest History",
          description: "View your personal details",
          icon: ContextHistory,
          onPress: () => navigation.navigate("MyDetails"),
        },
        {
          title: "Bonus",
          description: "Spin",
          icon: Bonus,
          onPress: () => navigation.navigate("MyDetails"),
        },
      ],
    },
    {
      id: 2,
      title: "Other",
      data: [
        {
          title: "Invite Friends",
          description: "Invite your friends and win exiciting rewards",
          icon: InviteFriends,
          onPress: () => navigation.navigate("InviteFriends"),
        },
        {
          title: "Settings",
          description: "Personalize it according to you",
          icon: Settings,
          onPress: () =>
            navigation.navigate("ProfileStack", { screen: "Settings" }),
        },
        {
          title: "How to Play",
          description: "Check out how to play contest",
          icon: HowToPlay,
          onPress: () =>
            navigation.navigate("ProfileStack", { screen: "HowToPlay" }),
        },
        {
          title: "More Info",
          description: "Check out more details",
          icon: MoreInfo,
          onPress: () => navigation.navigate("InviteFriends"),
        },
      ],
    },
  ];
  // const nav = useNavigation<any>();

  const handleVerifyDetailsPress = () => {
    navigation.navigate("ProfileStack", { screen: "VerifyDetails" });
  };
  const handleEditProfilePress = () => {
    navigation.navigate("ProfileStack", { screen: "EditProfile" });
    // navigation.popToTop();
  };
  return (
    <>
      <TopBar
        label="Explore"
        headText="Profile"
        navigation={navigation}
        icon={HamBurger}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            gap: moderateScale(20),
            marginBottom: moderateScale(20),
          }}
        >
          <ProfileIcon />
          <View
            style={{
              gap: moderateScale(10),
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: "bold",
                color: "#111",
              }}
            >
              Mukesh Maurya
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleEditProfilePress}
              style={{
                paddingHorizontal: moderateScale(25),
                paddingVertical: moderateScale(5),
                borderWidth: 1,

                borderColor: "#AF1A13",
              }}
              // onPress={() => navigation.navigate("ProfileEdit")}
            >
              <Text
                style={{
                  color: "#AF1A13",
                  textAlign: "center",
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <GridConatinerRow
            icon={ContextWon}
            textTitle="Context Won"
            textValue="5"
          />
          <GridConatinerRow
            icon={Matches}
            textTitle="Total Matches"
            textValue="3"
          />
        </View>
        <View style={styles.row}>
          <GridConatinerRow
            icon={Flag}
            textTitle="Total Matches"
            textValue="12"
          />
          <GridConatinerRow icon={Series} textTitle="Series" textValue="12" />
        </View>
        <Pressable
          onPress={handleVerifyDetailsPress}
          style={{
            borderWidth: 1,
            borderColor: "#ecf0f1",
            padding: moderateScale(10),
            marginTop: moderateScale(20),
          }}
        >
          <ProfileFieldCommonContainer
            title="Verify Your Details"
            description=""
            onPress={handleVerifyDetailsPress}
            icon={ProfileSmallIcon}
            showArrow={true}
            showBottomBorder={false}
            rootStyle={{
              marginTop: moderateScale(10),
              alignItems: "center",
            }}
          />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
              paddingVertical: moderateScale(5),
            }}
          />
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(10),
              alignItems: "center",
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(10),
            }}
          >
            <Email />
            <Text style={{ fontSize: moderateScale(12) }}>
              Verify Your Email
            </Text>
          </View>
        </Pressable>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#ecf0f1",
            padding: moderateScale(10),
            marginTop: moderateScale(20),
          }}
        >
          <ProfileFieldCommonContainer
            title="Your Current Grade"
            description=""
            icon={Grade}
            showArrow={true}
            showBottomBorder={false}
            rootStyle={{
              marginTop: moderateScale(10),
              alignItems: "center",
            }}
          />
          <View
            style={{
              paddingHorizontal: moderateScale(5),
              paddingVertical: moderateScale(10),
            }}
          >
            <ProgressBar />
            <Text
              style={{
                fontSize: moderateScale(12),

                marginTop: moderateScale(10),
              }}
            >
              Deposit 100 more to upgrade to grade 2
            </Text>
          </View>
        </View>
        <SectionList
          sections={ProfileData}
          scrollEnabled={false}
          keyExtractor={(item, index) => item.title}
          contentContainerStyle={{
            marginBottom: moderateScale(20),
          }}
          ItemSeparatorComponent={() => (
            <View style={{ paddingVertical: moderateScale(10) }} />
          )}
          renderItem={({ item }) => (
            <ProfileFieldCommonContainer
              title={item.title}
              description={item.description}
              icon={item.icon}
              showArrow={true}
              onPress={item.onPress}
              showBottomBorder={true}
              rootStyle={{
                marginTop: moderateScale(10),
              }}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                color: "#1D1212",
                fontSize: moderateScale(12),
                fontWeight: "500",
                paddingVertical: moderateScale(20),
              }}
            >
              {title}
            </Text>
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(16),
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    gap: moderateScale(5),
  },
  item: {
    flex: 1,
    // alignItems: "center",
    flexDirection: "row",

    justifyContent: "space-between",
    padding: moderateScale(9),
    //margin: moderateScale(4),
    marginVertical: moderateScale(4),
    //marginRight: moderateScale(4),
    borderWidth: 1,
    borderColor: "#ecf0f1",
  },
  itemText: {
    fontSize: 16,
  },
});

export default Profile;
