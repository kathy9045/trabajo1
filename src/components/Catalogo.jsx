import React, { useState, useEffect } from 'react'; 
import mueble1 from '../images/mueble1.png';
import mueble2 from '../images/mueble2.png';
import mueble3 from '../images/mueble3.png';
import mueble4 from '../images/mueble4.png';
import mueble5 from '../images/mueble5.png';
import mueble6 from '../images/mueble6.png';
import mueble7 from '../images/mueble7.png';
import mueble8 from '../images/mueble8.png';
import mueble9 from '../images/mueble9.png';
import mueble10 from '../images/mueble10.png';
import mueble11 from '../images/mueble11.png';
import mueble12 from '../images/mueble12.png';
import axios from 'axios';
import Mueble from './Mueble';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';
import NavBar from './Navbar'; // Asegúrate de tener el archivo correcto
import Footer from './Footer'; // Asegúrate de tener el archivo correcto

const Catalogo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMueble, setSelectedMueble] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://api.example.com/items'); 
        setItems(response.data);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    fetchItems();
  }, []);

  const generateStars = () => Array(5).fill(true);

  const muebles = [
    { name: 'Mueble 1', image: mueble1, stars: generateStars(), description: 'Descripción del Mueble 1', price: 2200000 },
    { name: 'Mueble 2', image: mueble2, stars: generateStars(), description: 'Descripción del Mueble 2', price: 2000000 },
    { name: 'Mueble 3', image: mueble3, stars: generateStars(), description: 'Descripción del Mueble 3', price: 2500000 },
    { name: 'Mueble 4', image: mueble4, stars: generateStars(), description: 'Descripción del Mueble 4', price: 2500000 },
    { name: 'Mueble 5', image: mueble5, stars: generateStars(), description: 'Descripción del Mueble 5', price: 2100000 },
    { name: 'Mueble 6', image: mueble6, stars: generateStars(), description: 'Descripción del Mueble 6', price: 2000000 },
    { name: 'Mueble 7', image: mueble7, stars: generateStars(), description: 'Descripción del Mueble 7', price: 2600000 },
    { name: 'Mueble 8', image: mueble8, stars: generateStars(), description: 'Descripción del Mueble 8', price: 1400000 },
    { name: 'Mueble 9', image: mueble9, stars: generateStars(), description: 'Descripción del Mueble 9', price: 2900000 },
    { name: 'Mueble 10', image: mueble10, stars: generateStars(), description: 'Descripción del Mueble 10', price: 1900000 },
    { name: 'Mueble 11', image: mueble11, stars: generateStars(), description: 'Descripción del Mueble 11', price: 2200000 },
    { name: 'Mueble 12', image: mueble12, stars: generateStars(), description: 'Descripción del Mueble 12', price: 2400000 },
  ];

  const filteredMuebles = muebles.filter(mueble =>
    mueble.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageClick = (mueble) => {
    setSelectedMueble(mueble);
  };

  const handleAddToCart = (mueble) => {
    setCartItems([...cartItems, mueble]);
    setMessage(`El mueble "${mueble.name}" se ha añadido al carrito.`);
    setTimeout(() => setMessage(''), 5000); 
  };

  const handleViewCart = () => {
    setViewCart(true);
    setSelectedMueble(null);
  };

  const handleBackToCatalog = () => {
    setViewCart(false);
    setSelectedMueble(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseImageViewer = () => {
    setSelectedMueble(null);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleCloseCheckoutForm = () => {
    setShowCheckoutForm(false);
  };

  const handleToggleFavorite = (mueble, isFavorite) => {
    const newFavorites = new Set(favorites);
    if (isFavorite) {
      newFavorites.add(mueble.name);
    } else {
      newFavorites.delete(mueble.name);
    }
    setFavorites(newFavorites);
  };

  const styles = {
    catalogo: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '140px', // Ajusta este valor según la altura del NavBar
    },
    navBar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000, // Asegúrate de que el NavBar esté por encima del contenido
      height: '60px', // Ajusta según la altura de tu NavBar
      backgroundColor: '#fff', // Color de fondo del NavBar
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra para dar un poco de profundidad
    },
    searchContainer: {
      padding: '1rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
    },
    searchInput: {
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
    },
    searchIcon: {
      display: 'none', // Hide search icon since we are removing search functionality
    },
    muebleContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      padding: '1rem',
    },
    mueble: {
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '220px',
      height: '330px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5rem',
    },
    muebleImage: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      cursor: 'pointer',
    },
    muebleInfo: {
      flexGrow: '1',
    },
    muebleInfoH3: {
      fontSize: '1.2rem',
      margin: '0.5rem 0',
    },
    stars: {
      color: 'gold',
    },
    starFilled: {
      color: 'gold',
    },
    detailViewer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      background: 'white',
      padding: '1rem',
      borderRadius: '8px',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '600px',
      width: '90%',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      zIndex: '1000',
    },
    detailContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    detailImage: {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
    },
    detailInfo: {
      textAlign: 'center',
      marginTop: '1rem',
    },
    detailInfoH2: {
      fontSize: '1.5rem',
    },
    detailInfoP: {
      margin: '0.5rem 0',
    },
    addToCartButton: {
      padding: '10px 20px',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '5px',
      backgroundColor: '#28a745',
    },
    backToCatalogButton: {
      padding: '10px 20px',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '5px',
      backgroundColor: '#007bff',
    },
    addToCartButtonHover: {
      opacity: '0.8',
    },
    backToCatalogButtonHover: {
      opacity: '0.8',
    },
    message: {
      textAlign: 'center',
      color: 'green',
      padding: '1rem',
    },
  };

  return (
    <div style={styles.catalogo}>
      <NavBar style={styles.navBar} /> {/* Asegúrate de que NavBar esté correctamente importado y configurado */}
      
      {/* Removed search bar */}
      
      {viewCart ? (
        <div className="cart-section">
          <Cart 
            cartItems={cartItems} 
            onRemoveFromCart={(index) => setCartItems(cartItems.filter((_, i) => i !== index))}
            totalPrice={totalPrice}
            onCheckout={handleCheckout}
          />
          {showCheckoutForm && (
            <CheckoutForm onClose={handleCloseCheckoutForm} />
          )}
          <button 
            onClick={handleBackToCatalog} 
            style={styles.backToCatalogButton}
          >
            Volver al catálogo
          </button>
        </div>
      ) : selectedMueble ? (
        <div style={styles.detailViewer}>
          <div style={styles.detailContent}>
            <img 
              src={selectedMueble.image} 
              alt={selectedMueble.name} 
              style={styles.detailImage}
            />
            <div style={styles.detailInfo}>
              <h2 style={styles.detailInfoH2}>{selectedMueble.name}</h2>
              <p style={styles.detailInfoP}>{selectedMueble.description}</p>
              <p><strong>Precio:</strong> ${selectedMueble.price.toLocaleString()}</p>
              <div style={styles.stars}>
                {selectedMueble.stars.map((_, index) => (
                  <i 
                    key={index} 
                    className={`fa fa-star ${index < selectedMueble.stars.length ? 'filled' : ''}`}
                    style={index < selectedMueble.stars.length ? styles.starFilled : {}}
                  ></i>
                ))}
              </div>
              <button 
                onClick={() => handleAddToCart(selectedMueble)} 
                style={styles.addToCartButton}
              >
                Agregar al carrito
              </button>
              <button 
                onClick={handleBackToCatalog} 
                style={styles.backToCatalogButton}
              >
                Volver al catálogo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {message && <div style={styles.message}>{message}</div>}
          <div style={styles.muebleContainer}>
            {filteredMuebles.length > 0 ? (
              filteredMuebles.map((mueble, index) => (
                <Mueble
                  key={index}
                  mueble={mueble}
                  onImageClick={handleImageClick}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favorites.has(mueble.name)}
                />
              ))
            ) : (
              <p>No se encontraron muebles.</p>
            )}
          </div>
        </div>
      )}
      
      <Footer /> {/* Asegúrate de que Footer esté correctamente importado y configurado */}
    </div>
  );
}

export default Catalogo;
