import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { routes } from './server.router';

export async function render(location: string = '/') {
  const { query, dataRoutes } = createStaticHandler(routes);
  
  const fetchRequest = new Request(`http://localhost${location}`);
  
  const context = await query(fetchRequest);

   if (context instanceof Response) {
    return ''
  }
  
  const router = createStaticRouter(dataRoutes, context);

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouterProvider 
        router={router} 
        context={context} 
      />
    </React.StrictMode>
  );
}