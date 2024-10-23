import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import './index.css'; // Assuming global styles
import App from './App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
