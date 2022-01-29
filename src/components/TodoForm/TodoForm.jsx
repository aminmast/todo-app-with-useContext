import { useEffect, useRef, useState } from "react";
import { useTodosActions } from "../../context/TodosProvider";
import swal from "sweetalert";

const TodoForm = ({ onUpdate, edite }) => {
  const [inputValue, setInputValue] = useState(edite ? edite.text : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { addTodoHandler } = useTodosActions();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      swal("Oops", "please enter todo !", "warning");
      return;
    }
    onUpdate ? onUpdate(inputValue) : addTodoHandler(inputValue);
    setInputValue("");
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="uk-margin-top">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="todo"
            value={inputValue}
            className="uk-input uk-width-1-2"
            placeholder={onUpdate ? "update todo ..." : "add todo ..."}
            onChange={changeHandler}
            ref={inputRef}
          />
          <button type="submit" className="uk-button uk-button-primary">
            {onUpdate ? (
              <span uk-icon="refresh"></span>
            ) : (
              <span uk-icon="plus-circle"></span>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
