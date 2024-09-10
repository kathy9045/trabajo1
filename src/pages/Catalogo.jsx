import React, { useState} from 'react';
import Filtros from '../components/Catalogo/Filtros';
import '../css/catalogo.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Resultados from '../components/Catalogo/Resultados';

const Catalog = () => {
    const [filtros, setFiltros] = useState({
        busqueda: '',
        categoria: '',
        region: '',
        minPrecio: 0,
        maxPrecio: 1000000,
      });
    

    return (
        <div classname="catalog">
            <NavBar />

            <h1>Catálogo de Dulces</h1>

            <div className="catalog">
             <div className="catalogo-container">
                <Filtros filtros={filtros} setFiltros={setFiltros} />
                <Resultados filtros={filtros} />
            </div>
            </div>



            <Footer/>
        </div>
    );
};

export default Catalog;
