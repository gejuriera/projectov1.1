import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Suites Familiares"
          subtitle="Suite para 5 personas a $200"
        >
          <Link to="/rooms" className="btn-primary">
            Ver habitaciones
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
     
    </>
  );
};

export default home;
