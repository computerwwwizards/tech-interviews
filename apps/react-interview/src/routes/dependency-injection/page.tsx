import { Sandpack } from "@codesandbox/sandpack-react";
import containerTestCode from './question-files/container.test?raw'
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
            Implement the necessary logic to make the following test pass while adhering to 
            software engineering best practices.
          
            Consider that Backend team have not finished implementing and enpoint to get the information 
            neither they created an API contract yet
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
        'Context API', 
        'Suspense', 
        'Custom Hooks',
        'React 19'
      ]}
    />
    <Sandpack
      template="test-ts"
      options={{
        showConsole: true,
        showLineNumbers: true,
        showConsoleButton: true,
        resizablePanels: true,
        editorHeight: '60vh',
        activeFile: 'container.test.tsx',
        visibleFiles: ['container.test.tsx', 'service-provider.tsx', 'container.tsx', 'search-input.tsx', 'list-items.tsx'],
        id: 'dependency-injection'
      }}
      customSetup={{
        dependencies: {
          "react": "^19.1.1",
          "react-dom": "^19.1.1",
          "@testing-library/react": "^16.3.0",
          "@computerwwwizards/dependency-injection": "^1.1.1",
          "@testing-library/dom": "^10.4.1",
          "@testing-library/jest-dom": "^6.8.0",
          "@testing-library/user-event": "^14.6.1",
        }
      }}
      theme={'dark'}
      files={{
        "container.test.tsx": containerTestCode,
        'service-provider.tsx': serviceProviderCode,
        'container.tsx': containerCode,
        'add.test.ts': '',
        'search-input.tsx': searchInputCode,
        'list-items.tsx': listItemsCode
      }}
    />
    <div className="p-4">
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