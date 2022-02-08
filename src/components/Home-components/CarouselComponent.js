import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import { Carousel, Container } from "react-bootstrap";
import CarCard from '../car-card/CarCard';
import "./carousel-component.css"

export default function CarouselComponent() {


    const data = useSelector(selectData);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
  return <div>
       <Container className="my-5">
        <Carousel variant="dark">
          <Carousel.Item>
              <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={0} item={data[0]} />
                 <CarCard key={1} item={data[1]} />
                 <CarCard key={2} item={data[2]} />
              </div>
            
            <Carousel.Caption>
             
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={3} item={data[3]} />
                 <CarCard key={4} item={data[4]} />
                 <CarCard key={5} item={data[5]} />
              </div>
            <Carousel.Caption>
              
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={6} item={data[6]} />
                 <CarCard key={7} item={data[7]} />
                 <CarCard key={8} item={data[8]} />
              </div>
            <Carousel.Caption>
              
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="car-page d-flex justify-content-between align-items-md-stretch">
                 <CarCard key={9} item={data[9]} />
                 <CarCard key={10} item={data[10]} />
                 <CarCard key={11} item={data[11]} />
              </div>
            <Carousel.Caption>
              
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
  </div>;
}
