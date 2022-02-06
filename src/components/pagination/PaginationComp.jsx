import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaginationComp.css";
const PaginationComp = (props) => {
  const [itemPage, setItemPage] = useState(10); // page/item
  const [curPage, setCurPage] = useState(1);
  const WrapComponent = props.comp;

  const curPageChange = (event, value) => {setCurPage(parseInt(value));
  window.scrollTo(0,0);
  }
  const itemPageChange = (e) => {
    setCurPage(1);
    setItemPage(parseInt(e.target.value));
  };

  return (
    <div className="pagination-comp">
      <Container>
        <Row>
          <Col md={3} className="d-flex align-items-center">
            <Typography>Rows per page:</Typography>
            <FormControl variant="standard" sx={{ m: 2, minWidth: 80 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={itemPage}
                autoWidth
                onChange={itemPageChange}
                label="Item/page"
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={33}>33</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Container className="d-flex flex-wrap ">
          {props.data
            ?.slice((-1 + curPage) * itemPage, curPage * itemPage)
            .map((item, index) => (
              <WrapComponent key={index} item={item} />
            ))}
        </Container>
        <Row>
          <Pagination
            count={Math.ceil(props.data.length / itemPage).toFixed(0)}
            color="primary"
            page={curPage}
            onChange={curPageChange}
          />
        </Row>
      </Container>
    </div>
  );
};

export default PaginationComp;
