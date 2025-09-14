import { createBrowserRouter, RouterProvider } from "react-router"
import { routerOptions } from "./router"
import { hydrateRoot } from "react-dom/client"

export async function init(withHeavyProcess = false) {
  const basename = `${import.meta.env.BASE_URL ?? ''}`.concat(window.location.pathname.includes('fallback') ? 'fallback': '')
  const router = createBrowserRouter(routerOptions, {
    basename
  })

  if(withHeavyProcess)
    Array.from({length: 100_000_000}).reduce((prev: number, _next, index)=>prev+index,0)

  hydrateRoot(
    document.body.querySelector("#root")!,
    <RouterProvider router={router} />
  )
}
