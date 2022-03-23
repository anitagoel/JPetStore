import { combineReducers } from "redux";

import auth from "./auth.reducer";
import cart from "./cart.reducer";
import catalogue from "./catalogue.reducer";
import search from "./search.reducer";
import order from "./order.reducer";

const allReducers = combineReducers({
  auth,
  cart,
  catalogue,
  search,
  order,
});

const rootReducers = (state, action) => {
  return allReducers(state, action);
};

export default rootReducers;
