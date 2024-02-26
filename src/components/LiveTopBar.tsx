import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import fontStyles from "../styles/font-styles";
import LeftArrow2 from "../assets/svg/LeftArrow2";
import RCB from "../assets/svg/HomeScreen/RCB";
import Chennai from "../assets/svg/HomeScreen/Chennai";
import { useRoute } from "@react-navigation/native";

const LiveTopBar = ({ navigation, team1, team2 }: any) => {
  const route = useRoute();
  console.log(route, "route from live top bar");

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require("../assets/images/liveScoreBg.png")}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "#AF1A14",
              opacity: 0.8,
            }}
          />
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: moderateScale(20),
                paddingTop: moderateScale(50),
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                gap: moderateScale(20),
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.goBack()}
              >
                {/* <HamBurger /> */}
                <LeftArrow2 />
              </TouchableOpacity>
              <View style={{}}>
                <Text
                  style={[
                    fontStyles.poppinsRegular14,
                    {
                      color: "#E6EDF5",
                    },
                  ]}
                >
                  Live
                </Text>
                <Text
                  style={{
                    color: "#F9F2F2",
                    paddingVertical: moderateScale(5),
                    fontWeight: "bold",
                    fontSize: moderateScale(18),
                    letterSpacing: moderateScale(0.5),
                  }}
                >
                  {`${team1} vs ${team2}`}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: moderateScale(20),
              paddingTop: moderateScale(20),
              paddingVertical: moderateScale(15),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: moderateScale(10),
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: moderateScale(50),
                }}
              >
                <RCB />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  columnGap: moderateScale(20),
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {team1}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  200/5 (20)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: moderateScale(10),
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  columnGap: moderateScale(20),
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    alignSelf: "flex-end",
                    fontWeight: "bold",
                  }}
                >
                  {team2}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  (19) 197/5
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: moderateScale(50),
                }}
              >
                <Chennai />
              </View>
            </View>
          </View>

          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            CSK need 15 runs to win
          </Text>

          <View
            style={{
              borderBottomColor: "#E6E6E6",
              borderBottomWidth: 1,
              margin: moderateScale(20),
              marginVertical: moderateScale(10),
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(10),
            }}
          >
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  columnGap: moderateScale(60),
                  paddingVertical: moderateScale(5),
                }}
              >
                <Text style={{ color: "#fff" }}>MSD</Text>
                <Text style={{ color: "#fff" }}>100 (50)</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#fff" }}>Virat Kohli</Text>
                <Text style={{ color: "#fff" }}>10 (3)</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: moderateScale(5),
                    columnGap: moderateScale(30),
                  }}
                >
                  <Text style={{ color: "#fff" }}>M. Siraj</Text>
                  <Text style={{ color: "#fff" }}>0 (3)</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: moderateScale(3),
                  }}
                >
                  {Array.from({ length: 6 }).map((_, index) => (
                    <View
                      key={index}
                      style={{
                        width: moderateScale(20),
                        height: moderateScale(20),
                        backgroundColor: "transparent",
                        borderColor: "#fff",
                        borderWidth: 1,
                        flexDirection: "row",
                        borderRadius: moderateScale(50),
                        marginVertical: moderateScale(5),
                      }}
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default LiveTopBar;

const styles = StyleSheet.create({});
