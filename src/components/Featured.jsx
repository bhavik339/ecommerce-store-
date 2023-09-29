import React, { useState } from "react";
import ProductContex from "../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Featured = () => {
  const { productData } = useContext(ProductContex);

  const getFeatureddataData = productData.filter((item) => {
    return item.featured;
  });

  const displayFeatureData = getFeatureddataData.map((item) => {
    return (
      <Link key={item.id} to={`/Singleproduct/${item.id}`}>
        <div className="productsDiv">
          <img src={item.image} alt="product_img" />
          <div className="featured_text_wraper">
            <h2>{item.name}</h2>
            <h3>{item.price}$</h3>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="featuredwrepar">
      <div className="featured">
        <div className="featuredTitle">
          <h1>Our Feature Services</h1>
        </div>
        <div className="featuredProduct">{displayFeatureData}</div>
      </div>
    </section>
  );
};
