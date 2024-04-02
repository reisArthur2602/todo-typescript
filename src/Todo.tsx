import { useState } from 'react';
import { Button } from './components/Button';
import { Task } from './components/Task';
import { TextField } from './components/TextField';

export interface ITask {
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

    const newTask: ITask = {
      id: generateRandomId(5),
      title: task,
      done: false,
    };

    setTaskList([...tasklist, newTask]);
  };

  const handleToggleChecked = (id: string) => {
    setTaskList(
      tasklist.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    const filterTask = tasklist.filter((taskItem) => taskItem.id !== id);
    setTaskList(filterTask);
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
          {tasklist ? tasklist?.map((data) => (
            <Task
              key={data.id}
              id={data.id}
              title={data.title}
              done={data.done}
              handleToggleChecked={() => handleToggleChecked(data.id)}
              handleDeleteTask={() => handleDeleteTask(data.id)}
            />
          )) : <p>Sua lista de tarefas esta vazia</p> }
        </ul>
      </div>
    </main>
  );
};
