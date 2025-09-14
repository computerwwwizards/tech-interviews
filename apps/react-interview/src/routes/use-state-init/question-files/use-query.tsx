import { useCallback, useEffect, useState } from "react";
import { DefaultState, type State } from "./default-state";

export function useQuery<T>(queryFn: ()=>Promise<T>){
  const [state, setState] = useState<State<T>>(new DefaultState<T>())

  const refetch = useCallback(async ()=>{
    setState({
      data: null,
      isFetching: true,
      error: null
    })
    try {
      setState({
        data: await queryFn(),
        isFetching: false,
        error: null
      })
    } catch (error) {
      setState({
        data: null,
        isFetching: false,
        error: error as Error
      })
    }
   
  }, [])

  useEffect(()=>{
    refetch()
  }, [])

  return {
    ...state,
    refetch
  }
}