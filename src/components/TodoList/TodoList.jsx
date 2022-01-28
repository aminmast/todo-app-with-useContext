import { useState } from "react";
import { useTodos } from "../../context/TodosProvider";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [edite, setEdite] = useState({
    id: null,
    text: "",
    isCompleted: false,
  });

  const todos = useTodos();

  const renderTodos = () => {
    if (todos.length === 0) {
      return <p className="uk-text-meta uk-text-large">add some todo !</p>;
    }
    return todos.map((todo) => (
      <Todo todo={todo} onEdite={() => setEdite(todo)} />
    ));
  };

  return (
    <div className="uk-margin-top">
      {edite.id ? <TodoForm /> : renderTodos()}
    </div>
  );
};

export default TodoList;
