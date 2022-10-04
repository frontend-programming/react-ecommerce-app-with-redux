import { combineReducers } from "redux";
import cartReducers from "./cartReducers";

const rootReducers = combineReducers({
  cartReducers,
});

export default rootReducers;
