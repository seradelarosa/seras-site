import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SeraPage from './components/Sera/sera'; // Correct path
import SophiaPage from './components/Sophia/sophia'; // Correct path
import UtopiaPage from './components/Utopia/utopia'; // Correct path
import ShopPage from './components/Shop/shop'; // Correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/seradelarosa" element={<SeraPage />} />
        <Route path="/sophiadelarosa" element={<SophiaPage />} />
        <Route path="/utopia" element={<UtopiaPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
};

export default App;