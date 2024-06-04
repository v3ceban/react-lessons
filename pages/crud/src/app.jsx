import { useState } from "react";
import "./app.css";
import Task from "./task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const binarySearch = (arr, id) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (arr[middle].id === id) {
        return middle;
      } else if (arr[middle].id < id) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return -1;
  };

  const addTask = (e) => {
    e.preventDefault();
    if (e.target.task.value === "") {
      return;
    }
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: e.target.task.value,
      done: false,
    };
    setTasks([...tasks, task]); // tasks = tasks + task
    e.target.reset();
  };

  const deleteTask = (key) => {
    const index = binarySearch(tasks, key);
    if (index !== -1) {
      tasks.splice(index, 1);
      setTasks([...tasks]);
    }
    // setTasks(tasks.filter((task) => task.id !== key)); // does the same as below with implicit return
    // setTasks(
    //   tasks.filter((task) => {
    //     return task.id !== key;
    //   }),
    // );
  };

  const updateTask = (key) => {
    const index = binarySearch(tasks, key);
    if (index !== -1) {
      return;
    }
    tasks[index].done = !tasks[index].done;
    setTasks([...tasks]);
    // setTasks(
    //   tasks.map((task) => {
    //     if (task.id === key) {
    //       task.done = !task.done;
    //     }
    //     return task;
    //   }),
    // );
  };

  return (
    <>
      <header>
        <h1>CRUD with React | To Do List</h1>
        <form onSubmit={addTask}>
          <label>
            Add a new task:{" "}
            <input type="text" name="task" placeholder="Add a new task" />
          </label>
          <button type="submit">Add Task</button>
        </form>
      </header>
      <main>
        <h2>{tasks.length ? "To do:" : "Nothing to do!"}</h2>
        <ul>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                done={task.done}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}
