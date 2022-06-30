import { TodoType } from "../../pages/main";

import { Check, Trash, Task, Container } from "./style";

type TaskType = {
  task: TodoType;
  deleteTask: (taskToDelete: string) => void;
};

export const Tasks = ({ task, deleteTask }: TaskType) => {
  return (
    <Container>
      <Task>{task.todoName}</Task>
      <Check />
      <Trash onClick={() => deleteTask(task.todoName)} />
    </Container>
  );
};
