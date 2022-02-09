import { Breadcrumbs } from "@mui/material";
import React, { useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CarCard from "../../components/car-card/CarCard";
import { selectData } from "../../redux/dataSlice";
import {selectPickDate, selectDropDate, selectDropLoc, selectPicLoc,selectPickTime } from "../../redux/userSlice";
import "./Demo.css";
const Demo = () => {

  const location = useSelector(selectPicLoc)
  const dropLocation = useSelector(selectDropLoc)
  const pickDate = useSelector(selectPickDate)
  const dropDate = useSelector(selectDropDate)
  const pickTime = useSelector(selectPickTime)
  
  
  return (
    <div className="demo container">

      <h1>Your pick up location : {location}</h1>
      <h1>Your drp off location : {dropLocation}</h1>
      <h1>Your pick up date : {pickDate}</h1>
      <h1>Your drp off date : {dropDate}</h1>
      <h1>Your pick up time {pickTime}</h1>


    </div>
  );
};

export default Demo;
