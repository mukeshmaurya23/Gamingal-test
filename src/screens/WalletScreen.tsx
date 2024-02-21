import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import LeftArrow2 from "../assets/svg/LeftArrow2";
import { moderateScale } from "react-native-size-matters";
import fontStyles from "../styles/font-styles";
import ProfileFieldCommonContainer from "../components/ProfileFieldCommonContainer";
import ProfileSmallIcon from "../assets/svg/Profile/ProfileSmallIcon";

import Cup from "../assets/svg/Cup";
import MoreInfo from "../assets/svg/Profile/MoreInfo";
import Bonus from "../assets/svg/Profile/Bonus";
import InviteFriends from "../assets/svg/Profile/InviteFriends";
import Series from "../assets/svg/Profile/Series";
import Wallet from "../assets/svg/Profile/Wallet";
import Matches from "../assets/svg/Profile/Matches";
import CustomerSupport from "../assets/svg/CustomerSupport";
import Email from "../assets/svg/Profile/Email";
import Transaction from "../assets/svg/Wallet/Transaction";
import BankCard from "../assets/svg/Wallet/BankCard";
import KycIcon from "../assets/svg/Wallet/KycIcon";
import TDSIcon from "../assets/svg/Wallet/TDSIcon";
import ReferIcon from "../assets/svg/Wallet/ReferIcon";
import TotalWinning from "../assets/svg/Wallet/TotalWinning";
import NetWinning from "../assets/svg/Wallet/NetWinning";
import WithDrawPoints from "../assets/svg/Wallet/WithDrawPoints";
import PlayMore from "../assets/svg/Wallet/PlayMore";
import EmailBlueIcon from "../assets/svg/Wallet/EmailBlueIcon";
import PhoneBlueIcon from "../assets/svg/Wallet/PhoneBlueIcon";

const WithDrawNowData = [
  {
    id: 1,
    title: "Play-more requirements",
    textToShowInsteadOfArrow: "1",
    icon: PlayMore,
  },
  {
    id: 2,
    title: "With-Drawable Points",
    textToShowInsteadOfArrow: "1",
    icon: WithDrawPoints,
  },
  {
    id: 3,
    title: "Net winnings",
    description: "Amount liable for TDS deduction",
    textToShowInsteadOfArrow: "1.00",
    icon: NetWinning,
  },
  {
    id: 4,
    title: "Total Winnings",
    description: "Amount liable for TDS deduction",
    textToShowInsteadOfArrow: "2.00",
    icon: TotalWinning,
  },
];

