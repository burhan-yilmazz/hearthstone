import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import Constants from "Redux/Constants";

export default combineReducers({
  [Constants.STATE_TEST]: TestReducer,
});
