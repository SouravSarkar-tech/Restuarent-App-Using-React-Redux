import {
  ADD_PRODUCT_TO_THE_BASKET,
  CLEAR_THE_BASKET,
  INCREASE_QTY_TO_BASKET_PRODUCT,
} from "../allaction-type";

const addProductToTheBasket = (product) => {
  return {
    type: ADD_PRODUCT_TO_THE_BASKET,
    payload: product,
  };
};

const increaseQtyToTheBasketProduct = (name, qty, price, variant, extras) => {
  return {
    type: INCREASE_QTY_TO_BASKET_PRODUCT,
    payload: { name, qty, price, variant, extras },
  };
};

const clearTheBasket = () => {
  return {
    type: CLEAR_THE_BASKET,
  };
};

export default {
  addProductToTheBasket,
  clearTheBasket,
  increaseQtyToTheBasketProduct,
};
