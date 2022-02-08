import React from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import {Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import "./Contact.css";
import Gmap from "../../components/gmap/Gmap";
const Contact = () => {
  return (
    <div className="contact">
      <div className="top-img">
      <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
          <Link className="text-uppercase boldtext" to="/">
            Home
          </Link>
          <Typography className="text-uppercase" color="text.primary">
            Contact
          </Typography>
        </Breadcrumbs>
      </div>
 
      <h1 className="my-3 ms-5">Contact Us</h1>
      <Container className="my-5 d-flex">
        <Col className="" md={4}>
          <Row>
            <Card className="mb-5">
              <Card.Body>
                <Card.Title>
                  <MapOutlinedIcon className="text-primary me-2" />
                  <strong>Address:</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  198 West 21th Street, Suite 721 New York
                  <br /> NY 10016
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Row>
          <Row>
          <Card className="mb-5">
              <Card.Body>
                <Card.Title>
                  <PhoneAndroidOutlinedIcon className="text-primary me-2" />
                  <strong>Phone:</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  +1234 5677 89
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Row>
          <Row>
          <Card className="mb-5">
              <Card.Body>
                <Card.Title>
                  <MailOutlinedIcon className="text-primary me-2" />
                  <strong>Email:</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  car@book.com
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col className="bg-success" md={{offset: 1, span:6}}>
        
        <Form className="contact-form p-3">
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name:</Form.Label>
    <Form.Control type="email" placeholder="Your Name" />
    <Form.Text className="text-muted">
      Please enter full name.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicSubject">
    <Form.Label>Subject:</Form.Label>
    <Form.Control type="text" placeholder="Subject" />
    <Form.Text className="text-muted">
      Please enter subject.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" cols="30" rows="7" placeholder="Message" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Col>
      </Container>

      <Container className="mb-5">
        <Row>
        <Gmap
        width="100%"
        height={500}
        src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13857.7364945342!2d8.67517090487374!3d50.120291106062076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1643972315513!5m2!1sde!2sde"}
        />
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
