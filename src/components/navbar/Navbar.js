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
         
                {/* <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/"><li>Home</li></NavLink> */}
                {/* <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/about"><li>About</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/services"><li>Services</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/pricing"><li>Pricing</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/cars"><li>Cars</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/contact"><li>Contact</li></NavLink>
<<<<<<< HEAD
                {/* <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/demo"><li>Demo</li></NavLink> */}
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/login"><li>Login</li></NavLink>
=======
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/demo"><li>Demo</li></NavLink>
                <NavLink className={({isActive})=>isActive? 'text-success': undefined} to="/login"><li>Login</li></NavLink> */}
>>>>>>> d09475d82a5bff5f464ee6e70474b9ad90d4133d
         
            </ul>
        </div>


        </div>
     
    </div>
  );
}
