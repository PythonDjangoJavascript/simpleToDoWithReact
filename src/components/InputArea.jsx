import React, { useState } from "react";

function InputArea(props) {
  const [toDoItem, setToDoItem] = useState("");
  function handleInputChange(event) {
    const value = event.target.value;
    setToDoItem(value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleInputChange} value={toDoItem} />
      <button
        type="submit"
        onClick={() => {
          props.onAdd(toDoItem);
          setToDoItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
