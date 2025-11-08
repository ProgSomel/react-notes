import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";
import { useImmerReducer } from "use-immer";
import { TaskContext, TaskDispatchContext } from "./contexts/TaskContext";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
