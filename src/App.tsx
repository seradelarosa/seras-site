import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SeraPage from './screens/Sera/sera'; // Correct path
import UtopiaPage from './screens/Utopia/utopia'; // Correct path
import ShopPage from './screens/Shop/shop'; // Correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/seradelarosa" element={<SeraPage />} />
        <Route path="/utopia" element={<UtopiaPage />} />
        <Route path="/store" element={<ShopPage />} />
      </Routes>
    </Router>
  );
};

export default App;