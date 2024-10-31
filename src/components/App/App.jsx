import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Home from '../../Pages/Home/Home';
import Dashboard from '../../Pages/DashboardPage/DashboardPage';
import Statistics from '../../Pages/Statistics/Statistics';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';
import Header from '../Header/Header';

const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

