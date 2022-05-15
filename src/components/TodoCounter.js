import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = ({ tasks }) => {
  return (
    <div className="TodoCounter">
      <h1>Hi John</h1>
      <span>You have {tasks ? tasks : !tasks && 0} tasks to do</span>
    </div>
  );
};

export default TodoCounter;
