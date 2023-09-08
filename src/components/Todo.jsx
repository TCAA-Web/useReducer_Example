export const Todo = ({ todoText, isComplete, id, dispatch }) => {

  const handleChangeTodo = (e) => {
    dispatch({ type: "EDIT", id: id, newText: e.target.value });
  };

  return isComplete ? 
  <p style={{textAlign: "left"}}>{todoText}</p> : 
  <input onChange={(e) => handleChangeTodo(e)} value={todoText} />;
};