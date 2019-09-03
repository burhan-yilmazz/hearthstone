import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";

const INITIAL_STATE = {};

export default createStore(reducers, INITIAL_STATE, applyMiddleware(thunk));
