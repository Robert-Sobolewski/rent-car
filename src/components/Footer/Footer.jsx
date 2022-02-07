import { Col, Container, Row, Stack } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {BiMap} from "react-icons/bi"
import {AiOutlinePhone} from "react-icons/ai"
import {FiMail} from "react-icons/fi"

import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="   mt-5">
      <Row className="bg-dark text-light p-5">
        <Col className="me-3">
          <Stack className="">
            <h2 className="text-danger">CARBOOK</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="social-media">
              <span>
                <FaFacebookF className="sm text-primary fs-3" />
              </span>
              <span>
                <FaTwitter className="sm ms-5 me-5 text-primary fs-3" />
              </span>
              <span>
                <FaInstagram className="sm text-warning fs-3" />
              </span>
            </div>
          </Stack>
        </Col>
        <Col>
          <Stack>
            <h2 className="text-danger">Information</h2>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/">Term and Conditions</Link>
            <Link to="/">Best Price Guarantie</Link>
            <Link to="/">Privacy & Cookies Policy</Link>
          </Stack>
        </Col>
        <Col>
          <Stack>
            <h2 className="text-danger">FAQ</h2>
            <Link to="/">Payment Option</Link>
            <Link to="/">Booking Tips</Link>
            <Link to="/">How it works</Link>
            <Link to="/contact">Contact Us</Link>
          </Stack>
        </Col>
        <Col>
          <Stack>
            <h2 className="text-danger">Have a Question?</h2>
            <p>
            <BiMap className="me-2"/>
              203 Fake St. Mountain View,
              <br /> San Francisco, <br />
              California, USA
            </p>
            <p>
              <AiOutlinePhone className="me-2" />
              +2 392 3929 210</p>
            <p> 
              <FiMail className="me-2"/>
              info@yourdomain.com</p>
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
              <button className="button btn btn-primary" >
                Subscribe
              </button>
            </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  
  );
}

export default Footer;
