import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import { store } from "@store";
import { AppNavigator } from "@routes";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
        <StatusBar barStyle="default" />
      </Provider>
    </NavigationContainer>
  );
}
