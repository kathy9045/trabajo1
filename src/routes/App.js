import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";
import Menu from "../pages/menu";
import Register from "../pages/register";
import AdminMenu from "../pages/MenuADMIN";
import ClientMenu from "../pages/MenuClient";
import Catalog from "../pages/Catalogo";
import ProductDetail from "../pages/ProductDetail";
import Index from "../components/Index";
import CatalogoIndex from "../components/CatalogoIndex";





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
        <Route path="/" element={<Catalog />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/CatalogoIndex" element ={<CatalogoIndex />} />
        


        







      </Routes>
    </Router>
  );
}

export default App;

