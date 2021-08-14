import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-10   mx-auto mt-3">
          <Link to="/">Volver</Link>
          <h1 className="text-center">Register</h1>
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Usuario"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <button className="btn btn-success ">Registrar</button>
            </div>
            <p>
              Ya tienes una cuenta?
              <Link to="/auth/login">Inicia Sesión aquí</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
