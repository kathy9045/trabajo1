// Mueble.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Mueble.css'; // Asegúrate de tener este archivo CSS para los estilos
import { FaHeart } from 'react-icons/fa';

const Mueble = ({ mueble, onImageClick, onAddToCart, onToggleFavorite, isFavorite }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Función para manejar el cambio de favoritos
  const handleToggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    onToggleFavorite(mueble, newFavoriteState);
    alert(newFavoriteState ? 'Este producto fue añadido a favoritos' : 'Este producto fue eliminado de favoritos');
  };

  // Función para manejar añadir al carrito
  const handleAddToCart = () => {
    onAddToCart(mueble);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000); // Mensaje temporal
  };

  return (
    <div className="mueble">
      <img
        src={mueble.image}
        alt={mueble.name}
        onClick={() => onImageClick(mueble)}
        className="mueble-image"
      />
      <div className="mueble-info">
        <h3>{mueble.name}</h3>
        <div className="stars">
          {mueble.stars.map((filled, i) => (
            <span
              key={i}
              className={`star ${filled ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
        <p>Precio: ${mueble.price.toLocaleString()}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
        {isAddedToCart && <p className="cart-confirmation">¡Añadido al carrito!</p>}
        <button className="favorite-button" onClick={handleToggleFavorite}>
          <FaHeart color={isFavorite ? 'red' : 'gray'} />
        </button>
      </div>
    </div>
  );
};

Mueble.propTypes = {
  mueble: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.arrayOf(PropTypes.bool).isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default Mueble;

