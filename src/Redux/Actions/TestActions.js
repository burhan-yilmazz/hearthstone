import Constants from "Redux/Constants";

export const testApp = text => dispatch => {
  dispatch({
    type: Constants.ACTION_TEST,
    data: text || "Hi, I am a Redux!",
  });
};
