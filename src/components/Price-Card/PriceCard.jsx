import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GradeIcon from "@mui/icons-material/Grade";

const PriceCard = (props) => {
  const item = props.item; 

  return (
    <Container>
      <Row className="row row-body ">
        <Col className="row-col">
          <img src={item.img} />
        </Col>
        <Col className="row-col row-two-col2">
          <h2 className="">{item.name}</h2>
          <h4 className="fw-lighter .text-muted">{item.model}</h4>
         
          <p>
            <span className={(item.rated <= 0) ? ('ratingOff') : 'ratingOn'}>
              <GradeIcon />
            </span>
            <span className={(item.rated <= 1) ? ('ratingOff') : 'ratingOn'}>
              <GradeIcon />
            </span>
            <span className={(item.rated <= 2) ? ('ratingOff') : 'ratingOn'}>
              <GradeIcon />
            </span>
            <span className={(item.rated <= 3) ? ('ratingOff') : 'ratingOn'}>
              <GradeIcon />
            </span>
            <span className={(item.rated <= 4) ? ('ratingOff') : 'ratinratingOngOff'}>
              <GradeIcon />
            </span>
          </p>
        </Col>

        <Col className="row-col row-two-col3">
          <div>
            <h3 className=" mb-3 fs-4">
              <sup className="text-primary">$</sup>
              {item.ph}
              <span className="fw-lighter text-dark "> /per hour</span>
            </h3>
            <h6 className="fw-light ">$3/hour fuel surcharges</h6>
          </div>
          <div className="overlay ">
            <button className="overlay-button btn btn-primary ">
              Rent A Car
            </button>
          </div>
        </Col>

        <Col className="row-col row-two-col4">
          <div>
            <h3 className="mb-3 fs-4">
              <sup className="text-primary">$</sup>
              {item.pd}
              <span className="fw-lighter text-dark "> /per day</span>
            </h3>
            <h6 className="fw-light">$3/hour fuel surcharges</h6>
          </div>
          <div className="overlay ">
            <button className="overlay-button btn btn-primary ">
              Rent A Car
            </button>
          </div>
        </Col>

        <Col className="row-col row-two-col5">
          <div>
            <h3 className=" mb-3 fs-4">
              <sup className="text-primary">$</sup>
              {item.pl}
              <span className="fw-lighter text-dark "> /per month</span>
            </h3>
            <h6 className="fw-light">$3/hour fuel surcharges</h6>
          </div>
          <div className="overlay ">
            <button className="overlay-button btn btn-primary ">
              Rent A Car
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceCard;
