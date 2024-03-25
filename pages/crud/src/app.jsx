import { useState } from "react";
import "./app.css";
import Task from "./task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: e.target.task.value,
      done: false,
    };
    if (task.name === "") {
      return;
    }
    setTasks([...tasks, task]);
    e.target.reset();
  };

  const deleteTask = (key) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== key;
      }),
    );
  };

  const updateTask = (key) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === key) {
          task.done = !task.done;
        }
        return task;
      }),
    );
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
