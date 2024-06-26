import { useState } from "react";
import Task from "../Task/Task";

function TaskList() {
  let isEdited = false;
  const [tasks, setTask] = useState([]);
  let [inputVal, setInputVal] = useState("");

  const handleChange = (event) => {
    setInputVal(event.target.value);
  };
  const handleClick = () => {
    setTask([...tasks, inputVal]);
    setInputVal("");
  };

  const deleteTask = (index) => {
    let task2 = tasks.filter((value, i) => i !== index);
    setTask(task2);
  };

  const editTask = (data, index) => {
    console.log(data);
    const updatedTask = tasks.map((task, i) => (i === index ? data : task));
    setTask(updatedTask);
  };

  return (
    <>
      <h1>ToDoList</h1>
      <input type="text" onChange={handleChange} value={inputVal} />
      <button onClick={handleClick}>Add Task</button>
      <div>
        {tasks.map((data, index) => (
          <Task
            key={index}
            data={data}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
      {/* <Task task={tasks} /> */}
    </>
  );
}

export default TaskList;
