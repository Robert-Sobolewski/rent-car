import React from "react";
import data from "../../data/data.json";
import SubmitTrip from "../../components/Home-components/SubmitTrip";
import Reserve from "../../components/Home-components/Reserve";
import "./home.css";
import AboutComponent from "../../components/Home-components/AboutComponent";
import CarouselComponent from "../../components/Home-components/CarouselComponent";

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-pic"></div>

      <div className="home-form">
        <SubmitTrip />
        <Reserve />
      </div>

      <div className="offer">
        <p>What we offer</p>
        <h1>Our Vehicles</h1>
        <CarouselComponent />
      </div>
      <AboutComponent />

   
    </div>
  );
};

export default Home;
