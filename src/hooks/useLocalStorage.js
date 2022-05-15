import { useState } from "react";

const useLocalStorage = (version, initialValue) => {
  const localStorageTodos = localStorage.getItem(version);
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem(version, JSON.stringify(initialValue));
    parsedTodos = initialValue;
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  const [todos, setTodos] = useState(parsedTodos);
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(version, stringifiedTodos);
    setTodos(newTodos);
  };

  return [todos, saveTodos];
};

export default useLocalStorage;
