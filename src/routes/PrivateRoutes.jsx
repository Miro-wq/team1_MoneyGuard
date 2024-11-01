import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
