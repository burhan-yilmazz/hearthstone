import React from "react";
import styled from "styled-components";
import { hp } from "Core/Utils";

const Icon = styled.Image`
  height: ${hp(4)}px;
  width: ${hp(4)}px;
`;
const TouchableArea = styled.TouchableOpacity``;

export default ({ onPress = () => {}, icon }) => (
  <TouchableArea onPress={onPress}>
    <Icon source={{ uri: icon }} resizeMode="contain" />
  </TouchableArea>
);
