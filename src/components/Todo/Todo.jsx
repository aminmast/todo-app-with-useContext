import { useState } from "react";
import { useTodosActions } from "../../context/TodosProvider";
import { TodoRow } from "./todo.style";

const Todo = ({ todo, onEdite }) => {
  const { deleteTodoHandler, completeTodoHandler } = useTodosActions();

  const [completed, setcompleted] = useState(todo.isCompleted);

  const completedHandler = (id, check) => {
    setcompleted(check);
    completeTodoHandler(id);
  };

  return (
    <>
      <TodoRow
        key={todo.id}
        className="uk-margin-top uk-padding-small"
        complete={todo.isCompleted}
      >
        <TodoRow type="flexStart">
          <input
            type="checkbox"
            name="isCompleted"
            className="uk-checkbox"
            onClick={() => completedHandler(todo.id, !todo.isCompleted)}
            checked={completed}
          />
          <p
            className={"uk-text-default uk-text-bold"}
            style={{
              color: "#fff",
              margin: " 0 1rem",
              textDecoration: `${todo.isCompleted ? "line-through" : "none"}`,
              fontWeight: `${todo.isCompleted ? "200" : "700"}`,
            }}
          >
            {todo.text}
          </p>
        </TodoRow>
        <TodoRow type="flexStart">
          <div className="uk-text-left uk-margin-right">
            <span className="uk-text-muted">{todo.date}</span>
            <br />
            <span className="uk-text-muted">{todo.time}</span>
          </div>
          <button className="uk-button uk-button-primary" onClick={onEdite}>
            <span uk-icon="file-edit"></span>
          </button>
          <button
            className="uk-button uk-button-danger"
            onClick={() => deleteTodoHandler(todo.id)}
          >
            <span uk-icon="trash"></span>
          </button>
        </TodoRow>
      </TodoRow>
    </>
  );
};

export default Todo;
