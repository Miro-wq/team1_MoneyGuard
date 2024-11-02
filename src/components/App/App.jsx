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
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

const App = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Routes>
      <Route element={<PublicRoutes user={user} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<PrivateRoutes user={user} />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="currency" element={<CurrencyTab />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
