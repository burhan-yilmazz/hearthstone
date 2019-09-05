import React from "react";
import styled from "styled-components";
import { Colors } from "Core/Theme";
import { Space } from "Components";
import { wp, isAndroid, hp } from "Core/Utils";
import { HeaderBgImage } from "Assets/images";
import SearchCardInput from "Containers/SearchCardInput";
import { ScreenNames } from "Navigators/Constants";

const HeaderContainer = styled.ImageBackground`
  background-color: ${Colors.white};
`;

const Overlay = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${wp(4)}px;
`;

const TouchableArea = styled.TouchableOpacity``;

const Icon_ = styled.Image`
  height: ${({ size = wp(6) }) => size}px;
  width: ${({ size = wp(6) }) => size}px;
  tint-color: ${Colors.white};
`;

const Title_ = styled.Text`
  color: ${Colors.white};
  font-size: ${wp(6.5)}px;
  font-weight: 600;
`;

export default ({
  title,
  backIcon,
  searchIcon,
  navigation: { navigate, goBack },
}) => {
  return (
    <HeaderContainer source={HeaderBgImage}>
      {isAndroid && <Space value={hp(0.25)} />}
      <Overlay>
        <TouchableArea onPress={() => goBack()}>
          {backIcon && <Icon_ source={{ uri: backIcon }} size={wp(8)} />}
        </TouchableArea>
        <Title_>{title}</Title_>
        <TouchableArea
          onPress={() => {
            navigate(ScreenNames.CARDSEARCH);
          }}>
          {searchIcon && <Icon_ source={{ uri: searchIcon }} />}
        </TouchableArea>
      </Overlay>
      {!searchIcon && <SearchCardInput />}
    </HeaderContainer>
  );
};
