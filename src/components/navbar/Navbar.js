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
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/"><li>Home</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/about"><li>About</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/services"><li>Services</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/pricing"><li>Pricing</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/cars"><li>Cars</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/blog"><li>Blog</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/contact"><li>Contact</li></NavLink>
         
            </ul>
        </div>


        </div>
     
    </div>
  );
}