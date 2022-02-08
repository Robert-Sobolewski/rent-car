
import { Breadcrumbs,Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CarCard from '../../components/car-card/CarCard';
import PaginationComp from '../../components/pagination/PaginationComp';
import { selectData } from '../../redux/dataSlice';

import './Cars.css'

const Cars = () => {
  const data = useSelector(selectData)
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return <div className="cars">
     <div className="top-img">
     <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
          <Link className="text-uppercase boldtext shadow" to="/">
            Home
          </Link>
          <Typography className="text-uppercase" color="text.primary">
            Cars
          </Typography>
        </Breadcrumbs>
     </div>
     
      <h1 className="my-3 ms-5">Choose Your Car</h1>
      <Container className="my-5">
      <PaginationComp data={data} comp={CarCard } />
      </Container>
      
  </div>;
};

export default Cars;
