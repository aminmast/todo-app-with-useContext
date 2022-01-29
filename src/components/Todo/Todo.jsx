import { useTodosActions } from "../../context/TodosProvider";
import { TodoRow, TextTodo } from "./todo.style";

const Todo = ({ todo, onEdite }) => {
  const { deleteTodoHandler, completeTodoHandler } = useTodosActions();

  return (
    <>
      <TodoRow
        className="uk-margin-top uk-padding-small"
        complete={todo.isCompleted}
      >
        <TodoRow type="flexStart">
          <TextTodo
            className={"uk-text-default uk-text-bold"}
            onClick={() => completeTodoHandler(todo.id)}
            complete={todo.isCompleted}
          >
            {todo.text}
          </TextTodo>
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
