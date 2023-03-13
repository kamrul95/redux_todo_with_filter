import { ADDTODO, COLORSELECTED, MAKETOGGLE, REMOVETODO } from "./actionTypes";
import initialState from "./initialState";

const nextId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case REMOVETODO:
      return state.filter((todo) => todo.id !== action.payload);
    case MAKETOGGLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });
    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
      });
    default:
      return state;
  }
};
export default reducer;
