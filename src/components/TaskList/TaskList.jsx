import { useState } from "react";

function TaskList() {
  const [tasks, setTask] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const handleChange = (event) => {
    setInputVal(event.target.value);
  };
  const handleClick = () => {
    setTask([...tasks, inputVal]);
    setInputVal("");
  };

  return (
    <>
      <h1>ToDoList</h1>
      <input type="text" onChange={handleChange} value={inputVal} />
      <button onClick={handleClick}>Add Task</button>
      {tasks.map((data, index) => {
        return (
          <>
            <div key={index}>
              <h2>{data}</h2>
            </div>
          </>
        );
      })}
    </>
  );
}

export default TaskList;
