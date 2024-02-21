import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

type OTP = {[key: number]: string};

const SplitOTP: React.FC = (props: any) => {
  const {numDigits, inputRefs, handleInputChange, handleKeyPress} = props;
  // const numDigits = 6;
  // const inputRefs = Array.from({length: numDigits}, () =>
  //   useRef<TextInput>(null),
  // );
  // const [otp, setOtp] = useState<OTP>(
  //   Object.fromEntries(Array.from({length: numDigits}, (_, i) => [i + 1, ''])),
  // );

  // const handleInputChange = (index: number, text: string): void => {
  //   setOtp(prevOtp => ({
  //     ...prevOtp,
  //     [index]: text,
  //   }));
  //   if (text && index < numDigits) {
  //     inputRefs[index]?.current?.focus();
  //   } else if (!text && index > 1) {
  //     inputRefs[index - 2]?.current?.focus();
  //   }
  // };

  // const handleKeyPress = (index: number, event: React.KeyboardEvent): void => {
  //   if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 1) {
  //     inputRefs[index - 2]?.current?.focus();
  //   }
  // };

  // const handleSubmit = (): void => {
  //   const otpString = Object.values(otp).join('');
  //   console.log('Sending OTP:', otpString);

  //   // Send the OTP to the backend
  // };

  return (
    <View style={styles.otpContainer}>
      {Array.from({length: numDigits}, (_, i) => (
        <View style={styles.otpBox} key={i + 1}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={inputRefs[i]}
            onChangeText={text => handleInputChange(i + 1, text)}
            onKeyPress={event => handleKeyPress(i + 1, event)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  otpBox: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    width: moderateScale(45),
    height: moderateScale(45),
    backgroundColor: '#12171D0D',
  },
  otpText: {
    fontSize: moderateScale(20),
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingVertical: moderateScale(10),
  },
});

export default SplitOTP;
