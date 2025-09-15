import { Sandpack, type SandpackFile } from '@codesandbox/sandpack-react'
import AppCode from './question-files/App?raw';
import DefaultStateCode from './question-files/default-state?raw'
import UseQueryCode from './question-files/use-query?raw'
import { TextQuestion } from '../../components/text-question';
import { Link } from 'react-router';

const codeByFiles: Record<string, SandpackFile> = {
  'App.tsx': {
    code: AppCode,
    readOnly: true
  },
  'default-state.tsx': {
    code: DefaultStateCode,
    readOnly: true
  },
  'use-query.tsx': {
    code: UseQueryCode
  }

}

export default function Page() {
  return <main className='grid gap-10'>
    <TextQuestion
      title="React State Initialization and Memory Management"
      description={
        <p>
          Examine the provided code and modify the necessary files to ensure that clicking the button
          does <strong>not</strong> increment the counter.
          <br /><br />
          <strong>Important:</strong> Not all files are editable - you'll need to identify which files
          you can modify to achieve the desired behavior.
        </p>
      }
      topics={[
        "React Hooks",
        "useState",
        "Initialization",
        "Memory optimization",
      ]}
      extraPoints="Explain why the initial number displayed is 8 and what causes this behavior."
    />
    <Sandpack
      template='react-ts'
      options={{
        showConsole: true,
        showLineNumbers: true,
        showConsoleButton: true,
        resizablePanels: true,
        editorHeight: '60vh'
      }}
      theme={'dark'}
      files={codeByFiles}
    />
    <div className="p-4">
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/'
        }}
      >
        Previous Question
      </Link>
      <Link
        className="hover:bg-blue-900 block w-full rounded-2xl bg-fuchsia-600 p-3"
        to={{
          pathname: '/use-sync-external-store'
        }}
        viewTransition
      >
        Next Question
      </Link>
    </div>
  </main>
}