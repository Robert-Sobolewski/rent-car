import { Breadcrumbs } from "@mui/material";
import React, { useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CarCard from "../../components/car-card/CarCard";
import { selectData } from "../../redux/dataSlice";
import {selectPickDate, selectDropDate, selectDropLoc, selectPicLoc } from "../../redux/userSlice";
import "./Demo.css";
const Demo = () => {

  const location = useSelector(selectPicLoc)
  const dropLocation = useSelector(selectDropLoc)
  const pickDate = useSelector(selectPickDate)
  const dropDate = useSelector(selectDropDate)
  
  
  return (
    <div className="demo">

      <h1>OUR PICK LOC IS : {location}</h1>
      <h1>OUR DROP LOC IS : {dropLocation}</h1>
      <h1>OUR PICK DATE IS : {pickDate}</h1>
      <h1>OUR DROP DATE IS : {dropDate}</h1>


    </div>
  );
};

export default Demo;
