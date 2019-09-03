import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import RootNavigator from "Navigators/RootNavigator";
import store from "Redux/store";
import "Core/Reactotron";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
