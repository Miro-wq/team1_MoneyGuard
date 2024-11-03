import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Page imports
import LoginPage from 'Pages/LoginPage/LoginPage';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import DashboardPage from 'Pages/DashboardPage/DashboardPage';
import Home from 'Pages/Home/Home';
import Statistics from 'Pages/Statistics/Statistics';
import CurrencyTab from 'Pages/CurrencyTab/CurrencyTab';

// Route guards
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';

// Loading component
import Loader from 'components/Loader/Loader'; // Adjust the import path as needed

const App = () => {
  const { isAuthenticated, isLoading } = useSelector(state => ({
    isAuthenticated: Boolean(state.auth.user),
    isLoading: state.auth.loading
  }));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="currency" element={<CurrencyTab />} />
            </Route>
          </Route>

          {/* Catch-all redirect */}
          <Route 
            path="*" 
            element={
              <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
            } 
          />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;