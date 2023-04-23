/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/button-has-type */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

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
