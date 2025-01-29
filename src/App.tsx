import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SeraPage from './components/Sera/sera'; // Correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SeraPage />} />
      </Routes>
    </Router>
  );
};

export default App;