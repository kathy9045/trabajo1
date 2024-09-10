import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/resultado.css';

function Resultados({ filtros }) {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        const productosFiltrados = response.data.filter(producto => {
          const cumpleCategoria = !filtros.categoria || producto.categoria === filtros.categoria;
          const cumpleRegion = !filtros.region || producto.region.toLowerCase().includes(filtros.region.toLowerCase());
          const cumplePrecio = producto.precio >= filtros.minPrecio && producto.precio <= filtros.maxPrecio;
          return cumpleCategoria && cumpleRegion && cumplePrecio;
        });
        setProductos(productosFiltrados);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductos();
  }, [filtros]);

  const handleProductoClick = (producto) => {
    navigate(`/ProductDetail/${producto.id}`); 
  };

  return (
    <div className="resultados-container">
      <h3>Resultados de la Búsqueda</h3>
      <div className="resultados-grid">
        {productos.map(producto => {
          const precio = typeof producto.precio === 'number' ? producto.precio.toFixed(2) : 'N/A';
          return (
            <div className="producto-card" key={producto.id} onClick={() => handleProductoClick(producto)}>
              <img src={`http://localhost:3001/images/${producto.imagen}`} alt={producto.nombre} />
              <h4>{producto.nombre}</h4>
              <p>Región: {producto.region}</p>
              <p>Precio: ${precio}</p>
              <hr />
              <button className='masdetll'>
                <Link className='textodtll' to={`/ProductDetail/${producto.id}`}>
                  Ver más detalles
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resultados;
