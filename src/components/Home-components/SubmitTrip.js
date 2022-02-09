import React, { useState } from "react";
import "../../styles/Form styling/form.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setPickLoc} from '../../redux/userSlice'

export default function SubmitTrip() {
  const dispatch = useDispatch();
  const [pickLocation,setPickLocation] = useState("")
  const handleForm = e=>{
    console.log('demo')
    e.preventDefault()
    dispatch(setPickLoc(pickLocation))
  }
  return (
    <div className="submit-trip">
      <h4>Make your trip</h4>
      <form onSubmit={e=> handleForm(e)}>

      
      <div>
        <label htmlFor="text">Pick-up location</label><br />
        <input type="text" value={pickLocation} 
        onChange={e => setPickLocation(e.target.value)}
        placeholder="City, Airport, Station,etc" id="large-input" />
      </div>
      <div>
        <label htmlFor="">Drop-off location</label><br />
        <input type="text" placeholder="City, Airport, Station, etc" id="large-input" />
      </div>

      <div className="pickup-time">
        <div>
          <label htmlFor="">Pick-up date</label><br />
          <input type="date" />
        </div>

        <div>
          <label htmlFor="">Drop-off date</label><br />
          <input type="date"  />
        </div>
      </div>

      <div>
          <label htmlFor="">Pick-up time</label><br />
          <input type="time" id="large-input" />
      </div>
      <Link to="/cars">
      <Button onClick={e=>handleForm(e)} className="mt-3" variant="contained" color="success">Rent A Car now</Button>
      </Link>
      </form>

    </div>
  );
}
