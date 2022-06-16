import { SET_LANGUAGE } from "../allaction-type";


const initialState = "english";
const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
};

export default language;