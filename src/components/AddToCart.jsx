import React, { useContext } from "react";
import { useState } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

export const AddToCart = ({ getSingleProductData }) => {
  const { cartData, setCartData, amount, setAmount, increment, decrement } =
    useContext(ProductContext);
  console.log(cartData);

  const addItemInCart = () => {
    if (cartData.length >= 1) {
      if (idChecker(getSingleProductData.id)) {
        setCartData(
          cartData.map((item) => {
            if (item.id == getSingleProductData.id) {
              return {
                ...item,
                // price: getSingleProductData.price * (amount + item.quantity),
                quantity: item.quantity + amount,
              };
            }
            return item;
          })
        );
        console.log(cartData);
      } else {
        console.log("Empty Cart");
        cartData.push({
          id: getSingleProductData.id,
          image: getSingleProductData.image[0].url,
          name: getSingleProductData.name,
          price: getSingleProductData.price * amount,
          quantity: amount,
        });
        setCartData(cartData);
        localStorage.setItem("data", JSON.stringify(cartData));
        console.log(cartData);
      }
    } else {
      cartData.push({
        id: getSingleProductData.id,
        image: getSingleProductData.image[0].url,
        name: getSingleProductData.name,
        price: getSingleProductData.price * amount,
        quantity: amount,
      });
      setCartData(cartData);
      localStorage.setItem("data", JSON.stringify(cartData));
      console.log(cartData);
    }
  };

  const idChecker = (targetId) => {
    return cartData.some((obj) => obj.id == targetId);
  };

  return (
    <section className="addToCartWraper">
      <div className="addToCart">
        <div className="quantityOfItems">
          <button onClick={() => decrement()}>-</button>
          <p>{amount}</p>
          <button onClick={() => increment()}>+</button>
        </div>
        <div className="addToCartBtn">
          <Link to="/Cart">
            <button onClick={addItemInCart}>ADD TO CART</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
