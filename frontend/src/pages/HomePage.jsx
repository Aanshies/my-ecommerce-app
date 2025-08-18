// frontend/src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // This URL points to your backend API
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

return (
    <div>
      <h1>Latest Products</h1>
      <div className="product-grid">
        {products.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`}>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
              <strong>${product.price.toFixed(2)}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;