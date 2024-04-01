import { CheckCheck } from 'lucide-react';

export const Button = () => {
  return (
    <button
      className="
     bg-indigo-500
      text-gray-100 
      p-3 
      rounded-xl
       hover:bg-indigo-700 
       "
    >
      <CheckCheck />
    </button>
  );
};
