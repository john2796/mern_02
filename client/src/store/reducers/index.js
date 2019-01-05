import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducers from "./errorReducers";

export default combineReducers({
  item: itemReducer,
  errors: errorReducers
});
