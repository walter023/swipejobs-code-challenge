import React from "react";
import { NotifierWrapper } from "react-native-notifier";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import { store } from "@store";
import { AppNavigator } from "@routes";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NotifierWrapper>
          <AppNavigator />
        </NotifierWrapper>
        <StatusBar barStyle="default" />
      </Provider>
    </NavigationContainer>
  );
}
