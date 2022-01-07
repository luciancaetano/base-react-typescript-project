import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './styles/index.scss';
import './locale/i18next';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'sweetalert2/src/sweetalert2.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
