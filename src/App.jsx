import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import TodosProvider from "./context/TodosProvider";

const App = () => {
  return (
    <div className="body">
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  );
};

export default App;
