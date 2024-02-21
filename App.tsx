import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./src/navigation/AppNavigator";

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
