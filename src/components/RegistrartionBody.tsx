import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Phone from '../assets/svg/Phone';
import OtpInput from '../screens/OtpInput';

const RegistrartionBody = (props: any) => {
  const {
    btnText,
    headingText,
    label,
    descriptionText,
    placeholder,
    keyboardType,
    onChangeText,
    value,
    keyData,
    navigation,
    submitHandler,
    numDigits,
    inputRefs,
    handleInputChange,
    handleKeyPress,
  } = props;
  //console.log(navigation, 'navigation from login');
  return (
    <>
      <View
        style={{
          paddingHorizontal: moderateScale(20),
          paddingVertical: moderateScale(10),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: moderateScale(20),
          }}>
          Namaste!
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingVertical: moderateScale(10),
            fontSize: moderateScale(22),
          }}>
          {headingText}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: moderateScale(12),
          }}>
          {descriptionText}
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View
          style={{
            paddingVertical: moderateScale(30),
          }}>
          <Text
            style={{
              color: 'black',

              fontSize: moderateScale(12),
              paddingVertical: moderateScale(10),
            }}>
            {label}
          </Text>
          {keyData === 'otp' ? (
            <OtpInput
              numDigits={numDigits}
              inputRefs={inputRefs}
              handleInputChange={handleInputChange}
              handleKeyPress={handleKeyPress}
            />
          ) : (
            <View style={styles.inputContainer}>
              <Phone />
              <TextInput
                style={{
                  paddingHorizontal: moderateScale(10),
                }}
                placeholder="Enter phone number"
                keyboardType="numeric"
                value={value}
                onChangeText={onChangeText}
              />
            </View>
          )}

          <View
            style={{
              paddingVertical: moderateScale(20),
            }}>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={submitHandler}>
              <Text style={styles.btnText}>{btnText}</Text>
            </TouchableOpacity>
            <View
              style={{
                paddingVertical: moderateScale(20),
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(10),
                  textAlign: 'center',
                }}>
                I hereby confirm that I am above 18 years of age, I agree to
                the {' '}
                <Text style={{color: '#12171D', fontWeight: 'bold'}}>
                  Terms & Conditions
                </Text>{' '}
                and{' '}
                <Text style={{color: '#12171D', fontWeight: 'bold'}}>
                  Refund Policy
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RegistrartionBody;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    backgroundColor: '#12171D0D',
    marginBottom: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },

  bottomContainer: {
    flex: 1,

    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
  },

  btn: {
    backgroundColor: '#AF1A13',
    padding: moderateScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  btnText: {
    color: 'white',
    fontSize: moderateScale(16),
  },
});
