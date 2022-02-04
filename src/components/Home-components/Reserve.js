import React from "react";
import Button from "@mui/material/Button";
import MapIcon from "@mui/icons-material/Map";
import { GiShakingHands } from "react-icons/gi";
import CarRentalIcon from "@mui/icons-material/CarRental";

export default function Reserve() {
  return (
    <>
      <div className="reserve-container">
        <h2>Better Way to Rent Your Perfect Cars</h2>

        <div className="icons-container">

          <div>
              <div className="circle"></div>
            <MapIcon />
            <p>Choose Your Pickup Location</p>
          </div>
          <div>
          <div className="circle"></div>
            <GiShakingHands />
            <p>Select the Best Deal</p>
          </div>
          <div>
          <div className="circle"></div>
            <CarRentalIcon />
            <p>Reserve Your Rental Car</p>
          </div>
        </div>
      </div>

      <Button className="mt-3" variant="contained">
        Rent A Car now
      </Button>
    </>
  );
}
