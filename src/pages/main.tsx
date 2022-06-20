import { FormEvent, useState } from "react";

const Main = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Main;
