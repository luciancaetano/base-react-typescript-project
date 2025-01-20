/// <reference types="vite/client" />
import './index.css';
import '@fontsource/roboto';
import '@lib/i18n/configure';
import App from './app';
import primeTheme from './prime-theme';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PrimeReactProvider } from 'primereact/api';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { twMerge } from 'tailwind-merge';
import 'primeicons/primeicons.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: primeTheme, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true}/>
        <App/>
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
);

reportWebVitals();
