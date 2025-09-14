import { createBrowserRouter } from "react-router"

import { routes } from "./client.router"

export function createRouter(){
  const basename = `${import.meta.env.BASE_URL ?? ''}`
    .concat(window.location.pathname.includes('fallback') ? 'fallback': '')

  return createBrowserRouter(routes, {
    basename,
  })

}