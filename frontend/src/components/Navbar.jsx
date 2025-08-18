import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { authToken, logout } = useContext(AuthContext);
  const itemCount = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <nav>
      {/* Brand on the left */}
      <Link to="/" className="brand">Eswari's Store</Link>

      {/* Nav links on the right */}
      <ul className="nav-links">
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-badge">{itemCount}</span>
          </Link>
        </li>
        {authToken ? (
          <>
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>
            <li>
              <button onClick={logout} className="logout-btn">Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="login-link">
              👤 Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
