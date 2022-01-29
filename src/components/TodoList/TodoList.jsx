import { useState } from "react";
import { useTodos, useTodosActions } from "../../context/TodosProvider";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [edite, setEdite] = useState({
    id: null,
    text: "",
    isCompleted: false,
  });

  const todos = useTodos();
  const { updateTodoHandler } = useTodosActions();

  const updateHandler = (value) => {
    updateTodoHandler(edite.id, value);
    setEdite({
      id: null,
      text: "",
      isCompleted: false,
    });
  };

  const renderTodos = () => {
    if (todos.length === 0) {
      return <p className="uk-text-meta uk-text-large">add some todo !</p>;
    }
    return todos.map((todo) => (
      <Todo key={todo.id} todo={todo} onEdite={() => setEdite(todo)} />
    ));
  };

  return (
    <div className="uk-margin-top">
      {edite.id ? (
        <TodoForm onUpdate={updateHandler} edite={edite} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
