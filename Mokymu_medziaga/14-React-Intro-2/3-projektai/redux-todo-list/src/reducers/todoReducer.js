import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "../actions/actionTypes";

const initialState = {
  todos: [],
  filterValue: "all",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { content } = action.payload;

      return { ...state, todos: [...state.todos, content] };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};
