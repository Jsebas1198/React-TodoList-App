import React from "react";

const TodoItem = ({ name, completed, deleteTodo, completeTodo }) => {
  return (
    <li>
      <i
        className={`fa-regular ${completed ? "fa-circle-check" : "fa-circle"}`}
        onClick={completeTodo}
      ></i>
      <p className={`${completed ? "line-through" : ""}`}> {name} </p>
      <i className="fa-solid fa-trash-can" onClick={deleteTodo}></i>
    </li>
  );
};

export default TodoItem;
