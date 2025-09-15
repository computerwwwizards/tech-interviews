import { Sandpack } from "@codesandbox/sandpack-react";
import testCode from './question-files/entry?raw'
import dataSourceCode from './question-files/data-source?raw'
import { TextQuestion } from "../../components/text-question";
import { Link } from "react-router";

export default function Page() {

  return <main className="grid gap-10">
    <TextQuestion
      title="Decoupling and Unit Testing"
      description={
        <div>
          <p>
            The provided test demonstrates a common problem in software design: tight coupling. 
            Examine the test and the DataSource implementation, then refactor the code to make the test pass.
          </p>
          <br />
          <strong>Objectives:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Make the failing test pass</li>
            <li>Ensure the DataSource is properly decoupled from external dependencies</li>
            <li>Implement proper abstraction layers</li>
            <li>Apply dependency injection principles</li>
          </ul>
        </div>
      }
      topics={['Loose Coupling', 'Dependency Management', 'Unit Testing', 'Mocking', 'Jest', 'Clean Architecture']}
    />
    <Sandpack
      template="test-ts"
      options={{
        showConsole: true,
        showLineNumbers: true,
        showConsoleButton: true,
        resizablePanels: true,
        editorHeight: '60vh',
        activeFile: 'entry.test.ts',
        visibleFiles: ['entry.test.ts', 'data-source.ts']
      }}

      theme={'dark'}
      files={{
        "entry.test.ts": testCode,
        'add.test.ts': '',
        'data-source.ts': dataSourceCode
      }}
    />
    <div className="p-4">
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/dependency-injection'
        }}
        viewTransition
      >
        Previous Question
      </Link>
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/'
        }}
        viewTransition
      >
        Back to Home
      </Link>
    </div>
  </main>
}