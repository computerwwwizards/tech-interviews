import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { routerOptions } from './router';

export async function render(location: string = '/') {
  // Create the static handler with your routes
  const { query, dataRoutes } = createStaticHandler(routerOptions);
  
  // Create a fake request for the location
  const fetchRequest = new Request(`http://localhost${location}`);
  
  // Query the route to get loader data
  const context = await query(fetchRequest);

   if (context instanceof Response) {
    return ''
  }
  
  // Create the static router with the routes and context
  const router = createStaticRouter(dataRoutes, context);

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouterProvider hydrate={false} router={router} context={context} />
    </React.StrictMode>
  );
}