
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import "./Footer.css";

function Footer() {
 
  return (
    <div className="footer pt-5">
     

        <div className="container footer-top">
         <div className="footer-elements carbook">
           <h2>CARBOOK</h2>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         </div>

          <div className="footer-elements footer-company">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>News</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-elements footer-address">
            <h4>Address</h4>
            <ul>
              <li>200. Green block, NewYork</li>
              <li>+1 163 987 02 56</li>
              <li>contact@demo.com</li>
            </ul>
          </div>

          <div className="footer-elements footer-newsletter">
            <h4>Newsletter</h4>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control border-3 border-primary"
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="button btn btn-primary" id="basic-addon2">
                Subscribe
              </button>
            </div>
            <div className="social-media">
              <span>
                <FaFacebookF className="sm" />
              </span>
              <span>
                <FaTwitter className="sm" />
              </span>
              <span>
                <FaInstagram className="sm" />
              </span>
            </div>
          </div>      



        </div>
        <div className="footer-line container"></div>
        <div className="footer-bottom container d-flex justify-content-center align-center">
          <small>{`Copyright ${'\u00A9'} ${new Date().getFullYear()} All rights reserved | This template is made by RD`}</small>
        </div>
       
 
     
    </div>
  );
}

export default Footer;
