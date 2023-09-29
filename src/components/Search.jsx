import React, { useState } from "react";
import ProductContex from "../context/ProductContext";
import { useContext } from "react";

export const Search = () => {
  const [search, setsearch] = useState("");
  console.log(search);

  const { productData, setProductData, fetchData } = useContext(ProductContex);

  const fetchInputData = (value) => {
    if (value == "") {
      fetchData();
      setsearch("");
    } else {
      setsearch(value);
      console.log(value);
      const results = productData.filter((item) => {
        return item.name.includes(value);
      });
      setProductData(results);
      console.log(results);
    }
  };

  return (
    <section className="searchWraper">
      <div className="search">
        <form className="productSearch" action="">
          <input
            type="text"
            placeholder="search"
            name="search"
            value={search}
            onChange={(e) => fetchInputData(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};
