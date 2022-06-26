import { FormEvent, useState } from "react";

import { Title, Container, Input, Box, Task } from "./style";

export const Main = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<Array<string>>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value) {
      setTodo([...todo, value]);
    }

    setValue("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const taskInput = e.target.value;

    setValue(taskInput);
  };

  return (
    <Container>
      <Title>Todo List</Title>
      <Box>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Insira a tarefa"
            value={value}
            onChange={handleChangeInput}
          />
          <ul>
            {todo.map((task) => (
              <Task key={task}>{task}</Task>
            ))}
          </ul>
        </form>
      </Box>
    </Container>
  );
};
