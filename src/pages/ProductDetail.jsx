import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import '../css/ProductDetail.css'; 
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [productosSimilares, setProductosSimilares] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProducto(response.data);
        fetchProductosSimilares(response.data.categoria); // Obtener productos similares basado en la categoría
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); // Cambia el estado de carga
      }
    };

    const fetchProductosSimilares = async (categoria) => {
      try {
        const response = await axios.get(`http://localhost:3001/products?categoria=${categoria}`);
        setProductosSimilares(response.data.filter(p => p.id !== id)); // Filtra el producto actual de los similares
      } catch (error) {
        console.error('Error fetching similar products:', error);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='B'>
      <NavBar />
      <div className="anuncio">
        <div>
          <h1>ES MUY RICOO!</h1>
        </div>
      </div>
   
      <div className="product-detail-container">      
        <div className="productinfo">   
          <div className="product-image">
            <img src={`http://localhost:3001/images/${producto.imagen}`} alt={producto.nombre} />
          </div>
          <div className="product-info">
            <h1>{producto.nombre}</h1>
            <hr />
            <p>{producto.descripcion}</p>
            <hr />
            <p>Precio: ${producto.precio.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="similar-products">
        <h2>Mas Dulces Deliciosos</h2>
        <div className="resultados-container">
          <div className="resultados-grid">
            {productosSimilares.map((item) => (
              <div key={item.id} className="producto-card">
                <img src={`http://localhost:3001/images/${item.imagen}`} alt={item.nombre} />
                <h4>{item.nombre}</h4>
                <p>Precio: ${item.precio.toFixed(2)}</p>
                <button className='masdetll'>
                  <Link className='textodtll' to={`/ProductDetail/${item.id}`}>
                    Ver más detalles
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProductDetail;
