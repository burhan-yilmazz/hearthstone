import React from "react";
import {} from "react-native";
import { wp } from "Core/Utils";
import styled from "styled-components";
import { Colors } from "Core/Theme";

const InfoText = styled.Text`
  font-weight: 600;
  text-align: center;
  padding: ${wp(4)}px;
  font-size: ${wp(5)}px;
  color: ${Colors.white};
  background-color: ${Colors.green};
`;

export default ({}) => {
  return (
    <>
      <InfoText>Bu ekran component test ekranıdır.</InfoText>
    </>
  );
};
