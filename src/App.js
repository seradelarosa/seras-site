import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SeraPage from './screens/Sera/sera'; // Correct path
import UtopiaPage from './screens/Utopia/utopia'; // Correct path
import StorePage from './screens/Store/store'; // Correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/seradelarosa" element={<SeraPage />} />
        <Route path="/utopia" element={<UtopiaPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
};

export default App;