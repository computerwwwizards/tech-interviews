import type { RouteObject } from "react-router";


export const routeConfig: RouteObject = {
  path: '/use-state-init',
  lazy: async ()=>{
    return {
      Component: (await import('./page')).default
    }
  }
}

