import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducers from "./errorReducers";
import authReducers from "./authReducers";

export default combineReducers({
  item: itemReducer,
  errors: errorReducers,
  auth: authReducers
});
