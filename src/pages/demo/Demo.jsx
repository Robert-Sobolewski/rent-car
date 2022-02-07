import { Breadcrumbs } from "@mui/material";
import React, { useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CarCard from "../../components/car-card/CarCard";
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
              <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={0} item={data[0]} />
                 <CarCard key={1} item={data[1]} />
                 <CarCard key={2} item={data[2]} />
              </div>
            
            <Carousel.Caption>
             
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={3} item={data[3]} />
                 <CarCard key={4} item={data[4]} />
                 <CarCard key={5} item={data[5]} />
              </div>
            <Carousel.Caption>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={6} item={data[6]} />
                 <CarCard key={7} item={data[7]} />
                 <CarCard key={8} item={data[8]} />
              </div>
            <Carousel.Caption>
              
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={9} item={data[9]} />
                 <CarCard key={10} item={data[10]} />
                 <CarCard key={11} item={data[11]} />
              </div>
            <Carousel.Caption>
              
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
