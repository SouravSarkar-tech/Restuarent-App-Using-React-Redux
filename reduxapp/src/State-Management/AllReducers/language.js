import { SET_LANGUAGE } from "../allaction-type";
import { LOCALES } from "../../i18n/locales";

const initialState = LOCALES.ENGLISH;
const lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
};

export default lang;