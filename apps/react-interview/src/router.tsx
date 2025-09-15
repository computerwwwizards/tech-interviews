import { routeConfig } from './routes'

import { routeConfig as useStateInitRouteConfig } from "./routes/use-state-init";
import { routeConfig as useSyncExternalStoreRouteConfig } from "./routes/use-sync-external-store";
import { routeConfig as couplingRouteConfig } from './routes/coupling'
import { routeConfig as dependencyInjectionRouteConfig } from './routes/dependency-injection'

import type { CustomRouteObject } from "./types";

export const routerOptions: CustomRouteObject[] = [
  routeConfig,
  useStateInitRouteConfig,
  useSyncExternalStoreRouteConfig,
  couplingRouteConfig,
  dependencyInjectionRouteConfig
]

