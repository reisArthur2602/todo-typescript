import { Square, SquareCheck } from 'lucide-react';
export const Task = () => {
  return (
    <li className="w-full bg-white p-3 rounded-lg">
      <div className="flex gap-4 items-center">
        <button>
          <Square />
        </button>
        <p>Estudar Bando de dados</p>
      </div>
    </li>
  );
};
