import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeraPage from './screens/Sera'; // Import SeraPage
import UtopiaPage from './screens/Utopia'; // Import UtopiaPage

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
