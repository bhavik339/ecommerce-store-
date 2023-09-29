import React from "react";
import { Link } from "react-router-dom";
import img1 from "/public/images/hero.jpg"

export const HeroSection = ({ mydata }) => {
  const { name } = mydata;

  return (
    <section className="heroWraper">
      <div className="heroSection">
        <div className="left_hero_section">
          <p>Welcome To</p>
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quia expedita aspernatur voluptatum dignissimos quos magni incidunt
            consectetur officiis quaerat?
          </p>
          <Link to="/Products">
            <button className="shopeNow_btn">Shope Now</button>
          </Link>
        </div>
        <div className="right_hero_section">
          <img src={img1} alt="Homepage_Img" />
        </div>
      </div>
    </section>
  );
};
