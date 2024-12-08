// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import firebase config
import './firebase/config';

// Optional: Add any global styles here if needed
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);