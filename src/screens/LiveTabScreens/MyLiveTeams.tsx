import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import PlayerIcon from "../../assets/svg/MatchDetails/PlayerIcon";
import Caption from "../../assets/svg/MatchDetails/Caption";
import { ScrollView } from "react-native-gesture-handler";
import ViceCaption from "../../assets/svg/MatchDetails/ViceCaption";

const MyLiveTeams = () => {
  const CustomCapVcContainer = ({ label, icon }: any) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayerIcon />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: moderateScale(20),
              width: 1.5,
              opacity: 0.8,
              backgroundColor: "#FFD700",
            }}
          />
          <View
            style={{
              minWidth: moderateScale(80),
              height: moderateScale(20),
              opacity: 0.2,
              backgroundColor: "#FFFEFA",
            }}
          ></View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              color: "white",
              textAlign: "left",
              position: "absolute",
              left: moderateScale(3),
              fontSize: moderateScale(8),
              fontWeight: "bold",
              alignSelf: "center",
              width: moderateScale(80),
            }}
          >
            {label}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: -7,
            paddingTop: moderateScale(10),
          }}
        >
          {React.createElement(icon)}
        </View>
      </View>
    );
  };
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
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
        }}
      >
        <ImageBackground
          source={require("../../assets/images/grassBg.jpg")}
          imageStyle={{ borderRadius: 6, overflow: "hidden" }}
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              paddingHorizontal: moderateScale(10),
              paddingVertical: moderateScale(10),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  gap: moderateScale(10),
                }}
              >
                <Text style={styles.teamText}>RCB</Text>

                <Text style={styles.scoresText}>6</Text>
              </View>
              <View
                style={{
                  gap: moderateScale(10),
                }}
              >
                <Text style={styles.teamText}>CSK</Text>

                <Text style={styles.scoresText}>6</Text>
              </View>

              <CustomCapVcContainer
                label="Mahendra singh dhoniiiiiii"
                icon={Caption}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: moderateScale(20),
              }}
            >
              <View>
                <Text style={styles.teamText}>WK</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  1
                </Text>
              </View>
              <View>
                <Text style={styles.teamText}>Bat</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  4
                </Text>
              </View>
              <View>
                <Text style={styles.teamText}>Ar</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  2
                </Text>
              </View>
              <View>
                <Text style={styles.teamText}>Bowl</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  5
                </Text>
              </View>
              <CustomCapVcContainer label="VC" icon={ViceCaption} />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(204, 253, 127, 0.24)",
            }}
          />
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: moderateScale(10),
            paddingVertical: moderateScale(10),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity activeOpacity={0.9}>
            <Text
              style={{
                backgroundColor: "#1D12120D",
                color: "black",
                borderRadius: 6,
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(8),
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Text
              style={{
                backgroundColor: "#1D12120D",
                color: "black",
                borderRadius: 6,
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(8),
              }}
            >
              View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Text
              style={{
                backgroundColor: "#1D12120D",
                color: "black",
                borderRadius: 6,
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(8),
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyLiveTeams;

const styles = StyleSheet.create({
  teamContainer: {
    marginVertical: moderateScale(10),
  },
  teamText: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: moderateScale(5),
  },
  scoresContainer: {
    marginVertical: moderateScale(10),
  },
  scoresText: {
    fontSize: moderateScale(12),
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: moderateScale(2),
    textAlign: "center",
  },
  playerDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: moderateScale(10),
    color: "#fff",
  },
  playerDetailsText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#fff",
  },
  countContainer: {
    marginVertical: moderateScale(10),
  },
  countText: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#fff",
  },
  vcCContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: moderateScale(10),
  },
  vcCText: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#fff",
  },
});
