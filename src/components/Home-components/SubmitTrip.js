import React, { useState } from "react";
import "../../styles/Form styling/form.css"
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setPickLoc, setDropLoc,setPickDate,setDropDate,setTime} from '../../redux/userSlice'


export default function SubmitTrip() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [pickLocation,setPickLocation] = useState("")
  const [dropLocation, setDropLocation] = useState("")
  const [pickDate, setPcDate] = useState("")
  const [dropDate, setDrDate] = useState("")
  const [pickTime, setPickTime] = useState('')
  

  const handleForm = e=>{    
    e.preventDefault()
    dispatch(setPickLoc(pickLocation))
    dispatch(setDropLoc(dropLocation))
    dispatch(setPickDate(pickDate))
    dispatch(setDropDate(dropDate))
    dispatch(setTime(pickTime))
    console.log('type of ', typeof dropDate, pickDate)
    navigate('/cars')
   
  }

 

  return (
    <div className="submit-trip">
      <h4>Make your trip</h4>
      <form onSubmit={e=> handleForm(e)}>

      
      <div>
        <label htmlFor="text">Pick-up location</label><br />
        <input type="text" value={pickLocation} 
        onChange={(e) => setPickLocation(e.target.value)}
        placeholder="City, Airport, Station,etc" id="large-input" />
      </div>
      <div>
        <label htmlFor="">Drop-off location</label><br />
        <input type="text" value={dropLocation} 
        onChange={(e) => setDropLocation(e.target.value)}
        placeholder="City, Airport, Station, etc" id="large-input" />
      </div>

      <div className="pickup-time">
        <div>
          <label htmlFor="">Pick-up date</label><br />
          <input onChange={(e) => setPcDate(e.target.value)} type="date"  />
        </div>

        <div>
          <label htmlFor="">Drop-off date</label><br />
          <input onChange={(e) => setDrDate(e.target.value)} type="date"  />
        </div>
      </div>

      <div>
          <label htmlFor="">Pick-up time</label><br />
          <input onChange={(e) => setPickTime(e.target.value) } type="time" id="large-input" />
      </div>
      <Link to="/cars">
      <Button onClick={e=>handleForm(e)} className="mt-3" variant="contained" color="success">Rent A Car now</Button>
      </Link>
      </form>

    </div>
  );
}
