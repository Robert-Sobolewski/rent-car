import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import PriceCard from "../../components/Price-Card/PriceCard";
import PaginationComp from "../../components/pagination/PaginationComp";

const Pricing = () => {
  const data = useSelector(selectData);
  return (
    <div className="price-container">
      <div className="main-img"></div>
      <Container className="mt-5  ">
        <Row className="row-header">
          <Col className="row-one-col row-header-col"></Col>
          <Col className="row-one-col row-header-col"></Col>
          <Col className="row-one-col row-header-col1">Per Hour Rate</Col>
          <Col className="row-one-col row-header-col2">Per Date Rate</Col>
          <Col className="row-one-col row-header-col3">Leasing</Col>
        </Row>
        <PaginationComp data={data} comp={PriceCard} />
      </Container>
    </div>
  );
};

export default Pricing;
