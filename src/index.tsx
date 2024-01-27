/// <reference types="vite/client" />
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
