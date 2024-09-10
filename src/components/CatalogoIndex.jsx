import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import azulFrente from '../images/azulFrente.png';
import azulperfil from '../images/azulPerfil.png';
import azulOfrente from '../images/azulOfrente.png'; 
import azulOperfil from '../images/azulOperfil.png';
import cafeFrente from '../images/cafeFrente.png';
import cafePerfil from '../images/cafePerfil.png';
import grisFrente from '../images/grisFrente.png';
import grisPerfil from '../images/grisPerfil.png';
import negroPerfil from '../images/negroPerfil.png';
import negroFrente from '../images/negroFrente.png';


const products = [
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  // Puedes agregar más productos aquí...
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  {
    id: 1,
    name: "Sala En L Sofá Cama Multifuncional",
    price: 950000,
    discountPrice: 1100000,
    discount: 19,
    description: "",
    colors: {
      blanco: {
        default: azulFrente,
        hover: azulperfil, 
        hex: "#387f9c", 
      },
      cafe: {
        default: cafeFrente,
        hover: cafePerfil,
        hex: "#8B4513", 
      },
      negro: {
        default: negroFrente,
        hover: negroPerfil,
        hex: "#000000", 
      },
      gris: {
        default: grisFrente,
        hover: grisPerfil,
        hex: "#afb0b1", 
      },
      AzulOscuro: {
        default: azulOfrente,
        hover: azulOperfil,
        hex: "#264563", 
      },
      
    },
    defaultColor: "blanco",
  },
  
];

const ProductCatalog = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [hoveredImages, setHoveredImages] = useState({});

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
    setHoveredImages((prev) => ({
      ...prev,
      [productId]: null, // Se resetea el hover para mostrar la imagen seleccionada
    }));
  };

  const handleMouseEnter = (productId, color) => {
    setHoveredImages((prev) => ({
      ...prev,
      [productId]: products.find(product => product.id === productId).colors[color].hover,
    }));
  };

  const handleMouseLeave = (productId) => {
    setHoveredImages((prev) => ({
      ...prev,
      [productId]: null, // Se vuelve a la imagen seleccionada
    }));
  };

  return (
    <div className="product-catalog-container" style={styles.catalogContainer}>
      {products.map((product) => {
        const selectedColor = selectedColors[product.id] || product.defaultColor;
        const currentImage = hoveredImages[product.id] || product.colors[selectedColor].default;

        return (
          <div className="product-card" key={product.id} style={styles.productCard}>
            <div
              className="product-image"
              onMouseEnter={() => handleMouseEnter(product.id, selectedColor)}
              onMouseLeave={() => handleMouseLeave(product.id)}
              style={{
                ...styles.productImage,
                backgroundImage: `url(${currentImage})`,
              }}
            >
              {/* Aquí puedes agregar un overlay o íconos como en tu ejemplo */}
            </div>
            <div className="product-info" style={styles.productInfo}>
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <div className="price">
                <span style={styles.discountPrice}>${product.discountPrice.toLocaleString()}</span>
                <span style={styles.price}>${product.price.toLocaleString()}</span>
              </div>
              <div className="color-options">
                {Object.keys(product.colors).map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(product.id, color)}
                    onMouseEnter={() => handleMouseEnter(product.id, color)}
                    onMouseLeave={() => handleMouseLeave(product.id)}
                    style={{
                      ...styles.colorButton,
                      backgroundColor: product.colors[color].hex, 
                      border: selectedColor === color ? '2px solid #000' : 'none', // Borde si está seleccionado
                    }}
                  />
                ))}
              </div>
              <button className="add-to-cart" style={styles.addToCartButton}>Agregar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Estilos
const styles = {
  catalogContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px auto',
    width: '90%',
  },
  productCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '15px',
    width: '250px',
    textAlign: 'center',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '150px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '15px',
    borderRadius: '10px',
  },
  productInfo: {
    textAlign: 'left',
  },
  discountPrice: {
    textDecoration: 'line-through',
    color: '#888',
    marginRight: '10px',
  },
  price: {
    fontWeight: 'bold',
    color: '#e67e22',
  },
  colorButton: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: 'none',
    margin: '5px',
    cursor: 'pointer',
  },
  addToCartButton: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductCatalog;
