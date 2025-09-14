import { type ReactNode } from "react";
import { Link, type RouteObject } from "react-router";

export const routeConfig: RouteObject = {
  path: '/',
  Component: Page
}


interface TextQuestionProps {
  title: ReactNode;
  description: ReactNode;
  topics?: ReactNode[];
}

function TextQuestion({
  description,
  title,
  topics
}: TextQuestionProps) {
  return <section className="grid gap-8">
    <h3 className="text-cyan-300 bg-gray-800 p-3 shadow-fuchsia-300">
      <strong>
        {title}
      </strong>
    </h3>
    <div className="px-6 grid gap-6">
      <h4 className="underline">
        <strong>
          Description
        </strong>
      </h4>
      <p>
        {description}
      </p>
      {topics && <h4 className="underline">
        <strong>
          Topics
        </strong>
      </h4>}
      {topics && <ul>
        {topics.map((node, index) => <li
          key={`topics-${title}-${index}`}>
          {node}
        </li>
        )}
      </ul>}
    </div>

  </section>
}

function Page() {
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
    <TextQuestion
      title={'And the first question starts right here (rendering)'}
      description={<>
        Disable javascript, why do you think this info continues to be showed
        while other react applicactions usually show a text asking
        to enable javascript for the application to work.
      </>
      }
      topics={[
        'Types of web rendering',
        'SSR, SSG, CSR',
        'React in the server'
      ]}
    />
    <TextQuestion
      title={'Metrics'}
      description={<>
        Use the browser devtools to get ligthouse performance metrics
        of this page, and of <a 
          className="underline text-cyan-400" 
          href="./?deferedHydrationDeactivated=true"
        >this variant of this same page</a>,
        can u tell why there is a substantial difference in the performance (hint: inspect network calls)
      </>
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
        to={'client-only'} 
        viewTransition
      >
        Next questions
      </Link>
    </div>
  </main>
}