import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import TopBar from "../../components/TopBar";
import Chat from "../../assets/svg/HomeScreen/Chat";
import { moderateScale } from "react-native-size-matters";
import { FlatList } from "react-native-gesture-handler";
import BatIcon from "../../assets/svg/HomeScreen/BatIcon";
import FootBall from "../../assets/svg/HomeScreen/FootBall";
import BaseBall from "../../assets/svg/HomeScreen/BaseBall";
import UnKnown from "../../assets/svg/HomeScreen/Unknow";
import TableTennis from "../../assets/svg/HomeScreen/TableTennis";
import BasketBall from "../../assets/svg/HomeScreen/BasketBall";
import DownArrow from "../../assets/svg/HomeScreen/DownArrow";
import VS from "../../assets/svg/HomeScreen/VS";
import RCB from "../../assets/svg/HomeScreen/RCB";
import Chennai from "../../assets/svg/HomeScreen/Chennai";
import { useNavigation } from "@react-navigation/native";
import CustomSlider from "../../components/CustomSlider";
import HamBurger from "../../assets/svg/HamBurger";
import Animated from "react-native-reanimated";
export const featuredData = [
  {
    id: 1,
    title: "Cricket",
    icon: <BatIcon />,
  },
  {
    id: 2,
    title: "",
    icon: <FootBall />,
  },

  {
    id: 6,
    title: "",
    icon: <UnKnown />,
  },
  {
    id: 3,
    title: "",
    icon: <TableTennis />,
  },
  {
    id: "10",
    title: "",
    icon: <FootBall />,
  },
  {
    id: "11",
    title: "",
    icon: <UnKnown />,
  },
  {
    id: "12",
    title: "",
    icon: <BasketBall />,
  },
];
export const matchesData = [
  {
    id: 1,
    team1: "MI",
    team2: "CSK",
    time: "9.00 PM",
    team1FullName: "Royalle Challengers Bangalore",
    team2FullName: "Chennai Super Kings",
    maxPrice: "₹ 3.6 Lakh",
  },
  {
    id: 2,
    team1: "MI",
    team2: "CSK",
    time: "7.00 PM",
    team1FullName: "Mumbai Indians",
    team2FullName: "Chennai Super Kings",
    maxPrice: "₹ 8 Crores",
  },
  {
    id: 3,
    team1: "RR",
    team2: "DC",
    time: "8.00 PM",
    team1FullName: "Rajasthan Royals",
    team2FullName: "Delhi Capitals",
    maxPrice: "₹ 100 lakh",
  },
  {
    id: 4,
    team1: "SRH",
    team2: "KKR",
    time: "7.00 PM",
    team1FullName: "Sunrisers Hyderabad",
    team2FullName: "Kolkata Knight Riders",
    maxPrice: "₹ 10k",
  },
  {
    id: 5,
    team1: "RCB",
    team2: "CSK",
    time: "9.00 PM",
    team1FullName: "Royalle Challengers Bangalore",
    team2FullName: "Chennai Super Kings",
    maxPrice: "₹ 10,000",
  },
];
const HomeScreen = ({ navigation }: { navigation: any }) => {
  const nav = useNavigation<any>();
  const screenWidth = Dimensions.get("window").width;
  const renderItem = ({ item }: { item: any }) => {
    const isFirstItem = item === featuredData[0];

    return (
      <View
        style={{
          borderRadius: isFirstItem ? moderateScale(8) : 0,
          backgroundColor: isFirstItem ? "#AF1A13" : "transparent",
          padding: isFirstItem ? moderateScale(8) : moderateScale(0),
          alignSelf: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.9}>
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(2),
              alignItems: "center",
            }}
          >
            {item.icon}
            <Text
              style={{
                color: "#fff",
              }}
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  // const renderItemForMatches = ({item}: {item: any}) => {
  //   const navigateToDetails = () => {
  //     nav.navigate('MatchDetails', {
  //       team1: item?.team1,
  //       team2: item?.team2,
  //       time: item?.time,
  //       team1FullName: item?.team1FullName,
  //       team2FullName: item?.team2FullName,
  //       maxPrice: item?.maxPrice,
  //     });
  //   };
  //   return (
  //     <>
  //       <Pressable onPress={navigateToDetails}>
  //         <View
  //           style={{
  //             borderWidth: 1,
  //             borderColor: '#ccc',
  //             padding: moderateScale(10),
  //             borderRadius: moderateScale(5),
  //           }}>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //             }}>
  //             <Text
  //               style={{
  //                 fontSize: moderateScale(12),
  //                 color: 'black',
  //               }}>
  //               Oman T20 Cup
  //             </Text>
  //             <Text
  //               style={{
  //                 backgroundColor: '#AF135A0D',
  //                 padding: moderateScale(5),
  //                 color: '#AF135A',
  //                 fontSize: moderateScale(10),
  //                 borderRadius: moderateScale(5),
  //               }}>
  //               Start in 2 hours
  //             </Text>
  //           </View>
  //           <View
  //             style={{
  //               borderTopColor: '#ccc',
  //               borderTopWidth: 1,
  //               paddingVertical: moderateScale(5),
  //               marginTop: moderateScale(10),
  //             }}
  //           />
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               paddingHorizontal: moderateScale(10),
  //               paddingVertical: moderateScale(10),
  //             }}>
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 alignItems: 'center',
  //               }}>
  //               <RCB />
  //               <Text
  //                 style={{
  //                   fontSize: moderateScale(14),
  //                   fontWeight: 'bold',
  //                   color: 'black',
  //                   marginLeft: moderateScale(5),
  //                 }}>
  //                 {item?.team1}
  //               </Text>
  //             </View>

  //             <View
  //               style={{
  //                 marginLeft: moderateScale(10),
  //               }}>
  //               <VS />
  //             </View>
  //             <View
  //               style={{
  //                 flexDirection: 'row',
  //                 alignItems: 'center',
  //               }}>
  //               <Text
  //                 style={{
  //                   fontSize: moderateScale(14),
  //                   fontWeight: 'bold',
  //                   color: 'black',
  //                   marginRight: moderateScale(5),
  //                 }}>
  //                 {item?.team2}
  //               </Text>
  //               <Chennai />
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               width: '100%',
  //               paddingHorizontal: moderateScale(20),
  //               justifyContent: 'space-between',
  //             }}>
  //             <View
  //               style={{
  //                 flex: 1,
  //               }}>
  //               <Text
  //                 style={{
  //                   fontSize: moderateScale(12),
  //                   textAlign: 'left',
  //                 }}>
  //                 {item?.team1FullName}
  //               </Text>
  //             </View>
  //             <View
  //               style={{
  //                 alignSelf: 'flex-start',
  //                 flex: 1,
  //               }}>
  //               <Text
  //                 style={{
  //                   fontSize: moderateScale(12),
  //                   textAlign: 'center',
  //                 }}>
  //                 {item?.time}
  //               </Text>
  //             </View>
  //             <View style={{flex: 1}}>
  //               <Text
  //                 style={{
  //                   fontSize: moderateScale(12),
  //                   textAlign: 'right',
  //                 }}>
  //                 {item?.team2FullName}
  //               </Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //             }}>
  //             <Text
  //               style={{
  //                 color: '#12171D',
  //                 fontSize: moderateScale(12),
  //               }}>
  //               Max Price Pool upto
  //             </Text>
  //             <View
  //               style={{
  //                 borderTopColor: '#fff200',
  //                 width: '100%',
  //                 marginTop: moderateScale(5),
  //                 borderTopWidth: 0.2,
  //               }}
  //             />
  //             <Text
  //               style={{
  //                 fontSize: moderateScale(20),
  //                 fontWeight: 'bold',
  //                 color: '#ff9f1a',
  //               }}>
  //               {item?.maxPrice}
  //             </Text>
  //           </View>
  //         </View>
  //       </Pressable>
  //     </>
  //   );
  // };

  const renderItemForMatches = ({ item }: { item: any }) => {
    const navigateToDetails = () => {
      nav.navigate("MatchDetails", {
        team1: item?.team1,
        team2: item?.team2,
        time: item?.time,
        team1FullName: item?.team1FullName,
        team2FullName: item?.team2FullName,
        maxPrice: item?.maxPrice,
      });
    };
    return (
      <>
        <Pressable onPress={navigateToDetails}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: moderateScale(10),
              borderRadius: moderateScale(5),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: "black",
                }}
              >
                IPL 2024
              </Text>
              <Text
                style={{
                  backgroundColor: "#AF135A0D",
                  padding: moderateScale(5),
                  color: "#AF135A",
                  fontSize: moderateScale(10),
                  borderRadius: moderateScale(5),
                }}
              >
                Start in 2 hours
              </Text>
            </View>
            <View
              style={{
                borderTopColor: "#ccc",
                borderTopWidth: 1,
                paddingVertical: moderateScale(5),
                marginTop: moderateScale(10),
              }}
            />
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.item}>
                  <RCB />
                  <Text style={styles.itemText}>{item?.team1}</Text>
                </View>
                <View style={styles.item}>
                  <VS />
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemText}>{item?.team2}</Text>
                  <Chennai />
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.item}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                    }}
                  >
                    {item?.team1FullName}
                  </Text>
                </View>
                <View style={styles.item}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      // marginTop: moderateScale(-25),
                    }}
                  >
                    9.00 PM
                  </Text>
                </View>
                <View style={styles.item}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                    }}
                  >
                    {item?.team2FullName}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#12171D",
                  fontSize: moderateScale(11),
                  marginTop: moderateScale(10),
                }}
              >
                Max Price Pool upto
              </Text>
              <View
                style={{
                  borderTopColor: "#fff200",
                  width: "100%",
                  marginTop: moderateScale(5),
                  borderTopWidth: 0.2,
                }}
              />
              <Text
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: "700",
                  color: "#ff9f1a",
                  marginTop: moderateScale(5),
                }}
              >
                {item?.maxPrice}
              </Text>
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <>
      <TopBar
        label="Greetings"
        headText="Mukesh Maurya"
        navigation={navigation}
        icon={HamBurger}
      />
      <Animated.ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
        }}
      >
        <CustomSlider />
        <View
          style={{
            flex: 1,

            paddingHorizontal: moderateScale(10),
            paddingVertical: moderateScale(20),
          }}
        >
          {/* <Image
            source={require('../../assets/images/homeBanner.jpeg')}
            style={{
              width: '100%',
              height: moderateScale(120),
              borderRadius: moderateScale(5),
            }}
          /> */}

          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(10),
              alignItems: "center",
              marginTop: moderateScale(20),

              backgroundColor: "rgba(255, 184, 184, 0.1)",
              borderRadius: moderateScale(5),
              padding: moderateScale(10),
            }}
          >
            <Chat />
            <Text
              style={{
                color: "#AF1A13",
              }}
            >
              Join and Win Big
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: moderateScale(18),
                fontWeight: "bold",
                paddingVertical: moderateScale(20),
                color: "black",
              }}
            >
              Browse From
            </Text>
            <FlatList
              data={featuredData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{
                columnGap: moderateScale(15),
              }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: moderateScale(30),
              paddingHorizontal: moderateScale(30),
              justifyContent: "space-evenly",
            }}
          >
            <DownArrow />

            <DownArrow />
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: "bold",
                color: "black",
                marginLeft: moderateScale(5),
              }}
            >
              Upcoming Matches
            </Text>
            <DownArrow />

            <DownArrow />
          </View>
          <FlatList
            data={matchesData}
            scrollEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemForMatches}
            contentContainerStyle={{
              rowGap: moderateScale(15),
            }}
            showsVerticalScrollIndicator={false}
          />
          <View
            style={{
              width: screenWidth - moderateScale(20),
              height: moderateScale(150),
              paddingVertical: moderateScale(5),
              marginTop: moderateScale(20),
            }}
          >
            <Image
              source={require("../../assets/images/ludo.jpg") as any}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: moderateScale(10),
              }}
            />
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  row: {
    backgroundColor: "white",

    flexDirection: "row",
    paddingVertical: moderateScale(2),
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(5),
    justifyContent: "center",
  },
  itemText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "#12171D",
    marginLeft: moderateScale(5),
  },
  fullText: {
    color: "#1D1212",
  },
});
