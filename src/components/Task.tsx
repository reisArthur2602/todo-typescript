import { Square, SquareCheck, Trash2Icon } from 'lucide-react';

import { ITask } from '../Todo';

interface TaskProps extends ITask {
  handleToggleChecked: () => void;
  handleDeleteTask: () => void;
}

export const Task = ({ done, title, handleToggleChecked ,handleDeleteTask}: TaskProps) => {
  return (
    <li className="w-full bg-white p-3 rounded-lg hover:animate-bounce flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <button onClick={handleToggleChecked}>{done ? <SquareCheck /> : <Square />}</button>
        <p className="flex-1 line-clamp-2">{title}</p>
      </div>
      <button onClick={handleDeleteTask}>
        <Trash2Icon/>
      </button>
    </li>
  );
};
