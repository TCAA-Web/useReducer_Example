export const TodoControls = ({ id, dispatch }) => {
  
  const handleDelete = () => {
    dispatch({ type: "DELETE", id: id });
  };

  const handleUpdate = () => {
    dispatch({ type: "UPDATE", id: id });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
