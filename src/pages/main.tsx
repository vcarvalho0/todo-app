import { FormEvent, useState } from "react";

export const Main = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<Array<string>>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value) {
      setTodo([...todo, value])
    }

    setValue('')
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const taskInput = e.target.value;

    setValue(taskInput)
  }

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChangeInput}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {todo.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
