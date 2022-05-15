import React from "react";
import "../styles/TodoSearch.css";
const TodoSearch = ({ search, setSearch, array, saveTodos }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const addTodo = () => {
    const newtodos = [...array];
    newtodos.push({ name: search, completed: false });
    saveTodos(newtodos);
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="add task"
        value={search}
        onChange={handleChange}
      />
      <i className="fa-solid fa-circle-plus" onClick={() => addTodo()}></i>
    </div>
  );
};

export default TodoSearch;
