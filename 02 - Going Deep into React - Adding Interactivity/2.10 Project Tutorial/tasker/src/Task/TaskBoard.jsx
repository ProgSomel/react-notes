import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(), //? by default api from js
    title: "Learn React",
    description:
      "I want to Learn React such that i can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks?.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
      setTaskToUpdate(null);
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleClosClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDeleteClick(taskToDelete) {
    setTasks(tasks.filter((task) => task.id != taskToDelete.id));
  }

  function handleDeleteAll() {
    setTasks([]);
  }

  function handleOnFavClick(taskToChange) {
    const taskIndex = tasks.findIndex((task) => task.id === taskToChange.id);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    setTasks(newTasks);
  }

  function handleSearch(searchTerm) {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks(filtered);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleClosClick}
        />
      )}
      <div className="container">
        <SearchTask onSearch={handleSearch} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowAddModal(true)}
            onDeleteAll={handleDeleteAll}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEditClick={handleEditTask}
              onDeleteClick={handleDeleteClick}
              onFav={handleOnFavClick}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
