import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Biblioteca</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/books">Libros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rentals">Alquileres</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
