import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { useScreens } from "react-native-screens";
import RootNavigator from "Navigators/RootNavigator";
import store from "Redux/store";
import "Core/Reactotron";

useScreens();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <RootNavigator />
    </Provider>
  );
};

export default App;
