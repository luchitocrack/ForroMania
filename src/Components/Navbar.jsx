import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/" className="hover:text-gray-400">ForroMania</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="hover:text-gray-400 transition duration-300">Inicio</Link>
          </li>
          <li>
            <Link to="/productos" className="hover:text-gray-400 transition duration-300">Productos</Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-gray-400 transition duration-300">Nosotros</Link>
          </li>
          <li>
            <Link to="/informacion" className="hover:text-gray-400 transition duration-300">Información</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

