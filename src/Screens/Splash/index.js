import React, { useEffect } from "react";
import { View, Text } from "react-native";

const Splash = ({ navigation: { navigate } }) => {
  useEffect(() => {
    navigate("App");
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
