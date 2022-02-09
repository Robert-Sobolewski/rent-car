import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import ItemCard from "./Item";
import "./client-carousel.css";

import image1 from "../../images/avatars/1.png";
import image2 from "../../images/avatars/2.png";
import image3 from "../../images/avatars/3.png";
import image4 from "../../images/avatars/4.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function ClientsCarousel() {
 
  const items = [
    {
      id: 1,
      img: {image1},
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestro rerum sunt architecto deleniti?",
      name: "John Connor",
      job: "Interface Designer",
    },
    {
      id: 2,
      img: {image2},
      comment:
        "Lorem, ipsum dolor sit amet cea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "Tom Holland",
      job: "UX Designer",
    },
    {
      id: 3,
      img: {image3},
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, mlibero rerum sunt architecto deleniti?",
      name: "David Olsen",
      job: "Interface Designer",
    },
    {
      id: 4,
      img: {image4},
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molero rerum sunt architecto deleniti?",
      name: "Sigfrid Nome",
      job: "UI Designer",
    },
    {
      id: 5,
      img: {image1},
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, moleinus libero rerum sunt architecto deleniti?",
      name: "Matt Lenon",
      job: "Marketing Manager",
    },
    {
      id: 6,
      img: {image2},
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae libero rerum sunt architecto deleniti?",
      name: "Sarah Parker",
      job: "Web Developer",
    },
    {
      id: 7,
      img: {image3},
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. ",
      name: "Abdul Hasan",
      job: "Interface Designer",
    },
  ];

  return (
    <div className="client-container">
         <p className="p-blue">Testimonial</p>
        <h1>Happy Customers</h1>





      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item, index) => (
            <ItemCard key={item.id}>
              <div className="image">
                <img src={[image1,image2,image3,image4,image1,image4, image1][index]} alt="" />
               
              </div>
              <p className="p-grey">{item.comment}</p>
              <p className="p-name">{item.name}</p>
              <p className="p-blue">{item.job}</p>

             
            </ItemCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
