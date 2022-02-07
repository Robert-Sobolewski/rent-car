

import { Breadcrumbs, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DetailProp from '../../components/detail-prop/DetailProp';
import { currentCar, find } from '../../redux/dataSlice';
import {BsSpeedometer} from 'react-icons/bs'
import {GrManual} from 'react-icons/gr'
import {GiCarSeat} from 'react-icons/gi'
import {GiCarDoor} from 'react-icons/gi'
import {AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import LocalGasStationTwoToneIcon from '@mui/icons-material/LocalGasStationTwoTone';
import AUTO from '../../data/types'
import axios from 'axios'
import './Details.css'
const Details = (props) => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const curCar = useSelector(currentCar)[0]
    const[car,setCar] = useState(null);
    const [ tabKey, setTabKey] = useState("features")
    const [desc,setDesc] = useState("")
    const navigate = useNavigate();
    const genDesc= async (par) =>{
      await axios.get(`http://metaphorpsum.com/paragraphs/${par}`)
      .then(resp => setDesc(resp.data))
      .error( error=> alert(error))
    }

    useEffect(()=>{
      genDesc(Math.floor(1+Math.random()*10))
       id&& setCar(dispatch(find(id)))
       window.scrollTo(0,0);
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
        <Tabs
        id="features-tabs"
        activeKey={tabKey}
        defaultActiveKey="features"
        onSelect={(k)=> setTabKey(k)}
        className="my-3">
          <Tab eventKey="features" title={"Features"}>
              <ul>
              {

                Object.entries(curCar.features).map((item, ind)=>{
                  return(
                  <Col md={{span: 3}}>
                  <li key={ind} className="my-3">
                  {
                    curCar.features[item[0]]=== true?(<AiOutlineCheck size={30} className='text-success' />): (<AiOutlineClose size={30} className='text-danger' />)
                    }
                    <span className="ms-3"><strong>{AUTO['features'][item[0]]}</strong> </span>
                    </li></Col>)
                })
              }</ul>
          </Tab>
          <Tab eventKey="description" title={"Description"}>
          {
           desc && desc.split('\n').map((item, index)=>(
              <p key={index}>{item}</p>
            ))
          }
          </Tab>
          
        </Tabs>

        <Row className="my-4">
          <Col md={{offset:9, span:2}}>
          <Button
          onClick={() => navigate('/pricing')}
          variant="contained" size="normal" color="primary">Order now</Button>
          </Col>
        </Row>

      </Container>
  </div>;
};

export default Details;
