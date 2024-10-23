import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SeraPage from './screens/Sera'; // Correct path
import UtopiaPage from './screens/Utopia'; // Correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/seradelarosa" element={<SeraPage />} />
        <Route path="/utopia" element={<UtopiaPage />} />
        {/* Optional: Redirect from the root URL to the Sera page */}
        <Route path="/" element={<Navigate to="/seradelarosa" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
