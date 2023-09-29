import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AddToCart } from "../components/AddToCart";
import { AiFillStar } from "react-icons/ai";

export const Single_product = () => {
  const { id } = useParams();

  const [getSingleProductData, setSingleProductData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSingleProductData = async () => {
    try {
      const res = await fetch(`https://api.pujakaitem.com/api/products/${id}`);
      return await res.json();
    } catch (error) {
      console.error("Error fetching product data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchSingleProductData();
      setLoading(false);
      setSingleProductData(data);
    };
    fetching();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="singleProductWraper">
      <div className="singleProduct">
        <div className="singleProductImg">
          <img src={getSingleProductData.image[0].url} alt="ProductImg" />
        </div>
        <div className="productDtail">
          <h1 className="singleProductName">{getSingleProductData.name}</h1>
          <h3 className="singleProductStars">
            {getSingleProductData.stars}
            <AiFillStar />
          </h3>
          <del className="singleProductPrice">
            MRP:{getSingleProductData.price + 20000}$
          </del>
          <h4 className="dealOfThaDay">
            Deal Of Tha Day :- {getSingleProductData.price}$
          </h4>
          <p className="singleProductDescription">
            {getSingleProductData.description}
          </p>
          <h4 className="singleProductCompnay">
            Brand :- {getSingleProductData.company}
          </h4>
          <AddToCart getSingleProductData={getSingleProductData} />
        </div>
      </div>
    </section>
  );
};
