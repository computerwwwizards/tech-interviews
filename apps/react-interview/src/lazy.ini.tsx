import { createBrowserRouter, RouterProvider } from "react-router"
import { routerOptions } from "./router"
import { hydrateRoot } from "react-dom/client"

export async function init() {
  const router = createBrowserRouter(routerOptions)

  hydrateRoot(
    document.body.querySelector("#root")!,
    <RouterProvider router={router} />
  )
}
