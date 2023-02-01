import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Route from './route/Route';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>,
  document.getElementById('root')
);

