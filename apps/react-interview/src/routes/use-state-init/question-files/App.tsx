import { DefaultState } from "./default-state"
import { useQuery } from "./use-query"

const wait = (
  time: number = 1000
) => new Promise(
  res => setTimeout(res, time)
)

async function fakeFetch() {
  await wait()

  return {
    hello: 'world'
  }
}

export default function App() {
  const { 
    refetch, 
    isFetching 
  } = useQuery(fakeFetch)


  return <div>
    <p>This should not increment in every click</p>
    <p>
      {isFetching ? 
        'Fetching' 
        : DefaultState.timesCreated
      }
    </p>
    <button
      onClick={refetch}
    >
      Refetch
    </button>
  </div>
}