import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigation from "./src/navigations/AppNavigation";

const App = () => {
  return (
    <SafeAreaProvider>
       {/* <SafeAreaView /> */}
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({});

export default App;
