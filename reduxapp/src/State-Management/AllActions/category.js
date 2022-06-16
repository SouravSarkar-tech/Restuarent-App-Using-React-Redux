import { ADD_THE_CATEGORY, DELETE_THE_CATEGORY } from "../allaction-type";

const addTheCategory = category => {
  return {
    type: ADD_THE_CATEGORY,
    payload: category,
  };
};

const deleteTheCategory = id => {
  return {
    type: DELETE_THE_CATEGORY,
    payload: id,
  };
};

export default {
  addTheCategory,
  deleteTheCategory,
};
