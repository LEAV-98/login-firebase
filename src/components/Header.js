import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export const Header = () => {
  const { auth } = useSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { shoppingCart } = useSelector((state) => state);
  //   console.log(auth);
  useEffect(() => {
    if (auth.uid) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [auth, setIsLoggedIn, dispatch]);
  const handleLogout = () => {
    console.log("logut");
    dispatch(startLogout());
  };
  return (
    <header>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Pizzería
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/auth/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/auth/register">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/user">
                      User
                    </Link>
                  </li>
                  <li className="nav-item " onClick={handleLogout}>
                    <p className="nav-link">Cerrar Sesión</p>
                  </li>
                </>
              )}

              <li className="nav-item ">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link d-flex align-items-center "
                  to="/shopping"
                >
                  <ShoppingCartIcon />
                  <p className="my-0">{shoppingCart.length}</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </header>
  );
};
