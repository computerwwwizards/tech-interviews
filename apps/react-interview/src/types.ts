import type { RouteObject } from "react-router";

export type CustomRouteObject = RouteObject & {
  serverLoader?: RouteObject['loader'];
  clientLoader?: RouteObject['loader'];
}
