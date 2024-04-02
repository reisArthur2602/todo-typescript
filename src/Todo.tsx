import { useState } from 'react';
import { Button } from './components/Button';
import { Task } from './components/Task';
import { TextField } from './components/TextField';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

export const Todo = () => {
  const generateRandomId = (length: number) => {
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }

    return randomId;
  };

  const [task, setTask] = useState('');
  const [tasklist, setTaskList] = useState<ITask[]>([]);

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList([
      ...tasklist,
      {
        id: generateRandomId(10),
        title: task,
        done: false,
      },
    ]);
  };

  const handleToggleChecked = (task: ITask) => {
    setTaskList(
      tasklist.map((item) =>
        item.id === task.id ? { ...item, done: !item.done } : task
      )
    );
  };

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[31.875rem] w-full flex flex-col gap-[1.25rem]">
        <form
          className="w-full flex items-center gap-2"
          onSubmit={(e) => handleCreateTask(e)}
        >
          <TextField
            type="text"
            placeholder="Criar nova Tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button />
        </form>

        <ul className="flex flex-col gap-3">
          {tasklist?.map((data) => (
            <Task id={data.id} title={data.title} done={data.done} onClick={()=>handleToggleChecked(data)} />
          ))}
        </ul>
      </div>
    </main>
  );
};
