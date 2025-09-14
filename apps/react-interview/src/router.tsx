import {  type RouteObject } from "react-router";
import { routeConfig } from './routes'
import { routeConfig as clientOnlyRouteConfig } from './routes/client-only'
import { routeConfig as useStateInitRouteConfig } from "./routes/use-state-init";


export const routerOptions: RouteObject[] = [
  routeConfig,
  clientOnlyRouteConfig,
  useStateInitRouteConfig
]

