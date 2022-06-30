import React, { FormEvent, useState } from "react";
import { Tasks } from "../components/tasks";

import { Title, Container, Input, Box } from "./style";

export type TodoType = {
  todoName: string;
};

export const Main = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<TodoType[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value) {
      const newTodo = { todoName: value };
      setTodo([...todo, newTodo]);
    }

    setValue("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const taskInput = e.target.value;

    setValue(taskInput);
  };

  const deleteTask = (taskToDelete: string) => {
    setTodo(
      todo.filter((task) => {
        return task.todoName != taskToDelete;
      })
    );
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
        </form>
        <div>
          {todo.map((task, index) => {
            return <Tasks task={task} key={index} deleteTask={deleteTask} />;
          })}
        </div>
      </Box>
    </Container>
  );
};
