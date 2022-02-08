import React from "react";
import AboutComponent from "../../components/Home-components/AboutComponent";
import "./about.css";
import ClientsCarousel from "../../components/Home-components/ClientsCarousel";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="about-container">
      <div className="aboutMain-pic">
        <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
          <Link className="text-uppercase" to="/">
            Home
          </Link>
          <Typography className="text-uppercase" color="text.primary">
            About
          </Typography>
        </Breadcrumbs>
      </div>

      <AboutComponent />
      <ClientsCarousel />
    </div>
  );
}
