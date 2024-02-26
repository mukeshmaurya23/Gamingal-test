import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { moderateScale } from "react-native-size-matters";

import ShareIcon from "../../assets/svg/MatchDetails/ShareIcon";
import Badge from "../../assets/svg/MatchDetails/Badge";
import Win from "../../assets/svg/MatchDetails/Win";
import RedFlag from "../../assets/svg/MatchDetails/RedFlag";
import ProgressBar from "../../components/ProgressBar";

const AllContest = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
        backgroundColor: "#fff",

        flex: 1,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#E6E6E6",
          padding: moderateScale(16),
          borderRadius: moderateScale(8),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: moderateScale(10),
          }}
        >
          <View>
            <Text
              style={{
                color: "#12171D",
                textAlign: "left",
                fontSize: moderateScale(11),
                marginTop: moderateScale(10),
              }}
            >
              Contest
            </Text>

            <Text
              style={{
                fontSize: moderateScale(16),
                textAlign: "left",
                fontWeight: "bold",
                color: "#111",

                textTransform: "uppercase",

                marginTop: moderateScale(5),
              }}
            >
              Crick Mega
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#12171D",
                textAlign: "right",
                fontSize: moderateScale(11),
                marginTop: moderateScale(10),
              }}
            >
              Prize Pool
            </Text>

            <Text
              style={{
                fontSize: moderateScale(16),
                textAlign: "left",
                fontWeight: "700",
                color: "#ff9f1a",
                marginTop: moderateScale(5),
              }}
            >
              $500
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#E6E6E6",
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
            width: "100%",
            paddingVertical: moderateScale(12),
          }}
        >
          <View style={{ rowGap: 10, width: "70%" }}>
            <ProgressBar
              progressBarWidth={"90%"}
              rootStyle={{
                marginTop: moderateScale(10),
              }}
            />

            <Text
              style={{
                color: "#1737AF",

                fontSize: moderateScale(11),
              }}
            >
              20 / 200 spots left
            </Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                backgroundColor: "#AF1A13",
                paddingHorizontal: moderateScale(16),
                paddingVertical: moderateScale(8),
                borderRadius: moderateScale(8),
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: moderateScale(14),
                }}
              >
                Join
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#AF137E1A",
          //opacity: 0.1,
          borderRadius: moderateScale(2),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: moderateScale(16),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: moderateScale(25),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Badge />
              <Text
                style={{
                  color: "#AF137E",
                  fontWeight: "bold",
                  fontSize: moderateScale(12),
                }}
              >
                $70
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Win />
              <Text
                style={{
                  color: "#AF137E",
                  fontWeight: "bold",
                  fontSize: moderateScale(12),
                }}
              >
                56% W
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RedFlag />
              <Text
                style={{
                  color: "#AF137E",
                  fontWeight: "bold",
                  fontSize: moderateScale(12),
                }}
              >
                10 Teams
              </Text>
            </View>
          </View>
          <View>
            <ShareIcon />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllContest;

const styles = StyleSheet.create({});
