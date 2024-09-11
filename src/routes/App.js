import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";
import Menu from "../pages/menu";
import Register from "../pages/register";
import AdminMenu from "../pages/MenuADMIN";
import ClientMenu from "../pages/MenuClient";
import ProductDetail from "../pages/ProductDetail";
import Index from "../components/Index";
import CatalogoIndex from "../components/CatalogoIndex";
import Catalogo from "../components/Catalogo";
import Mueble from "../components/Mueble";
import Cart from "../components/Cart";
import CheckoutForm from "../components/CheckoutForm";
import Navbar from "../components/Navbar";
import minNav from "../components/minNav";
import Footer from "../components/Footer";






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Register" element={<Register />} /> 
        <Route path="/AdminMenu" element={<AdminMenu />} />
        <Route path="/ClientMenu" element={<ClientMenu />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/CatalogoIndex" element ={<CatalogoIndex />} />
        <Route path="/Catalogo" element ={<Catalogo />} />
        <Route path="/Mueble" element ={<Mueble />} />
        <Route path="/Cart" element ={<Cart />} />
        <Route path="/CheckoutForm" element ={<CheckoutForm />} />
        <Route path="/Navbar" element ={<Navbar />} />



        


        







      </Routes>
    </Router>
  );
}

export default App;

