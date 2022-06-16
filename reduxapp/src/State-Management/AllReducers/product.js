import products from "../../All-Data/Products.json";
import { ADD_THE_PRODUCT, DELETE_THE_PRODUCT } from "../allaction-type";

const initialState = {
  products: products.products,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_THE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default product;
