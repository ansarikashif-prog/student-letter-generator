import React from 'react';
import ReactDOM from 'react-dom/client';

// ===============================
// MAIN APP COMPONENT
// ===============================
import App from './App';

// ===============================
// GLOBAL STYLES
// ===============================
import './styles/main.css';

// ===============================
// REACT 18 ROOT INITIALIZATION
// ===============================
const rootElement = document.getElementById('root');

if (!rootElement) {
  // Fail fast if root element is missing
  throw new Error('Root element not found. Ensure <div id="root"></div> exists in index.html');
}

// Render the React app in StrictMode for best practices
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
