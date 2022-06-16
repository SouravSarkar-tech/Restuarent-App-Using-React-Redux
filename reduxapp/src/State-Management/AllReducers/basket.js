import {
  ADD_PRODUCT_TO_THE_BASKET,
  CLEAR_THE_BASKET,
  INCREASE_QTY_TO_BASKET_PRODUCT,
} from "../allaction-type";;

const initialState = {
  products: [],
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_THE_BASKET:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case CLEAR_THE_BASKET:
      return {
        products: [],
      };

    case INCREASE_QTY_TO_BASKET_PRODUCT:
      return {
        ...state,
        products: state.products.map((prod) => {
          if (
            prod.name == action.payload.name &&
            prod.variant == action.payload.variant &&
            JSON.stringify(prod.extras) == JSON.stringify(action.payload.extras)
          ) {
            return {
              ...prod,
              qty: prod.qty + action.payload.qty,
              totalPrice: prod.totalPrice + action.payload.price,
            };
          } 
          else 
          {
            return prod;
          }
        }),
      };

    default:
      return state;
  }
};

export default basket;
