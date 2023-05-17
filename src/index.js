import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { CarritoProvider } from './Components/Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);

