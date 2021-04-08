import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [toDoList, setToDoList] = useState([]);

  function deleteItem(id) {
    setToDoList((prevList) => {
      return prevList.filter((item, index) => index !== id);
    });
  }

  function handleAddClicked(input) {
    setToDoList((previousList) => {
      return [...previousList, input];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handleAddClicked} />
      <div>
        <ul>
          {toDoList.map((item, index) => (
            <List item={item} key={index} id={index} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
