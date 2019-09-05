import React from "react";
import styled from "styled-components";
import { Colors } from "Core/Theme";

const CenterBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.ActivityIndicator``;

export default () => (
  <CenterBlock>
    <Indicator color={Colors.green} size="large" />
  </CenterBlock>
);
