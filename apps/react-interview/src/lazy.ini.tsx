import { createBrowserRouter, RouterProvider } from "react-router"
import { routerOptions } from "./router"
import { hydrateRoot } from "react-dom/client"

export async function init() {
  const basename = `${import.meta.env.BASE_URL ?? ''}`.concat(window.location.pathname.includes('fallback') ? 'fallback': '')
  const router = createBrowserRouter(routerOptions, {
    basename
  })

  hydrateRoot(
    document.body.querySelector("#root")!,
    <RouterProvider router={router} />
  )
}
