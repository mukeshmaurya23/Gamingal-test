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
      <Pressable style={[styles.header,{ borderBottomWidth: isLastItem ? 0 : moderateScale(1)}]} onPress={()=>handleTeamSelect(item)}>
        <View style={{width:'60%'}}>
          <View style={{
            borderLeftWidth: selectedPlayers?.players?.some(
              (player: any) => player.name === item.name,
            ) ? moderateScale(2) : 0,
            borderLeftColor: selectedPlayers?.players?.some(
              (player: any) => player.name === item.name,
            ) ? '#1737AF' : "",
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
        <View style={[{width:'15%',alignSelf:'center'},styles.centerACJC]}><Text>10</Text></View>
        <View style={[{width:'15%',alignSelf:'center'},styles.centerACJC]}><Text>100</Text></View>
        <View style={[{width:'10%',justifyContent:'center',alignItems:'center'},styles.centerACJC]}>
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
        <View style={[{width:'60%',alignSelf:'center',paddingLeft:moderateScale(10)}]}><Text>Player</Text></View>
        <View style={[{width:'15%',alignSelf:'center'},styles.centerACJC]}><Text>Points</Text></View>
        <View style={[{width:'15%',alignSelf:'center'},styles.centerACJC]}><Text>Credits</Text></View>
        <View style={[{width:'10%'},styles.centerACJC]}></View>
      </View>
      <FlatList
        data={teamData}
        style={{flex:1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow:1}}
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
    paddingVertical: moderateScale(15),
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  centerACJC:{
    alignItems:'center',
    justifyContent:'center'
  }
});
export default TeamSelector;
