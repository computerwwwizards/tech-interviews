import { RouterProvider } from "react-router"

import { hydrateRoot } from "react-dom/client"
import { createRouter } from "./create-router.client"

export async function init(withHeavyProcess = false) {
  
  if(withHeavyProcess)
    Array.from({length: 100_000_000}).reduce((prev: number, _next, index)=>prev+index,0)

  return hydrateRoot(
    document.body.querySelector("#root")!,
    <RouterProvider router={createRouter()} />
  )
}
