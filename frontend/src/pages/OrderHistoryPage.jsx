import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';
import { useLocation } from 'react-router-dom';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authToken } = useContext(AuthContext);
  const location = useLocation();

  const successMessage = location.state?.message;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        };
        const { data } = await axios.get('http://localhost:5000/api/orders/myorders', config);
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch orders', error);
        setLoading(false);
      }
    };

    if (authToken) {
      fetchOrders();
    } else {
      setLoading(false); // If no token, stop loading
    }
  }, [authToken]);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      {successMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</p>}
      
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        orders.map(order => (
          <div key={order._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <h3>Order ID: {order._id}</h3>
            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
            <p>Total: ${order.totalPrice.toFixed(2)}</p>
            <h4>Items:</h4>
            {/* THE FIX IS HERE: Added a safety check */}
            {order.orderItems?.map(item => (
              <p key={item.product}>{item.name} (x{item.qty})</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryPage;