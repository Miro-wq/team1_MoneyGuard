import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Dashboard from '../../Pages/DashboardPage/Dashboard';
import Statistics from '../../Pages/Statistics/Statistics';
import PrivateRoutes from '../../routes/PrivateRoutes'; 
import PublicRoutes from '../../routes/PublicRoutes'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;