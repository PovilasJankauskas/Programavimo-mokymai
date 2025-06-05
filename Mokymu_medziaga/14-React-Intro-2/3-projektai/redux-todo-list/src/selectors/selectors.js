export const getTodoList = (storeState) => storeState.todos;

export const getTodosByFilterValue = (state, filterValue) => {
  const allTodos = getTodoList(state);
  console.log(allTodos);
  switch (filterValue) {
    case "completed":
      return allTodos.filter((item) => item.completed);
    case "incompleted":
      return allTodos.filter((item) => !item.completed);
    case "all":
    default:
      return allTodos;
  }
};
