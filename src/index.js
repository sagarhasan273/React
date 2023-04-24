import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Start() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

createRoot(document.getElementById('root')).render(
  <Start />,
);

reportWebVitals();
