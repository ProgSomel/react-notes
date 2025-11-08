import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../contexts/TaskContext";

export default function TaskList() {
  const tasks = useContext(TaskContext);
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
