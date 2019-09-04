import React from "react";
import { View } from "react-native";
import { hp } from "Core/Utils";
import base64 from "Assets/images/base64";
import { Space, CustomHeader, FlipCard, MechanicsItem } from "Components";
import { ScrollView } from "react-native-gesture-handler";

const mechanics = ["Spell Damage", "AIMustPlay", "AffectedBySpellPower"];

const hearthstoneCards = [
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA11_1.png",
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA12_2.png",
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA16_2H.png",
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA13_8.png",
];

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Mechanics"
        backIcon={base64.ArrowBackIcon}
        searchIcon={base64.SearchIcon}
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Space valeu={hp(4)} />
        <View
          style={{
            alignSelf: "center",
          }}>
          {hearthstoneCards.map(card => {
            return <FlipCard cardImage={card} key={card} />;
          })}
        </View>

        <Space valeu={hp(4)} />
        <View>
          {mechanics.map(mechanic => (
            <MechanicsItem mechanic={mechanic} key={mechanic} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
