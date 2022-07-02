import React, { useState } from "react";
import { Tasks } from "../components/tasks";

import { Title, Container, Input, Box } from "./style";

type Input = React.ChangeEvent<HTMLInputElement>;
type Form = React.FormEvent;

export type TodoType = {
  todoName: string;
  complete: boolean;
};

export const Main = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<TodoType[]>([]);

  const handleSubmit = (e: Form) => {
    e.preventDefault();

    if (value) {
      const newTodo = { todoName: value, complete: false };
      setTodo([...todo, newTodo]);
    }

    setValue("");
  };

  const handleChangeInput = (e: Input) => {
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

  const completeTask = (taskToComplete: string) => {
    setTodo(
      todo.map((task) => {
        if (task.todoName === taskToComplete) {
          task.complete = !task.complete;
        }
        return task;
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
          {todo.map((task: TodoType, index: number) => {
            return (
              <Tasks
                task={task}
                key={index}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </Box>
    </Container>
  );
};
