/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
}

export function Question({ content, author, children }: QuestionProps): JSX.Element {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  );
}
