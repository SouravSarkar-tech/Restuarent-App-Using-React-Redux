import { SET_LANG } from "../allaction-type";


const langset = (lang) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
}

export default {
  langset,
};
