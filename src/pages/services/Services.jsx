import React from "react";
import { Button, Container } from "react-bootstrap";
import AirIcon from "@mui/icons-material/Air";
import "./Services.css";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

const Services = () => {
  return (
    <>
      <section className="section section1">
      <div className="main-img">
      <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
          <Link className="text-uppercase" to="/">
            Home
          </Link>
          <Typography className="text-uppercase" color="text.primary">
            Services
          </Typography>
        </Breadcrumbs>
      </div>
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
    </>
  );
};

export default Services;
