import { Sandpack } from "@codesandbox/sandpack-react";
import serviceProviderCode from "./question-files/service-provider?raw";
import containerCode from "./question-files/container?raw";
import searchInputCode from "./question-files/search-input?raw";
import listItemsCode from "./question-files/list-items?raw";

import { TextQuestion } from "../../components/text-question";
import { Link } from "react-router";

export default function Page() {

  return <>
    <TextQuestion
      title="Dependency Injection in React"
      description={
        <div>
          <p>
            Implement the necessary logic to show as the first item of the list the word "apple" 
            while adhering to software engineering best practices.
          
            Consider that Backend team have not finished implementing and enpoint to get the information 
            neither they created an API contract yet.
          </p>
          <br />
          <strong>Requirements:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>You cannot use <code>useEffect</code></li>
            <li>Components should depend on interfaces, not concrete implementations</li>
            <li>Follow the Dependency Inversion Principle</li>
          </ul>
        </div>
      }
      topics={[
        'React', 
        'Inversion of Control', 
        'Dependency Injection', 
        'Service Locator',
        'use',
        'Conditional Render',
        'Context API', 
        'Suspense', 
        'Custom Hooks',
        'React 19'
      ]}
    />
    <Sandpack
      template="react-ts"
      options={{
        showConsole: true,
        showLineNumbers: true,
        showConsoleButton: true,
        resizablePanels: true,
        editorHeight: '60vh',
        autoReload: false,
        id: 'dependency-injection'
      }}
      customSetup={{
        dependencies: {
          "react": "^19.1.1",
          "react-dom": "^19.1.1",
          "@computerwwwizards/dependency-injection": "^1.1.1",
        }
      }}
      theme={'dark'}
      files={{
        'service-provider.tsx': serviceProviderCode,
        'App.tsx': `
          import Container from './container'; 

          export default function App(){
            return <Container />
          }
        `,
        'container.tsx': containerCode,
        'search-input.tsx': searchInputCode,
        'list-items.tsx': listItemsCode
      }}
    />
    <div className="grid p-4 gap-4">
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/use-sync-external-store'
        }}
        viewTransition
      >
        Previous Question
      </Link>
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/coupling'
        }}
        viewTransition
      >
        Next Question
      </Link>
    </div>
  </>
}