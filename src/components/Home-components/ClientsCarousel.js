import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import ItemCard from "./Item";
import "./client-carousel.css";

import image1 from "../../images/avatars/1.png";

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
      img: "../../images/avatars/1.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "John Connor",
      job: "Interface Designer",
    },
    {
      id: 2,
      img: "../../images/avatars/1.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "Tom Holland",
      job: "UX Designer",
    },
    {
      id: 3,
      img: "../../images/avatars/2.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "David Olsen",
      job: "Interface Designer",
    },
    {
      id: 4,
      img: "../../images/avatars/3.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "Sigfrid Nome",
      job: "UI Designer",
    },
    {
      id: 5,
      img: "../../images/avatars/2.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "Matt Lenon",
      job: "Marketing Manager",
    },
    {
      id: 6,
      img: "../../images/avatars/4.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
      name: "Sarah Parker",
      job: "Web Developer",
    },
    {
      id: 7,
      img: "../../images/avatars/2.png",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium ab eaque ea sint adipisci aliquam eius quae, molestiae necessitatibus sit. Ut explicabo amet minus libero rerum sunt architecto deleniti?",
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
          {items.map((item) => (
            <ItemCard key={item.id}>
              <div className="image">
                <img src={item.img} alt="" />
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
