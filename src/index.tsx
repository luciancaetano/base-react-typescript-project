import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './styles/index.scss';
import './locale/i18next';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
