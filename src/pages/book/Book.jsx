import React, { useEffect, useState } from "react";
import "./Book.css";
import "../pricing/Pricing.css";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import PriceCard from "../../components/Price-Card/PriceCard";
import PaginationComp from "../../components/pagination/PaginationComp";
import { Col, Container, Row } from "react-bootstrap";
import { Filter } from "../../components/filter/Filter";

const Book = () => {
  const data = useSelector(selectData);
  const names = [...new Set(data?.map((item) => item.name))].sort();
  const fuels = [...new Set(data?.map((item) => item.fuel))].sort();
  const seats = [...new Set(data?.map((item) => item.seats))].sort();
  const trans = [...new Set(data?.map((item) => item.trans))].sort();

  const [currentItem, setCurrentItem] = useState();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const temp = JSON.parse(JSON.stringify(data));    
    setFilter(temp?.filter((item) => item.name === currentItem));   
  }, [currentItem]);

  useEffect(() => {
    const temp1 = JSON.parse(JSON.stringify(data));
    setFilter(temp1)    
  }, [])





  return (
    <Container fluid className="book">
      <Row>
        <Col xs={3} className="left ">
          <Filter
            category={names}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
           
          />

          
        </Col>
        <Col>
          <div className="price-container">
            <Container>
              <PaginationComp data={filter} comp={PriceCard} />
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Book;
