import { Sandpack, type SandpackFile } from '@codesandbox/sandpack-react'
import AppCode from './question-files/App?raw';
import WindowResizeTrackerCode from './question-files/window-resize-tracker?raw'
import UseWindowSizeCode from './question-files/use-window-size?raw'
import { TextQuestion } from '../../components/text-question';
import { Link } from 'react-router';

const codeByFiles: Record<string, SandpackFile> = {
  'App.tsx': {
    code: AppCode,
    readOnly: true
  },
  'window-resize-tracker.tsx': {
    code: WindowResizeTrackerCode
  },
  'use-window-size.tsx': {
    code: UseWindowSizeCode
  }
}

export default function Page() {
  return <main className='grid gap-10'>
    <TextQuestion
      title="useSyncExternalStore with Event Listeners"
      description={
        <div>
          <p>
            Implement a window resize tracker using <code>useSyncExternalStore</code> to subscribe to browser resize events.
          </p>
          <br />
          <strong>Requirements:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>Complete the <code>WindowResizeTracker</code> class to listen for window resize events</li>
            <li>Implement the <code>useWindowSize</code> hook using <code>useSyncExternalStore</code></li>
            <li>The hook should return current window dimensions and update on resize</li>
            <li>Ensure proper cleanup of event listeners</li>
            <li>Handle SSR considerations (server vs client rendering)</li>
          </ul>
          <br />
          <p>
            <strong>Test:</strong> Resize your browser window - the displayed dimensions should update in real-time!
          </p>
        </div>
      }
      topics={[
        'useSyncExternalStore',
        'Event Listeners',
        'External State Management',
        'React 18 Hooks',
        'Browser APIs',
        'Memory Management'
      ]}
      extraPoints="Explain why useSyncExternalStore is preferred over useEffect for external state subscription and how it handles SSR."
    />
    <Sandpack
      template='react-ts'
      options={{
        showConsole: true,
        showLineNumbers: true,
        showConsoleButton: true,
        resizablePanels: true,
        editorHeight: '70vh'
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
        Next Question
      </Link>
    </div>
  </main>
}