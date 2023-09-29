import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import logo from "/public/images/logo.png"

export const Navbar = () => {
  return (
    <section className="navbarWraper">
      <div className="navbar">
        <div className="mainLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navList">
          <ul>
            <li>
              <Link to="">
                <p className="font_black">HOME</p>
              </Link>
            </li>
            <Link to="/About">
              <p className="font_black">ABOUT</p>
            </Link>
            <li>
              <Link to="/Products">
                <p className="font_black">PRODUCTS</p>
              </Link>
            </li>
            <li>
              <Link to="/Contacts">
                <p className="font_black">CONTACTS</p>
              </Link>
            </li>
            <li className="cartIcon">
              <Link to="/Cart">
                <BsCart4 />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
