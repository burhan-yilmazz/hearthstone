import React from "react";
import { wp, hp } from "Core/Utils";
import styled from "styled-components";
import { Colors } from "Core/Theme";
import base64 from "Assets/images/base64";

const MechanicCard = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${Colors.customGray};
  align-items: center;
  justify-content: space-between;
  padding: ${wp(4)}px;
  margin: ${hp(0.5)}px 0px ${hp(0.5)}px 0px;
`;

const Icon = styled.Image`
  height: ${wp(4)}px;
  width: ${wp(4)}px;
  transform: rotate(${({ degree }) => degree || -90}deg);
  tint-color: ${Colors.black};
`;

const Title = styled.Text`
  color: ${Colors.black};
  font-size: ${wp(5)};
`;

export default ({ mechanic, onPress }) => (
  <MechanicCard key={mechanic} activeOpacity={0.5} onPress={onPress}>
    <Title>{mechanic}</Title>
    <Icon testID="mechanicItemsIcon" source={{ uri: base64.ArrowIcon }} />
  </MechanicCard>
);
