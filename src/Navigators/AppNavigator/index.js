import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CardListByMechanic from "Screens/CardListByMechanic";
import MechanicList from "Screens/MechanicList";
import { CustomHeader } from "Components";
import base64 from "Assets/images/base64";
import CardSearch from "Screens/CardSearch";
import { ScreenNames } from "Navigators/Constants";

export default createStackNavigator(
  {
    [ScreenNames.MECHANICLIST]: {
      screen: MechanicList,
      title: "Mechanics",
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <CustomHeader
            navigation={navigation}
            title="Mechanics"
            searchIcon={base64.SearchIcon}
          />
        ),
      }),
    },
    [ScreenNames.CARDLISTBYMECHANIC]: {
      screen: CardListByMechanic,
      title: "Cards",
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <CustomHeader
            navigation={navigation}
            title={navigation.getParam("mechanic") || "Cards"}
            searchIcon={base64.SearchIcon}
            backIcon={base64.ArrowBackIcon}
          />
        ),
      }),
    },
    [ScreenNames.CARDSEARCH]: {
      screen: CardSearch,
      title: "Card Search",
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <CustomHeader
            navigation={navigation}
            title="Card Search"
            backIcon={base64.ArrowBackIcon}
          />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    },
    headerMode: "screen",
  },
);
