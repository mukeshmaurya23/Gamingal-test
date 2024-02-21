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
import ProgressBar from "../../assets/svg/Profile/ProgressBar";
import ShareIcon from "../../assets/svg/MatchDetails/ShareIcon";
import Badge from "../../assets/svg/MatchDetails/Badge";
import Win from "../../assets/svg/MatchDetails/Win";
import RedFlag from "../../assets/svg/MatchDetails/RedFlag";

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
            marginBottom: moderateScale(8),
          }}
        >
          <Text>Contest</Text>
          <Text>Price Pool</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: moderateScale(16),
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#000",
              fontSize: moderateScale(16),
            }}
          >
            CRICK MEGA
          </Text>
          <Text
            style={{
              color: "#e67e22",
              fontWeight: "bold",
              fontSize: moderateScale(20),
            }}
          >
            $1000
          </Text>
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
            alignItems: "center",
            width: "100%",
            paddingVertical: moderateScale(12),
          }}
        >
          <View style={{ flexDirection: "column", width: "70%", rowGap: 10 }}>
            <View
              style={{
                height: moderateScale(8),
                borderRadius: moderateScale(4),
                backgroundColor: "#E6E6E6",
              }}
            ></View>
            <Text
              style={{
                color: "#1737AF",
                fontSize: moderateScale(12),
                letterSpacing: moderateScale(0.5),
              }}
            >
              100/200 Spots Left
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
                  color: "#111",
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
                  color: "#111",
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
                  color: "#111",
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
