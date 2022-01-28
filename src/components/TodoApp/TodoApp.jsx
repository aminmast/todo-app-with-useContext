import Navigation from "../Navigation/Navigation";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  return (
    <>
      <div className="uk-container">
        <Navigation />
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
};

export default TodoApp;
