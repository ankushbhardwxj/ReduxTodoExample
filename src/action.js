
export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const deleteTodo = todo => {
  return {
    type: "DELETE_TODO",
    payload: todo
  };
};

export const toggleTodo = todo => {
  return {
    type: "TOGGLE_TODO",
    payload: todo
  }
}