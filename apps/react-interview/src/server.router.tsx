import {
  routerOptions
} from './router'

export const routes = routerOptions.map(({loader, clientLoader, serverLoader, ...options})=>{
  return {
    ...options,
    loader: loader ?? serverLoader
  }
})
