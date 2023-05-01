import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Route from './route/Route';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>
);

