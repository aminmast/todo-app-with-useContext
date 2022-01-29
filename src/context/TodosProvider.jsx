import react, { useContext } from "react";
import { useState } from "react";

const todosContext = react.createContext();
const todosContextDispather = react.createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <todosContext.Provider value={todos}>
      <todosContextDispather.Provider value={setTodos}>
        {children}
      </todosContextDispather.Provider>
    </todosContext.Provider>
  );
};

export default TodosProvider;
export const useTodos = () => useContext(todosContext);
export const useTodosActions = () => {
  const setTodos = useContext(todosContextDispather);
  const todos = useContext(todosContext);

  // date & time
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fullDate = `${date.getFullYear()} / ${
    months[date.getMonth()]
  } / ${date.getDate()}`;

  const fullTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      date: fullDate,
      time: fullTime,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const completeTodoHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const updateTodoHandler = (id, value) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = value;
    selectedTodo.date = fullDate;
    selectedTodo.time = fullTime + "  update";
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return {
    addTodoHandler,
    deleteTodoHandler,
    completeTodoHandler,
    updateTodoHandler,
  };
};
