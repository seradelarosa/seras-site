import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Initialize the root
const rootElement = document.getElementById('root');

// Ensure the root element is found before attempting to create the root
if (!rootElement) {
  throw new Error("Root element not found. Please ensure you have a <div id='root'></div> in your index.html.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

