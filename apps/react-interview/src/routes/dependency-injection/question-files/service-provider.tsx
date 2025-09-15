import { PrimitiveContainer } from "@computerwwwizards/dependency-injection";
import { createContext, useState, type PropsWithChildren } from "react";

export interface ServiceOperations {
  // Define service operations here
}

export const ServiceProviderContext = createContext({} as PrimitiveContainer<ServiceOperations>);

function ServiceProvider({ children }: Readonly<PropsWithChildren>) {

  const [container] = useState(() => {
    const container = new PrimitiveContainer<ServiceOperations>()

    return container
  })

  return (
    <ServiceProviderContext value={container} >
      {children}
    </ServiceProviderContext>
  )
}

export default ServiceProvider;