import { type RouteObject  }from 'react-router'

export const routeConfig: RouteObject = {
  path: '/client-only',
  Component: Page
}


export function Page(){
  return <main>
    <p>Have u seen the transition?</p>
  </main>
}