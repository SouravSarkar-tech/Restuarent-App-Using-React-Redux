import { createStore } from "redux";
import rootReducer from "../State-Management/AllReducers/main";

const store = createStore(rootReducer);
export default store;

