import React from "react";
import styled from "styled-components";
import { wp } from "Core/Utils";
import { Colors } from "Core/Theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${wp(6)}px;
  font-weight: 700;
  color: ${Colors.lightGray};
`;

const Icon = styled.Image`
  height: ${wp(20)};
  width: ${wp(20)};
  tint-color: ${Colors.lightGray};
`;

export default ({ title, icon }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon source={{ uri: icon }} />
    </Container>
  );
};
