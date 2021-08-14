import { types } from "../types/types";
import Swal from "sweetalert2";
export const initAddProduct = (product) => {
  return (dispacth) => {
    dispacth(addProduct(product));
    Swal.fire({
      title: "añadido a tu carrito :D",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };
};
export const addProduct = (product) => {
  return {
    type: types.addProduct,
    payload: product,
  };
};
