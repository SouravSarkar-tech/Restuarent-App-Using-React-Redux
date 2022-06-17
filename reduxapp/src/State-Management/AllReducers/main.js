import product from "./product";
import category from "./category";
import basket from "./basket";
import lang from "./language";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product,
  category,
  basket,
  lang
});

export default rootReducer;
