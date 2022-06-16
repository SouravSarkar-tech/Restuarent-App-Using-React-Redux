import { SET_LANGUAGE } from "../allaction-type";


const langset = (lang) => {
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
}

export default {langset};
