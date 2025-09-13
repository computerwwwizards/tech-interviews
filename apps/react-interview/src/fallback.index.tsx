import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router';
import { routerOptions } from './router';



const rootEl = document.getElementById('root');
if (rootEl) {
  const router = createBrowserRouter(routerOptions, {
    basename: window.location.pathname.includes('fallback') ? 'fallback': undefined
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
