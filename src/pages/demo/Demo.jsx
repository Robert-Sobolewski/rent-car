import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import {
  selectPickDate,
  selectDropDate,
  selectDropLoc,
  selectPicLoc,
  selectPickTime,
  selectCarId,
} from "../../redux/userSlice";
import "./Demo.css";
import { MdPeople } from "react-icons/md";
import { GiCarDoor, GiGearStickPattern, GiGasPump } from "react-icons/gi";

const Demo = () => {
  const data = useSelector(selectData);

  const location = useSelector(selectPicLoc);
  const dropLocation = useSelector(selectDropLoc);
  const pickDate = useSelector(selectPickDate);
  const dropDate = useSelector(selectDropDate);
  const pickTime = useSelector(selectPickTime);
  const id = useSelector(selectCarId);

  const myCar = data?.filter((item) => item.id === id);
  const myCarImg = myCar.map((item) => item.img);
  console.log(myCar);

  return (
    <Container className="demoContainer">
    <div className="demo container">
      <h1>Your pick up location : {location}</h1>
      <h1>Your dop off location : {dropLocation}</h1>
      <h1>Your pick up date : {pickDate}</h1>
      <h1>Your drp off date : {dropDate}</h1>
      <h1>Your pick up time {pickTime}</h1>
      <h1>id : {id}</h1>

      

      {myCar.map((item, index) => {
        return (
          <div
            className="demo-car-container bg-info"
            style={{
              backgroundImage: `url(${myCarImg} )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "800px",
              height: "500px",
            }}
          >
            <h2>{`${item.name} ${item.model}`}</h2>
            <div className="carDetails d-flex">
              <h6>
                <MdPeople /> {item.seats} Seats
              </h6>
              <h6>
                <GiCarDoor /> {item.doors} Doors
              </h6>
              <h6>
                <GiGearStickPattern /> {item.trans}
              </h6>
              <h6>
                <GiGasPump /> {item.fuel}
              </h6>
            </div>

            
          </div>
        );
      })}
    </div>
    </Container>
  );
};

export default Demo;
