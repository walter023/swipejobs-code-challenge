import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen";

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen component={HomeScreen} name="Home" />
    </AppStack.Navigator>
  );
};
