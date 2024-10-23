import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeraPage from '/Users/sera/Dev/portfolio/new-website/src/screens/Sera/index.tsx' // Ensure this path is correct
import UtopiaPage from '/Users/sera/Dev/portfolio/new-website/src/screens/Utopia/index.tsx'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/seradelarosa" element={<SeraPage />} />
        <Route path="/utopia" element={<UtopiaPage />} />
      </Routes>
    </Router>
  );
};

export default App;

