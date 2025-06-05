import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [
    { id: 1, name: "nupirk", completed: true },
    { id: 2, name: "nuplauk", completed: true },
    { id: 3, name: "išsiurbk", completed: false },
    { id: 4, name: "sportuok", completed: true },
    { id: 5, name: "tingėk", completed: true },
  ],
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
    default:
      return state;
  }
};
