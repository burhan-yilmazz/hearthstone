import React, { useEffect, useCallback } from "react";
import { Animated, StyleSheet } from "react-native";
import { hp } from "Core/Utils";
import styled from "styled-components";
import { Colors } from "Core/Theme";

const height = hp(465 / 9);
const width = hp(307 / 9);
const Container = styled.TouchableOpacity`
  height: ${height}px;
  width: ${width}px;
  margin: 5px 0px 5px 0px;
`;

const Data = styled.View`
  height: ${height}px;
  width: ${width}px;
  background-color: ${Colors.lightGray};
  border-radius: 15px;
`;

const CardContainer = styled.View`
  backface-visibility: hidden;
`;

const AnimatedCardContainer = Animated.createAnimatedComponent(CardContainer);

const CardImage = styled.Image`
  height: ${height}px;
  width: ${width}px;
`;

const defaultAnimationConfig = {
  friction: 8,
  tension: 10,
  useNativeDriver: true,
};

const hearthstoneCards = [
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA11_1.png",
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA29_1.png",
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA16_2H.png",
  "http://wow.zamimg.com/images/hearthstone/cards/enus/original/BRMA13_8.png",
];

export default ({ cardImage }) => {
  const animatedValue = new Animated.Value(0);
  const val = {};
  val[cardImage] = 0;

  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value }) => {
      val[cardImage] = value;
    });
    return () => animatedValue.removeListener(listenerId);
  }, []);

  flipCb = useCallback(() => {
    if (val[cardImage] >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        ...defaultAnimationConfig,
      }).start(() => {});
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
  });

  const frontAnimationStyle = {
    transform: [
      {
        rotateY: frontInterpolate,
      },
    ],
  };

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const backAnimationStyle = {
    transform: [
      {
        rotateY: backInterpolate,
      },
    ],
  };

  return (
    <Container onPress={flipCb} activeOpacity={1}>
      <AnimatedCardContainer style={[frontAnimationStyle]}>
        <CardImage source={{ uri: cardImage }} resizeMode="cover" />
      </AnimatedCardContainer>
      <AnimatedCardContainer
        style={[backAnimationStyle, { ...StyleSheet.absoluteFillObject }]}>
        {false ? (
          <Data />
        ) : (
          <CardImage source={{ uri: hearthstoneCards[0] }} resizeMode="cover" />
        )}
      </AnimatedCardContainer>
    </Container>
  );
};
