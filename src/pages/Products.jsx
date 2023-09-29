import { React, useContext } from "react";
import ProductContex from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";

export const Products = () => {
  const { productData } = useContext(ProductContex);
  // console.log(productData);

  const mydata = productData.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/Singleproduct/${item.id}`}>
          <div className="productImage">
            <img src={item.image} alt="product_img" />
          </div>
          <div className="product_text_wraper">
            <h2>{item.name}</h2>
            <h3>{item.price}$</h3>
            <p>{item.description}</p>
            <button>Read More</button>
          </div>
        </Link>
        <hr />
      </div>
    );
  });

  return (
    <section className="productsWraper">
      <div className="products">
        <Search />
        <div className="productDiv">{mydata}</div>
      </div>
    </section>
  );
};
