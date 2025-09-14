import { Sandpack } from "@codesandbox/sandpack-react";
import testCode from './question-files/entry?raw'
import dataSourceCode from './question-files/data-source?raw'

export default function Page(){

  return <Sandpack 
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
}