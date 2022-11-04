import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import './locale/i18next';
import 'lens-ui/dist/index.css';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
