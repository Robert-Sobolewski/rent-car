import React from "react";
import "../../styles/main.css"
import { Link } from "react-router-dom";


export default function Navigation() {



  return (
    <div className="navbar">
        <div className="nav-container">

        <h3>Rent Car</h3>
        <div className="menu-bar">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/pricing"><li>Pricing</li></Link>
                <Link to="/cars"><li>Cars</li></Link>
                <Link to="/blog"><li>Blog</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
         
            </ul>
        </div>


        </div>
     
    </div>
  );
}
