import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "@constants";
import { HomeScreen, ShiftsScreen } from "@screens";

import { defaultOptions } from "./ScreenOptions";

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        component={HomeScreen}
        name={Routes.HOME}
        options={defaultOptions}
      />
      <AppStack.Screen
        component={ShiftsScreen}
        name={Routes.SHIFTSSCREEN}
        options={defaultOptions}
      />
    </AppStack.Navigator>
  );
};
