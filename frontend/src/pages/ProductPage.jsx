import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext.jsx';
  
const ProductPage = () => {
  const { id } = useParams(); // Gets the product ID from the URL
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <Link to="/" className="btn">Go Back</Link>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
// frontend/src/pages/ProductPage.jsx
<div className="product-detail">
  <div className="product-detail-image">
    <img src={product.imageUrl} alt={product.name} />
  </div>
  <div className="product-detail-info">
    <h1>{product.name}</h1>
    <p>Price: ${product.price}</p>
    <p>Description: {product.description}</p>
    <button onClick={() => addToCart(product)}>Add To Cart</button>
  </div>
</div>
      )}
    </div>
    
  );
};

export default ProductPage;
