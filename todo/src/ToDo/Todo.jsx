import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  let handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  let addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  let deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);

    setTasks(updateTasks);
  };

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  return (
    <>
      <div className="container1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-10">
              <div className="to-do-list mt-4">

                <h1 className="text-center">To-Do List</h1>

                <div className="mt-3 ms-4">
                  <input
                    type="text"
                    placeholder="Enter a task.."
                    value={newTask}
                    style={{
                      borderRadius: "5px",
                      height: "32px",
                      width: "75%",
                    }}
                    onChange={handleInputChange}
                  />
                  <button className="add-button ms-2" onClick={addTask}>
                    Add
                  </button>
                </div>

                <ol className="mt-3 taskContainer">
                  {tasks.map((task, index) => (
                    <li className="mt-3 ms- taskList " key={index}>
                      <span className="text">{task}</span>
                      <i
                        onClick={() => {
                          deleteTask(index);
                        }}
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "20px",
                          borderLeft:'0.1px solid grey',
                          
                        }}
                        class="bi bi-trash3-fill"
                      ></i>
                      <i
                        onClick={() => {
                          moveTaskUp(index);
                        }}
                        style={{
                          color: "blue",
                          fontWeight: "700",
                          fontSize: "20px",
                          borderLeft:'0.1px solid grey',
                        }}
                        class="bi bi-arrow-up"
                      ></i>
                      <i
                        onClick={() => {
                          moveTaskDown(index);
                        }}
                        style={{
                          color: "grey",
                          borderLeft:'0.1px solid grey',
                          height: "80%",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                        class="bi bi-arrow-down"
                      ></i>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
