import React from 'react'
import NavBar from "../components/Navbar";
import ContentProduct from "../components/ContentProduct";
import DescMG from "../components/DescMG";
import Footer from "../components/Footer";
import InfoProduct from "../components/infoProduct";
import '../css/infoProduct.css'
import'../css/footer.css'


const Producto = () => {
  return (
<div className='containerpro'>
    <NavBar/>
    <ContentProduct/>
    <InfoProduct/>
    <DescMG/>
    <Footer/>


    

</div>
  )
}

export default Producto;