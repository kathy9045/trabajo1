import React from 'react';
import { useParams } from 'react-router-dom';
import products from './ProductCatalog'; // Si tienes los productos en otro archivo, impórtalos

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.colors[product.defaultColor].default} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Descuento: {product.discount}%</p>
    </div>
  );
};

export default ProductDetail;
