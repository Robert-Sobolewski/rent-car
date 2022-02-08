import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


export default function Navigation() {



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
            </ul>
        </div>


        </div>
     
    </div>
  );
}
