import React from "react";
import { FlatList, Keyboard } from "react-native";
import { FlipCard } from "Components";

export default ({ data }) => {
  return (
    <FlatList
      onTouchStart={() => {
        Keyboard.dismiss();
      }}
      data={data}
      extraData={data}
      windowSize={10}
      initialNumToRender={5}
      scrollEventThrottle={1}
      maxToRenderPerBatch={10}
      keyboardShouldPersistTaps="always"
      keyExtractor={item => item.cardId}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignSelf: "center" }}
      renderItem={({ item }) => <FlipCard item={item} testID="flipCard" />}
    />
  );
};
