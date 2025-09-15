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
      title="Objects in the heap memory"
      description="Change the necesary code so that every time you click the button, the counter must not increment (hint: not all the files are editable)"
      topics={[
        "React Hooks",
        "useState",
        "initiliazation",
        "Memory optimization",
      ]}
      extraPoints="Explain why the initial number showed is 8"
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
          pathname: '/dependency-injection'
        }}
        viewTransition
      >
        Next questions
      </Link>
    </div>
  </main>
}