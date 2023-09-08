import { useReducer } from "react";
import "./App.css";
import { TodoContainer } from "./components/TodoContainer";
import { todoInitialValue } from "./todoInitialValues";
import { todoReducer } from "./todoReducer";

function App() {
  const [todoData, dispatch] = useReducer(todoReducer, todoInitialValue);

  const handleAdd = () => {
    dispatch({ type: "ADD" });
  };

  return (
    <section style={{ display: "grid", gap: "8px" }}>
      <h1>Todo App Change! Nu med dev branch</h1>
      <button style={{ justifySelf: "end", width: "25%" }} onClick={handleAdd}>
        Add
      </button>
      <TodoContainer todoData={todoData} dispatch={dispatch} />
    </section>
  );
}

export default App;
