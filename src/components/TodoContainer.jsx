import { Todo } from "./Todo";
import { TodoControls } from "./TodoControls";

export const TodoContainer = ({ todoData, dispatch }) => {
  return todoData?.map((item) => (
    <div key={item.id} style={{display: "grid", gridTemplateColumns: "3fr 1fr"}}>
      <Todo
        isComplete={item.isComplete}
        todoText={item.text}
        id={item.id}
        dispatch={dispatch}
      />
      <TodoControls id={item.id} dispatch={dispatch} />
    </div>
  ));
};
