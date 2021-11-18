import { combineReducers } from "redux";
import counter from "./reducers/countReducer";
import hasLogged from "./reducers/logReducer";

const reducers = combineReducers({
  counter,
  hasLogged,
});
export default reducers;
