import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import Jeoursy from "../../assets/svg/LiveMatchesIcon/Jeoursy";

const LiveStats = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
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
            Points
          </Text>
          <Text
            style={{
              color: "#111",
              fontSize: moderateScale(12),
            }}
          >
            %Sel by
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
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: moderateScale(12),
                color: "#D7C41A",
              }}
            >
              MI
            </Text>
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
              Caption
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(60),
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
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: moderateScale(12),
                color: "#D7C41A",
              }}
            >
              MI
            </Text>
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
              Caption
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(60),
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
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: moderateScale(12),
                color: "#D7C41A",
              }}
            >
              MI
            </Text>
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
              Caption
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(60),
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
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: moderateScale(12),
                color: "#D7C41A",
              }}
            >
              MI
            </Text>
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
              Caption
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: moderateScale(60),
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
        </View>
      </View>
    </ScrollView>
  );
};

export default LiveStats;

const styles = StyleSheet.create({});
