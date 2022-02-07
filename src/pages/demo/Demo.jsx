import { Breadcrumbs } from "@mui/material";
import React, { useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectData } from "../../redux/dataSlice";
import "./Demo.css";
const Demo = () => {
  const data = useSelector(selectData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="demo">
      <div className="top-img"></div>
      <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
        <Link className="text-uppercase" to="/">
          Home
        </Link>
        <Link className="text-uppercase" to="/demo">
          Demo
        </Link>
      </Breadcrumbs>
      <h1 className="my-3 ms-5">Add Carousel</h1>
      <Container className="my-5">
        <Carousel>
          <Carousel.Item>
              <div className="car-page">
                 
              </div>
            
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page">
           
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page">
                 
                 </div>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page">
                 
                 </div>

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Demo;
