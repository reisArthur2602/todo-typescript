import { Square, SquareCheck } from 'lucide-react';

import { ButtonHTMLAttributes } from 'react';

interface TaskProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  done: boolean;
}

export const Task = ({ id, done, title, onClick }: TaskProps) => {
  return (
    <li className="w-full bg-white p-3 rounded-lg hover:animate-bounce transition-all ease-linear duration-1000">
      <div className="flex gap-4 items-center">
        <button onClick={onClick}>{done ? <SquareCheck /> : <Square />}</button>
        <p className="flex-1 line-clamp-2">{title}</p>
      </div>
    </li>
  );
};
