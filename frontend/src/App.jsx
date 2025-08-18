import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// This is the most important line - it loads your CSS
import './App.css';


// Import all your components and pages
import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import OrderHistoryPage from './pages/OrderHistoryPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route path="/checkout" element={<ProtectedRoute />}>
            <Route path="" element={<CheckoutPage />} />
          </Route>
          <Route path="/myorders" element={<ProtectedRoute />}>
            <Route path="" element={<OrderHistoryPage />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;