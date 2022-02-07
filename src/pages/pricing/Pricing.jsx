import React from "react";
import { Container } from "react-bootstrap";
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
      <Container>
        <PaginationComp data={data} comp={PriceCard} />
      </Container>
    </div>
  );
};

export default Pricing;
