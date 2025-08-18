import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item already exists
      const exist = prevItems.find((item) => item._id === product._id);
      if (exist) {
        // If it exists, just increase the quantity
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // If it's a new item, add it to the cart
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  // You can add removeFromCart, etc. functions here later

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};