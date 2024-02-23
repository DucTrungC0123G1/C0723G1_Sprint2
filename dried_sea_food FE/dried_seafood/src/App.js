import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeHeader from "./components/home/HomeHeader";
import {HomePage} from "./components/home/HomePage";
import {ProductDetail} from "./components/products/ProductDetail";
import {Cart} from "./components/cart/Cart";
import {Login} from "./components/auth/Login";

function App() {
  return (
<BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/product-detail" element={<ProductDetail/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<Login/>}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
