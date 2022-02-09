import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";



export default function Navigation() {
const user = useSelector(selectUser)
const dispatch = useDispatch();
const [cuser, setCUser] = useState("")

useEffect(() =>{
  setCUser(user)
},[user])

  return (
    <div className="navbar sticky-top">
        <div className="nav-container">

        <h3><span className="text-black">Rent</span><span className="text-success">Car</span> </h3>
        <div className="menu-bar">
            <ul>
              <NavLink activeClassName="active" to="/"><li>Home</li></NavLink>
                 <NavLink activeClassName="active" to="/about"><li>About</li></NavLink>
                <NavLink activeClassName="active" to="/services"><li>Services</li></NavLink>
                <NavLink  activeClassName="active" to="/pricing"><li>Pricing</li></NavLink>
                <NavLink  activeClassName="active" to="/cars"><li>Cars</li></NavLink>
                <NavLink  activeClassName="active" to="/contact"><li>Contact</li></NavLink>
                <NavLink  activeClassName="active" to="/login"><li>Login</li></NavLink>
                <a href="#" onClick={()=>dispatch(logout())} label="LOGOUT"><li>
                  {
                    cuser!== ""?<Avatar   sx={{ width: 24, height: 24 }}>{cuser[0].toUpperCase()}</Avatar>
                    :
                    null
                  }
                  </li>
                    </a>
                 
         
               
         
            </ul>
        </div>


        </div>
     
    </div>
  );
}
