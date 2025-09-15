import type { RouteObject } from "react-router";


export const routeConfig: RouteObject = {
  path: '/use-sync-external-store',
  lazy: async ()=>{
    return {
      Component: (await import('./page')).default
    }
  }
}