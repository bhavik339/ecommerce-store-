import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Not_found } from "./pages/Not_found";
import { Single_product } from "./pages/Single_product";
import "./Mobile.css";
import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Products" element={<Products />} />
        <Route path="*" element={<Not_found />} />
        <Route path="/Singleproduct/:id" element={<Single_product />} />
      </Routes>
    </>
  );
}

export default App;
