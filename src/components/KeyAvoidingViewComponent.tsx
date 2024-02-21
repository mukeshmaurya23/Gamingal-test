import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';

const KeyboardAvoidingComponent = ({children}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingComponent;
