import React from "react";
import { IconButton, Space } from "Components";
import { wp, hp } from "Core/Utils";
import styled from "styled-components";

const CenterBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.Text`
  font-weight: 500;
  font-size: ${wp(4)};
`;

export default ({ errorMessage, icon, action }) => (
  <CenterBlock>
    {errorMessage && (
      <>
        <ErrorText>{errorMessage}</ErrorText>
        <Space value={hp(0.2)} />
      </>
    )}
    {icon && <IconButton icon={icon} onPress={action} />}
  </CenterBlock>
);
