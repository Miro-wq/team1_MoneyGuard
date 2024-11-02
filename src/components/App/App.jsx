import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from 'Pages/LoginPage/LoginPage';
import DashboardPage from 'Pages/DashboardPage/DashboardPage';
import Home from 'Pages/Home/Home';
import Statistics from 'Pages/Statistics/Statistics';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import CurrencyTab from 'Pages/CurrencyTab/CurrencyTab';
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';

const App = () => {
  // Get auth state from Redux store
  const { isAuthenticated, isLoading } = useSelector(state => ({
    isAuthenticated: Boolean(state.auth.user),
    isLoading: state.auth.loading
  }));

  // Show loading state while checking authentication
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          {/* Nested Dashboard Routes */}
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="currency" element={<CurrencyTab />} />
        </Route>
      </Route>

      {/* Catch-all redirect */}
      <Route 
        path="*" 
        element={
          <Navigate 
            to={isAuthenticated ? "/dashboard/home" : "/login"} 
            replace 
          />
        } 
      />
    </Routes>
  );
};

export default App;