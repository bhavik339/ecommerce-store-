import { useState } from "react";
import ProductContex from "./ProductContext";
import React from "react";
import { useEffect } from "react";

const Providercontext = ({ children }) => {
  const getDataFromLocalStorage = () => {
    let getData = localStorage.getItem("data");
    console.log(getData);
    if (getData) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  };

  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState(getDataFromLocalStorage());
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (cartData.length >= 0) {
      localStorage.setItem("data", JSON.stringify(cartData));
    } else {
      console.log("localelse");
    }
  });

  const increment = () => {
    console.log("incriment");
    amount > 0 ? setAmount(amount + 1) : setAmount(1);
  };

  const decrement = () => {
    console.log("dicriment");
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const API = "https://api.pujakaitem.com/api/products";

  const fetchData = () => {
    fetch(API)
      .then((Response) => Response.json())
      .then((data) => {
        setProductData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContex.Provider
      value={{
        productData,
        cartData,
        setCartData,
        setProductData,
        fetchData,
        amount,
        setAmount,
        increment,
        decrement,
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};

export { Providercontext };
