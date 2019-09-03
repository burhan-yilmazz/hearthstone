import Constants from "Redux/Constants";

const INITIAL_STATE = {
  name: "Test App",
  message: "There is no message :(",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Constants.ACTION_TEST:
      return { ...state, message: action.data };
    default:
      return state;
  }
};
