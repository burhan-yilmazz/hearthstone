import { createStackNavigator } from "react-navigation-stack";
import Test from "Screens/Test";

export default createStackNavigator(
  {
    Test: {
      screen: Test,
      title: "Test Ekranı",
    },
  },
  {
    headerMode: "none",
  },
);
