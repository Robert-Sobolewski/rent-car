import React from "react";
import Button from "@mui/material/Button";
import MapIcon from "@mui/icons-material/Map";
import { GiShakingHands } from "react-icons/gi";
import CarRentalIcon from "@mui/icons-material/CarRental";
import "../../styles/Form styling/form.css"

export default function Reserve() {
  return (
    <>
      <div className="reserve-container">
        <h2>Better Way to Rent Your Perfect Cars</h2>

        <div className="icons-container">
          <div>
            <div className="circle">
              <MapIcon className="icon" fontSize="large" />
            </div>

            <p>Choose Your Pickup Location</p>
          </div>
          <div>
            <div className="circle">
              <GiShakingHands className="icon" />
            </div>

            <p>Select the Best Deal</p>
          </div>
          <div>
            <div className="circle">
              <CarRentalIcon className="icon" fontSize="large" />
            </div>

            <p>Reserve Your Car</p>
          </div>
        </div>


      <Button className="mt-3" variant="contained">
        Reserve your car now
      </Button>

      </div>

    </>
  );
}
