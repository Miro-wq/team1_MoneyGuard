import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from 'Pages/LoginPage/LoginPage';
import DashboardPage from 'Pages/DashboardPage/DashboardPage';
import Home from 'Pages/Home/Home';
import Statistics from 'Pages/Statistics/Statistics';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import CurrencyTab from 'Pages/CurrencyTab/CurrencyTab';

const App = () => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={user ? <DashboardPage /> : <LoginPage />}
      />
      <Route path="/home" element={user ? <Home /> : <LoginPage />} />
      <Route
        path="/statistics"
        element={user ? <Statistics /> : <LoginPage />}
      />
      <Route
        path="/currency"
        element={user ? <CurrencyTab /> : <LoginPage />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
