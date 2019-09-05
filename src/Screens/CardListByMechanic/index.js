import React from "react";
import { connect } from "react-redux";
import Constants from "Redux/Constants";
import { Cards } from "Components";

const CardListByMechanic = ({ navigation: { getParam }, cardsByMechanics }) => {
  const mechanic = getParam("mechanic");
  const cards = Object.values(cardsByMechanics[mechanic]);

  if (cards.length < 1) {
    return null;
  }

  return <Cards data={cards} />;
};

const mapStateToProps = state => {
  const { cardsByMechanics } = state[Constants.STATE_CARD];

  return { cardsByMechanics };
};

export default connect(mapStateToProps)(CardListByMechanic);
