import {  type RouteObject } from "react-router";
import { routeConfig } from './routes'
import { routeConfig as clientOnlyRouteConfig } from './routes/client-only'

export const routerOptions: RouteObject[] = [
  routeConfig,
  clientOnlyRouteConfig,
]

