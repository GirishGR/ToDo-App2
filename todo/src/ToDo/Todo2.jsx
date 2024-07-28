import React, { useState } from "react";

const Todo2 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const inputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    // setTasks(tasks.filter((task, index) => index !== tasks.indexOf(newTask)));
    const updateTasks = tasks.filter((_, i) => i !== index);

    setTasks(updateTasks);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          class="todo-input"
          value={newTask}
          onChange={inputChange}
          placeholder="Add a new task..."
        />
        <button className="add-button" onClick={addTask}>
          <i class="bi bi-plus-circle"></i>
        </button>
      </div>

      
<div className="TasksBlock">
  
  {tasks.map((task, index) => {
          return ( <ul className="todos-task" > 
            <li key={index} className="todoLine mt-2">
              {task}
              <i class="bi bi-trash3-fill me-4" onClick={()=>{deleteTask(index)}}></i>
            </li>
            </ul>
          );
        })}
        
      </div>
    </div>
  );
};

export default Todo2;
