import React, { useState } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleCreate = () => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      TaskManager
      <div className="controls">
        <input
          type="text"
          onChange={handleChange}
          value={task}
          placeholder="Enter the text"
        />
        <button onClick={handleCreate}>Create</button>
        <div className="display-task">
          {tasks.map((task) => (
            <div key={task.id}>
              {task.text}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
