// Cart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm'; 
import NavBar from './Navbar'; // Asegúrate de que la ruta es correcta
import Footer from './Footer'; // Asegúrate de que la ruta es correcta

const Cart = ({ cartItems = [], onRemoveFromCart, totalPrice = 0 }) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();

  const handleBackToCatalog = () => {
    navigate('/catalogo');
  };

  const handleCheckout = () => {
    setShowCheckoutForm(true); // Muestra el formulario de pago
  };

  const handleCloseCheckoutForm = () => {
    setShowCheckoutForm(false); // Oculta el formulario de pago
  };

  return (
    <div className="cart-page">
      <NavBar /> {/* Renderiza el NavBar */}
      <div className="cart">
        <h2>Carrito de Compras</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <span>{item.name}</span>
                  <span>Precio: ${item.price ? item.price.toLocaleString() : 'N/A'}</span>
                </div>
                <button 
                  className="cart-item-button"
                  onClick={() => onRemoveFromCart(index)}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          <span>Total: ${totalPrice ? totalPrice.toLocaleString() : 'N/A'}</span>
          <button 
            className="cart-total-button"
            onClick={handleCheckout}
          >
            Proceder al Pago
          </button>
        </div>
        <button 
          className="back-to-catalog-button"
          onClick={handleBackToCatalog}
        >
          Volver al catálogo
        </button>

        {showCheckoutForm && (
          <CheckoutForm onClose={handleCloseCheckoutForm} />
        )}
      </div>
      <Footer /> {/* Renderiza el Footer */}

      <style>
        {`
          /* Estilos para la página del carrito */
          .cart-page {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Asegura que la página ocupe al menos el alto de la ventana */
          }

          /* Contenedor del carrito que ocupa el espacio disponible restante */
          .cart {
            flex: 1; /* Ocupa el espacio disponible entre el NavBar y el Footer */
            padding: 20px;
            background-color: #f9f9f9; /* Fondo claro para el área del carrito */
          }

          /* Espacio adicional debajo del NavBar */
          .cart-page > .cart {
            margin-top: 130px; /* Ajusta este valor según la altura del NavBar */
          }

          /* Estilos para los elementos del carrito */
          .cart-items {
            margin-bottom: 20px;
          }

          .cart-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            padding: 10px;
            background-color: #fff; /* Fondo blanco para los elementos del carrito */
            border: 1px solid #ddd; /* Borde ligero para los elementos del carrito */
          }

          .cart-item-image {
            width: 80px;
            height: 80px;
            object-fit: cover;
            margin-right: 10px;
          }

          .cart-item-info {
            flex: 1;
          }

          .cart-item-button {
            background-color: #e74c3c; /* Color de fondo rojo para el botón de eliminar */
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }

          .cart-total {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .cart-total-button {
            background-color: #2ecc71; /* Color de fondo verde para el botón de proceder al pago */
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
          }

          .back-to-catalog-button {
            margin-top: 10px;
            background-color: #3498db; /* Color de fondo azul para el botón de volver al catálogo */
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
          }

          /* Estilos para el Footer */
          footer {
            margin-top: 20px; /* Asegura que haya espacio entre el contenido y el footer */
          }
        `}
      </style>
    </div>
  );
};

export default Cart;
