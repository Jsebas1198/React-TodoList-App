import React, { useState } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/App.css";

function App() {
  const [todos, saveTodos] = useLocalStorage("VERSION_V1", []);

  const [search, setSearch] = useState("");
  const notCompletedTodos = todos.filter((todo) => !todo.completed).length;

  //functions to delete and mark as completetasks
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  //return of the UI
  return (
    <div className="container">
      <TodoCounter tasks={notCompletedTodos} />
      <TodoSearch
        search={search}
        setSearch={setSearch}
        array={todos}
        saveTodos={saveTodos}
      />
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem
            name={todo.name}
            completed={todo.completed}
            deleteTodo={() => deleteTodo(index)}
            completeTodo={() => completeTodo(index)}
            key={index}
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
