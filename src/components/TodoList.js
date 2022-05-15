import "../styles/TodoList.css";
const TodoList = ({ children }) => {
  return (
    <div className="section-task">
      <h3>These are your tasks</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default TodoList;
