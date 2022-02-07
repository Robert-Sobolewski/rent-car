import React from "react";
import Carousel from "react-elastic-carousel";
import image1 from "../../images/bluebmw.webp";
import image2 from "../../images/car2.webp";
import image3 from "../../images/car4.jpeg";
import ItemCard from "./ItemCard";

const breakPoints = [
  { width: 1, itemToshow: 1 },
  { width: 550, itemToshow: 2 },
  { width: 768, itemToshow: 3 },
  { width: 1200, itemToshow: 4 },
];
export default function CarouselComponent() {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        <ItemCard>1</ItemCard>
        <ItemCard>2</ItemCard>
        <ItemCard>3</ItemCard>
        <ItemCard>4</ItemCard>
        <ItemCard>5</ItemCard>
        <ItemCard>6</ItemCard>
      </Carousel>
    </div>
  );
}
