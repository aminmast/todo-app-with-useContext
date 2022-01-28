import { useState } from "react";
import { useTodosActions } from "../../context/TodosProvider";
import swal from "sweetalert";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { addTodoHandler } = useTodosActions();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      swal("Oops", "please enter todo !", "warning");
      return;
    }
    addTodoHandler(inputValue);
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
            placeholder="add todo ..."
            onChange={changeHandler}
          />
          <button type="submit" className="uk-button uk-button-primary">
            <span uk-icon="plus-circle"></span>
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
