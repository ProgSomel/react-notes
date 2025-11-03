import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import { getNextID } from "./utility/getNextID";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextID(tasks),
      text: text,
    });
  };

  const handleChangeText = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const handleDeleteTask = (taskID) => {
    dispatch({
      type: "deleted",
      id: taskID,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeText}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
