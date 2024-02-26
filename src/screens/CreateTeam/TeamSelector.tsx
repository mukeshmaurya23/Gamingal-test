import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { moderateScale } from "react-native-size-matters";
import Jeoursy from "../../assets/svg/LiveMatchesIcon/Jeoursy";

const TeamSelector = ({
  teamData = [],
  role,
  onPlayerSelect,
  selectedPlayersCount,
  selectedPlayers,
  count,
}: any) => {
  const handleTeamSelect = (player: any) => {
    onPlayerSelect(player, role);
  };

  const renderPlayer = ({ item,index }: any) =>{ 
    const isLastItem = index === teamData.length - 1;
    return(
      <Pressable style={[styles.header,{ borderBottomWidth: isLastItem ? 0 :StyleSheet.hairlineWidth,}]} onPress={()=>handleTeamSelect(item)}>
        <View style={{width:'60%',}}>
          <View style={{
            borderLeftWidth: selectedPlayers?.players?.some(
              (player: any) => player.name === item.name,
            ) ? 1 : 0,
            flexDirection:'row'}}>
            <View style={{paddingHorizontal:moderateScale(10),rowGap:moderateScale(5),justifyContent:'center'}}>
              <Jeoursy/>
              <Text>{item.teamName}</Text>
            </View>
            <View style={{rowGap:moderateScale(2)}}>
              <View><Text>{item.name}</Text></View>
              <View><Text>95.5% Selected</Text></View>
              <View><Text>Played last match</Text></View>
            </View>
          </View>
        </View>
        <View style={{width:'16%',alignSelf:'center'}}><Text>10</Text></View>
        <View style={{width:'16%',alignSelf:'center'}}><Text>100</Text></View>
        <View style={{width:'7%',justifyContent:'center',alignItems:'center'}}>
        <CheckBox
            style={{}}
            value={selectedPlayers?.players?.some(
              (player: any) => player.name === item.name,
            )}
            disabled={
              selectedPlayersCount === 11 &&
              !selectedPlayers?.players?.some(
                (player: any) => player.name === item.name,
              )
            }
            onValueChange={()=>handleTeamSelect(item)}
          />
          </View>
      </Pressable>
    )
  }
  return (
    <View
      style={{
        flex:1,
        paddingHorizontal: moderateScale(16),
      }}
    >
      <View style={styles.header}>
        <View style={{width:'60%',alignSelf:'center'}}><Text>Player</Text></View>
        <View style={{width:'15%',alignSelf:'center'}}><Text>Points</Text></View>
        <View style={{width:'15%',alignSelf:'center'}}><Text>Credits</Text></View>
        <View style={{width:'7%'}}></View>
      </View>
      <FlatList
        data={teamData}
        style={{flex:1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow:1}}
        ItemSeparatorComponent={()=>(<View style={{padding:moderateScale(10)}}/>)}
        ListFooterComponent={()=>(<View style={{marginBottom:moderateScale(70)}}/>)}
        keyExtractor={(item) => item.name}
        renderItem={renderPlayer}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomColor: '#CCC',
    paddingVertical: 10,
  },
});
export default TeamSelector;
