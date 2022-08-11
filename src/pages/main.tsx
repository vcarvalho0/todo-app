import React, { useState, useEffect } from "react";
import { Tasks } from "../components/tasks";

import { Title, Container, Input, BoxInput, BoxList } from "./style";

type InputType = React.ChangeEvent<HTMLInputElement>;
type Form = React.FormEvent;

export type TodoType = {
  name: string;
  complete: boolean;
};

export const Main = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<TodoType[]>(() => {
    const storegedTask = localStorage.getItem('task')

    if (!storegedTask) {
      return null
    }

    const task = JSON.parse(storegedTask)

    return task ?? []
  })

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(todo))
  }, [todo])

  const handleSubmit = (e: Form) => {
    e.preventDefault();

    if (value) {
      const newTodo = { name: value, complete: false };
      setTodo([...todo, newTodo]);
    }

    setValue("");
  };

  const changeInput = (e: InputType) => {
    const taskInput = e.target.value;

    setValue(taskInput);
  };

  const deleteTask = (taskToDelete: string) => {
    setTodo(
      todo.filter((task) => {
        return task.name != taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete: string) => {
    setTodo(
      todo.map((task) => {
        if (task.name === taskToComplete) {
          task.complete = !task.complete;
        }
        return task;
      })
    );
  };

  return (
    <Container>
      <Title>Tasks</Title>
        <BoxInput>
          <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Insira a tarefa"
            value={value}
            onChange={changeInput}
          />
        </form>
      </BoxInput>
      {todo.map((task: TodoType, index) => {
        return (
          <BoxList key={index}>
            <Tasks
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          </BoxList>
        );
      })}
    </Container>
  );
};
