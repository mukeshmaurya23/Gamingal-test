import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import LeftArrow2 from "../../assets/svg/LeftArrow2";
import TopBar from "../../components/TopBar";

const Legality = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar
        label="Explore"
        headText="Legality"
        navigation={navigation}
        icon={LeftArrow2}
        hideBellAndWallet={true}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateScale(16),
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: moderateScale(14),
            fontFamily: "Poppins-Regular",
            color: "black",
            marginBottom: moderateScale(10),
            //  fontWeight: "bold",
          }}
        >
          Legality
        </Text>
        <Text
          style={{
            fontSize: moderateScale(12),
            fontFamily: "Poppins-Regular",
            color: "black",
            letterSpacing: 0.5,
            lineHeight: 20,
            marginBottom: 20,
          }}
        >
          TEST The Public Gaming Act, 1867[6] is a central law that prohibits
          running or being in charge of a public gambling house in India.
          However, under the Constitution of India, State legislatures have been
          entrusted with the power to frame state-specific laws on betting and
          gambling. As per the Seventh Schedule to the Constitution of
          India[7] (Entries 34 and 62 of List II), the State Governments have
          been authorized to make laws on betting and gambling. Fantasy Sports,
          which have been categorized as Game of skill, fall in a separate
          category and the State Gambling legislation of various states (with
          the exception of Assam, Odisha and Telangana) exclude game of skill
          from the ambit of gambling. “Skill” V. “Chance” The main legal hurdle
          faced by online gaming companies in India is whether it is a game of
          skill or a game of chance. Countries have adopted different approaches
          to defining chance and skill. India has followed the US model by
          applying the “dominant factor” test. The Satyanarayana case[8] and
          the Lakshmanan case[9] were the first cases where the “skill versus
          chance” question was addressed. The Courts were of the opinion that no
          game exists which can have ‘skill’ as the individual factor to
          determine the result. In State of Bombay v. R.M.D.C.,[10] the court
          propounded that if a game contains both elements, i.e. skill and
          chance, it would be great learning dhdgdgdg determine the result.
          In State of Bombay v. R.M.D.C.,[10] the court propounded that if a
          game contains both elements, i.e. skill and chance, it would be great
          learning .
        </Text>
      </ScrollView>
    </View>
  );
};

export default Legality;

const styles = StyleSheet.create({});
