import type { RouteObject } from "react-router";


export const routeConfig: RouteObject = {
  path: '/coupling',
  lazy: async ()=>{
    return {
      Component: (await import('./page')).default
    }
  }
}

