import React, { useEffect,useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import PriceCard from "../../components/Price-Card/PriceCard";
import PaginationComp from "../../components/pagination/PaginationComp";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

const Pricing = () => {
  const data = useSelector(selectData);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])



  const [perHour,setPerHour] = useState(0)
  const [perDay,setPerDay] = useState(0)
  const [perMonth,setPerMonth] = useState(0)

  return (
    <div className="price-container">    

  
      <div className="main-img">
      <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
          <Link className="text-uppercase boldtext" to="/">
            Home
          </Link>
          <Typography className="text-uppercase" color="text.primary">
            Pricing
          </Typography>
        </Breadcrumbs>
      </div>
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
