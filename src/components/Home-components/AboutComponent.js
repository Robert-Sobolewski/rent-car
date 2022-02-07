import React from "react";
import "./about-component.css";
import Button from "@mui/material/Button";
import image from "../../images/woman-key.jpg";

export default function AboutComponent() {
  return (
    <div className="about-container">
      <div className="car-book">
        <div className="box1">
          <img className="image" src={image} alt="Logo" />
        </div>
        <div className="box2">
          <div className="content-about">
            <p className="about-us">ABOUT US</p>
            <h1>Welcome to RentCar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
              sequi iste facere repellendus. Enim molestias error veniam fuga,
              aut praesentium autem nihil obcaecati quam quasi itaque recusandae
              corrupti laboriosam quaerat inventore, ducimus tempore libero
              doloribus? Corporis neque non
            </p>
            <p>
              qui, Consectetur rem deserunt vel sapiente iure a, architecto unde
              enim accusamus ut soluta fugiat eum dicta, aliquid nobis
              laboriosam quibusdam quo itaque nam. Culpa sapiente iusto, nulla
              accusamus itaque animi assumenda provident dicta dolores corporis
              labore nobis debitis dolorem simtrum magni, iste incidunt atque,
              id commodi illum omnis totam, sint pariatur dolorem? Et non
              maiores ipsam. Ratione sint magni saepe quibusdam culpa omnis
              perspiciatis consequuntur iste officia illum
            </p>
            <p>
            
              sequi neque magnam ipsum ipsa. Odio impedit illo culpa placeat cum
              fuga officiis aliquam earum veritatis sapiente. Animi
              voluptatibus, magni illum mollitia cumque blanditiis, voluptatum
              eaque quis distin assumenda cupiditate ipsa quo eos,
              exercitationem qui quaerat. Dignissimos cupiditate repellendus a
              porro maiores necessitatibus molestias consectetur voluptatibus?
            </p>

            <Button className="mt-3" variant="contained">
              Search Vehicle
            </Button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
