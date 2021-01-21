import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const metodosDePago = () => {
  return (
    <Hero>
      <Banner
          title="Mi Cuenta"
          subtitle="Agregar forma de pago"
        >
          <ul
          >
            <li>
              <Link to="/Agregar tarjeta de debito o credito">Tarjeta</Link>
            </li>
            <li>
              <Link to="/cheques">Cheque</Link>
            </li>
            <li>
              <Link to="/Trasnferencias">Transferencia</Link>
            </li>
            <li>
              <Link to="/Efectivo">Efectivo</Link>
            </li>
            
          </ul>

        </Banner>
    </Hero>
  );
};

export default metodosDePago;