import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);
  };
  const checkoutHandler = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="page-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty. <Link to="/">Go Shopping</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          ))}
          <hr />
          <h2>Total: ${calculateTotal()}</h2>
          <button onClick={checkoutHandler}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;