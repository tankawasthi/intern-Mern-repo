import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask } from "./store/store";

export const ToDo = () => {
  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return; // avoid empty tasks

    dispatch(addTask(task));
    setTask(""); // clear input after adding
  };

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i> To-do List
        </h1>

        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>

        <ul id="list-container">
          {tasks.map((curTask, index) => (
            <li key={index}>
              <p>
                {index}: {curTask}
              </p>
              <div>
                <MdDeleteForever
                  className="icon-style"
                  onClick={() => handleTaskDelete(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
