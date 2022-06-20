import { SET_LANG } from "../allaction-type";
import { LOCALES } from "../../i18n/locales";

const initialState =  LOCALES.ENGLISH;
const lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return  action.payload;

    default:
      return state;
  }
};

export default lang;