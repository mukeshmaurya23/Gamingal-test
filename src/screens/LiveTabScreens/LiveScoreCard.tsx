import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import Jeoursy from "../../assets/svg/LiveMatchesIcon/Jeoursy";

const LiveScoreCard = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            Players
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            columnGap: moderateScale(20),
          }}
        >
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            R
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            B
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            6s
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            4s
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            S/R
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: moderateScale(10),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            columnGap: moderateScale(10),
          }}
        >
          <View>
            <Jeoursy />
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: "#111",
                fontSize: moderateScale(12),
                fontWeight: "bold",
              }}
            >
              Rohit Sharma
            </Text>
            <Text
              style={{
                color: "#111",
                fontSize: moderateScale(10),
              }}
            >
              c & b M Ali
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(18),
          }}
        >
          <Text
            style={{
              color: "#111",
              textAlign: "center",
              fontSize: moderateScale(12),
            }}
          >
            100
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: moderateScale(10),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            columnGap: moderateScale(10),
          }}
        >
          <View>
            <Jeoursy />
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: "#111",
                fontSize: moderateScale(12),
                fontWeight: "bold",
              }}
            >
              Rohit Sharma
            </Text>
            <Text
              style={{
                color: "#111",
                fontSize: moderateScale(10),
              }}
            >
              c & b M Ali
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(18),
          }}
        >
          <Text
            style={{
              color: "#111",
              textAlign: "center",
              fontSize: moderateScale(12),
            }}
          >
            100
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: moderateScale(10),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            columnGap: moderateScale(10),
          }}
        >
          <View>
            <Jeoursy />
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: "#111",
                fontSize: moderateScale(12),
                fontWeight: "bold",
              }}
            >
              Rohit Sharma
            </Text>
            <Text
              style={{
                color: "#111",
                fontSize: moderateScale(10),
              }}
            >
              c & b M Ali
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(18),
          }}
        >
          <Text
            style={{
              color: "#111",
              textAlign: "center",
              fontSize: moderateScale(12),
            }}
          >
            100
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            50
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LiveScoreCard;

const styles = StyleSheet.create({});
