import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/ui/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import AdminPanel from "../screens/AdminPanel";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice/productsSlice";
import Shop from "../screens/Shop";
import Footer from "../components/ui/Footer";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Delivery from "../screens/Delivery";
import Confidentiality from "../screens/Confidentiality";

const Navigation = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.products.status);
    const showHeader = location.pathname !== '/admin';
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch]);

    return (
        <div className="flex flex-col min-h-screen">
            <div>{showHeader && <Header />}</div>
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" exact element={<Shop/>} />
                    <Route path="/shop/:category" exact element={<Shop/>} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/delivery" element={<Delivery/>} />
                    <Route path="/policy" element={<Confidentiality/>} />
                </Routes>
            </div>
            <div>{showHeader && <Footer />}</div>
        </div>
    );
};

export default Navigation;
