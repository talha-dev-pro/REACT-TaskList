import { useState } from "react";

const Task = ({ data, deleteTask, index, editTask }) => {
  const [isComplete, setisComplete] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  let [editVal, seteditVal] = useState(data);

  const handleDelete = () => {
    deleteTask(index);
    setisComplete(false);
  };
  const handleComplete = () => {
    setisComplete(!isComplete);
  };
  const handleEdit = () => {
    setisEdit(true);
  };
  const handleSave = () => {
    editTask(editVal, index);
    setisEdit(false);
  };
  const handleChange = (event) => {
    seteditVal(event.target.value);
  };

  return (
    <>
      <p style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        {data}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleComplete}>Completed</button>
      <button onClick={handleEdit}>Edit</button>
      {isEdit && (
        <div>
          <input type="text" onChange={handleChange} value={editVal} />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </>
  );
};
export default Task;
