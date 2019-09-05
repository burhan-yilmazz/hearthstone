import React from "react";
import { hp, wp } from "Core/Utils";
import styled from "styled-components";
import { Colors } from "Core/Theme";

const height = hp(465 / 8);
const width = hp(307 / 8);

const Container = styled.View`
  height: ${height}px;
  width: ${width}px;
  background-color: ${({ color }) => "#484440"};
  border-radius: 15px;
  padding: ${wp(2)}px;
  justify-content: space-between;
`;

const CardPropertyValue = styled.Text`
  font-size: ${wp(4.5)}px;
  font-weight: 600;
  color: ${Colors.white};
`;
const CardName = styled.Text`
  font-size: ${wp(6)}px;
  font-weight: 800;
  color: ${Colors.white};
  text-align: center;
`;

const CardProperty = styled.Text`
  font-size: ${wp(5)}px;
  font-weight: 800;
  color: ${Colors.white};
  text-align: center;
  margin-bottom: ${hp(1)}px;
`;

const CardContainer = styled.View`
  backface-visibility: hidden;
`;

const properties = [
  { id: "cost", title: "Cost" },
  { id: "rarity", title: "Rarity" },
  { id: "playerClass", title: "Player Class" },
  { id: "cardSet", title: "Card Set" },
];

export default ({ card }) => {
  const { name, type } = card;

  return (
    <Container color={Colors.lightGray}>
      <CardName>{name}</CardName>
      <CardContainer>
        {properties.map(property => {
          const { title, id } = property;
          const value = card[id];

          if (!value) return null;

          return (
            <CardProperty key={id}>
              {title}
              {": "}
              <CardPropertyValue>{value}</CardPropertyValue>
            </CardProperty>
          );
        })}
      </CardContainer>
      <CardProperty>{type}</CardProperty>
    </Container>
  );
};
