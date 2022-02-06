

import { Breadcrumbs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { currentCar, find } from '../../redux/dataSlice';
import './Details.css'
const Details = (props) => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const curCar = useSelector(currentCar)[0]
    const[car,setCar] = useState(null);

    useEffect(()=>{
       id&& setCar(dispatch(find(id)))
    },[])
  return <div className="details-comp">
      <div className="top-img"></div>
      <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
        <Link className="text-uppercase" to="/">
          Home
        </Link>
        <Link className="text-uppercase" to={`/details/${id}`}>
          Car Details
        </Link>
      </Breadcrumbs>
      
      <Container className="my-5">
        <Row>
            <img style={{borderRadius: 30}} className="img-fluid" src={curCar?.img} alt={curCar?.name} width="auto" height="500px" />
        </Row>
        <Row>
            
        </Row>
        <h5 className='text-center my-3 text-black-50 text-uppercase'>{curCar?.model}</h5>
        <h1 className="my-3 text-center">{curCar?.name}</h1>

          <p>
            {JSON.stringify(curCar)}
          </p>
      </Container>
  </div>;
};

export default Details;
