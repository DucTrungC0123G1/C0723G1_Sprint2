import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeHeader from "./components/home/HomeHeader";
import {HomePage} from "./components/home/HomePage";
import {ProductDetail} from "./components/products/ProductDetail";
import {Cart} from "./components/cart/Cart";
import {Login} from "./components/auth/Login";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import authToken from "./services/units/UserToken";
import DashboardAdmin from "./components/overview/DashboardAdmin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product-detail" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<DashboardAdmin/>}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
