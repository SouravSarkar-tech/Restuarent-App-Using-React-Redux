import categories from "../../All-Data/Categories.json";
import { ADD_THE_CATEGORY, DELETE_THE_CATEGORY } from "../allaction-type";

const initialState = {
  categories: categories.categories,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case DELETE_THE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default category;
