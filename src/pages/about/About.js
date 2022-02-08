import React from 'react';
import AboutComponent from '../../components/Home-components/AboutComponent';
import "./about.css"
import ClientsCarousel from '../../components/Home-components/ClientsCarousel';

export default function About() {
  return <div className='about-container'>
    <div className='aboutMain-pic'></div>
    
    <AboutComponent />
    <ClientsCarousel />



  </div>;


}
