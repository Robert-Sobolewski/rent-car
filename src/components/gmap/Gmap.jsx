import React from 'react';
import './Gmap.css'

const Gmap = (props) => {
  return <div className="g-map">
      <iframe className='g-map' src={props.src} width={props.width}
   height={props.height}></iframe></div>;
};

export default Gmap;
