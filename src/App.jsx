import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MembersDashboard from './page/MembersDashboard.jsx';
import Login from './page/Login.jsx';
import CouponsPage from './page/CouponsPage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/members" element={<MembersDashboard />} />
        <Route path="/coupons" element={<CouponsPage />} />

      </Routes>
    </Router>
  );
};

export default App;
