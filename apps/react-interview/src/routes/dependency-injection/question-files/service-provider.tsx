import { PrimitiveContainer } from "@computerwwwizards/dependency-injection";
import { createContext, useState, type PropsWithChildren } from "react";

export interface ServiceOperations {
  // Define service operations here
}

export const ServiceProviderContext = createContext({} as PrimitiveContainer<ServiceOperations>);

function ServiceProvider({ children }: Readonly<PropsWithChildren>) {

  const [iocContainer] = useState(() => {
    const iocContainer = new PrimitiveContainer<ServiceOperations>()

    return iocContainer
  })

  return (
    <ServiceProviderContext value={iocContainer} >
      {children}
    </ServiceProviderContext>
  )
}

export default ServiceProvider;