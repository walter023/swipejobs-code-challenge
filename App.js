import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import { AppNavigator } from "@routes";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
}
