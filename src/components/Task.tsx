import { Square, SquareCheck } from 'lucide-react';
export const Task = () => {
  return (
    <li className="w-full bg-white p-3 rounded-lg hover:animate-bounce">
      <div className="flex gap-4 items-center">
        <button>
          <Square />
        </button>
        <p className="flex-1 line-clamp-2">Estudar Bando de dados</p>
      </div>
    </li>
  );
};
