import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const { authToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const placeOrderHandler = async () => {
    try {
      const orderItems = cartItems.map(item => ({
        name: item.name,
        qty: item.qty,
        image: item.imageUrl, // Assuming you have imageUrl
        price: item.price,
        product: item._id,
      }));

      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`, // This is the protected part!
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/orders',
        { orderItems, totalPrice },
        config
      );

      navigate('/myorders', { state: { message: 'Order placed successfully!' } });
    } catch (error) {
      alert('Failed to place order.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      {cartItems.map(item => (
        <div key={item._id}>
          <p>{item.name} (x{item.qty})</p>
        </div>
      ))}
      <hr/>
      <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}</h3>
      <button onClick={placeOrderHandler}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;