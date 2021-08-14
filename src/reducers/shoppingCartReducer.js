import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("shoppingCart")) || [];
export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return [...state, { ...action.payload, cantidad: 1 }];
    case types.deleteProduct:
      return state.filter((product) => product.uid !== action.payload);
    case types.deleteAll:
      return [];
    default:
      return state;
  }
};
