import { combineReducers } from "redux";
import Constants from "Redux/Constants";
import CardReducer from "./CardReducer";

export default combineReducers({
  [Constants.STATE_CARD]: CardReducer,
});
