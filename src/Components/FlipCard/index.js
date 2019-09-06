import React, { useEffect, useCallback, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { hp, wp } from "Core/Utils";
import styled from "styled-components";
import { Colors } from "Core/Theme";
import { CardInfo } from "Components";

const height = hp(465 / 8);
const width = hp(307 / 8);
const Container = styled.TouchableOpacity`
  height: ${height}px;
  width: ${width}px;
  margin: 5px 0px 5px 0px;
`;

const ImageErroPlaceholder = styled.View`
  height: ${height}px;
  width: ${width}px;
  background-color: ${({ color }) => "#484440"};
  border-radius: 15px;
  padding: ${wp(2)}px;
  justify-content: space-between;
`;

const CardContainer = styled.View`
  backface-visibility: hidden;
`;

const AnimatedCardContainer = Animated.createAnimatedComponent(CardContainer);
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const CardImage = styled.Image`
  height: ${height}px;
  width: ${width}px;
`;

const defaultAnimationConfig = {
  friction: 8,
  tension: 10,
  useNativeDriver: true,
  isInteraction: false,
};

export default ({ item }) => {
  const [animatedValue] = useState(new Animated.Value(0));
  const [error, setError] = useState(false);
  const { cardId, img } = item;
  const values = {};
  values[cardId] = 0;

  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value }) => {
      values[cardId] = value;
    });

    return () => animatedValue.removeListener(listenerId);
  }, []);

  flipCb = useCallback(() => {
    if (values[cardId] >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        ...defaultAnimationConfig,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        ...defaultAnimationConfig,
      }).start();
    }
  }, []);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
    extrapolate: "clamp",
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
    extrapolate: "clamp",
  });

  const frontAnimationStyle = {
    transform: [
      {
        rotateY: frontInterpolate,
      },
    ],
  };

  const backAnimationStyle = {
    transform: [
      {
        rotateY: backInterpolate,
      },
    ],
  };

  if (!img || error) {
    return null;
  }

  return (
    <AnimatedContainer onPress={flipCb} activeOpacity={1}>
      <AnimatedCardContainer style={[frontAnimationStyle]}>
        {!error ? (
          <CardImage
            testID="cardImage"
            source={{
              uri: `https://www.hearthstonedb.net/images/enus/${cardId}.png`,
            }}
            resizeMode="cover"
            onError={setError}
          />
        ) : (
          <ImageErroPlaceholder color={Colors.lightGray2} />
        )}
      </AnimatedCardContainer>
      <AnimatedCardContainer
        style={[backAnimationStyle, { ...StyleSheet.absoluteFillObject }]}>
        <CardInfo card={item} testID="cardInfo"/>
      </AnimatedCardContainer>
    </AnimatedContainer>
  );
};
