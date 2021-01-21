import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logoHosteria from "../images/logoHosteria.jpg";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logoHosteria} alt="Rios y Montañas" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/quienesSomos">Nosotros</Link>
            </li>
            <li>
              <Link to="/rooms">Habitaciones</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/Ofertas">Ofertas</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/MetodosDePago">MetodosDePago</Link>
            </li>
            

          </ul>
        </div>
      </nav>
    );
  }
}
