import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import { Card, Button } from "react-bootstrap";
import image1 from "../../images/bluebmw.webp";
import image2 from "../../images/car2.webp";
import image3 from "../../images/car4.jpeg";




export default function CarouselComponent() {
  

  return (
    <div>
      <Carousel>
        <Carousel.Item className="d-flex">
          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image1} className="d-block w-100" />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image1} className="d-block w-100"/>
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image1} className="d-block w-100" />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item className="d-flex">
          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item className="d-flex">
          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>dsfdsfdsf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="me-3" variant="primary">
                Book now
              </Button>
              <Button variant="success">Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
    
     
      </Carousel>
    </div>
  );
}
