import { Link, useLoaderData } from "react-router";
import { TextQuestion } from "../components/text-question";
import type { CustomRouteObject } from "../types";


export const routeConfig: CustomRouteObject = {
  path: '/',
  Component: Page,
  loader() {
    return {
      questions: [
        {
          id: "1",
          title: 'Rendering',
          description: "Disable JavaScript in your browser and notice that this content remains visible, while most React applications typically show a message asking you to enable JavaScript. Why do you think this happens?",
          topics: [
            'Types of web rendering',
            'SSR, SSG, CSR',
            'React in the server'
          ]
        },
      ]
    }
  }
}


interface DataResponse {
  questions: { title: string; description: string; topics?: string[], id: string }[]
}

function Page() {
  const data: DataResponse = useLoaderData();
  return <main className="grid gap-7">
    <hgroup className="text-center py-6 px-3">
      <h1 className="text-fuchsia-300 text-4xl text-shadow-blue-600 text-shadow-2xs">
        <strong>
          React Interview Questions
        </strong>
      </h1>
      <h2 className="text-cyan-300">
        Page with use cases to measure your front-end knowledge
      </h2>
    </hgroup>
    {
      data?.questions?.map(({ id, description, title, topics }) => <TextQuestion
        description={description}
        title={title}
        key={id}
        topics={topics}
      />)
    }
    <TextQuestion
      title={'Performance Metrics Analysis'}
      description={<p>
        Use the browser DevTools to obtain Lighthouse performance metrics
        for this page, and compare them with <a
          className="underline text-cyan-400"
          href="./?deferredHydrationDeactivated=true&heavyProcessActive=true"
        >this variant of the same page</a>.
        Can you identify and explain why there is a substantial difference in performance? 
        <br /><br />
        <strong>Hint:</strong> Inspect the network calls and analyze the loading patterns.
      </p>
      }
      topics={[
        'Hydration',
        'Code splitting',
        'Lazy init',
        'Lighthouse',
        'Client metrics'
      ]}
    />
    <div className="p-4">
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/use-state-init'
        }}
        viewTransition
      >
        Next Question
      </Link>
    </div>
  </main>
}