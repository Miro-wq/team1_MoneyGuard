// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from 'Pages/LoginPage/LoginPage';
import RegisterFormModal from 'components/RegistrationForm/RegistrationForm';
import DashboardPage from 'Pages/DashboardPage/DashboardPage';
import Home from 'Pages/Home/Home';
import Statistics from 'Pages/Statistics/Statistics';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';

const App = () => {
  const user = useSelector(state => state.auth.user); // Obține starea autentificării din Redux
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
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
      <Route path="/home" element={<Home />} />
      <Route
        path="/statistics"
        element={user ? <Statistics /> : <LoginPage />}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
