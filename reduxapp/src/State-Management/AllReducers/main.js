import product from "./product";
import category from "./category";
import basket from "./basket";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product,
  category,
  basket
});

export default rootReducer;
