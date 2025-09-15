import type { RouteObject } from "react-router";


export const routeConfig: RouteObject = {
  path: '/dependency-injection',
  lazy: async () => {
    return {
      Component: (await import('./page')).default
    }
  }
}

