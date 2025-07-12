import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MembersDashboard from './page/MembersDashboard.jsx';
import Login from './page/Login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MembersDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
