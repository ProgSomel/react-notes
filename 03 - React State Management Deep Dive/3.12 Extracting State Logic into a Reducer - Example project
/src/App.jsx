import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./components/data/tasks";
import { getNextID } from "./components/utility/getNextID";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextID(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeText = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) return task;
      else return t;
    });
    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id != taskID));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeText} onDeleteTask={handleDeleteTask} />
    </>
  );
}
