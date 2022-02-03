import React from "react";
import "../../styles/Form styling/form.css"
import Button from '@mui/material/Button';

export default function SubmitTrip() {
  return (
    <div className="submit-trip">
      <h3>Make your trip</h3>
      <div>
        <label htmlFor="text">Pick-up location</label><br />
        <input type="text" placeholder="City,Airport,Station,etc" />
      </div>
      <div>
        <label htmlFor="">Drop-off location</label><br />
        <input type="text" placeholder="City,Airport,Station,etc" />
      </div>

      <div className="pickup-time">
        <div>
          <label htmlFor="">Pick-up date</label><br />
          <input type="date" />
        </div>

        <div>
          <label htmlFor="">Drop-off date</label><br />
          <input type="date" />
        </div>
      </div>

      <div>
          <label htmlFor="">Pick-up time</label><br />
          <input type="time" name="" id="" />
      </div>

      <Button className="mt-3" variant="contained">Rent A Car now</Button>

    </div>
  );
}
