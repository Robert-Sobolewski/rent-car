import React from "react";
import data from "../../data/data.json";
import SubmitTrip from "../../components/Home-components/SubmitTrip";
import Reserve from "../../components/Home-components/Reserve";
import "./home.css";
import AboutComponent from "../../components/Home-components/AboutComponent";
import { Container, Button } from "react-bootstrap";
import AirIcon from "@mui/icons-material/Air";
import "../services/Services.css";
import CarouselComponent from "../../components/Home-components/CarouselComponent";
import {useDispatch} from 'react-redux';
import ClientsCarousel from "../../components/Home-components/ClientsCarousel";


const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="home-container">
      <div className="main-pic"></div>

      <div className="home-form">
        <SubmitTrip />
        <Reserve />
      </div>

      <div className="offer">
        <p className="p-blue">What we offer</p>
        <h1>Our Vehicles</h1>
        <CarouselComponent />


      </div>
      <AboutComponent />

      <section className="section section1">
        <Container className="servicesContainer">
          <small>SERVICES</small>
          <h1>Our Latest Services</h1>
          <div className="row services container-fluid">
            <div className="col me-1  service">
              <div className="service-iconbox">
                <AirIcon className="serviceIcon" />
              </div>
              <h3>Wedding Ceremony</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>

            <div className="col me-1  service">
              <div className="service-iconbox">
                <AirIcon className="serviceIcon" />
              </div>
              <h3>City Transfer</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>

            <div className="col me-1  service">
              <div className="service-iconbox">
                <AirIcon className="serviceIcon" />
              </div>
              <h3>Airport Transfer</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>

            <div className="col me-1  service">
              <div className="service-iconbox">
                <AirIcon className="serviceIcon" />
              </div>
              <h3>Whole City Tour</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section2">
        <div className="left"></div>
        <div className="right">
          <h2>Do You Want To Earn With Us? So Don't Be Late.</h2>
      
          <Button className="btn btn-primary">Become A Driver</Button>
    

         
        </div>
      </section>

     
      <ClientsCarousel />
    </div>
  );
};

export default Home;
