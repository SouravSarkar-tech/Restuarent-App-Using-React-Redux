import { ADD_THE_PRODUCT, DELETE_THE_PRODUCT } from "../allaction-type";

const addTheProduct = (product) => {
  return {
    type: ADD_THE_PRODUCT,
    payload: product,
  };
};

const deleteTheProduct = (id) => {
  return {
    type: DELETE_THE_PRODUCT,
    payload: id,
  };
};

export default {
  addTheProduct,
  deleteTheProduct,
};
