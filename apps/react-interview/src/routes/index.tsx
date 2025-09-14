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
          title: 'And the first question starts right here (rendering)',
          description: "Disable javascript, why do you think this info continues to be showed while other react applicactions usually show a text asking to enable javascript for the application to work.",
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
        Page with some use cases to measure your front end kwoledge
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
      title={'Metrics'}
      description={<p>
        Use the browser devtools to get ligthouse performance metrics
        of this page, and of <a
          className="underline text-cyan-400"
          href="./?deferedHydrationDeactivated=true&heavyProcessActive=true"
        >this variant of this same page</a>,
        can u tell why there is a substantial difference in the performance (hint: inspect network calls)
      </p>
      }
      topics={[
        'Hydration',
        'Code splitting',
        'Lazy init',
        'Ligthouse',
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
        Next questions
      </Link>
    </div>
  </main>
}