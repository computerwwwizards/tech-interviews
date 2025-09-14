import { routeConfig } from './routes'
import { routeConfig as clientOnlyRouteConfig } from './routes/client-only'
import { routeConfig as useStateInitRouteConfig } from "./routes/use-state-init";
import { routeConfig as couplingRouteConfig } from './routes/coupling'
import type { CustomRouteObject } from "./types";

export const routerOptions: CustomRouteObject[] = [
  routeConfig,
  clientOnlyRouteConfig,
  useStateInitRouteConfig,
  couplingRouteConfig
]

