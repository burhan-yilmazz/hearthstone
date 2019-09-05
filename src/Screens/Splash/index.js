import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCards } from "Redux/Actions/CardActions";
import { Loading } from "Components";
import { ScreenNames } from "Navigators/Constants";

const Splash = ({ navigation: { navigate }, getAllCards }) => {
  useEffect(() => {
    getAllCards();
    navigate(ScreenNames.MECHANICLIST);
  }, []);

  return <Loading />;
};

export default connect(
  null,
  {
    getAllCards,
  },
)(Splash);
