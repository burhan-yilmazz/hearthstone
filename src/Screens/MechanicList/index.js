import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import Constants from "Redux/Constants";
import { MechanicsItem, ReTryAction, Loading } from "Components";
import { wp } from "Core/Utils";
import styled from "styled-components";
import base64 from "Assets/images/base64";
import { getAllCards } from "Redux/Actions/CardActions";
import { ScreenNames } from "Navigators/Constants";

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  margin: ${wp(0)}px ${wp(4)}px 0px ${wp(4)}px;
`;

const MeachanicList = ({
  navigation: { navigate },
  mechanics,
  isLoadedCards,
  errorMessage,
  getAllCards,
}) => {
  if (!isLoadedCards) {
    return <Loading />;
  }

  if (isLoadedCards && errorMessage) {
    return (
      <ReTryAction
        icon={base64.ReTryIcon}
        onPress={getAllCards}
        errorMessage={errorMessage}
      />
    );
  }

  return (
    <Wrapper>
      <FlatList
        extraData={mechanics}
        data={mechanics}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MechanicsItem
            mechanic={item}
            onPress={() => {
              navigate(ScreenNames.CARDLISTBYMECHANIC, { mechanic: item });
            }}
          />
        )}
      />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  const { mechanics, isLoadedCards, errorMessage } = state[
    Constants.STATE_CARD
  ];

  return { mechanics, isLoadedCards, errorMessage };
};

export default connect(
  mapStateToProps,
  { getAllCards },
)(MeachanicList);
