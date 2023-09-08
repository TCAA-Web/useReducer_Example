export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.length > 0 ? [...state, { text: "Placeholder", id: state[state.length -1].id + 1, isComplete: true }] : [{ text: "Placeholder", id: 0, isComplete: true }];

      case "DELETE":
        return state.filter((item) => item.id !== action.id);

      case "UPDATE":
        return state.map((item) => item.id === action.id ? { ...item, isComplete: !item.isComplete } : item);

      case "EDIT":
        return state.map((item) => item.id === action.id ? { ...item, text: action.newText } : item);

      default:
        return state;
    }
  };