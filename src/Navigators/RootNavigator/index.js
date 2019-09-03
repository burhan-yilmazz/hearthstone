import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppNavigator from "Navigators/AppNavigator";
import { Transition } from "react-native-reanimated";
import Splash from "Screens/Splash";

const SwitchNavigator = createSwitchNavigator(
  {
    Splash,
    App: AppNavigator,
  },
  {
    initialRouteName: "Splash",
    transition: (
      <Transition.Together>
        <Transition.Out type="scale" durationMs={400} interpolation="easeIn" />
        <Transition.In type="scale" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(SwitchNavigator);
