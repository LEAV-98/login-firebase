import React from "react";
import { useSelector } from "react-redux";
import { Header } from "./Header";

export const ShoppingCartScreen = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  return (
    <>
      <Header />
      <div className="container mt-2 ">
        <button className="btn btn-danger mb-2">Eliminar Todo</button>

        {shoppingCart.map((product, i) => (
          <div key={i} className="card">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-4 col-sm-12 text-center">
                <img className="img-fluid" src={product.imagenUrl} alt="img" />
              </div>
              <div className="col-md-4 col-sm-12">
                <h2 className="text-center">{product.title}</h2>
                <div className="my-0 text-center">
                  <p>Cantidad</p>
                  <div className="my-1">
                    <button className="btn btn-primary mr-1">-</button>
                    <p className="d-inline"> {product.cantidad}</p>
                    <button className="btn btn-primary ml-2">+</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 text-center">
                <button className="btn btn-danger ">Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
