import product from "./product";
import category from "./category";
import basket from "./basket";
import language from "./language";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product,
  category,
  basket,
  language
});

export default rootReducer;
