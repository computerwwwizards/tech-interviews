import { createBrowserRouter } from "react-router"
import { routerOptions } from "./router"

export function createRouter(){
  const basename = `${import.meta.env.BASE_URL ?? ''}`
    .concat(window.location.pathname.includes('fallback') ? 'fallback': '')

  return createBrowserRouter(routerOptions, {
    basename,
  })

}