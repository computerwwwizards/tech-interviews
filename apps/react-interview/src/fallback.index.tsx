import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

import { RouterProvider } from 'react-router';

import { createRouter } from './create-router.client';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <RouterProvider 
        router={createRouter()} 
      />
    </React.StrictMode>,
  );
}
