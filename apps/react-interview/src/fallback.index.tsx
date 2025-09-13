import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import { routerOptions } from './router';

const basename = `${import.meta.env.BASE_URL ?? ''}`.concat(window.location.pathname.includes('fallback') ? 'fallback': '')
console.log(basename)
const rootEl = document.getElementById('root');
if (rootEl) {
  const router = createBrowserRouter(routerOptions, {
    basename
  })
  const root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <RouterProvider 
        router={router} 
      />
    </React.StrictMode>,
  );
}
