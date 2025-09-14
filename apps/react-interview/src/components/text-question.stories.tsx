import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { TextQuestion } from './text-question';

const meta: Meta<typeof TextQuestion> = {
  title: 'Components/TextQuestion',
  component: TextQuestion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the question',
    },
    description: {
      control: 'text',
      description: 'The description or content of the question',
    },
    topics: {
      control: 'object',
      description: 'Optional array of topics related to the question',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sample Question',
    description: 'This is a basic question description that explains what the user needs to understand or implement.',
  },
};

export const WithTopics: Story = {
  args: {
    title: 'React Hooks Question',
    description: 'Explain the difference between useState and useReducer, and when you would use each one. Provide examples of implementation for both.',
    topics: [
      'React Hooks',
      'State Management',
      'useState',
      'useReducer',
      'Component Lifecycle'
    ],
  },
};

export const LongContent: Story = {
  args: {
    title: 'Complex Algorithm Implementation',
    description: <>
      Implement a function that takes an array of numbers and returns the maximum sum of any contiguous subarray. This is known as the Maximum Subarray Problem or Kadane's Algorithm.
    </>,
    topics: [
      'Algorithms',
      'Dynamic Programming',
      'Array Manipulation',
      'Time Complexity',
      'Edge Cases',
      'Unit Testing'
    ],
  },
};

export const WithJSXContent: Story = {
  args: {
    title: (
      <span>
        <strong>Advanced React Question</strong> - 
        <em style={{ color: '#10b981' }}> Component Architecture</em>
      </span>
    ),
    description: (
      <div>
        <p>
          Design a reusable <code>DataTable</code> component that can handle:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>Dynamic column configuration</li>
          <li>Sorting by column</li>
          <li>Pagination</li>
          <li>Row selection</li>
        </ul>
        <p style={{ marginTop: '10px' }}>
          Consider performance implications for large datasets.
        </p>
      </div>
    ),
    topics: [
      'React Components',
      'TypeScript',
      'Performance Optimization',
      'Generic Types',
      'Memoization'
    ],
  },
};

export const MinimalQuestion: Story = {
  args: {
    title: 'Quick Question',
    description: 'What is the difference between null and undefined in JavaScript?',
  },
};

export const InterviewQuestion: Story = {
  args: {
    title: 'System Design: Chat Application',
    description: 'Design a real-time chat application that can handle 100,000 concurrent users. Consider scalability, data consistency, and user experience. Discuss your choice of technologies, architecture patterns, and how you would handle common challenges like message ordering, offline support, and spam prevention.',
    topics: [
      'System Design',
      'WebSockets',
      'Database Design',
      'Microservices',
      'Load Balancing',
      'Real-time Communication',
      'Scalability',
      'Caching Strategies'
    ],
  },
};
