import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = ({ user }) => {
  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
