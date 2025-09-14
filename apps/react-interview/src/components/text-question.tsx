import type { ReactNode } from "react";

export interface TextQuestionProps {
  title: ReactNode;
  description: ReactNode;
  topics?: ReactNode[];
}

export function TextQuestion({
  description,
  title,
  topics
}: Readonly<TextQuestionProps>) {
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
      {typeof description === 'string' ?  <p>
        {description}
      </p>: description}
    
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