const OtherDetailsData = [
  {
    id: 1,
    title: "Transaction History",
    icon: Transaction,
  },
  {
    id: 2,
    title: "Bank Card",
    icon: BankCard,
  },
  {
    id: 3,
    title: "KYC Verification",
    icon: KycIcon,
  },
  {
    id: 4,
    title: "TDS Report",
    icon: TDSIcon,
  },
  {
    id: 5,
    title: "Refer & Earn",
    icon: ReferIcon,
  },
];
const WalletScreen = ({ navigation }: any) => {
  return (
    <>
      <TopBar
        navigation={navigation}
        headText="Wallet"
        label="Explore"
        icon={LeftArrow2}
        rootStyle={{
          paddingBottom: moderateScale(90),
        }}
      />
      <View
        style={{
          paddingHorizontal: moderateScale(16),
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: moderateScale(-59),
            // paddingHorizontal: moderateScale(16),
            // paddingVertical: moderateScale(16),
            padding: moderateScale(25),
            borderRadius: moderateScale(8),
            borderWidth: 1,
            borderColor: "#504DFF40",
            backgroundColor: "#fff",
            //paddingBottom: moderateScale(38),
          }}
        >
          <Text
            style={{
              // marginBottom: moderateScale(3),
              fontSize: moderateScale(12),
              color: "#111",
            }}
          >
            Balance
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(26),
                fontWeight: "bold",
                color: "#111",
              }}
            >
              ₹1000
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#AF1A13",

                paddingHorizontal: moderateScale(16),
                paddingVertical: moderateScale(12),
                borderRadius: moderateScale(5),
              }}
            >
              <Text
                style={{
                  color: "#AF1A13",
                  fontWeight: "bold",
                  fontSize: moderateScale(13),
                  textAlign: "center",
                }}
              >
                Add Money
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              marginTop: moderateScale(26),
              padding: moderateScale(12),
              borderRadius: moderateScale(10),
            }}
          >
            <FlatList
              data={WithDrawNowData}
              nestedScrollEnabled
              scrollEnabled={false}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#E5E5E5",
                    paddingVertical: moderateScale(8),
                  }}
                />
              )}
              renderItem={({ item }) => (
                <ProfileFieldCommonContainer
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  showArrow={false}
                  textToShowInsteadOfArrow={item.textToShowInsteadOfArrow}
                  showBottomBorder={false}
                  rootStyle={{
                    marginTop: moderateScale(10),
                    alignItems: "center",
                  }}
                  titleRootStyle={{
                    fontSize: moderateScale(14),
                  }}
                />
              )}
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#AF1A13",
                marginTop: moderateScale(20),
                paddingHorizontal: moderateScale(16),
                paddingVertical: moderateScale(12),
                borderRadius: moderateScale(5),
              }}
            >
              <Text
                style={{
                  color: "#AF1A13",
                  fontWeight: "bold",
                  fontSize: moderateScale(13),
                  textAlign: "center",
                }}
              >
                Withdraw Money
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: moderateScale(12),

                marginTop: moderateScale(20),
              }}
            >
              Other Details
            </Text>
            <FlatList
              data={OtherDetailsData}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{
                paddingHorizontal: moderateScale(5),
                paddingVertical: moderateScale(10),
              }}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#E5E5E5",
                  }}
                />
              )}
              renderItem={({ item }) => (
                <ProfileFieldCommonContainer
                  title={item.title}
                  icon={item.icon}
                  showArrow={true}
                  showBottomBorder={false}
                  rootStyle={{
                    marginTop: moderateScale(10),
                    alignItems: "center",
                    marginBottom: moderateScale(16),
                  }}
                />
              )}
            />
          </View>
          <View
            style={{
              marginTop: moderateScale(20),
              borderWidth: 1,
              borderColor: "#ccc",
              padding: moderateScale(12),
              borderRadius: moderateScale(10),
              marginBottom: moderateScale(20),
            }}
          >
            {/* <View
              style={{
                flexDirection: "row",
                gap: moderateScale(10),
              }}
            >
              <CustomerSupport />
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontWeight: "bold",
                  color: "#111",
                  marginTop: moderateScale(10),
                }}
              >
                Customer Support
              </Text>
            </View>
           */}
            <View style={styles.row}>
              <CustomerSupport />
              <Text
                style={{
                  fontSize: moderateScale(14),
                  fontWeight: "bold",
                  color: "#111",
                }}
              >
                Customer Support
              </Text>
            </View>

            <View style={styles.row}>
              <PhoneBlueIcon />

              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text style={styles.text}>Support Number</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: "#1737AF",
                      marginLeft: 8,
                      fontSize: moderateScale(12),
                      fontWeight: "500",
                    }}
                  >
                    +91 1234567890
                  </Text>
                  <Text
                    style={{
                      color: "#1737AF",
                      marginLeft: 8,
                      fontSize: moderateScale(12),
                      fontWeight: "500",
                    }}
                  >
                    +91 1234567890
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <EmailBlueIcon />

              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text style={styles.text}>Support Email</Text>
                <Text
                  style={{
                    color: "#1737AF",
                    marginLeft: 8,

                    fontWeight: "500",
                    fontSize: moderateScale(12),
                  }}
                >
                  dummy@gmail.com
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: moderateScale(10),
  },
  text: {
    marginLeft: 8,
    fontSize: moderateScale(12),
  },
});
