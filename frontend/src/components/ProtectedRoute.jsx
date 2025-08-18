import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { authToken } = useContext(AuthContext);

  // If the user is logged in, show the page. Otherwise, redirect to login.
  return authToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;