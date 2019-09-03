import Reactotron from "reactotron-react-native";

export default __DEV__
  ? Reactotron.configure({
      name: "Hearthstone",
    })
      .useReactNative()
      .connect()
  : {};
