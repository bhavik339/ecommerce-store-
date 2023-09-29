import React, { useState } from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useEffect } from "react";

export const Cart = () => {
  const { cartData, setCartData, productData } = useContext(ProductContext);

  const [total, setTotal] = useState(0);
  console.log(total);

  const removeProduct = (id) => {
    cartData.map((removeEl) => {
      if (id == removeEl.id) {
        console.log(cartData);
        let newCartData = cartData.filter((name) => name.id !== id);
        console.log(newCartData);
        setCartData(newCartData);
      }
    });
  };

  const cartIncrement = (id) => {
    if (idCheker(id)) {
      setCartData(
        cartData.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.price / item.quantity,
            };
          }
          return item;
        })
      );
      console.log(cartData);
      // totalAmount();
    } else {
      console.log("else");
    }
  };

  const cartDecrement = (id) => {
    if (idCheker(id)) {
      setCartData(
        cartData.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.price / item.quantity,
            };
          }
          return item;
        })
      );
      console.log(cartData);
      totalAmount();
    } else {
      console.log("else");
    }
  };

  const idCheker = (target) => {
    return cartData.some((obj) => obj.id == target);
  };

  const displayCartData = cartData.map((item) => {
    return (
      <div key={item.id}>
        <div className="cartProductDiv">
          <img src={item.image} alt="CartImg" />
          <p>{item.name}</p>
          <h3 className="cartProductPrice">{productData.price}</h3>
          <button onClick={() => cartDecrement(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => cartIncrement(item.id)}>+</button>
          <h3>{item.price} $</h3>
          <button id="cartRemoveBtn" onClick={() => removeProduct(item.id)}>
            <AiFillDelete />
          </button>
        </div>
        <hr />
      </div>
    );
  });

  const totalAmount = () => {
    let value = [];
    for (const cartObject of cartData) {
      value.push(cartObject.price);
    }
    const sum2 = eval(value.join("+"));
    setTotal(sum2);
  };

  useEffect(() => {
    totalAmount();
  }, [cartData]);

  // cartData.length > 1 ? totalAmount() : console.log("else");

  return (
    <section className="cartWraper">
      <div className="cart">
        {cartData <= 0 ? (
          <h1 className="emptyCart">Cart Is Empty</h1>
        ) : (
          displayCartData
        )}
        <div className="cartTotal">
          {cartData <= 0 ? <p></p> : <h1>Total :- {total}</h1>}
        </div>
      </div>
    </section>
  );
};
