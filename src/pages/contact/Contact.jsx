
import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
  return <div className="contact">
    <Row >
        <Image src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80' alt='contact' height={600}/>
        
      </Row>
    <Container>
     <h1>contact page</h1>
    </Container>
      
  </div>;
};

export default Contact;
