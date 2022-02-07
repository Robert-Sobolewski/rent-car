

import { Breadcrumbs, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DetailProp from '../../components/detail-prop/DetailProp';
import { currentCar, find } from '../../redux/dataSlice';
import {BsSpeedometer} from 'react-icons/bs'
import {GrManual} from 'react-icons/gr'
import {GiCarSeat} from 'react-icons/gi'
import {GiCarDoor} from 'react-icons/gi'
import LocalGasStationTwoToneIcon from '@mui/icons-material/LocalGasStationTwoTone';
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
        
        <h5 className='text-center my-3 text-black-50 text-uppercase'>{curCar?.model}</h5>
        <h1 className="my-3 text-center">{curCar?.name}</h1>

        <Row className="justify-content-center my-5">
          <Col className="justify-content-center" md={{span:2}}>
           <DetailProp icon={BsSpeedometer} title="Mileage" desc={curCar.mil}/>
          </Col>
          <Col className="justify-content-center" md={{span:2}}>
           <DetailProp icon={GrManual} title="Transmission" desc={curCar.trans}/>
          </Col>
          <Col className="justify-content-center" md={{span:2}}>
           <DetailProp icon={GiCarSeat} title="Seats" desc={curCar.seats+ " Adults"}/>
          </Col>
          <Col className="justify-content-center" md={{span:2}}>
           <DetailProp icon={GiCarDoor} title="Doors" desc={curCar.doors}/>
          </Col>
          <Col className="justify-content-center" md={{span:2}}>
           <DetailProp icon={LocalGasStationTwoToneIcon} title="Fuel" desc={curCar.fuel.toString()[0].toUpperCase()+curCar.fuel.toString().slice(1)}/>
          </Col>
        </Row>

        {/* <Row>
            <Stack spacing={2} direction="row">
              <DetailProp icon={<BsSpeedometer/>} title={"Mileage"} desc={"10000"}/>
              <DetailProp icon={<BsSpeedometer />} title={"Mileage"} desc={"10000"}/>
              <DetailProp icon={<BsSpeedometer />} title={"Mileage"} desc={"10000"}/>
            </Stack>
        </Row> */}

          <p>
            {JSON.stringify(curCar)}
          </p>
      </Container>
  </div>;
};

export default Details;
